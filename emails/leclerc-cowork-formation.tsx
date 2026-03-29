import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface LeclercCoworkFormationProps {
  destinataire?: string;
  magasin?: string;
}

// ─── E.Leclerc Brand Colors ─────────────────────────────────────
const BLUE = '#0B70B5';
const BLUE_DARK = '#085A91';
const ORANGE = '#ED8B18';
const ORANGE_LIGHT = '#FFF7EB';
const BLUE_LIGHT = '#EAF3FB';
const BG = '#f8fafc';
const T1 = '#1a1a2e';
const T2 = '#475569';
const T3 = '#64748b';
const T4 = '#94a3b8';
const BD = '#e2e8f0';

// ─── Demo URLs (thumbnails + GIFs heberges sur Google Drive) ─────
// INSTRUCTIONS : Uploadez les GIFs sur Google Drive, obtenez les liens
// partageables, puis remplacez les URLs ci-dessous.
// Thumbnails : utilisez https://lh3.googleusercontent.com/d/{FILE_ID} pour
// les images ou un screenshot heberge sur votre CDN.
const DEMO_URLS = {
  // ┌─────────────────────────────────────────────────────────────┐
  // │ APRES UPLOAD SUR GOOGLE DRIVE :                            │
  // │ 1. Upload les 2 GIFs + 2 thumbnails sur Drive              │
  // │ 2. Clic droit > Obtenir le lien > Tout le monde avec lien  │
  // │ 3. Remplace les URLs ci-dessous                            │
  // │ Format thumbnail Drive : https://lh3.googleusercontent.com/d/{ID} │
  // └─────────────────────────────────────────────────────────────┘
  // GIF 1 : Creation du skill (demo-skill-goodays-leclerc.gif)
  skillCreation: 'https://drive.google.com/file/d/REMPLACER_PAR_ID_GIF_SKILL/view',
  skillCreationThumb: 'static/thumb-skill-creation.png',
  // GIF 2 : Reponse avis client (demo-reponse-goodays-leclerc.gif)
  skillInAction: 'https://drive.google.com/file/d/REMPLACER_PAR_ID_GIF_REPONSE/view',
  skillInActionThumb: 'static/thumb-skill-action.png',
};

// ─── Composants inline ──────────────────────────────────────────

const VideoThumbnail = ({
  videoId,
  title,
  label,
}: {
  videoId: string;
  title: string;
  label?: string;
}) => (
  <Section style={{ marginTop: '12px', marginBottom: '4px' }}>
    <Link
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      style={{ textDecoration: 'none' }}
    >
      <Img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        width="536"
        alt={`Video : ${title}`}
        style={{
          width: '100%',
          borderRadius: '8px',
          border: `1px solid ${BD}`,
          display: 'block',
        }}
      />
      <Text
        style={{
          fontSize: '12px',
          color: BLUE,
          margin: '6px 0 0 0',
          textDecoration: 'underline',
        }}
      >
        {label || 'Voir la video'}
      </Text>
    </Link>
  </Section>
);

const FeatureCard = ({
  icon,
  title,
  description,
  color,
  videoId,
  docLink,
  docLabel,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
  videoId?: string;
  docLink?: string;
  docLabel?: string;
}) => (
  <Section style={{ marginBottom: '24px' }}>
    <Row>
      <Column style={{ width: '56px', verticalAlign: 'top' }}>
        <Section
          style={{
            backgroundColor: color,
            borderRadius: '12px',
            width: '48px',
            height: '48px',
            textAlign: 'center' as const,
          }}
        >
          <Text style={{ fontSize: '24px', lineHeight: '48px', margin: '0' }}>
            {icon}
          </Text>
        </Section>
      </Column>
      <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
        <Text
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: T1,
            margin: '0 0 4px 0',
            lineHeight: '24px',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: '14px',
            color: T3,
            margin: '0',
            lineHeight: '21px',
          }}
        >
          {description}
        </Text>
        {docLink && (
          <Link
            href={docLink}
            style={{
              fontSize: '12px',
              color: BLUE,
              textDecoration: 'underline',
            }}
          >
            {docLabel || 'En savoir plus'}
          </Link>
        )}
      </Column>
    </Row>
    {videoId && <VideoThumbnail videoId={videoId} title={title} />}
  </Section>
);

