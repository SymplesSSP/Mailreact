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

interface LeoFormationProps {
  destinataire?: string;
}

// ─── IPLN Brand Colors ─────────────────────────────────────────
const BLUE = '#0F00A2';       // IPLN primary (bleu violet)
const BLUE_DARK = '#0A0070';  // Darker shade
const ORANGE = '#FF6B35';     // Accent
const ORANGE_LIGHT = '#FFF3ED';
const BLUE_LIGHT = '#E8E6F5';
const BG = '#f8fafc';
const T1 = '#1a1a2e';
const T2 = '#475569';
const T3 = '#64748b';
const T4 = '#94a3b8';
const BD = '#e2e8f0';
const GREEN = '#059669';

// ─── Composants inline ─────────────────────────────────────────

const FeatureCard = ({
  icon,
  title,
  description,
  color,
  docLink,
  docLabel,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
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
        <Text style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '0 0 4px 0', lineHeight: '24px' }}>
          {title}
        </Text>
        <Text style={{ fontSize: '14px', color: T3, margin: '0', lineHeight: '21px' }}>
          {description}
        </Text>
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

const CommandBlock = ({
  command,
  description,
  color,
}: {
  command: string;
  description: string;
  color?: string;
}) => (
  <Section style={{ marginBottom: '12px' }}>
    <Section
      style={{
        backgroundColor: '#1e1e2e',
        borderRadius: '8px',
        padding: '12px 16px',
        borderLeft: `4px solid ${color || BLUE}`,
      }}
    >
      <Text style={{ fontSize: '14px', fontFamily: 'monospace', color: '#e2e8f0', margin: '0 0 4px 0', lineHeight: '22px' }}>
        {command}
      </Text>
      <Text style={{ fontSize: '12px', color: '#94a3b8', margin: '0', lineHeight: '18px' }}>
        {description}
      </Text>
    </Section>
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
      <Text style={{ fontSize: '11px', fontWeight: 700, color: featureColor, textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0 0 4px 0' }}>
        {feature}
      </Text>
      {context && (
        <Text style={{ fontSize: '12px', color: T3, margin: '0 0 8px 0', lineHeight: '18px' }}>
          {context}
        </Text>
      )}
      <Text style={{ fontSize: '14px', color: '#334155', margin: '0', lineHeight: '22px', fontStyle: 'italic' }}>
        &ldquo;{prompt}&rdquo;
      </Text>
      {result && (
        <Text style={{ fontSize: '12px', color: GREEN, margin: '10px 0 0 0', lineHeight: '18px', fontWeight: 600 }}>
          → {result}
        </Text>
      )}
    </Section>
  </Section>
);

// ─── Main Email ─────────────────────────────────────────────────
export const LeoFormationClaudeCode = ({
  destinataire = 'Leo',
}: LeoFormationProps) => (
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
      Formation Claude Code — Session J1 du 7 avril 2026 — IPLN
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>

          {/* ════════════════ HEADER ════════════════ */}
          <Section style={header}>
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/ipln-logo.png"
              width="140"
              alt="IPLN — Specialiste Photo et Video"
              style={{ display: 'block', margin: '0 auto 20px auto' }}
            />
            <Text style={headerBadge}>
              FORMATION CLAUDE CODE — SESSION J1 — 7 AVRIL 2026
            </Text>
            <Heading as="h1" style={headerTitle}>
              Claude Code — De zero a autonome
            </Heading>
            <Text style={headerSubtitle}>
              Skills, MCP, Plugins, Contexte, GitHub
            </Text>
          </Section>

          {/* ════════════════ INTRO ════════════════ */}
          <Section style={content}>
            <Text style={greeting}>Salut {destinataire},</Text>
            <Text style={paragraph}>
              Voici le recapitulatif de notre session J1 du{' '}
              <strong>lundi 7 avril</strong>. On a couvert les{' '}
              <strong>4 niveaux d'automatisation</strong> avec Claude,
              la gestion du contexte, le workflow GitHub, et on a fait
              une demo live de creation de newsletter React Email pour IPLN.
              Tout est la — commandes, process, et prompts prets a copier.
            </Text>

            <Section style={statsBar}>
              <Row>
                <Column style={statCell}>
                  <Text style={statNumber}>4</Text>
                  <Text style={statLabel}>NIVEAUX</Text>
                </Column>
                <Column style={statCell}>
                  <Text style={{ ...statNumber, color: ORANGE }}>5</Text>
                  <Text style={statLabel}>MCP</Text>
                </Column>
                <Column style={statCell}>
                  <Text style={statNumber}>3</Text>
                  <Text style={statLabel}>TRINITE</Text>
                </Column>
              </Row>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ 4 NIVEAUX ════════════════ */}
          <Section style={content}>
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/infographic-leo-4-niveaux.png"
              width="536"
              alt="Les 4 niveaux d'automatisation avec Claude"
              style={{ width: '100%', display: 'block', margin: '0 auto 4px auto', borderRadius: '8px' }}
            />
            <Text style={{ fontSize: '11px', color: T3, textAlign: 'center' as const, margin: '0 0 20px 0', fontStyle: 'italic' }}>
              Infographie : les 4 niveaux d'automatisation — analogie perceuse
            </Text>

            <Heading as="h2" style={sectionTitle}>
              Les 4 niveaux d'automatisation
            </Heading>
            <Text style={sectionSubtitle}>
              Chaque niveau apporte plus d'autonomie a l'IA — du one-shot au pilote automatique
            </Text>

            <FeatureCard
              icon="💬"
              title="Niveau 1 — Chat"
              description="Question → Reponse. Le contexte reste dans la conversation. Pour du one-shot : une question rapide, un debug, une recherche ponctuelle. Pas de memoire entre les sessions."
              color={BLUE_LIGHT}
            />

            <FeatureCard
              icon="📁"
              title="Niveau 2 — Projet"
              description="Instructions permanentes + base de connaissances. L'IA garde le prompt en memoire, pas besoin de reprompter. Exemple : veille produits automatique — tu vas dans ton projet, tu demandes les nouveautes, l'IA sait deja quoi faire et ou chercher."
              color={ORANGE_LIGHT}
            />

            <FeatureCard
              icon="⚡"
              title="Niveau 3 — Skill"
              description="Programmation contextuelle. Un fichier d'instructions (SKILL.md) qui code un comportement : regles, restrictions, exemples. Comme former un collaborateur pendant 1000h — sauf que ca prend 5 minutes. L'IA reproduit le comportement a chaque fois."
              color={BLUE_LIGHT}
              docLink="https://support.claude.com/fr/articles/12512198-how-to-create-custom-skills"
              docLabel="Guide Skills"
            />

            <FeatureCard
              icon="🔌"
              title="Niveau 4 — Plugin (MCP + Skill)"
              description="Le combo ultime. MCP = l'outil (la perceuse). Skill = la competence (savoir percer). Plugin = les deux. L'IA a l'outil ET sait l'utiliser. C'est le super pouvoir. Exemple : Chrome DevTools MCP + skill de verification visuelle."
              color={ORANGE_LIGHT}
              docLink="https://code.claude.com/docs/en/mcp"
              docLabel="Guide MCP"
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ SKILLS ════════════════ */}
          <Section style={content}>
            <Section
              style={{
                backgroundColor: BLUE,
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: '24px',
              }}
            >
              <Heading as="h2" style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 4px 0' }}>
                Skills — Programmer un comportement
              </Heading>
              <Text style={{ fontSize: '14px', color: '#c7c5e8', margin: '0' }}>
                Cree une fois, reutilise a l'infini. L'IA reproduit le comportement a chaque session.
              </Text>
            </Section>

            <Text style={paragraph}>
              Un skill c'est un fichier d'instructions que Claude suit automatiquement.
              Tu le crees en <strong>3 manieres</strong> :
            </Text>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Langage naturel</Text>
                  <Text style={stepDesc}>
                    Decris ton besoin a Claude : &ldquo;Cree-moi un skill qui analyse les briefs clients et me fait un recap structure.&rdquo;
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
                  <Text style={stepTitle}>Interface graphique</Text>
                  <Text style={stepDesc}>
                    Personnaliser → Competences → Gerer → Creer. Tu peux aussi telecharger un skill depuis la marketplace.
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
                  <Text style={stepTitle}>Fichier SKILL.md</Text>
                  <Text style={stepDesc}>
                    Tu ecris toi-meme le fichier avec les regles, les restrictions (read-only, CRUD), et les exemples. Maximum de controle.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Skills de Leo */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '20px 0 12px 0' }}>
              Tes skills existants — a ameliorer en J2
            </Heading>
            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '8px',
                padding: '14px 18px',
                border: `1px solid ${BD}`,
                marginBottom: '16px',
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong>Brief Analyzer</strong> — Analyse les briefs clients, extrait ce qui est attendu/pas attendu
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong>Code Iterator</strong> — Audit de code : qualite, securite, ameliorations proposees
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong>Doc HTML Generator</strong> — Genere une doc visuelle de l'etat du projet
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '20px' }}>
                <strong>Context Manager</strong> — Sauvegarde le contexte de session (projet.md + claude.md)
              </Text>
            </Section>

            {/* Restrictions */}
            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: ORANGE }}>Restrictions CRUD dans les skills</strong> :
                tu peux definir des regles strictes. Exemple : &ldquo;Jamais d'ecriture en prod,
                rollback SQL genere mais jamais execute automatiquement.&rdquo;
                Les operations sensibles restent en read-only.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ MCP ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              MCP — La boite a outils de l'IA
            </Heading>
            <Text style={sectionSubtitle}>
              Model Context Protocol : une passerelle qui ouvre les API et les transforme en outils pour Claude
            </Text>

            <FeatureCard
              icon="🐙"
              title="GitHub MCP"
              description="Dialogue avec tes repos : issues, PR, commits, code review. L'IA cree des branches, merge, et gere ton projet directement."
              color={BLUE_LIGHT}
              docLink="https://github.com/modelcontextprotocol/servers"
              docLabel="MCP Servers"
            />

            <FeatureCard
              icon="🔍"
              title="Chrome DevTools MCP"
              description="L'IA controle ton navigateur : screenshots, inspection DOM, verification visuelle du rendu. Elle voit ce qu'elle construit."
              color={ORANGE_LIGHT}
              docLink="https://code.claude.com/docs/en/chrome"
              docLabel="Guide Chrome"
            />

            <FeatureCard
              icon="📚"
              title="Context7"
              description="Base de connaissances communautaire pour les docs techniques. Tu donnes le nom d'une lib, Context7 aspire la doc. Score de fiabilite : vise au-dessus de 80%. En dessous, la doc est incomplete ou datee."
              color={BLUE_LIGHT}
              docLink="https://context7.com"
              docLabel="Context7"
            />

            <FeatureCard
              icon="🎨"
              title="Figma MCP"
              description="Recupere les variables de ton design system, les composants, les styles. L'IA lit Figma et genere du code conforme a ta DA."
              color={ORANGE_LIGHT}
            />

            <CommandBlock
              command="claude mcp add context7 -- npx -y @anthropic/context7-mcp"
              description="Installer Context7 MCP en une commande"
              color={BLUE}
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ CONTEXTE ════════════════ */}
          <Section style={content}>
            <Section
              style={{
                backgroundColor: ORANGE,
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: '24px',
              }}
            >
              <Heading as="h2" style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 4px 0' }}>
                La sainte trinite du contexte
              </Heading>
              <Text style={{ fontSize: '14px', color: '#FFE0CC', margin: '0' }}>
                Les 3 commandes a retenir pour ne jamais perdre le fil
              </Text>
            </Section>

            <Text style={paragraph}>
              Le CLAUDE.md c'est le <strong>cerveau du projet</strong>. Trop long = tu bouffes
              du contexte avant de commencer. Trop court = l'IA te repose 15 questions.
              Ces 3 commandes le gardent calibre :
            </Text>

            <CommandBlock
              command="/init"
              description="Initialise le CLAUDE.md en analysant la codebase. A faire UNE FOIS au debut du projet, apres la premiere session de travail."
              color={BLUE}
            />

            <CommandBlock
              command="/claude-md-management"
              description="Met a jour le CLAUDE.md avec les apprentissages de la session. A FAIRE AVANT CHAQUE /exit. C'est la commande la plus importante."
              color={ORANGE}
            />

            <CommandBlock
              command="/claude-md-improver"
              description="Audite le CLAUDE.md : est-il trop long ? Trop court ? Des infos obsoletes ? A faire de temps en temps pour le nettoyer."
              color={GREEN}
            />

            {/* Status bar */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '20px 0 12px 0' }}>
              Status bar — ton indicateur de sante
            </Heading>

            <Section
              style={{
                backgroundColor: '#1e1e2e',
                borderRadius: '12px',
                padding: '16px 20px',
                marginBottom: '16px',
              }}
            >
              <Text style={{ fontSize: '13px', fontFamily: 'monospace', color: '#e2e8f0', margin: '0 0 8px 0', lineHeight: '20px' }}>
                opus 4.6 | ~/mon-projet | main | $1.24 | 6m | <span style={{ color: '#22c55e' }}>■■■■■■</span><span style={{ color: '#334155' }}>■■■■</span> 58%
              </Text>
              <Text style={{ fontSize: '12px', color: '#94a3b8', margin: '0', lineHeight: '18px' }}>
                Modele | Dossier | Branche | Cout | Temps | Contexte
              </Text>
            </Section>

            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '8px',
                padding: '14px 18px',
                border: `1px solid ${BD}`,
                marginBottom: '16px',
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong style={{ color: '#22c55e' }}>Vert</strong> — Contexte frais, performances maximales. Continue a travailler.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong style={{ color: '#f59e0b' }}>Orange</strong> — Contexte charge. L'IA commence a se degrader. Arrete, sauvegarde, recommence.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: '#ef4444' }}>Rouge</strong> — Trop tard. Performances degradees. /exit immediat.
              </Text>
            </Section>

            {/* Autres fichiers de contexte */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '20px 0 12px 0' }}>
              Les fichiers de contexte d'un projet
            </Heading>
            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '8px',
                padding: '14px 18px',
                border: `1px solid ${BD}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>CLAUDE.md</strong> — Contexte technique. Charge a chaque session. Le cerveau.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>README.md</strong> — Documentation du projet. Ce qu'il fait, comment il marche.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>CHANGELOG.md</strong> — Ce qui a change d'une session a l'autre. Le versioning.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>.claude/memory/</strong> — Memoire automatique. Observations de l'IA au fil des sessions.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ WORKFLOW SESSION ════════════════ */}
          <Section style={content}>
            <Section
              style={{
                backgroundColor: BLUE,
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: '24px',
              }}
            >
              <Heading as="h2" style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 4px 0' }}>
                Workflow de session — ta routine quotidienne
              </Heading>
              <Text style={{ fontSize: '14px', color: '#c7c5e8', margin: '0' }}>
                Le process a suivre chaque jour pour ne jamais perdre le contexte
              </Text>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Ouvrir Claude Code dans le dossier projet</Text>
                  <Text style={stepDesc}>
                    Terminal : <code style={{ backgroundColor: '#1e1e2e', color: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>cd mon-projet && claude</code>
                    {' '}— L'IA charge automatiquement le CLAUDE.md et la memoire.
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
                  <Text style={stepTitle}>Verifier la status bar</Text>
                  <Text style={stepDesc}>
                    Modele = Opus 4.6 (1M context). Contexte = vert. Si tu reprends un projet, tape &ldquo;suite du boulot, ou on en est ?&rdquo;
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
                  <Text style={stepTitle}>Travailler par petites taches</Text>
                  <Text style={stepDesc}>
                    Une issue = une tache. Pas 4 trucs en meme temps. L'IA cree une branche, bosse, teste, merge. Toi tu valides.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>4</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Tester apres chaque modification</Text>
                  <Text style={stepDesc}>
                    L'IA dit &ldquo;c'est fait&rdquo;. Ouvre le navigateur, verifie. Si ca ne marche pas, decris le probleme.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: ORANGE }}>5</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Avant de quitter — sauvegarde le contexte</Text>
                  <Text style={stepDesc}>
                    C'est l'etape critique. Dans l'ordre :
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={{ marginLeft: '52px', marginBottom: '16px' }}>
              <CommandBlock command="git add . && git commit && git push" description="1. Sauvegarder le code sur GitHub" color={BLUE} />
              <CommandBlock command="/claude-md-management" description="2. Mettre a jour le CLAUDE.md avec les apprentissages" color={ORANGE} />
              <CommandBlock command="Cree une issue pour la prochaine tache" description="3. Creer l'issue GitHub pour la prochaine session" color={GREEN} />
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>6</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Le lendemain — reprendre ou on s'est arrete</Text>
                  <Text style={stepDesc}>
                    <code style={{ backgroundColor: '#1e1e2e', color: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>claude</code>
                    {' '}→ &ldquo;Suite du boulot. Je ne sais plus ce que je dois faire.&rdquo;
                    {' '}→ L'IA lit le CLAUDE.md, les issues, et te dit exactement ou reprendre.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Accept modes */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '20px 0 12px 0' }}>
              Modes de validation
            </Heading>
            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '8px',
                padding: '14px 18px',
                border: `1px solid ${BD}`,
                marginBottom: '16px',
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Shift+Tab → accept edit on</strong> — L'IA applique les edits sans demander. Rapide mais tu valides au fil de l'eau.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Shift+Tab → plan</strong> — L'IA propose un plan, tu valides, elle execute. Recommande pour les gros changements.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '20px' }}>
                <strong style={{ color: ORANGE }}>Auto mode</strong> — L'IA decide elle-meme ses droits. Disponible Enterprise/Team. A venir sur Pro/Max.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: GREEN }}>/buddy</strong> — Un animal virtuel qui surveille ton code et t'alerte si quelque chose parait bizarre.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ GITHUB ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              GitHub — Centraliser l'intelligence du projet
            </Heading>
            <Text style={sectionSubtitle}>
              Un projet = un GitHub. Tout le contexte, la memoire, et le planning sont au meme endroit.
            </Text>

            <Text style={paragraph}>
              <strong>Regle d'or : un projet, un repo GitHub.</strong> Meme pour du non-code
              (audit, documentation, images). GitHub c'est une plateforme de versioning,
              pas seulement un outil de dev. Toujours en prive pour proteger tes donnees.
            </Text>

            <FeatureCard
              icon="📋"
              title="Issues — Ta todo list"
              description="Chaque tache future = une issue. L'IA les lit au demarrage et sait quoi faire. Ne jamais iterer sans issue, sinon l'IA s'emmele les pinceaux."
              color={BLUE_LIGHT}
            />

            <FeatureCard
              icon="🏁"
              title="Milestones — Tes phases"
              description="Regroupe les issues en phases (v1, v2, v3). Tu sais a tout moment dans quelle phase tu es et ce qu'il reste a faire."
              color={ORANGE_LIGHT}
            />

            <FeatureCard
              icon="📊"
              title="Projects — Vue Kanban"
              description="Vue visuelle : To do, In progress, Done. Comme un Click-Up du code. L'IA met a jour les statuts automatiquement."
              color={BLUE_LIGHT}
            />

            <FeatureCard
              icon="📖"
              title="Wiki — Ta base de connaissances"
              description="Documente tout : architecture, decisions techniques, process. Le Wiki cree une base de connaissances supplementaire pour l'IA."
              color={ORANGE_LIGHT}
            />

            <FeatureCard
              icon="🔀"
              title="PR + Code Review"
              description="Chaque modification passe par une Pull Request. L'IA peut review le code, detecter les bugs, et proposer des ameliorations."
              color={BLUE_LIGHT}
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ AUTO DREAM ════════════════ */}
          <Section style={content}>
            <Section
              style={{
                backgroundColor: BLUE,
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: '24px',
              }}
            >
              <Heading as="h2" style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 4px 0' }}>
                Auto Dream — L'automatisation avancee
              </Heading>
              <Text style={{ fontSize: '14px', color: '#c7c5e8', margin: '0' }}>
                Hooks, taches programmees, agents autonomes — Claude travaille meme quand tu n'es pas la
              </Text>
            </Section>

            <FeatureCard
              icon="🪝"
              title="Hooks — Declencheurs automatiques"
              description="Un hook se declenche sur un evenement. Exemple : quand tu commit du Python, un hook lance automatiquement des checks de securite. Quand tu edites un fichier, un hook formate le code. Zero intervention manuelle."
              color={BLUE_LIGHT}
              docLink="https://code.claude.com/docs/en/hooks"
              docLabel="Guide Hooks"
            />

            <FeatureCard
              icon="⏰"
              title="Taches programmees — /schedule"
              description="Claude execute des taches a heures fixes. Exemples : audit de securite chaque lundi matin, veille produits concurrents chaque jour a 7h, rapport hebdomadaire de l'etat du projet."
              color={ORANGE_LIGHT}
              docLink="https://code.claude.com/docs/en/web-scheduled-tasks"
              docLabel="Guide Schedule"
            />

            <FeatureCard
              icon="🤖"
              title="Agents et sub-agents"
              description="Claude peut lancer plusieurs agents en parallele. Un agent principal coordonne, assigne les sous-taches, et merge les resultats. Exemple : un agent fait le front, un autre le back, un troisieme les tests."
              color={BLUE_LIGHT}
              docLink="https://code.claude.com/docs/en/sub-agents"
              docLabel="Guide Agents"
            />

            <FeatureCard
              icon="🌙"
              title="Sessions cloud — Claude Code sur le web"
              description="Lance une tache longue sur claude.ai/code, ferme ton ordi, reviens le lendemain. Claude a continue a travailler dans le cloud. Resultat pret au reveil."
              color={ORANGE_LIGHT}
              docLink="https://code.claude.com/docs/en/claude-code-on-the-web"
              docLabel="Guide Web"
            />

            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: ORANGE }}>Le futur proche</strong> : Opus 5 Mythos (Capybara)
                est en test chez des early access customers. Performances
                &ldquo;dramatically higher&rdquo; selon le leak Fortune du 26 mars.
                Quand il sortira, tous ces outils deviendront encore plus puissants.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ DEMO LIVE ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Demo live — Newsletter React Email IPLN
            </Heading>
            <Text style={sectionSubtitle}>
              Ce qu'on a fait ensemble en session : le process reproductible pour tout projet
            </Text>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Context7 → Documentation React Email</Text>
                  <Text style={stepDesc}>
                    On a utilise le MCP Context7 pour aspirer la doc React Email. Score : 28/64 (correct). L'IA a appris la technologie en 30 secondes.
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
                  <Text style={stepTitle}>Skill staging → Extraction DA ipln.fr</Text>
                  <Text style={stepDesc}>
                    Le skill staging s'est connecte au serveur pour extraire la direction artistique complete : Roboto, couleurs, structure CSS.
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
                  <Text style={stepTitle}>Creation du template React Email</Text>
                  <Text style={stepDesc}>
                    L'IA a construit la newsletter complete avec la DA extraite, les composants React Email, et les bonnes pratiques du SDK.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>4</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Chrome DevTools MCP → Verification visuelle</Text>
                  <Text style={stepDesc}>
                    L'IA a ouvert le navigateur, pris des screenshots, et verifie elle-meme le rendu. Boucle de correction automatique.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>5</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>GitHub → Commit, push, issue pour la v2</Text>
                  <Text style={stepDesc}>
                    Repo prive cree, code pousse, issue ouverte pour les ameliorations. /init pour le CLAUDE.md initial.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section
              style={{
                backgroundColor: BLUE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                borderLeft: `4px solid ${BLUE}`,
                marginTop: '8px',
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Ce process est reproductible</strong> : pour n'importe quel projet,
                tu suis la meme methode. Context7 (doc) → Skill (extraction) → Build (code)
                → Chrome DevTools (verification) → GitHub (sauvegarde + issues).
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ NEXT STEPS ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Prochaines etapes — J2
            </Heading>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Configurer ta status bar</Text>
                  <Text style={stepDesc}>
                    Si tu ne l'as pas encore : dans Claude Code, configure l'affichage
                    du modele, contexte, et cout. C'est ton indicateur de sante.
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
                  <Text style={stepTitle}>Mettre en place la sainte trinite</Text>
                  <Text style={stepDesc}>
                    Sur tes projets existants : /init, puis /claude-md-management
                    a chaque fin de session. /claude-md-improver une fois par semaine.
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
                  <Text style={stepTitle}>Installer Context7 MCP</Text>
                  <Text style={stepDesc}>
                    Si ce n'est pas fait, installe Context7 pour avoir la doc de toutes tes libs a portee de main.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>4</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Creer 2-3 skills metier</Text>
                  <Text style={stepDesc}>
                    Design system IPLN, brief analyzer ameliore, ou un skill de
                    code review specifique a ton stack. On les construira en J2.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>5</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Un projet = un GitHub</Text>
                  <Text style={stepDesc}>
                    Pour chaque nouveau projet, cree un repo prive avec issues,
                    milestones, et CLAUDE.md. C'est la base.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={{ textAlign: 'center' as const, marginTop: '32px' }}>
              <Button style={ctaButton} href="https://claude.com/download">
                Telecharger Claude Desktop
              </Button>
              <Text style={ctaSubtext}>
                macOS et Windows — Abonnement Pro ou Max requis
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ FOOTER ════════════════ */}
          <Section style={footer}>
            <Text style={footerName}>Guillaume Wilmin</Text>
            <Text style={footerRole}>
              CTO & Formateur IA |{' '}
              <Link href="https://www.ipln.fr" style={{ color: BLUE, textDecoration: 'none' }}>
                IPLN
              </Link>
              {' '} |{' '}
              <Link href="https://www.praxelia.com" style={{ color: BLUE, textDecoration: 'none' }}>
                Praxelia
              </Link>
            </Text>
            <Text style={footerLegal}>
              Session J1 — 7 avril 2026 — IPLN — Prochaine : J2 (date a confirmer)
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

LeoFormationClaudeCode.PreviewProps = {
  destinataire: 'Leo',
} as LeoFormationProps;

export default LeoFormationClaudeCode;

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
  color: '#c7c5e8',
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
  color: '#c7c5e8',
  margin: '0',
  lineHeight: '22px',
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

const divider = { borderColor: BD, margin: '0' };

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
  color: '#c7c5e8',
  margin: '4px 0 0 0',
  lineHeight: '14px',
  letterSpacing: '0.5px',
};

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

const footer = { padding: '24px 32px', textAlign: 'center' as const };
const footerName = { fontSize: '15px', fontWeight: 700 as const, color: T1, margin: '0' };
const footerRole = { fontSize: '13px', color: T3, margin: '4px 0' };
const footerLegal = { fontSize: '11px', color: T4, margin: '8px 0 0 0' };
