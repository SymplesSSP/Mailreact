import React from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { TextOverlay } from "../components/TextOverlay";
import { StepAnnotation } from "../components/StepAnnotation";
import { LogoOverlay } from "../components/LogoOverlay";
import { Transition } from "../components/Transition";

const BLUE = "#0B70B5";
const ORANGE = "#ED8B18";
const PURPLE = "#7c3aed";

interface Props {
  screenshotsDir: string;
}

/**
 * DemoAutomation — 10s a 30fps = 300 frames
 *
 * Scenario :
 *   1. Le skill Goodays est deja cree
 *   2. On lance /schedule pour automatiser
 *   3. Resultat : traitement automatique chaque matin
 */
export const DemoAutomation: React.FC<Props> = ({ screenshotsDir }) => {
  const img = (name: string) => staticFile(`${screenshotsDir}/${name}`);

  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1a2e" }}>
      <Series>
        {/* ── Intro (1.5s) ── */}
        <Series.Sequence durationInFrames={45}>
          <Transition>
            <AbsoluteFill
              style={{
                background: `linear-gradient(135deg, ${PURPLE} 0%, #5b21b6 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "Inter, system-ui, sans-serif",
                  textAlign: "center",
                }}
              >
                Automatiser avec /schedule
              </div>
              <div
                style={{
                  fontSize: 22,
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Skill + tache programmee = pilote automatique
              </div>
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 1 : Le skill existe deja (2.5s) ── */}
        <Series.Sequence durationInFrames={75}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-01.png")} from="top-left" to="center" />
              <StepAnnotation step={1} label="Le skill Goodays est pret" color={BLUE} />
              <TextOverlay
                text="On part du skill cree precedemment — il sait deja repondre aux avis"
                position="bottom"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 2 : /schedule configuration (3s) ── */}
        <Series.Sequence durationInFrames={90}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-02.png")} from="center" to="bottom-right" />
              <StepAnnotation step={2} label="Configurer /schedule" color={PURPLE} />
              <TextOverlay
                text={`/schedule "Chaque matin a 8h, traiter les nouveaux avis Goodays"`}
                position="bottom"
                bgColor="rgba(124, 58, 237, 0.90)"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 3 : Resultat automation (1.5s) ── */}
        <Series.Sequence durationInFrames={45}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-03.png")} from="bottom-left" to="center" scaleTo={1.1} />
              <StepAnnotation step={3} label="Automatisation active" color={ORANGE} />
              <TextOverlay
                text="Claude traite les avis chaque matin — vous validez en un clic"
                position="bottom"
                bgColor="rgba(237, 139, 24, 0.90)"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Outro (1.5s) ── */}
        <Series.Sequence durationInFrames={45}>
          <Transition>
            <AbsoluteFill
              style={{
                background: `linear-gradient(135deg, ${ORANGE} 0%, #c97010 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "Inter, system-ui, sans-serif",
                  textAlign: "center",
                }}
              >
                Zero intervention manuelle
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Skill + Schedule = votre assistant automatise
              </div>
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>
      </Series>

      <LogoOverlay logoSrc={staticFile("emails/static/leclerc-logo.png")} />
    </AbsoluteFill>
  );
};