const PromptExample = ({
  feature,
  prompt,
  featureColor,
  context,
}: {
  feature: string;
  prompt: string;
  featureColor: string;
  context?: string;
}) => (
  <Section style={{ marginBottom: '16px' }}>
    <Section
      style={{
        backgroundColor: BG,
        borderRadius: '12px',
        padding: '16px 20px',
        border: `1px solid ${BD}`,
      }}
    >
      <Text
        style={{
          fontSize: '11px',
          fontWeight: 700,
          color: featureColor,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.5px',
          margin: '0 0 4px 0',
        }}
      >
        {feature}
      </Text>
      {context && (
        <Text
          style={{ fontSize: '12px', color: T3, margin: '0 0 8px 0', lineHeight: '18px' }}
        >
          {context}
        </Text>
      )}
      <Text
        style={{
          fontSize: '14px',
          color: '#334155',
          margin: '0',
          lineHeight: '22px',
          fontStyle: 'italic',
        }}
      >
        &ldquo;{prompt}&rdquo;
      </Text>
    </Section>
  </Section>
);

const TimelineItem = ({
  date,
  title,
  description,
  isNew,
}: {
  date: string;
  title: string;
  description: string;
  isNew?: boolean;
}) => (
  <Section style={{ marginBottom: '16px' }}>
    <Row>
      <Column style={{ width: '80px', verticalAlign: 'top' }}>
        <Text
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: BLUE,
            margin: '0',
            lineHeight: '22px',
          }}
        >
          {date}
        </Text>
      </Column>
      <Column style={{ verticalAlign: 'top', paddingLeft: '12px', borderLeft: `2px solid ${BD}` }}>
        <Text
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: T1,
            margin: '0 0 2px 0',
            lineHeight: '22px',
          }}
        >
          {title}
          {isNew && (
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                color: '#ffffff',
                backgroundColor: ORANGE,
                borderRadius: '4px',
                padding: '2px 6px',
                marginLeft: '8px',
                verticalAlign: 'middle',
              }}
            >
              NOUVEAU
            </span>
          )}
        </Text>
        <Text
          style={{ fontSize: '13px', color: T3, margin: '0', lineHeight: '20px' }}
        >
          {description}
        </Text>
      </Column>
    </Row>
  </Section>
);

