import React from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { TextOverlay } from "../components/TextOverlay";
import { StepAnnotation } from "../components/StepAnnotation";
import { LogoOverlay } from "../components/LogoOverlay";
import { Transition } from "../components/Transition";

const BLUE = "#0B70B5";
const ORANGE = "#ED8B18";
const GREEN = "#16a34a";

interface Props {
  screenshotsDir: string;
}

/**
 * DemoSkillAction — 12s a 30fps = 360 frames
 *
 * Scenario :
 *   1. Avis client 2/5 etoiles colle dans Claude
 *   2. Le skill Goodays genere une reponse adaptee
 *   3. Ajustements proposes par Claude
 */
export const DemoSkillAction: React.FC<Props> = ({ screenshotsDir }) => {
  const img = (name: string) => staticFile(`${screenshotsDir}/${name}`);

  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1a2e" }}>
      <Series>
        {/* ── Intro (1.5s) ── */}
        <Series.Sequence durationInFrames={45}>
          <Transition>
            <AbsoluteFill
              style={{
                background: `linear-gradient(135deg, ${BLUE} 0%, #064a7a 100%)`,
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
                Skill en action : avis client
              </div>
              <div
                style={{
                  fontSize: 22,
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Avis 2/5 etoiles → reponse professionnelle en 10 secondes
              </div>
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 1 : Coller l'avis client (3s) ── */}
        <Series.Sequence durationInFrames={90}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-01.png")} from="top-right" to="center" />
              <StepAnnotation step={1} label="Coller l'avis client 2/5" color={BLUE} />
              <TextOverlay
                text={`"Accueil desagreable, attente interminable en caisse" — Client mecontent`}
                position="bottom"
                bgColor="rgba(220, 38, 38, 0.85)"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 2 : Claude redige la reponse (3.5s) ── */}
        <Series.Sequence durationInFrames={105}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-02.png")} from="center" to="bottom-left" />
              <StepAnnotation step={2} label="Le skill redige la reponse" color={BLUE} />
              <TextOverlay
                text="Claude applique le ton E.Leclerc : empathie, excuses, solution concrete"
                position="bottom"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 3 : Resultat + ajustements (2.5s) ── */}
        <Series.Sequence durationInFrames={75}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-03.png")} from="bottom-right" to="center" scaleTo={1.1} />
              <StepAnnotation step={3} label="Reponse prete + ajustements" color={GREEN} />
              <TextOverlay
                text="Reponse pro en 10 secondes — ajustable en un clic"
                position="bottom"
                bgColor="rgba(22, 163, 74, 0.90)"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Outro (1.5s) ── */}
        <Series.Sequence durationInFrames={45}>
          <Transition>
            <AbsoluteFill
              style={{
                background: `linear-gradient(135deg, ${GREEN} 0%, #15803d 100%)`,
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
                }}
              >
                10 secondes au lieu de 5 minutes
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Meme ton, meme qualite, chaque fois
              </div>
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>
      </Series>

      <LogoOverlay logoSrc={staticFile("emails/static/leclerc-logo.png")} />
    </AbsoluteFill>
  );
};
