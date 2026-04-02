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

// ─── Composants inline ──────────────────────────────────────────

// Version compacte : petite thumbnail + lien (pour section intro)
const VideoCard = ({
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
      <Row>
        <Column style={{ width: '160px', verticalAlign: 'middle' }}>
          <Img
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            width="150"
            alt={`Video : ${title}`}
            style={{
              borderRadius: '6px',
              border: `1px solid ${BD}`,
              display: 'block',
            }}
          />
        </Column>
        <Column style={{ verticalAlign: 'middle', paddingLeft: '12px' }}>
          <Text style={{ fontSize: '14px', fontWeight: 700, color: T1, margin: '0 0 4px 0', lineHeight: '20px' }}>
            {title}
          </Text>
          <Text style={{ fontSize: '12px', color: BLUE, margin: '0', textDecoration: 'underline' }}>
            {label || 'Voir la video'}
          </Text>
        </Column>
      </Row>
    </Link>
  </Section>
);

// Bouton video compact (pas de thumbnail, juste un bouton style)
const VideoLink = ({
  videoId,
  label,
}: {
  videoId: string;
  label?: string;
}) => (
  <Link
    href={`https://www.youtube.com/watch?v=${videoId}`}
    target="_blank"
    style={{
      fontSize: '11px',
      fontWeight: 600,
      color: '#ffffff',
      backgroundColor: BLUE,
      borderRadius: '4px',
      padding: '4px 10px',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '6px',
    }}
  >
    ▶ {label || 'Demo video'}
  </Link>
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
        {videoId && (
          <>
            <VideoLink videoId={videoId} />
            <br />
          </>
        )}
        {docLink && (
          <Link
            href={docLink}
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: BLUE,
              backgroundColor: BLUE_LIGHT,
              borderRadius: '4px',
              padding: '3px 8px',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '6px',
            }}
          >
            {docLabel || 'En savoir plus'}
          </Link>
        )}
      </Column>
    </Row>
  </Section>
);