// ─── Main Email ──────────────────────────────────────────────────
export const LeclercCoworkFormation = ({
  destinataire = 'Monsieur Alazard',
  magasin = 'E.Leclerc Frouard',
}: LeclercCoworkFormationProps) => (
  <Html lang="fr">
    <Head>
      <Font
        fontFamily="Inter"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>
      Recapitulatif Claude Cowork — Session J11 du 20 mars 2026 — {magasin}
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>

          {/* ════════════════ HEADER ════════════════ */}
          <Section style={header}>
            <Section
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                width: '160px',
                margin: '0 auto 20px auto',
                padding: '8px 16px',
                textAlign: 'center' as const,
              }}
            >
              <Img
                src="static/leclerc-logo.png"
                width="130"
                height="87"
                alt="E.Leclerc"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </Section>
            <Text style={headerBadge}>
              FORMATION IA — SESSION J11 — 20 MARS 2026
            </Text>
            <Heading as="h1" style={headerTitle}>
              Claude Cowork
            </Heading>
            <Text style={headerSubtitle}>
              Votre assistant IA de bureau — Deleguer, automatiser, industrialiser
            </Text>
            <Text style={headerMagasin}>{magasin}</Text>
          </Section>

          {/* ════════════════ INTRO ════════════════ */}
          <Section style={content}>
            <Text style={greeting}>Bonjour {destinataire},</Text>
            <Text style={paragraph}>
              Suite a notre session du <strong>jeudi 20 mars</strong> avec
              Pascal Cordier et Mickael Gourmelon, voici votre recapitulatif
              complet de{' '}
              <Link href="https://claude.com/product/cowork" style={link}>
                Claude Cowork
              </Link>
              . Chaque fonctionnalite est expliquee, illustree, et accompagnee
              de <strong>prompts prets a copier-coller</strong> pour votre
              quotidien en magasin.
            </Text>

            {/* Chiffres cles */}
            <Section style={statsBar}>
              <Row>
                <Column style={statCell}>
                  <Text style={statNumber}>50+</Text>
                  <Text style={statLabel}>CONNECTEURS</Text>
                </Column>
                <Column style={statCell}>
                  <Text style={{ ...statNumber, color: ORANGE }}>7</Text>
                  <Text style={statLabel}>FONCTIONNALITES</Text>
                </Column>
                <Column style={statCell}>
                  <Text style={statNumber}>24/7</Text>
                  <Text style={statLabel}>AUTOMATISATION</Text>
                </Column>
              </Row>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ ACTU DE LA SEMAINE ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              L'actualite IA de la semaine
            </Heading>
            <Text style={sectionSubtitle}>
              Ce qui vient de sortir chez Anthropic — semaine du 23 au 29 mars 2026
            </Text>

            <TimelineItem
              date="23 mars"
              title="Computer Use"
              description="Claude peut maintenant controler votre ecran : souris, clavier, navigateur. Disponible en preview pour les abonnes Pro et Max."
              isNew
            />
            <TimelineItem
              date="23 mars"
              title="Dispatch"
              description="Envoyez des taches a Claude depuis votre telephone. Il les execute sur votre ordinateur, meme en votre absence."
              isNew
            />
            <TimelineItem
              date="24 mars"
              title="Auto Mode (Claude Code)"
              description="Claude Code peut maintenant choisir ses propres permissions avec un classificateur de securite. Moins d'interruptions, plus d'autonomie."
            />
            <TimelineItem
              date="25 mars"
              title="Apps interactives sur mobile"
              description="Les applis iOS et Android supportent desormais les graphiques interactifs, diagrammes et visualisations dans les conversations."
            />
            <TimelineItem
              date="26 mars"
              title="Claude Mythos — Fuite d'un nouveau modele"
              description="Un leak accidentel revele 'Claude Mythos' (nom de code : Capybara) — un nouveau palier de modele au-dessus d'Opus. Anthropic confirme : 'le plus capable que nous ayons construit'. Pas encore accessible au public."
            />

            {/* Blog officiel */}
            <Section style={{ marginTop: '8px' }}>
              <Text style={{ fontSize: '13px', color: T3, margin: '0', lineHeight: '20px' }}>
                Source officielle :{' '}
                <Link
                  href="https://claude.com/blog/dispatch-and-computer-use"
                  style={{ color: BLUE, textDecoration: 'underline' }}
                >
                  claude.com/blog — Dispatch & Computer Use
                </Link>
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ LES 7 FONCTIONNALITES ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Les 7 fonctionnalites de Cowork
            </Heading>
            <Text style={sectionSubtitle}>
              Tout ce que Claude peut faire depuis votre bureau
            </Text>

            {/* Video webinaire officiel */}
            <VideoThumbnail
              videoId="zfWfczd6keE"
              title="Webinaire officiel — The Future of AI at Work"
              label="Webinaire Anthropic : presentation complete de Cowork (30 min)"
            />
            <Section style={{ height: '24px' }} />

            <FeatureCard
              icon="📱"
              title="Dispatch — Controlez a distance"
              description="Envoyez des taches depuis votre telephone pendant que vous etes en rayon. Claude les execute sur votre poste au bureau. Il suffit de scanner un QR code pour lier les deux appareils."
              color={BLUE_LIGHT}
              docLink="https://support.claude.com/en/articles/13947068"
              docLabel="Guide Dispatch"
            />

            <FeatureCard
              icon="🖥️"
              title="Computer Use — Pilotage de l'ecran"
              description="Claude controle votre souris, clavier et navigateur. Il remplit des formulaires, navigue entre les logiciels et execute des workflows complets — comme MyClaw dont nous avons discute."
              color={ORANGE_LIGHT}
              docLink="https://support.claude.com/en/articles/14128542"
              docLabel="Guide Computer Use"
            />

            {/* Avertissement Computer Use */}
            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                marginBottom: '24px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: ORANGE }}>Computer Use est en preview.</strong>{' '}
                Claude peut faire des erreurs. Commencez avec des apps de confiance,
                evitez les donnees sensibles. Votre Mac doit etre allume et l'app Claude ouverte.
              </Text>
            </Section>

            <FeatureCard
              icon="⏰"
              title="Taches Programmees"
              description="Automatisez les rapports quotidiens, syntheses hebdomadaires, nettoyage de dossiers. Tapez /schedule dans Cowork. Frequences : horaire, quotidienne, hebdomadaire."
              color={BLUE_LIGHT}
              docLink="https://support.claude.com/en/articles/13854387"
              docLabel="Guide Taches Programmees"
            />

            <FeatureCard
              icon="⚡"
              title="Skills — Instructions reutilisables"
              description="Des modes d'emploi que Claude suit pour chaque type de tache. Skills integrees : PDF, Word, PowerPoint, Excel, Canvas Design. Creez les votres avec /skill-creator."
              color={ORANGE_LIGHT}
            />

            <FeatureCard
              icon="🔌"
              title="Plugins — Kits metier complets"
              description="Un plugin regroupe skills, connecteurs et sous-agents en un seul package. Disponibles pour : Ventes, Finance, RH, Marketing, Operations, Data, Juridique."
              color={BLUE_LIGHT}
              docLink="https://support.claude.com/en/articles/13837440"
              docLabel="Guide Plugins"
            />

            <FeatureCard
              icon="🔗"
              title="Connecteurs — 50+ integrations"
              description="Google Drive, Gmail, Slack, Notion, Jira, Asana, Linear, HubSpot, Microsoft 365, Figma, Canva, Snowflake, Amplitude... Connectez vos outils existants en un clic."
              color={ORANGE_LIGHT}
              docLink="https://claude.com/connectors"
              docLabel="Voir tous les connecteurs"
            />

            <FeatureCard
              icon="📁"
              title="Projets — Espaces dedies"
              description="Chaque projet a ses fichiers, instructions, memoire et taches programmees. Un espace 'Gestion Magasin', un autre 'RH', un troisieme 'Relation Client' — chacun isole."
              color={BLUE_LIGHT}
            />

            {/* Note liens anglais */}
            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '8px',
                padding: '12px 16px',
                border: `1px solid ${BD}`,
              }}
            >
              <Text style={{ fontSize: '12px', color: T3, margin: '0', lineHeight: '18px' }}>
                <strong>Les guides ci-dessus sont en anglais.</strong> Pour les
                lire en francais : ouvrez le lien dans Chrome, faites clic droit
                sur la page, puis &ldquo;Traduire en francais&rdquo;. La traduction
                automatique de Chrome fonctionne parfaitement sur ces pages.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ FOCUS SKILLS ════════════════ */}
          <Section style={content}>
            <Section
              style={{
                backgroundColor: ORANGE,
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: '24px',
              }}
            >
              <Heading
                as="h2"
                style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 4px 0' }}
              >
                Focus : Les Skills — Votre atout majeur
              </Heading>
              <Text style={{ fontSize: '14px', color: '#FFD4C7', margin: '0' }}>
                Des instructions personnalisees que Claude suit a la lettre, a chaque fois
              </Text>
            </Section>

            <Text style={paragraph}>
              Un <strong>Skill</strong> est un fichier d'instructions (SKILL.md) que
              vous creez une fois et que Claude applique automatiquement ensuite.
              C'est comme former un nouvel employe : vous lui expliquez la procedure,
              et il la suit a chaque fois sans que vous ayez a repeter.
            </Text>

            {/* Pourquoi c'est important */}
            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '16px 20px',
                marginBottom: '20px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: ORANGE, margin: '0 0 8px 0' }}>
                Pourquoi c'est l'outil le plus puissant de Cowork ?
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Sans skill</strong> : vous repetez les memes consignes a chaque conversation. Claude oublie entre les sessions.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Avec un skill</strong> : Claude connait votre ton, vos regles, votre process.
                Il produit un resultat calibre du premier coup.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong>Resultat</strong> : gain de temps massif, qualite constante, scalable a toute l'equipe.
              </Text>
            </Section>

            {/* Cycle de vie d'un skill */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '0 0 16px 0' }}>
              Comment creer et gerer un skill
            </Heading>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: ORANGE }}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Decrire votre besoin a Claude</Text>
                  <Text style={stepDesc}>
                    Tapez votre demande en langage naturel. Pas besoin de code.
                    Claude vous pose des questions pour comprendre votre process.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: ORANGE }}>2</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Claude genere le SKILL.md</Text>
                  <Text style={stepDesc}>
                    Un fichier structure avec : nom, description, regles, exemples,
                    variables a personnaliser. Pret a installer.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: ORANGE }}>3</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Installer en un clic</Text>
                  <Text style={stepDesc}>
                    Cliquez &ldquo;Copier dans vos competences&rdquo; dans l'artefact,
                    ou allez dans Personnaliser &gt; Skills &gt; Mes Skills.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: ORANGE }}>4</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Tester, ajuster, partager</Text>
                  <Text style={stepDesc}>
                    Testez avec des cas reels. Dites &ldquo;plus ferme&rdquo; ou
                    &ldquo;plus chaleureux&rdquo; pour ajuster. Partagez le fichier
                    a vos collegues — c'est un simple fichier texte.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Demo 1 : Creation du skill Goodays (screenshot cliquable → GIF Drive) */}
            <Section style={{ marginTop: '16px', marginBottom: '8px' }}>
              <Link
                href={DEMO_URLS.skillCreation}
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Img
                  src={DEMO_URLS.skillCreationThumb}
                  width="536"
                  alt="Demo : creation d'un skill Reponse Goodays dans Claude"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    border: `1px solid ${BD}`,
                    display: 'block',
                  }}
                />
                <Text style={demoCaption}>
                  Demo 1 : Claude cree le skill &ldquo;Reponse Goodays&rdquo; avec
                  classification par priorite, charte de ton, variables par magasin
                  — <span style={{ color: BLUE, textDecoration: 'underline' }}>Voir la demo animee</span>
                </Text>
              </Link>
            </Section>

            {/* Demo 2 : Le skill en action (screenshot cliquable → GIF Drive) */}
            <Section style={{ marginTop: '8px', marginBottom: '16px' }}>
              <Link
                href={DEMO_URLS.skillInAction}
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                <Img
                  src={DEMO_URLS.skillInActionThumb}
                  width="536"
                  alt="Demo : Claude repond a un avis client 2/5 avec le skill Goodays"
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    border: `1px solid ${BD}`,
                    display: 'block',
                  }}
                />
                <Text style={demoCaption}>
                  Demo 2 : Un avis client 2/5 &rarr; Claude redige la reponse E.Leclerc
                  et propose des ajustements avant envoi
                  — <span style={{ color: BLUE, textDecoration: 'underline' }}>Voir la demo animee</span>
                </Text>
              </Link>
            </Section>

            {/* Skills integrees */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '16px 0 12px 0' }}>
              Skills deja integrees dans Claude
            </Heading>
            <Text style={{ fontSize: '13px', color: T2, margin: '0 0 16px 0', lineHeight: '20px' }}>
              Ces skills sont pretes a l'emploi — pas besoin de les creer :
            </Text>
            <Section style={{ marginBottom: '16px' }}>
              <Row>
                <Column style={{ width: '50%', verticalAlign: 'top' }}>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>PDF</strong> — Analyser et extraire
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>Word</strong> — Rediger et formater
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>Excel</strong> — Calculer et graphiques
                  </Text>
                </Column>
                <Column style={{ width: '50%', verticalAlign: 'top' }}>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>PowerPoint</strong> — Presentations
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>Canvas</strong> — Design visuel
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>Skill Creator</strong> — Creer vos skills
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Lien doc */}
            <Text style={{ fontSize: '13px', color: T3, margin: '0', lineHeight: '20px' }}>
              Documentation :{' '}
              <Link
                href="https://support.claude.com/en/articles/12512198-how-to-create-custom-skills"
                style={{ color: BLUE, textDecoration: 'underline' }}
              >
                Creer un skill personnalise
              </Link>
              {' '}|{' '}
              <Link
                href="https://claude.com/skills"
                style={{ color: BLUE, textDecoration: 'underline' }}
              >
                Bibliotheque de skills
              </Link>
            </Text>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ PROMPTS CREATION DE SKILLS ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Prompts pour creer vos propres skills
            </Heading>
            <Text style={sectionSubtitle}>
              Copiez ces prompts dans Claude — il generera le skill adapte a votre besoin.
              Vous n'avez qu'a repondre a ses questions, puis cliquer &ldquo;Copier dans vos competences&rdquo;.
            </Text>

            <PromptExample
              feature="⚡ Creer un skill — Reponses Goodays"
              context="Claude va vous poser des questions sur votre ton, vos regles, puis generer le SKILL.md complet :"
              prompt="Je suis directeur d'un magasin E.Leclerc. Cree-moi un skill 'Reponse Goodays' qui redige des reponses professionnelles et empathiques aux avis clients. Le skill doit : classer par priorite (note < 3 en premier), adapter le ton E.Leclerc, proposer les reponses pour validation avant envoi. Donne-moi le fichier SKILL.md complet pret a installer."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="⚡ Creer un skill — Rapport hebdomadaire"
              context="Automatisez votre synthese du lundi matin :"
              prompt="Cree un skill 'Synthese Hebdo Leclerc' qui genere chaque lundi un rapport structure : CA par rayon vs N-1, top 5 produits, alertes stock, satisfaction Goodays de la semaine. Format PDF avec graphiques. Le skill doit s'adapter au magasin (nom, rayons) via des variables."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="⚡ Creer un skill — Compte-rendu de reunion"
              context="Plus jamais de CR baclee — Claude structure tout :"
              prompt="Cree un skill 'CR Reunion Leclerc' qui transforme des notes brutes en compte-rendu structure : participants, ordre du jour, decisions prises, actions (responsable + deadline), points en attente. Format professionnel PDF. Le ton doit etre factuel et concis."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="⚡ Creer un skill adaptatif — A partir de vos documents"
              context="Vous ne savez pas quel skill creer ? Donnez vos documents a Claude, il proposera :"
              prompt="Voici [3 documents types de mon quotidien : un planning, un rapport de ventes, des avis Goodays]. Analyse ces documents et propose-moi les 3 skills les plus utiles pour automatiser mon travail de directeur E.Leclerc. Pour chaque skill, explique pourquoi il est pertinent et genere le SKILL.md."
              featureColor={BLUE}
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ PROMPTS METIER ════════════════ */}
          <Section style={content}>
            <Section
              style={{
                backgroundColor: BLUE,
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: '24px',
              }}
            >
              <Heading
                as="h2"
                style={{
                  fontSize: '20px',
                  color: '#ffffff',
                  margin: '0 0 4px 0',
                }}
              >
                Prompts prets a l'emploi
              </Heading>
              <Text style={{ fontSize: '14px', color: '#B3D4F7', margin: '0' }}>
                Copiez-collez directement dans Claude Desktop — adaptes a {magasin}
              </Text>
            </Section>

            <PromptExample
              feature="📱 Dispatch — En rayon, depuis le telephone"
              context="Vous avez besoin d'un chiffre rapidement :"
              prompt="Ouvre le fichier Excel des ventes de la semaine sur mon bureau, calcule le CA par rayon (Frais, PGC, Bazar, Textile) et envoie-moi un resume avec les ecarts vs semaine precedente."
              featureColor={BLUE}
            />

            <PromptExample
              feature="⏰ Tache programmee — Chaque lundi 7h"
              context="Rapport automatique avant le comite de direction :"
              prompt="Synthese hebdomadaire : compile les KPIs (CA, marge, panier moyen, frequentation) par rayon, compare avec N-1, genere un rapport PDF avec graphiques."
              featureColor="#059669"
            />

            <PromptExample
              feature="⏰ Tache programmee — Chaque jour 6h"
              context="Gestion proactive des ruptures de stock :"
              prompt="Verifie les ruptures de stock, identifie les 20 produits a plus forte rotation en rupture, prepare un email de commande urgente avec references et quantites suggerees."
              featureColor="#059669"
            />

            <PromptExample
              feature="⚡ Skill — Reponses Goodays"
              context="Traitement des avis clients en lot :"
              prompt="Lis les 10 derniers avis Goodays non repondus. Redige une reponse personnalisee pour chacun, ton professionnel et empathique E.Leclerc. Classe par priorite (note < 3 en premier). Presente pour validation avant envoi."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="⚡ Skill — Compte-rendu de reunion"
              context="Un CR structure en 2 minutes apres chaque reunion :"
              prompt="A partir de mes notes brutes, redige un compte-rendu : participants, decisions prises, actions (responsable + deadline), points en attente. Format PDF pret a diffuser."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="🖥️ Computer Use — Export et analyse"
              context="Claude pilote vos logiciels :"
              prompt="Ouvre le logiciel de caisse, exporte les ventes d'hier par tranche horaire, cree un graphique de frequentation dans Excel avec les pics d'affluence. Sauvegarde dans Rapports/Mars-2026."
              featureColor="#7C3AED"
            />

            <PromptExample
              feature="🔗 Connecteurs — Planning & RH"
              context="Optimisation des plannings via Google Drive :"
              prompt="Recupere le fichier 'Planning equipes Mars' sur Google Drive, identifie les jours ou il manque du personnel en caisse (ratio clients/caissiers > 25), propose un reamenagement en respectant les contraintes legales."
              featureColor="#E11D48"
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ PROCESS TSE + DRIVE + CLAUDE ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Utiliser Claude depuis votre environnement
            </Heading>
            <Text style={sectionSubtitle}>
              Votre TSE ne donne pas acces a Claude — voici le process simple
              pour travailler avec les deux
            </Text>

            <Text style={paragraph}>
              Votre magasin utilise un <strong>TSE (Terminal Server)</strong> sous
              Windows et un abonnement <strong>Gemini Entreprise</strong> qui
              inclut Google Drive. Claude n'est pas autorise sur le TSE, mais
              Google Drive sert de <strong>passerelle</strong> entre les deux
              environnements.
            </Text>

            {/* Process en 4 etapes */}
            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    TSE &rarr; Sauvegarder sur Google Drive
                  </Text>
                  <Text style={stepDesc}>
                    Depuis votre session TSE, enregistrez vos fichiers
                    (rapports, tableaux, notes) dans un dossier Google Drive
                    dedie (ex: &ldquo;Dossier IA&rdquo;). Drive est deja
                    accessible via votre abonnement Gemini.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>2</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    Claude &rarr; Connecter Google Drive
                  </Text>
                  <Text style={stepDesc}>
                    Depuis Claude Desktop ou claude.ai (sur votre navigateur
                    personnel ou telephone), activez le connecteur Google Drive.
                    Claude accede directement a vos fichiers.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>3</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    Claude traite et sauvegarde sur Drive
                  </Text>
                  <Text style={stepDesc}>
                    Claude analyse vos fichiers, genere les rapports/reponses,
                    et sauvegarde les resultats dans le meme dossier Drive.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>4</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    TSE &rarr; Recuperer le resultat
                  </Text>
                  <Text style={stepDesc}>
                    De retour sur le TSE, ouvrez Google Drive et recuperez
                    le fichier genere par Claude. Pret a utiliser.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section
              style={{
                backgroundColor: BLUE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                marginTop: '8px',
                borderLeft: `4px solid ${BLUE}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>En resume</strong> : Google Drive
                est le pont entre votre TSE et Claude. Vos fichiers restent dans
                Drive, accessibles des deux cotes. Aucune installation sur le
                TSE, aucune autorisation IT supplementaire.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ REACT EMAIL ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Comment est fait ce mail ?
            </Heading>
            <Text style={paragraph}>
              Ce mail de formation est lui-meme concu avec{' '}
              <Link href="https://react.email" style={link}>
                React Email
              </Link>
              , un framework open source qui permet de construire des emails
              en <strong>React + TypeScript</strong> — le meme langage que
              les applications web modernes.
            </Text>
            <Text style={paragraph}>
              Chaque section, chaque carte, chaque prompt est un{' '}
              <strong>composant reutilisable</strong>. On peut generer
              des variantes pour d'autres magasins en changeant juste les props
              (destinataire, magasin, contenu). Le rendu est compatible
              Gmail, Outlook et Apple Mail.
            </Text>
            <Text style={{ fontSize: '13px', color: T3, margin: '0', lineHeight: '20px' }}>
              C'est un exemple concret de ce que l'IA permet : Claude a contribue
              a la conception de ce template — recherche du contenu, structuration
              pedagogique, verification des faits. La technologie au service de la
              formation.
            </Text>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ NEXT STEPS ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Prochaines etapes — J12 le 10 avril
            </Heading>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    Telecharger Claude Desktop
                  </Text>
                  <Text style={stepDesc}>
                    Disponible sur{' '}
                    <Link href="https://claude.com/download" style={{ color: BLUE, textDecoration: 'underline' }}>
                      macOS et Windows
                    </Link>
                    . Creez un compte Pro pour acceder a Cowork.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>2</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    Tester 2-3 prompts de cet email
                  </Text>
                  <Text style={stepDesc}>
                    Commencez par les reponses Goodays ou la synthese hebdo.
                    Notez ce qui fonctionne et ce qui bloque.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>3</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    Identifier vos 3 quick wins
                  </Text>
                  <Text style={stepDesc}>
                    Les taches repetitives les plus chronophages.
                    On les automatisera en J12.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>4</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    J12 — Industrialisation (10 avril)
                  </Text>
                  <Text style={stepDesc}>
                    Taches programmees, skills personnalisees et bilan
                    des cas d'usage industrialises.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={{ textAlign: 'center' as const, marginTop: '32px' }}>
              <Button style={ctaButton} href="https://claude.com/download">
                Telecharger Claude Desktop
              </Button>
              <Text style={ctaSubtext}>
                macOS et Windows — Gratuit a installer, abonnement Pro requis pour Cowork
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ FOOTER ════════════════ */}
          <Section style={footer}>
            <Text style={footerName}>Guillaume Wilmin</Text>
            <Text style={footerRole}>
              Consultant IA & E-commerce |{' '}
              <Link href="https://www.ipln.fr" style={{ color: BLUE, textDecoration: 'none' }}>
                IPLN
              </Link>
              {' '} |{' '}
              <Link href="https://www.praxelia.com" style={{ color: BLUE, textDecoration: 'none' }}>
                Praxelia
              </Link>
            </Text>
            <Text style={footerLegal}>
              Session J11 — 20 mars 2026 — {magasin} — Prochaine : J12 le 10 avril
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

LeclercCoworkFormation.PreviewProps = {
  destinataire: 'Monsieur Alazard',
  magasin: 'E.Leclerc Frouard',
} as LeclercCoworkFormationProps;

export default LeclercCoworkFormation;

// ─── STYLES ──────────────────────────────────────────────────────

const main = {
  backgroundColor: '#f1f5f9',
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
  borderRadius: '16px',
  overflow: 'hidden' as const,
  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
};

const header = {
  backgroundColor: BLUE,
  padding: '40px 32px 32px',
  textAlign: 'center' as const,
};

const headerBadge = {
  fontSize: '11px',
  fontWeight: 700 as const,
  color: '#B3D4F7',
  textTransform: 'uppercase' as const,
  letterSpacing: '2px',
  margin: '0 0 12px 0',
};

const headerTitle = {
  fontSize: '32px',
  fontWeight: 800 as const,
  color: '#ffffff',
  margin: '0 0 8px 0',
  lineHeight: '38px',
};

const headerSubtitle = {
  fontSize: '15px',
  color: '#B3D4F7',
  margin: '0 0 16px 0',
  lineHeight: '22px',
};

const headerMagasin = {
  fontSize: '13px',
  fontWeight: 700 as const,
  color: ORANGE,
  backgroundColor: 'rgba(255,255,255,0.15)',
  borderRadius: '20px',
  padding: '6px 16px',
  margin: '0',
  display: 'inline-block' as const,
};

const content = { padding: '32px' };

const greeting = {
  fontSize: '16px',
  color: T1,
  lineHeight: '24px',
  margin: '0 0 16px 0',
};

const paragraph = {
  fontSize: '15px',
  color: T2,
  lineHeight: '24px',
  margin: '0 0 12px 0',
};

const link = {
  color: BLUE,
  fontWeight: 700 as const,
  textDecoration: 'none' as const,
};

const divider = { borderColor: BD, margin: '0' };

// Stats
const statsBar = {
  backgroundColor: BLUE,
  borderRadius: '12px',
  padding: '20px 16px',
  marginTop: '20px',
};

const statCell = {
  width: '33%',
  textAlign: 'center' as const,
  padding: '0 4px',
};

const statNumber = {
  fontSize: '28px',
  fontWeight: 800 as const,
  color: '#ffffff',
  margin: '0',
  lineHeight: '34px',
};

const statLabel = {
  fontSize: '10px',
  color: '#B3D4F7',
  margin: '4px 0 0 0',
  lineHeight: '14px',
  letterSpacing: '0.5px',
};

// Section titles
const sectionTitle = {
  fontSize: '22px',
  fontWeight: 700 as const,
  color: T1,
  margin: '0 0 8px 0',
  lineHeight: '30px',
};

const sectionSubtitle = {
  fontSize: '14px',
  color: T3,
  margin: '0 0 24px 0',
  lineHeight: '21px',
};

// Session recap
const sessionRecapItem = {
  fontSize: '13px',
  color: '#334155',
  margin: '0 0 4px 0',
  lineHeight: '20px',
};

// Steps
const stepBox = { marginBottom: '16px' };

const stepNum = { width: '40px', verticalAlign: 'top' as const };

const stepCircle = {
  backgroundColor: ORANGE,
  color: '#ffffff',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  textAlign: 'center' as const,
  lineHeight: '32px',
  fontSize: '14px',
  fontWeight: 700 as const,
  margin: '0',
};

const stepBody = { verticalAlign: 'top' as const, paddingLeft: '12px' };

const stepTitle = {
  fontSize: '15px',
  fontWeight: 700 as const,
  color: T1,
  margin: '0 0 2px 0',
  lineHeight: '24px',
};

const stepDesc = {
  fontSize: '13px',
  color: T3,
  margin: '0',
  lineHeight: '20px',
};

// CTA
const ctaButton = {
  backgroundColor: ORANGE,
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 700 as const,
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
};

const ctaSubtext = {
  fontSize: '12px',
  color: T4,
  margin: '12px 0 0 0',
  textAlign: 'center' as const,
};

// Footer
const footer = { padding: '24px 32px', textAlign: 'center' as const };

const footerName = {
  fontSize: '15px',
  fontWeight: 700 as const,
  color: T1,
  margin: '0',
};

const footerRole = {
  fontSize: '13px',
  color: T3,
  margin: '4px 0',
};

const footerLegal = {
  fontSize: '11px',
  color: T4,
  margin: '8px 0 0 0',
};

// Demo captions
const demoCaption = {
  fontSize: '12px',
  color: T3,
  margin: '6px 0 0 0',
  fontStyle: 'italic' as const,
  textAlign: 'center' as const,
  lineHeight: '18px',
};
