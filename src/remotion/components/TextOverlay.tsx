import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface TextOverlayProps {
  text: string;
  position?: "top" | "bottom" | "center";
  color?: string;
  bgColor?: string;
  fontSize?: number;
}

export const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  position = "bottom",
  color = "#ffffff",
  bgColor = "rgba(11, 112, 181, 0.90)",
  fontSize = 28,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const slideIn = spring({ frame, fps, from: 30, to: 0, damping: 12 });
  const opacity = interpolate(
    frame,
    [0, 15, durationInFrames - 15, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const positionStyle: React.CSSProperties =
    position === "top"
      ? { top: 40, left: 0, right: 0 }
      : position === "center"
        ? { top: "50%", left: 0, right: 0, transform: `translateY(calc(-50% + ${slideIn}px))` }
        : { bottom: 40, left: 0, right: 0 };

  return (
    <div
      style={{
        position: "absolute",
        ...positionStyle,
        display: "flex",
        justifyContent: "center",
        opacity,
        transform: position !== "center" ? `translateY(${slideIn}px)` : positionStyle.transform,
      }}
    >
      <div
        style={{
          backgroundColor: bgColor,
          color,
          fontSize,
          fontWeight: 600,
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "12px 28px",
          borderRadius: 10,
          maxWidth: "85%",
          textAlign: "center",
          lineHeight: 1.4,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {text}
      </div>
    </div>
  );
};
