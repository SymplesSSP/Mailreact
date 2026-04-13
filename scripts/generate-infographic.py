#!/usr/bin/env python3
"""
Generate professional infographics using Google Gemini API.
Usage: python3 scripts/generate-infographic.py --prompt "..." --output emails/static/name.png [options]
"""

import argparse
import base64
import json
import os
import sys
import urllib.request
import urllib.error

def generate_image(api_key, model, prompt, aspect_ratio="16:9"):
    """Call Gemini API to generate an image."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"],
            "temperature": 1.0,
        },
    }

    if model.startswith("imagen"):
        # Imagen uses a different payload structure
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:predict?key={api_key}"
        payload = {
            "instances": [{"prompt": prompt}],
            "parameters": {
                "sampleCount": 1,
                "aspectRatio": aspect_ratio,
            },
        }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            result = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(f"API error {e.code}: {body}", file=sys.stderr)
        sys.exit(1)

    # Extract image data from response
    if model.startswith("imagen"):
        predictions = result.get("predictions", [])
        if not predictions:
            print("No predictions in Imagen response", file=sys.stderr)
            sys.exit(1)
        return base64.b64decode(predictions[0]["bytesBase64Encoded"])

    # Gemini models
    candidates = result.get("candidates", [])
    if not candidates:
        print("No candidates in response", file=sys.stderr)
        print(json.dumps(result, indent=2)[:500], file=sys.stderr)
        sys.exit(1)

    parts = candidates[0].get("content", {}).get("parts", [])
    for part in parts:
        if "inlineData" in part:
            return base64.b64decode(part["inlineData"]["data"])

    # If no image found, print text parts for debugging
    for part in parts:
        if "text" in part:
            print(f"Model text response: {part['text'][:300]}", file=sys.stderr)
    print("No image data in response", file=sys.stderr)
    sys.exit(1)


def optimize_image(image_bytes, output_path, max_width=1200, max_kb=400, transparent_bg=False):
    """Optimize image with PIL: resize, optional transparency, quantize."""
    from PIL import Image
    import io

    img = Image.open(io.BytesIO(image_bytes))

    # Convert to RGBA if needed
    if img.mode != "RGBA":
        img = img.convert("RGBA")

    # Resize if wider than max_width
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)

    # Optional: make white background transparent
    if transparent_bg:
        data = img.getdata()
        new_data = []
        for item in data:
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        img.putdata(new_data)

    # Save with optimization
    img_rgb = img.convert("RGBA")

    # Quantize to reduce size (MEDIANCUT requires RGB, not RGBA)
    try:
        img_for_quantize = img_rgb.convert("RGB")
        img_quantized = img_for_quantize.quantize(colors=256, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG)
        img_quantized.save(output_path, "PNG", optimize=True)
    except Exception:
        img_rgb.save(output_path, "PNG", optimize=True)

    # Check file size
    file_size_kb = os.path.getsize(output_path) / 1024
    if file_size_kb > max_kb:
        print(f"Warning: file is {file_size_kb:.0f}KB (target: {max_kb}KB)", file=sys.stderr)
    else:
        print(f"File size: {file_size_kb:.0f}KB", file=sys.stderr)

    return output_path


def main():
    parser = argparse.ArgumentParser(description="Generate infographics with Gemini API")
    parser.add_argument("--prompt", required=True, help="Image generation prompt")
    parser.add_argument("--output", required=True, help="Output file path (e.g. emails/static/infographic-name.png)")
    parser.add_argument("--model", default="gemini-2.0-flash-exp",
                        help="Gemini model ID (default: gemini-2.0-flash-exp)")
    parser.add_argument("--aspect-ratio", default="16:9",
                        help="Aspect ratio: 1:1, 16:9, 9:16, 4:3, 3:4 (default: 16:9)")
    parser.add_argument("--max-width", type=int, default=1200,
                        help="Max image width in pixels (default: 1200)")
    parser.add_argument("--max-kb", type=int, default=400,
                        help="Target max file size in KB (default: 400)")
    parser.add_argument("--transparent", action="store_true",
                        help="Make white background transparent")
    parser.add_argument("--api-key", default=None,
                        help="Google AI Studio API key (or set GEMINI_API_KEY env var)")
    parser.add_argument("--raw", action="store_true",
                        help="Save raw image without PIL optimization")

    args = parser.parse_args()

    api_key = args.api_key or os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: provide --api-key or set GEMINI_API_KEY env var", file=sys.stderr)
        sys.exit(1)

    print(f"Model: {args.model}", file=sys.stderr)
    print(f"Aspect ratio: {args.aspect_ratio}", file=sys.stderr)
    print(f"Generating image...", file=sys.stderr)

    image_bytes = generate_image(api_key, args.model, args.prompt, args.aspect_ratio)
    print(f"Received {len(image_bytes)} bytes from API", file=sys.stderr)

    # Ensure output directory exists
    os.makedirs(os.path.dirname(args.output) or ".", exist_ok=True)

    if args.raw:
        with open(args.output, "wb") as f:
            f.write(image_bytes)
        print(f"Saved raw image: {args.output}", file=sys.stderr)
    else:
        optimize_image(image_bytes, args.output, args.max_width, args.max_kb, args.transparent)
        print(f"Saved optimized image: {args.output}", file=sys.stderr)

    # Print GitHub Pages URL
    rel_path = args.output
    if rel_path.startswith("emails/static/"):
        gh_url = f"https://symplesssp.github.io/Mailreact/{rel_path}"
        print(f"\nGitHub Pages URL: {gh_url}")
    else:
        print(f"\nSaved to: {args.output}")


if __name__ == "__main__":
    main()
