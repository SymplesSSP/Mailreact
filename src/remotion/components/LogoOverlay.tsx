import React from "react";
import { Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface LogoOverlayProps {
  logoSrc: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  size?: number;
}

export const LogoOverlay: React.FC<LogoOverlayProps> = ({
  logoSrc,
  position = "top-right",
  size = 60,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 20, durationInFrames - 20, durationInFrames],
    [0, 0.9, 0.9, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const posStyle: React.CSSProperties = {
    position: "absolute",
    ...(position.includes("top") ? { top: 20 } : { bottom: 20 }),
    ...(position.includes("right") ? { right: 20 } : { left: 20 }),
  };

  return (
    <div style={{ ...posStyle, opacity }}>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: 12,
          padding: 10,
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Img src={logoSrc} width={size} height={size} style={{ display: "block" }} />
      </div>
    </div>
  );
};
