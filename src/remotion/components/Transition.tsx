import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface TransitionProps {
  children: React.ReactNode;
  fadeIn?: number;
  fadeOut?: number;
}

export const Transition: React.FC<TransitionProps> = ({
  children,
  fadeIn = 15,
  fadeOut = 15,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, fadeIn, durationInFrames - fadeOut, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return <div style={{ width: "100%", height: "100%", opacity }}>{children}</div>;
};
