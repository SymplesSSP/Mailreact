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

interface KlatovskyFormationProps {
  destinataire?: string;
  cabinet?: string;
}

// ─── Klatovsky & Associés Brand Colors ──────────────────────────
const BLUE = '#1A1A2E';       // Navy — primary
const BLUE_DARK = '#0F0F1A';  // Deep navy
const ORANGE = '#C4A35A';     // Gold accent
const ORANGE_LIGHT = '#FAF6ED'; // Light gold bg
const BLUE_LIGHT = '#F0F0F5'; // Light navy bg
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
export const KlatovskyFormationIA = ({
  destinataire = 'Maitre',
  cabinet = 'Klatovsky & Associes',
}: KlatovskyFormationProps) => (
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
      Recapitulatif Formation IA — Session J2 du 1 avril 2026 — {cabinet}
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>

          {/* ════════════════ HEADER ════════════════ */}
          <Section style={header}>
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/klatovsky-logo.png"
              width="250"
              alt="Cabinet Klatovsky & Associes"
              style={{ display: 'block', margin: '0 auto 20px auto' }}
            />
            <Text style={headerBadge}>
              FORMATION IA — SESSION J2 — 1 AVRIL 2026
            </Text>
            <Heading as="h1" style={headerTitle}>
              Formation IA Avancee
            </Heading>
            <Text style={headerSubtitle}>
              Outils IA pour l'avocat en droit social
            </Text>
            <Text style={headerCabinet}>{cabinet}</Text>
          </Section>

          {/* ════════════════ INTRO ════════════════ */}
          <Section style={content}>
            <Text style={greeting}>Bonjour {destinataire},</Text>
            <Text style={paragraph}>
              Suite a notre session J2 du <strong>mercredi 1er avril</strong>,
              voici votre recapitulatif complet des <strong>9 outils IA</strong>{' '}
              couverts en formation. Le fil rouge du{' '}
              <strong>Dossier Martin</strong> (licenciement pour insuffisance
              professionnelle, CPH Metz, convention IDCC 2216) a illustre
              chaque outil. Chaque fonctionnalite est expliquee, illustree,
              et accompagnee de <strong>prompts prets a copier-coller</strong>{' '}
              pour votre pratique en droit social.
            </Text>

            {/* Chiffres cles */}
            <Section style={statsBar}>
              <Row>
                <Column style={statCell}>
                  <Text style={statNumber}>9</Text>
                  <Text style={statLabel}>OUTILS</Text>
                </Column>
                <Column style={statCell}>
                  <Text style={{ ...statNumber, color: ORANGE }}>6</Text>
                  <Text style={statLabel}>SKILLS LEGAL</Text>
                </Column>
                <Column style={statCell}>
                  <Text style={statNumber}>1</Text>
                  <Text style={statLabel}>CAS FIL ROUGE</Text>
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

          {/* ════════════════ LES 9 OUTILS ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Les 9 outils couverts en J2
            </Heading>
            <Text style={sectionSubtitle}>
              Chaque outil a ete teste sur le Dossier Martin (CPH Metz)
            </Text>

            <FeatureCard
              icon="⚡"
              title="Skills Legal — Audit, triage, brief, indemnites"
              description="Des instructions specialisees que Claude suit a la lettre : audit de contrat de travail, triage prud'homal, brief d'audience, calcul d'indemnites. Creez les votres avec /skill-creator."
              color={ORANGE_LIGHT}
              docLink="https://support.claude.com/fr/articles/12512198-how-to-create-custom-skills"
              docLabel="Guide Skills"
            />

            <FeatureCard
              icon="🌐"
              title="Claude in Chrome — Legifrance & Doctrine"
              description="Sur Legifrance et Doctrine, resumez un arret, extrayez le raisonnement de la Cour, identifiez les moyens — sans copier-coller. Claude lit la page directement dans votre navigateur."
              color={BLUE_LIGHT}
              docLink="https://support.claude.com/fr/articles/14128542"
              docLabel="Guide Claude in Chrome"
            />

            <FeatureCard
              icon="⏰"
              title="Cowork + Taches planifiees — Veille juridique"
              description="Veille jurisprudence automatique chaque matin : Claude recherche les derniers arrets de la Cass. soc., filtre par mots-cles (licenciement, forfait jours, IDCC 2216), et depose une synthese dans votre projet."
              color={ORANGE_LIGHT}
              docLink="https://support.claude.com/fr/articles/13854387"
              docLabel="Guide Taches Programmees"
            />

            <FeatureCard
              icon="💻"
              title="Claude Code — Calculateur sur mesure"
              description="Generez un calculateur d'indemnites HTML interactif : indemnite de licenciement, preavis, conges payes, dommages-interets. Integre la convention collective et le bareme Macron."
              color={BLUE_LIGHT}
              docLink="https://docs.anthropic.com/en/docs/claude-code"
              docLabel="Guide Claude Code"
            />

            <FeatureCard
              icon="🖥️"
              title="Computer Use — Navigation Legifrance"
              description="Claude pilote votre ecran : ouvre Legifrance, recherche une convention collective, navigue dans les articles, extrait les dispositions pertinentes — le tout sans intervention manuelle."
              color={ORANGE_LIGHT}
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
                Claude peut faire des erreurs. Commencez avec des sites de confiance
                (Legifrance, Doctrine). Votre Mac/PC doit etre allume et l'app Claude ouverte.
              </Text>
            </Section>

            <FeatureCard
              icon="📱"
              title="Dispatch — Recherche depuis le CPH"
              description="Depuis le Conseil de Prud'hommes, envoyez une recherche a Claude depuis votre iPhone. Il execute la tache sur votre ordinateur au cabinet et vous renvoie le resultat."
              color={BLUE_LIGHT}
              docLink="https://support.claude.com/fr/articles/13947068"
              docLabel="Guide Dispatch"
            />

            <FeatureCard
              icon="🔗"
              title="MCP — Calendar & Gmail connectes"
              description="Connectez Calendar et Gmail au dossier : Claude identifie les audiences a venir, prepare les rappels d'echeances, et redige les emails aux clients avec le contexte du dossier."
              color={ORANGE_LIGHT}
              docLink="https://support.claude.com/fr/articles/13837440"
              docLabel="Guide Connecteurs"
            />

            <FeatureCard
              icon="📁"
              title="Projets — Un espace par dossier"
              description="Chaque dossier contentieux a son espace : pieces, conclusions, memoire de conversation, taches programmees. Un projet 'Dossier Martin', un autre 'Veille Cass. Soc.' — chacun isole."
              color={BLUE_LIGHT}
            />

            <FeatureCard
              icon="🔌"
              title="Plugin Legal — Kit avocat complet"
              description="Le plugin legal regroupe skills, connecteurs et sous-agents dedies au droit : contract-review, legal-risk-assessment, compliance-check, brief, respond."
              color={ORANGE_LIGHT}
              docLink="https://support.claude.com/fr/articles/13837440"
              docLabel="Guide Plugins"
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
              <Text style={{ fontSize: '14px', color: '#E8DCC8', margin: '0' }}>
                Des instructions personnalisees que Claude suit a la lettre, a chaque fois
              </Text>
            </Section>

            <Text style={paragraph}>
              Un <strong>Skill</strong> est un fichier d'instructions (SKILL.md) que
              vous creez une fois et que Claude applique automatiquement ensuite.
              C'est comme former un collaborateur : vous lui expliquez la procedure,
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
              Skills integrees + Skills legal custom
            </Heading>
            <Text style={{ fontSize: '13px', color: T2, margin: '0 0 16px 0', lineHeight: '20px' }}>
              Skills integrees (pretes a l'emploi) et skills legal (a installer) :
            </Text>
            <Section style={{ marginBottom: '16px' }}>
              <Row>
                <Column style={{ width: '50%', verticalAlign: 'top' }}>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>PDF</strong> — Analyser pieces et conclusions
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>Word</strong> — Rediger conclusions
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>Excel</strong> — Calcul indemnites
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>PowerPoint</strong> — Support plaidoirie
                  </Text>
                </Column>
                <Column style={{ width: '50%', verticalAlign: 'top' }}>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>legal:contract-review</strong>
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>legal:legal-risk-assessment</strong>
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>legal:compliance-check</strong>
                  </Text>
                  <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0' }}>
                    <strong>legal:brief</strong>
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
              Creer des skills juridiques puissants
            </Heading>
            <Text style={sectionSubtitle}>
              Ces prompts exploitent les vrais outils de Claude Desktop :
              Computer Use (navigation Legifrance), connecteurs (Google Drive, Gmail, Calendar),
              Dispatch (depuis le tribunal) et taches programmees.
              Joignez vos pieces reelles — Claude analyse et produit le skill.
            </Text>

            <PromptExample
              feature="🧬 Voice DNA — Capturer votre style de conclusions"
              context="Joignez 5-10 jeux de conclusions que VOUS avez rediges. Claude extrait votre ADN d'ecriture juridique et cree un skill reutilisable :"
              prompt="Voici des exemples de mes conclusions reelles [joindre fichiers]. Analyse en profondeur mon style juridique : structure argumentative, registre de langue, formules recurrentes, niveau de formalite, citations de jurisprudence, tournures de phrase. Extrais un profil 'Voice DNA' detaille. Genere un SKILL.md 'Mon Style Conclusions' qui force Claude a ecrire EXACTEMENT comme moi — conclusions, memos internes, correspondances confreres. Le skill doit inclure : 10 regles d'ecriture extraites de mes exemples, 5 formules interdites (ton generique IA), et un test de validation avec 3 exemples entree/sortie."
              result="Claude produit : un profil Voice DNA (2 registres detectes : conclusions formelles vs memo interne), un SKILL.md installable en 1 clic avec 10 regles, 5 formules interdites, checklist de validation."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="📊 Analyse de risque prud'homal"
              context="Joignez les pieces d'un dossier contentieux. Claude evalue le risque et produit un business case pour le client :"
              prompt="Voici [joindre : contrat de travail, lettre de licenciement, bulletins de salaire, attestations]. Analyse ce dossier prud'homal et produis : 1) Resume executif 3 lignes, 2) Forces et faiblesses de chaque partie, 3) Risque en 3 scenarios (favorable/median/defavorable), 4) Estimation des indemnites selon le bareme Macron et hors bareme, 5) Jurisprudence Cass. soc. recente sur le motif invoque, 6) Recommandation : negocier ou plaider. Genere un SKILL.md 'Analyse Risque Prud'homal' qui automatise cette methode pour tout futur dossier."
              result="Claude produit : un memo PDF avec analyse de risque complete (3 scenarios chiffres, jurisprudence citee, recommandation argumentee), puis un SKILL.md pour automatiser l'analyse de tout futur dossier."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="🔍 Audit complet d'un contrat de travail"
              context="Deposez un contrat de travail. Claude scanne chaque clause et identifie les irregularites :"
              prompt="Voici un contrat de travail [joindre fichier]. Scanne chaque clause et identifie : 1) Clauses non conformes au Code du travail, 2) Clauses abusives ou desequilibrees, 3) Manques par rapport a la convention collective applicable, 4) Clause de non-concurrence (validite, contrepartie, duree, perimetre), 5) Forfait jours (respect des criteres legaux), 6) Periode d'essai (conformite). Pour chaque irregularite, cite l'article de loi et la jurisprudence recente. Produis un rapport avec un score de risque par clause. Genere un SKILL.md 'Audit Contrat de Travail' pour automatiser cette analyse."
              result="Claude produit : un rapport d'audit clause par clause avec score de risque, articles cites, jurisprudence, et un SKILL.md pour scanner automatiquement tout futur contrat."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="🎯 Meta-skill — Claude scanne vos dossiers et cree LE skill #1"
              context="Donnez a Claude l'acces a votre Drive. Il observe vos dossiers, mesure le potentiel, et construit l'automatisation a plus fort impact :"
              prompt="Connecte-toi a mon Google Drive. Identifie les 20 fichiers que j'ai le plus modifies ce mois-ci. Pour chacun, estime : temps manuel, frequence, potentiel d'automatisation. Classe par impact (temps x frequence). Pour le #1 — la tache qui me coute le plus — genere un SKILL.md complet et pret a installer, avec : frontmatter YAML, description de declenchement precise, instructions pas a pas, exemples entree/sortie, gestion des cas limites. Le skill doit exploiter les outils disponibles : connecteur Drive pour lire/ecrire les pieces, Computer Use pour naviguer Legifrance, /schedule pour automatiser la veille. Explique pourquoi CE skill est le plus rentable et combien de temps il me fait gagner par semaine."
              result="Claude produit : un classement de vos 20 fichiers les plus utilises par impact, l'estimation du temps economise, et LE SKILL.md #1 complet pret a installer — avec frontmatter YAML, instructions, exemples, et recommandation d'automatisation."
              featureColor={BLUE}
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ SKILL + TACHES PROGRAMMEES ════════════════ */}
          <Section style={content}>
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/infographic-skill-automation-final.png"
              width="400"
              alt="Du Skill a l'Automatisation Totale — 4 etapes : Creer, Connecter, Programmer, Automatise"
              style={{ width: '80%', display: 'block', margin: '0 auto 4px auto' }}
            />
            <Text style={{ fontSize: '11px', color: T3, textAlign: 'center' as const, margin: '0 0 20px 0', fontStyle: 'italic' }}>
              Infographie : du skill a l'automatisation totale
            </Text>
            <Heading as="h2" style={sectionTitle}>
              Skill + Tache Programmee = Automatisation totale
            </Heading>
            <Text style={paragraph}>
              Un <strong>skill</strong> apprend a Claude COMMENT faire une tache.
              Une <strong>tache programmee</strong> lui dit QUAND la faire.
              Combinez les deux et Claude travaille pour vous en permanence
              — sans aucune intervention.
            </Text>
            <Text style={paragraph}>
              <strong>Concretement, voici comment faire :</strong> ouvrez Claude Desktop,
              collez un des prompts de la section precedente (ex: Audit Contrat ou Analyse Risque).
              Claude genere le skill. Cliquez &ldquo;Enregistrer la competence&rdquo;.
              Puis tapez <strong>/schedule</strong> et decrivez quand l'executer
              (ex: &ldquo;chaque matin a 7h&rdquo;). C'est tout — 3 minutes, zero code.
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
                Exemples concrets pour le cabinet {cabinet}
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong>Veille jurisprudence chaque matin 7h</strong> — Le skill &ldquo;Veille Cass. Soc.&rdquo;
                recherche les derniers arrets publies, filtre par mots-cles (licenciement, forfait jours,
                convention collective), et depose une synthese dans votre projet quand vous arrivez au cabinet.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong>Echeances procedurales chaque jour 8h</strong> — Le skill &ldquo;Echeances&rdquo;
                verifie Calendar, identifie les audiences et delais a venir, et vous alerte
                sur les actions a mener dans les 48 heures.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong>Revue emails clients chaque jour 9h</strong> — Claude lit
                les nouveaux emails clients, classe par urgence, prepare des projets de
                reponse. Tout est pret quand vous commencez votre journee.
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
              prompt="Je suis avocat en droit social dans un cabinet parisien. Je passe mes journees entre les audiences, la redaction de conclusions, les recherches de jurisprudence, les emails clients, la gestion des echeances procedurales et la veille juridique. Analyse mes taches recurrentes et propose-moi les 5 automatisations qui me feraient gagner le plus de temps. Pour chacune, explique comment la mettre en place avec Claude."
              featureColor={BLUE}
            />

            <PromptExample
              feature="🔍 Decouverte — A partir de mes dossiers"
              context="Donnez vos documents a Claude, il identifie les opportunites :"
              prompt="Je te donne acces a mon Google Drive. Regarde les dossiers contentieux, conclusions, et pieces que j'utilise le plus souvent et propose-moi des skills et des taches programmees pour automatiser ce que je fais manuellement. Explique chaque proposition simplement."
              featureColor={BLUE}
            />

            <PromptExample
              feature="🎯 Premiere automatisation — Cle en main"
              context="Claude vous guide pas a pas pour votre premiere automatisation :"
              prompt="Je n'ai jamais utilise les taches programmees de Claude. Guide-moi pas a pas pour creer ma premiere automatisation utile. Je veux que chaque matin, une synthese de la veille juridique soit prete quand j'arrive au cabinet. Explique-moi simplement."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="🎯 Transformer une tache manuelle — Pas a pas"
              context="Vous faites quelque chose a la main ? Claude le transforme en automatisation :"
              prompt="Chaque matin je fais ca manuellement : je vais sur Legifrance verifier les nouveaux arrets de la Cass. soc., je note ceux qui concernent mes dossiers en cours, et j'envoie un memo a mon associee. Transforme cette routine en une tache programmee qui fait tout automatiquement chaque matin a 7h."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="💡 Audit complet — Tout automatiser"
              context="Claude fait l'audit de tout ce qui peut etre automatise :"
              prompt="Fais un audit complet de ce qu'un avocat en droit social peut automatiser avec Claude. Classe par categorie (veille juridique, redaction, recherche jurisprudence, gestion dossiers, echeances, relation client). Pour chaque tache, donne le prompt exact a utiliser et dis-moi si ca peut etre programme automatiquement."
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
              <Text style={{ fontSize: '14px', color: '#E8DCC8', margin: '0' }}>
                Copiez-collez directement dans Claude Desktop — adaptes au cabinet {cabinet}
              </Text>
            </Section>

            <PromptExample
              feature="📱 Dispatch — Depuis le CPH, sur votre iPhone"
              context="Vous etes en audience et avez besoin d'une reference :"
              prompt="Recherche l'article L1234-9 du Code du travail sur l'indemnite de licenciement, et donne-moi aussi le dernier arret Cass. soc. sur le calcul de l'anciennete pour un salarie en forfait jours. Resume en 5 lignes."
              featureColor={BLUE}
            />

            <PromptExample
              feature="⏰ Tache programmee — Chaque matin 7h"
              context="Veille jurisprudence automatique :"
              prompt="Veille jurisprudence : recherche les arrets Cass. soc. publies cette semaine sur Legifrance. Filtre par mots-cles : licenciement, insuffisance professionnelle, forfait jours, convention collective. Resume chaque arret en 3 lignes avec la portee pratique pour mes dossiers en cours."
              featureColor="#059669"
            />

            <PromptExample
              feature="⚡ Skill — Audit contrat de travail"
              context="Analyse systematique de tout contrat :"
              prompt="Audit ce contrat de travail : verifie clauses de non-concurrence (contrepartie, duree, perimetre), forfait jours (respect L3121-58 et suivi charge), periode d'essai (conformite convention collective), clause de mobilite, clause d'exclusivite. Signale chaque irregularite avec l'article de loi et la jurisprudence recente."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="🖥️ Computer Use — Navigation Legifrance"
              context="Claude pilote votre navigateur :"
              prompt="Ouvre Legifrance, recherche la convention collective IDCC 2216 (commerce de detail et de gros a predominance alimentaire), navigue vers les dispositions sur le licenciement et la periode d'essai. Extrais les articles pertinents et resume les obligations de l'employeur."
              featureColor="#7C3AED"
            />

            <PromptExample
              feature="🔗 Connecteurs — Calendar & audiences"
              context="Gestion des echeances via Calendar et Gmail :"
              prompt="Connecte-toi a mon Calendar, identifie les audiences des 30 prochains jours. Pour chaque audience, verifie dans mes emails s'il y a des pieces en attente ou des echeances de communication. Genere un tableau recapitulatif avec : dossier, date, juridiction, actions restantes, deadline."
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
              Google Drive centralise vos dossiers et pieces. Depuis n'importe
              quel poste (cabinet, tribunal, domicile), vous deposez vos fichiers sur Drive.
              Les IA comme Claude, Gemini ou ChatGPT s'y connectent, traitent vos documents
              juridiques, et sauvegardent les resultats au meme endroit.
            </Text>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Deposer vos pieces et dossiers sur Drive</Text>
                  <Text style={stepDesc}>
                    Contrats, conclusions, pieces adverses, jurisprudence, notes d'audience
                    — tout se centralise dans un dossier Drive dedie par affaire.
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
                    Synthese, memo d'analyse, projet de conclusions, tableau d'indemnites
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
                  <Text style={stepTitle}>Recuperer le resultat depuis n'importe ou</Text>
                  <Text style={stepDesc}>
                    Le fichier genere est dans Drive, accessible depuis votre
                    poste au cabinet, votre iPhone au tribunal ou votre tablette.
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
              Prochaines etapes — J3 le 29 avril
            </Heading>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    Verifier Claude Desktop
                  </Text>
                  <Text style={stepDesc}>
                    Disponible sur{' '}
                    <Link href="https://claude.com/download" style={{ color: BLUE, textDecoration: 'underline' }}>
                      macOS et Windows
                    </Link>
                    . Assurez-vous que l'application est a jour et votre abonnement actif.
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
                    Commencez par l'audit de contrat ou le calcul d'indemnites.
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
                    Identifier vos 3 quick wins juridiques
                  </Text>
                  <Text style={stepDesc}>
                    Veille jurisprudence, audit de contrat, calcul d'indemnites ?
                    On les industrialisera en J3.
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
                    J3 — Industrialisation (29 avril)
                  </Text>
                  <Text style={stepDesc}>
                    Taches programmees, skills legal personnalisees et bilan
                    des cas d'usage automatises.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={{ textAlign: 'center' as const, marginTop: '32px' }}>
              <Button style={ctaButton} href="https://claude.com/download">
                Telecharger Claude Desktop
              </Button>
              <Text style={ctaSubtext}>
                macOS et Windows — Gratuit a installer, abonnement Pro requis
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
              Session J2 — 1 avril 2026 — {cabinet} — Prochaine : J3 le 29 avril
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

KlatovskyFormationIA.PreviewProps = {
  destinataire: 'Maitre',
  cabinet: 'Klatovsky & Associes',
} as KlatovskyFormationProps;

export default KlatovskyFormationIA;

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
  color: '#E8DCC8',
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
  color: '#E8DCC8',
  margin: '0 0 16px 0',
  lineHeight: '22px',
};

const headerCabinet = {
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
  color: '#E8DCC8',
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

