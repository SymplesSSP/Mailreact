import React from "react";
import { Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

type PanDirection = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

interface KenBurnsProps {
  src: string;
  from?: PanDirection;
  to?: PanDirection;
  scaleFrom?: number;
  scaleTo?: number;
}

const directionToTranslate = (dir: PanDirection, amount: number) => {
  switch (dir) {
    case "top-left":
      return { x: -amount, y: -amount };
    case "top-right":
      return { x: amount, y: -amount };
    case "bottom-left":
      return { x: -amount, y: amount };
    case "bottom-right":
      return { x: amount, y: amount };
    case "center":
      return { x: 0, y: 0 };
  }
};

export const KenBurns: React.FC<KenBurnsProps> = ({
  src,
  from = "center",
  to = "bottom-right",
  scaleFrom = 1.0,
  scaleTo = 1.15,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const panAmount = 40;
  const fromPos = directionToTranslate(from, panAmount);
  const toPos = directionToTranslate(to, panAmount);

  const x = interpolate(progress, [0, 1], [fromPos.x, toPos.x]);
  const y = interpolate(progress, [0, 1], [fromPos.y, toPos.y]);
  const scale = interpolate(progress, [0, 1], [scaleFrom, scaleTo]);

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#1a1a2e" }}>
      <Img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
          transformOrigin: "center",
        }}
      />
    </div>
  );
};