const PromptExample = ({
  feature,
  prompt,
  featureColor,
  context,
  result,
}: {
  feature: string;
  prompt: string;
  featureColor: string;
  context?: string;
  result?: string;
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
      {result && (
        <Text
          style={{
            fontSize: '12px',
            color: '#059669',
            margin: '10px 0 0 0',
            lineHeight: '18px',
            fontWeight: 600,
          }}
        >
          → {result}
        </Text>
      )}
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
          <Img
            src="https://symplesssp.github.io/Mailreact/emails/static/banner-hero.png"
            width="600"
            alt="IA et productivite"
            style={{ width: '100%', display: 'block' }}
          />
          <Section style={header}>
            <Section
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                width: '180px',
                margin: '0 auto 20px auto',
                padding: '12px 16px',
                textAlign: 'center' as const,
              }}
            >
              <Img
                src="https://symplesssp.github.io/Mailreact/emails/static/leclerc-logo.png"
                width="150"
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
              Ce qui vient de sortir chez Anthropic — du 17 mars au 2 avril 2026
            </Text>

            <TimelineItem
              date="23 mars"
              title="Computer Use"
              description="Claude peut maintenant controler votre ecran : souris, clavier, navigateur. Disponible en preview pour les abonnes Pro et Max."
              isNew
            />
            <TimelineItem
              date="17 mars"
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
            <TimelineItem
              date="1 avril"
              title="Reflechissez avec Claude — Assistant du quotidien"
              description="Nouvelle experience sur claude.ai : Claude aide a rediger des emails avec coaching (ton, structure), trouve des recettes avec photos depuis le web, et planifie des excursions avec carte interactive et itineraire. Tout se fait dans une conversation naturelle."
              isNew
            />

            {/* Liens docs FR */}
            <Section style={{ marginTop: '8px' }}>
              <Text style={{ fontSize: '13px', color: T3, margin: '0', lineHeight: '20px' }}>
                Sources :{' '}
                <Link
                  href="https://claude.com/blog/dispatch-and-computer-use"
                  style={{ color: BLUE, textDecoration: 'underline' }}
                >
                  Dispatch & Computer Use
                </Link>
                {' | '}
                <Link
                  href="https://support.claude.com/fr/articles/10684626-activation-et-utilisation-de-la-recherche-web"
                  style={{ color: BLUE, textDecoration: 'underline' }}
                >
                  Recherche web
                </Link>
                {' | '}
                <Link
                  href="https://support.claude.com/fr/articles/13979539-elements-visuels-personnalises-dans-le-chat"
                  style={{ color: BLUE, textDecoration: 'underline' }}
                >
                  Visuels interactifs
                </Link>
                {' | '}
                <Link
                  href="https://support.claude.com/fr/articles/13345190-commencer-avec-cowork"
                  style={{ color: BLUE, textDecoration: 'underline' }}
                >
                  Guide Cowork
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
            <VideoCard
              videoId="zfWfczd6keE"
              title="Webinaire Anthropic — Presentation complete de Cowork"
              label="Voir le webinaire (30 min)"
            />

            <FeatureCard
              icon="📱"
              title="Dispatch — Controlez a distance"
              description="Envoyez des taches depuis votre telephone pendant que vous etes en rayon. Claude les execute sur votre poste au bureau. Il suffit de scanner un QR code pour lier les deux appareils."
              color={BLUE_LIGHT}
              videoId="fVIV-L49eBs"
              docLink="https://support.claude.com/fr/articles/13947068"
              docLabel="Guide Dispatch"
            />

            <FeatureCard
              icon="🖥️"
              title="Computer Use — Pilotage de l'ecran"
              description="Claude controle votre souris, clavier et navigateur. Il remplit des formulaires, navigue entre les logiciels et execute des workflows complets — comme MyClaw dont nous avons discute."
              color={ORANGE_LIGHT}
              videoId="NAauIR6JFps"
              docLink="https://support.claude.com/fr/articles/14128542"
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
              videoId="b-ntWZqHF78"
              docLink="https://support.claude.com/fr/articles/13854387"
              docLabel="Guide Taches Programmees"
            />

            <FeatureCard
              icon="⚡"
              title="Skills — Instructions reutilisables"
              description="Des modes d'emploi que Claude suit pour chaque type de tache. Skills integrees : PDF, Word, PowerPoint, Excel, Canvas Design. Creez les votres avec /skill-creator."
              color={ORANGE_LIGHT}
              videoId="bjdBVZa66oU"
            />

            <FeatureCard
              icon="🔌"
              title="Plugins — Kits metier complets"
              description="Un plugin regroupe skills, connecteurs et sous-agents en un seul package. Disponibles pour : Ventes, Finance, RH, Marketing, Operations, Data, Juridique."
              color={BLUE_LIGHT}
              videoId="v5IOHK5xFlc"
              docLink="https://support.claude.com/fr/articles/13837440"
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
                Tous les guides renvoient vers le{' '}
                <Link href="https://support.claude.com/fr" style={{ color: BLUE, textDecoration: 'underline' }}>
                  Centre d'aide Claude en francais
                </Link>
                . Les videos YouTube sont en anglais — activez les sous-titres
                traduits si besoin (icone CC dans le lecteur).
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
                href="https://support.claude.com/fr/articles/12512198-how-to-create-custom-skills"
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
              Creer des skills puissants
            </Heading>
            <Text style={sectionSubtitle}>
              Ces prompts exploitent les vrais outils de Claude Desktop :
              Computer Use (pilotage ecran), connecteurs (Google Drive, Gmail),
              Dispatch (depuis le telephone) et taches programmees.
              Joignez vos fichiers reels — Claude analyse et produit le skill.
            </Text>

            <PromptExample
              feature="🧬 Voice DNA — Capturer votre ton via vos vrais emails"
              context="Joignez 5-10 emails ou reponses clients que VOUS avez rediges. Claude extrait votre ADN d'ecriture et cree un skill reutilisable a vie :"
              prompt="Voici des exemples de mes communications reelles [joindre fichiers]. Analyse en profondeur mon style : longueur de phrases, registre, formules recurrentes, niveau de formalite, structure de mes reponses, mots que j'utilise vs ceux que j'evite. Extrais un profil 'Voice DNA' detaille. Genere un SKILL.md 'Mon Ton Leclerc' qui force Claude a ecrire EXACTEMENT comme moi — reponses clients, emails internes, notes de service. Le skill doit inclure : 10 regles d'ecriture extraites de mes exemples, 5 formules interdites (ton generique IA), et un test de validation avec 3 exemples entree/sortie. Ensuite programme avec /schedule une tache quotidienne a 8h : Claude lit les nouveaux avis clients sur Drive, redige les reponses avec mon ton, et les presente pour validation."
              result="Claude produit : un profil Voice DNA (2 registres detectes : client formel vs interne direct), un SKILL.md installable en 1 clic avec 10 regles, 5 formules interdites, checklist de validation, et exemples entree/sortie."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="📊 Analyseur decisonnel — Business Case automatique"
              context="Joignez un devis fournisseur, une proposition ou un projet. Claude produit le business case complet et cree le skill pour automatiser toutes les futures analyses :"
              prompt="Voici [joindre : devis, proposition, projet d'investissement]. Analyse ce document et produis un business case : 1) Resume executif 3 lignes, 2) Couts directs + couts caches detectes, 3) Benefices en 3 scenarios (conservateur/attendu/optimiste), 4) ROI et delai de rentabilite, 5) Risques avec probabilite, 6) Recommandation Go/No-Go. Genere ensuite un SKILL.md 'Analyse Decision Leclerc' qui automatise cette methode pour tout futur document. Le skill doit : extraire les chiffres cles automatiquement, comparer avec les seuils du magasin, et produire un PDF via la skill integree. Bonus : ajoute une instruction pour que Claude aille chercher sur Google Drive les donnees de reference (CA, marges par rayon) via le connecteur, afin de contextualiser chaque analyse."
              result="Claude produit : un PDF telechargeable avec le business case complet (resume, couts, 3 scenarios, ROI, risques, recommandation Go/No-Go), puis un SKILL.md pour automatiser l'analyse de tout futur devis."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="🔍 Audit eclair — Scan de donnees + plan d'action"
              context="Deposez vos exports (ventes, stock, RH, satisfaction client) sur Google Drive. Claude s'y connecte, scanne tout, et produit un diagnostic actionnable :"
              prompt="Connecte-toi a mon Google Drive (dossier 'Donnees Magasin'). Scanne tous les fichiers presents : exports ventes, stock, planning RH, avis clients. Pour chaque source, identifie : 1) Les 5 signaux forts (tendances, anomalies, patterns), 2) Les 3 risques imminents avec deadline, 3) Les 3 quick wins actionnables cette semaine. Croise les donnees entre sources (ex: correlation entre satisfaction client et jours de sous-effectif). Produis un rapport PDF d'une page avec le plan d'action 30 jours. Genere un SKILL.md 'Audit Eclair Leclerc' qui reproduit cette analyse chaque semaine. Enfin, programme avec /schedule un audit automatique chaque lundi a 6h — le rapport est pret dans Drive quand j'arrive."
              result="Claude produit : un dashboard visuel avec KPIs (CA, panier moyen, frequentation), tableau des ruptures avec badges couleur, 5 signaux croises entre sources, 3 risques avec deadlines, plan d'action 30 jours, et un SKILL.md pour automatiser l'audit chaque semaine."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="🎯 Meta-skill — Claude scanne votre quotidien et cree LE skill #1"
              context="Donnez a Claude l'acces a votre Drive et vos apps. Il observe, mesure, et construit l'automatisation a plus fort impact :"
              prompt="Connecte-toi a mon Google Drive. Identifie les 20 fichiers que j'ai le plus modifies ce mois-ci. Pour chacun, estime : temps manuel, frequence, potentiel d'automatisation. Classe par impact (temps x frequence). Pour le #1 — la tache qui me coute le plus — genere un SKILL.md complet et pret a installer, avec : frontmatter YAML, description de declenchement precise, instructions pas a pas, exemples entree/sortie, gestion des cas limites. Le skill doit exploiter les outils Cowork disponibles : connecteur Drive pour lire/ecrire les fichiers, Computer Use si besoin d'interagir avec un logiciel sans connecteur, /schedule pour automatiser l'execution. Explique pourquoi CE skill est le plus rentable et combien de temps il me fait gagner par semaine."
              result="Claude produit : un classement de vos 20 fichiers les plus utilises par impact, l'estimation du temps economise, et LE SKILL.md #1 complet pret a installer — avec frontmatter YAML, instructions, exemples, et recommandation d'automatisation via /schedule."
              featureColor={BLUE}
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ SKILL + TACHES PROGRAMMEES ════════════════ */}
          <Section style={content}>
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/infographic-automation-cycle.png"
              width="400"
              alt="Cycle automatisation : Skill + Programmation + Resultats"
              style={{ width: '75%', display: 'block', margin: '0 auto 16px auto' }}
            />
            <Heading as="h2" style={sectionTitle}>
              Skill + Tache Programmee = Automatisation totale
            </Heading>
            <Text style={paragraph}>
              Un <strong>skill</strong> apprend a Claude COMMENT faire une tache.
              Une <strong>tache programmee</strong> lui dit QUAND la faire.
              Combinez les deux et Claude travaille pour vous en permanence
              — sans aucune intervention.
            </Text>

            {/* Exemples concrets */}
            <Section
              style={{
                backgroundColor: BLUE_LIGHT,
                borderRadius: '12px',
                padding: '16px 20px',
                marginBottom: '16px',
                borderLeft: `4px solid ${BLUE}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: BLUE, margin: '0 0 10px 0' }}>
                Exemples concrets pour {magasin}
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong>Avis clients tous les matins a 8h</strong> — Le skill &ldquo;Reponse Clients&rdquo;
                se declenche automatiquement, traite les avis de la veille, et vous presente
                les reponses a valider quand vous arrivez au bureau.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong>Rapport hebdo chaque lundi 7h</strong> — Le skill &ldquo;Synthese Hebdo&rdquo;
                compile les KPIs, genere le PDF et le depose sur Google Drive.
                Vous n'avez plus qu'a l'ouvrir en comite de direction.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong>Ruptures de stock chaque jour 6h</strong> — Claude verifie,
                identifie les 20 produits critiques, et prepare l'email de commande
                fournisseur. Tout est pret quand le responsable rayon arrive.
              </Text>
            </Section>

            <Text style={{ fontSize: '13px', color: T2, margin: '0 0 16px 0', lineHeight: '20px' }}>
              Pour programmer une tache : ouvrez Cowork, tapez{' '}
              <strong>/schedule</strong>, decrivez ce que Claude doit faire et
              a quelle frequence. C'est tout. Pas de code, pas de configuration
              technique.
            </Text>

            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: ORANGE }}>Le vrai pouvoir</strong> : une fois
                un skill cree et une tache programmee, Claude fait le travail
                24h/24 sans que vous ayez a y penser. Vous ne gerez plus les
                taches — vous gerez les resultats.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ PROMPTS EXPLORATOIRES ════════════════ */}
          <Section style={content}>
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/illustration-discovery.png"
              width="300"
              alt="Decouverte et exploration"
              style={{ width: '50%', display: 'block', margin: '0 auto 12px auto' }}
            />
            <Heading as="h2" style={sectionTitle}>
              Vous ne savez pas par ou commencer ?
            </Heading>
            <Text style={sectionSubtitle}>
              Ces prompts guident Claude pour qu'il analyse votre quotidien
              et vous propose des automatisations. Copiez-collez dans Claude Desktop
              ou claude.ai — il fait le reste.
            </Text>

            <PromptExample
              feature="🔍 Decouverte — Analyser mon quotidien"
              context="Claude explore vos habitudes et propose des automatisations :"
              prompt="Je suis directeur d'un E.Leclerc. Je passe mes journees entre les reunions, les mails, les plannings, les avis clients, les rapports de vente et la gestion du personnel. Analyse mes taches recurrentes et propose-moi les 5 automatisations qui me feraient gagner le plus de temps. Pour chacune, explique comment la mettre en place avec Cowork."
              featureColor={BLUE}
            />

            <PromptExample
              feature="🔍 Decouverte — A partir de mes fichiers"
              context="Donnez vos documents a Claude, il identifie les opportunities :"
              prompt="Je te donne acces a mon Google Drive. Regarde les fichiers que j'utilise le plus souvent et propose-moi des skills et des taches programmees pour automatiser ce que je fais manuellement. Explique chaque proposition simplement."
              featureColor={BLUE}
            />

            <PromptExample
              feature="🎯 Premiere automatisation — Cle en main"
              context="Claude vous guide pas a pas pour votre premiere automatisation :"
              prompt="Je n'ai jamais utilise Cowork. Guide-moi pas a pas pour creer ma premiere automatisation utile. Je veux que chaque lundi matin, un rapport de la semaine precedente soit pret quand j'arrive. Explique-moi comme si je n'y connaissais rien en informatique."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="🎯 Transformer une tache manuelle — Pas a pas"
              context="Vous faites quelque chose a la main ? Claude le transforme en automatisation :"
              prompt="Chaque matin je fais ca manuellement : j'ouvre le tableau des ventes d'hier, je note les chiffres par rayon, je calcule les ecarts avec la veille, et j'envoie un mail au comite. Transforme cette routine en une tache programmee Cowork qui fait tout automatiquement chaque matin a 7h."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="💡 Audit complet — Tout automatiser"
              context="Claude fait l'audit de tout ce qui peut etre automatise :"
              prompt="Fais un audit complet de ce qu'un directeur de magasin E.Leclerc peut automatiser avec Cowork. Classe par categorie (satisfaction client, ventes, RH, planning, fournisseurs, communication). Pour chaque tache, donne le prompt exact a utiliser et dis-moi si ca peut etre programme automatiquement."
              featureColor="#059669"
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
              feature="⚡ Skill — Reponses avis clients"
              context="Traitement des avis clients en lot :"
              prompt="Lis les 10 derniers avis clients non repondus. Redige une reponse personnalisee pour chacun, ton professionnel et empathique E.Leclerc. Classe par priorite (note < 3 en premier). Presente pour validation avant envoi."
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

          {/* ════════════════ PROCESS DOCUMENTAIRE ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Gestion documentaire avec Google Drive
            </Heading>
            <Text style={sectionSubtitle}>
              Un process simple pour centraliser vos documents et les exploiter avec l'IA
            </Text>

            {/* Infographic */}
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/infographic-tse-drive-claude.png"
              width="536"
              alt="Process documentaire : poste de travail, Google Drive, Claude"
              style={{
                width: '100%',
                borderRadius: '8px',
                display: 'block',
                marginBottom: '20px',
              }}
            />

            <Text style={paragraph}>
              Google Drive centralise vos documents de travail. Depuis n'importe
              quel poste, vous deposez vos fichiers sur Drive. Les IA comme
              Claude, Gemini ou ChatGPT s'y connectent, traitent vos documents,
              et sauvegardent les resultats au meme endroit.
            </Text>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Deposer vos documents sur Drive</Text>
                  <Text style={stepDesc}>
                    Rapports de ventes, plannings, notes de reunion, avis clients
                    — tout se centralise dans un dossier Drive dedie.
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
                  <Text style={stepTitle}>Connecter votre IA a Google Drive</Text>
                  <Text style={stepDesc}>
                    Chaque IA se connecte a Drive en quelques clics :
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Comment connecter chaque IA */}
            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '8px',
                padding: '14px 18px',
                marginBottom: '16px',
                marginLeft: '52px',
                border: `1px solid ${BD}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong>Claude</strong> — Parametres &gt; Connecteurs &gt; Google Drive &gt; Autoriser
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong>Gemini</strong> — Deja integre avec votre abonnement Google Workspace
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '20px' }}>
                <strong>ChatGPT</strong> — Parametres &gt; Applications connectees &gt; Google Drive
              </Text>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>3</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>L'IA traite et depose le resultat</Text>
                  <Text style={stepDesc}>
                    Synthese, rapport PDF, reponses clients, tableau mis a jour
                    — le resultat est sauvegarde dans le meme dossier Drive.
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
                  <Text style={stepTitle}>Recuperer le resultat depuis n'importe quel poste</Text>
                  <Text style={stepDesc}>
                    Le fichier genere est dans Drive, accessible depuis votre
                    poste de travail, votre telephone ou votre tablette.
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
                <strong style={{ color: BLUE }}>Simple</strong> : vos documents
                restent dans Google Drive, accessibles partout. Aucune installation
                supplementaire, aucune configuration technique.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ USE CASE TECHNO ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Ce mail est un cas d'usage concret
            </Heading>
            <Text style={paragraph}>
              Ce mail de formation est lui-meme un exemple de ce que l'IA
              et les outils modernes permettent de produire. Voici les
              technologies utilisees pour le concevoir :
            </Text>

            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '12px',
                padding: '16px 20px',
                marginBottom: '16px',
                border: `1px solid ${BD}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>React Email</strong> — Framework
                open source pour construire des emails en React + TypeScript.
                Compatible Gmail, Outlook, Apple Mail.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Claude Code</strong> — L'agent
                IA qui a code ce template : structure, composants, styles,
                verification des faits, integration des liens officiels.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Gemini</strong> — A
                genere les infographies et illustrations que vous voyez dans
                ce mail (diagramme Drive, cycle automatisation, banniere).
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Google Drive</strong> — Hebergement
                des visuels et documents. Le meme Drive que vous utilisez
                au quotidien.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>GitHub</strong> — Le code source
                est versionne, les evolutions tracees par issues, les
                prochaines sessions preparees collaborativement.
              </Text>
            </Section>

            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: ORANGE }}>En resume</strong> : plusieurs
                IA (Claude, Gemini) et outils modernes (React Email,
                GitHub, Google Drive) ont collabore pour produire
                cet email. C'est exactement le type d'industrialisation que
                nous mettons en place pour votre quotidien.
              </Text>
            </Section>
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
                    Commencez par le Voice DNA ou la synthese hebdo.
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

