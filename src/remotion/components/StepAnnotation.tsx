import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

interface StepAnnotationProps {
  step: number;
  label: string;
  color?: string;
}

export const StepAnnotation: React.FC<StepAnnotationProps> = ({
  step,
  label,
  color = "#0B70B5",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, from: 0, to: 1, damping: 10, stiffness: 120 });
  const slideX = spring({ frame, fps, from: -20, to: 0, damping: 12 });

  return (
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 40,
        display: "flex",
        alignItems: "center",
        gap: 14,
        transform: `scale(${scale}) translateX(${slideX}px)`,
        transformOrigin: "left center",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          backgroundColor: color,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "Inter, system-ui, sans-serif",
          boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
        }}
      >
        {step}
      </div>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          padding: "10px 20px",
          borderRadius: 8,
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#1a1a2e",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          borderLeft: `4px solid ${color}`,
        }}
      >
        {label}
      </div>
    </div>
  );
};
