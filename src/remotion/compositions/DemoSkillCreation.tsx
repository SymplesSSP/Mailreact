import React from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { TextOverlay } from "../components/TextOverlay";
import { StepAnnotation } from "../components/StepAnnotation";
import { LogoOverlay } from "../components/LogoOverlay";
import { Transition } from "../components/Transition";

// Couleurs E.Leclerc
const BLUE = "#0B70B5";
const ORANGE = "#ED8B18";

interface Props {
  screenshotsDir: string;
}

/**
 * DemoSkillCreation — 15s a 30fps = 450 frames
 *
 * Scenario :
 *   1. Ouverture claude.ai avec le prompt de creation de skill Goodays
 *   2. Claude genere le fichier SKILL.md
 *   3. Resultat : le skill est pret a copier dans les competences
 *
 * En attendant les vrais screenshots (issue #1), on utilise des
 * placeholders colores pour structurer le montage.
 */
export const DemoSkillCreation: React.FC<Props> = ({ screenshotsDir }) => {
  // Les screenshots seront captures par Playwright (issue #1)
  // Convention : step-01.png, step-02.png, etc.
  const img = (name: string) => staticFile(`${screenshotsDir}/${name}`);

  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1a2e" }}>
      <Series>
        {/* ── Intro titre (4s) ── */}
        <Series.Sequence durationInFrames={120}>
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
                Creation d'un Skill Goodays
              </div>
              <div
                style={{
                  fontSize: 22,
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                De la demande au skill pret a l'emploi
              </div>
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 1 : Saisie du prompt (8s) ── */}
        <Series.Sequence durationInFrames={240}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-01.png")} from="top-left" to="center" />
              <StepAnnotation step={1} label="Saisir le prompt de creation" color={BLUE} />
              <TextOverlay
                text="On decrit le skill souhaite : repondre aux avis Goodays avec le ton E.Leclerc"
                position="bottom"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 2 : Claude genere (8s) ── */}
        <Series.Sequence durationInFrames={240}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-02.png")} from="center" to="bottom-right" />
              <StepAnnotation step={2} label="Claude genere le skill" color={BLUE} />
              <TextOverlay
                text="L'IA redige le fichier SKILL.md avec les instructions, le ton et les exemples"
                position="bottom"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Etape 3 : Resultat final (6s) ── */}
        <Series.Sequence durationInFrames={180}>
          <Transition>
            <AbsoluteFill>
              <KenBurns src={img("step-03.png")} from="bottom-left" to="center" scaleTo={1.1} />
              <StepAnnotation step={3} label="Copier dans vos competences" color={ORANGE} />
              <TextOverlay
                text="Le skill est pret ! Un clic pour l'ajouter a votre Claude Desktop"
                position="bottom"
                bgColor="rgba(237, 139, 24, 0.90)"
              />
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>

        {/* ── Outro (4s) ── */}
        <Series.Sequence durationInFrames={120}>
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
                }}
              >
                Skill cree en 30 secondes
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Prochaine etape : l'utiliser sur un vrai avis client
              </div>
            </AbsoluteFill>
          </Transition>
        </Series.Sequence>
      </Series>

      {/* Logo E.Leclerc persistant */}
      <LogoOverlay logoSrc={staticFile("leclerc-logo.png")} />
    </AbsoluteFill>
  );
};
