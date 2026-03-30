import React from "react";
import { Composition, Folder } from "remotion";
import { DemoSkillCreation } from "./compositions/DemoSkillCreation";
import { DemoSkillAction } from "./compositions/DemoSkillAction";
import { DemoAutomation } from "./compositions/DemoAutomation";

// 30 fps, 1400x1000 (viewport large ecran 37")
const FPS = 30;
const WIDTH = 1400;
const HEIGHT = 1000;

export const Root: React.FC = () => {
  return (
    <Folder name="Demos-Formation">
      <Composition
        id="DemoSkillCreation"
        component={DemoSkillCreation}
        durationInFrames={30 * FPS}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          screenshotsDir: "screenshots/skill-creation",
        }}
      />
      <Composition
        id="DemoSkillAction"
        component={DemoSkillAction}
        durationInFrames={24 * FPS}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          screenshotsDir: "screenshots/skill-action",
        }}
      />
      <Composition
        id="DemoAutomation"
        component={DemoAutomation}
        durationInFrames={20 * FPS}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{
          screenshotsDir: "screenshots/automation",
        }}
      />
    </Folder>
  );
};
