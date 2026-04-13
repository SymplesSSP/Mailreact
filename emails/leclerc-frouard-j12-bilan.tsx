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

interface LeclercFrouardJ12Props {
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
const GREEN = '#059669';
const PURPLE = '#7C3AED';

// ─── Composants inline ──────────────────────────────────────────

const AgentCard = ({
  icon,
  name,
  domain,
  quote,
  color,
}: {
  icon: string;
  name: string;
  domain: string;
  quote?: string;
  color: string;
}) => (
  <Section style={{ marginBottom: '12px' }}>
    <Row>
      <Column style={{ width: '48px', verticalAlign: 'top' }}>
        <Section
          style={{
            backgroundColor: color,
            borderRadius: '10px',
            width: '40px',
            height: '40px',
            textAlign: 'center' as const,
          }}
        >
          <Text style={{ fontSize: '20px', lineHeight: '40px', margin: '0' }}>
            {icon}
          </Text>
        </Section>
      </Column>
      <Column style={{ verticalAlign: 'middle', paddingLeft: '10px' }}>
        <Text
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: T1,
            margin: '0 0 2px 0',
            lineHeight: '20px',
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: '13px',
            color: T3,
            margin: '0',
            lineHeight: '18px',
          }}
        >
          {domain}
        </Text>
        {quote && (
          <Text
            style={{
              fontSize: '12px',
              color: T2,
              margin: '2px 0 0 0',
              lineHeight: '16px',
              fontStyle: 'italic',
            }}
          >
            &ldquo;{quote}&rdquo;
          </Text>
        )}
      </Column>
    </Row>
  </Section>
);

const DemoCard = ({
  number,
  title,
  scenario,
  result,
  time,
  color,
}: {
  number: string;
  title: string;
  scenario: string;
  result: string;
  time: string;
  color: string;
}) => (
  <Section
    style={{
      marginBottom: '16px',
      backgroundColor: BG,
      borderRadius: '12px',
      padding: '16px 20px',
      border: `1px solid ${BD}`,
    }}
  >
    <Row>
      <Column style={{ width: '48px', verticalAlign: 'top' }}>
        <Text
          style={{
            backgroundColor: color,
            color: '#ffffff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            textAlign: 'center' as const,
            lineHeight: '36px',
            fontSize: '16px',
            fontWeight: 700,
            margin: '0',
          }}
        >
          {number}
        </Text>
      </Column>
      <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
        <Text
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: T1,
            margin: '0 0 4px 0',
            lineHeight: '22px',
          }}
        >
          {title}
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: color,
              backgroundColor: color === ORANGE ? ORANGE_LIGHT : BLUE_LIGHT,
              borderRadius: '4px',
              padding: '2px 8px',
              marginLeft: '8px',
              verticalAlign: 'middle',
            }}
          >
            {time}
          </span>
        </Text>
        <Text
          style={{ fontSize: '13px', color: T3, margin: '0 0 6px 0', lineHeight: '20px' }}
        >
          {scenario}
        </Text>
        <Text
          style={{
            fontSize: '13px',
            color: GREEN,
            margin: '0',
            lineHeight: '20px',
            fontWeight: 600,
          }}
        >
          {result}
        </Text>
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
            color: GREEN,
            margin: '10px 0 0 0',
            lineHeight: '18px',
            fontWeight: 600,
          }}
        >
          {result}
        </Text>
      )}
    </Section>
  </Section>
);

const TimelineItem = ({
  date,
  title,
  description,
  isHighlight,
}: {
  date: string;
  title: string;
  description: string;
  isHighlight?: boolean;
}) => (
  <Section style={{ marginBottom: '16px' }}>
    <Row>
      <Column style={{ width: '80px', verticalAlign: 'top' }}>
        <Text
          style={{
            fontSize: '12px',
            fontWeight: 700,
            color: isHighlight ? ORANGE : BLUE,
            margin: '0',
            lineHeight: '22px',
          }}
        >
          {date}
        </Text>
      </Column>
      <Column style={{ verticalAlign: 'top', paddingLeft: '12px', borderLeft: `2px solid ${isHighlight ? ORANGE : BD}` }}>
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
          {isHighlight && (
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
              AUJOURD'HUI
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

const TechniqueCard = ({
  number,
  name,
  description,
  example,
  color,
}: {
  number: string;
  name: string;
  description: string;
  example: string;
  color: string;
}) => (
  <Section style={{ marginBottom: '16px' }}>
    <Row>
      <Column style={{ width: '40px', verticalAlign: 'top' }}>
        <Text
          style={{
            backgroundColor: color,
            color: '#ffffff',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            textAlign: 'center' as const,
            lineHeight: '32px',
            fontSize: '14px',
            fontWeight: 700,
            margin: '0',
          }}
        >
          {number}
        </Text>
      </Column>
      <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
        <Text
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: T1,
            margin: '0 0 2px 0',
            lineHeight: '24px',
          }}
        >
          {name}
        </Text>
        <Text
          style={{ fontSize: '13px', color: T3, margin: '0 0 4px 0', lineHeight: '20px' }}
        >
          {description}
        </Text>
        <Text
          style={{
            fontSize: '12px',
            color: T2,
            margin: '0',
            lineHeight: '18px',
            fontStyle: 'italic',
          }}
        >
          Ex : {example}
        </Text>
      </Column>
    </Row>
  </Section>
);

// ─── Main Email ──────────────────────────────────────────────────
export const LeclercFrouardJ12 = ({
  destinataire = 'Monsieur Alazard',
  magasin = 'E.Leclerc Frouard',
}: LeclercFrouardJ12Props) => (
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
      Bilan de formation J12 — ClawdBot, L'Art du Prompt & Workspace Studio — {magasin}
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
              BILAN DE FORMATION — SESSION J12 — 10 AVRIL 2026
            </Text>
            <Heading as="h1" style={headerTitle}>
              ClawdBot & L'Art du Prompt
            </Heading>
            <Text style={headerSubtitle}>
              Cloture du parcours IA — 12 sessions, 10 mois d'accompagnement
            </Text>
            <Text style={headerMagasin}>{magasin}</Text>
          </Section>

          {/* ════════════════ INTRO ════════════════ */}
          <Section style={content}>
            <Text style={greeting}>Bonjour {destinataire},</Text>
            <Text style={paragraph}>
              Suite a notre <strong>12eme et derniere session</strong> du{' '}
              <strong>jeudi 10 avril</strong> avec Pascal Cordier et Mickael
              Gourmelon, voici le recapitulatif complet de cette journee de
              cloture. Nous avons presente <strong>ClawdBot</strong> (vos 7
              agents IA sur Telegram), approfondi{' '}
              <strong>l'art du prompt</strong> avec le framework ICID, et
              decouvert <strong>Google Workspace Studio</strong> pour
              automatiser vos taches quotidiennes.
            </Text>

            {/* Chiffres cles */}
            <Section style={statsBar}>
              <Row>
                <Column style={statCell}>
                  <Text style={statNumber}>12</Text>
                  <Text style={statLabel}>JOURNEES</Text>
                </Column>
                <Column style={statCell}>
                  <Text style={{ ...statNumber, color: ORANGE }}>7</Text>
                  <Text style={statLabel}>AGENTS IA</Text>
                </Column>
                <Column style={statCell}>
                  <Text style={statNumber}>4+</Text>
                  <Text style={statLabel}>DOMAINES METIER</Text>
                </Column>
              </Row>
            </Section>

            {/* Verbatims exterieurs */}
            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '12px',
                padding: '16px 20px',
                marginTop: '20px',
                border: `1px solid ${BD}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Gartner (2026)</strong> : 40% des
                applications d'entreprise contiendront des agents IA d'ici fin 2026.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Bpifrance</strong> : 62% des PME
                qui ont investi dans l'IA constatent 1,80 euros de retour pour chaque
                euro investi.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Satya Nadella (Microsoft, 2026)</strong> :
                les agents IA sont la prochaine revolution de productivite en entreprise.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ PARCOURS 12 SESSIONS ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Votre parcours en 12 sessions
            </Heading>
            <Text style={sectionSubtitle}>
              De l'acculturation a l'industrialisation — juin 2025 a avril 2026
            </Text>

            <TimelineItem
              date="Juin-Sept"
              title="Phase 1 — Acculturation (J1 a J4)"
              description="Panorama des outils IA (ChatGPT, Claude, Gemini, NotebookLM, Perplexity), initiation aux prompts, premiers usages terrain."
            />
            <TimelineItem
              date="Oct-Nov"
              title="Phase 2 — Approfondissement metier (J5 a J8)"
              description="Reporting, plannings, comptes-rendus, Drive partage. Chaque participant a identifie ses cas d'usage prioritaires."
            />
            <TimelineItem
              date="11 Dec"
              title="Bilan mi-parcours"
              description="Restitution formelle avec la direction et CP Formation (Loic Degandt). Validation des acquis et orientation de la suite."
            />
            <TimelineItem
              date="16 Jan"
              title="J9 — RH et droit social"
              description="Session dediee avec Severine Chantre (badgeages) et Maitre Klatovsky (droit du travail). L'IA appliquee aux enjeux sociaux."
            />
            <TimelineItem
              date="11 Fev"
              title="J10 — Pratiques terrain"
              description="Mise en pratique sur cas reels et amorce d'industrialisation des usages."
            />
            <TimelineItem
              date="20 Mars"
              title="J11 — Claude Cowork & automatisation"
              description="Decouverte de Claude Desktop, skills, taches programmees, connecteurs Google Drive. Premiers workflows automatises."
            />
            <TimelineItem
              date="10 Avril"
              title="J12 — ClawdBot, Prompts & Workspace Studio"
              description="Cloture du cycle : demonstration live de 7 agents Telegram sur donnees reelles Frouard, framework ICID, automatisations Google."
              isHighlight
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ CLAWDBOT — 7 AGENTS ════════════════ */}
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
                style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 4px 0' }}
              >
                ClawdBot — Vos 7 agents IA
              </Heading>
              <Text style={{ fontSize: '14px', color: '#B3D4F7', margin: '0' }}>
                7 assistants specialises sur Telegram, nourris par vos donnees reelles
              </Text>
            </Section>

            <Text style={paragraph}>
              <strong>ClawdBot</strong> est un systeme de 7 assistants IA
              deployes sur <strong>Telegram</strong> (interface mobile type
              SMS), alimentes exclusivement par les donnees reelles du magasin
              : COMBINE, comptes d'exploitation Drive, plannings Planexa,
              procedures securite.
            </Text>

            {/* Chatbot vs Agent IA */}
            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '12px',
                padding: '16px 20px',
                marginBottom: '20px',
                border: `1px solid ${BD}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: T1, margin: '0 0 10px 0' }}>
                Chatbot classique vs Agent IA ClawdBot
              </Text>
              <Row>
                <Column style={{ width: '48%', verticalAlign: 'top' }}>
                  <Text style={{ fontSize: '11px', fontWeight: 700, color: T3, textTransform: 'uppercase' as const, margin: '0 0 6px 0' }}>
                    Chatbot classique
                  </Text>
                  <Text style={{ fontSize: '12px', color: T3, margin: '0 0 4px 0', lineHeight: '18px' }}>
                    Attend votre question
                  </Text>
                  <Text style={{ fontSize: '12px', color: T3, margin: '0 0 4px 0', lineHeight: '18px' }}>
                    Connaissances generales
                  </Text>
                  <Text style={{ fontSize: '12px', color: T3, margin: '0 0 4px 0', lineHeight: '18px' }}>
                    1 seul interlocuteur
                  </Text>
                  <Text style={{ fontSize: '12px', color: T3, margin: '0', lineHeight: '18px' }}>
                    Ne connait pas votre magasin
                  </Text>
                </Column>
                <Column style={{ width: '4%' }} />
                <Column style={{ width: '48%', verticalAlign: 'top' }}>
                  <Text style={{ fontSize: '11px', fontWeight: 700, color: BLUE, textTransform: 'uppercase' as const, margin: '0 0 6px 0' }}>
                    Agent IA ClawdBot
                  </Text>
                  <Text style={{ fontSize: '12px', color: T1, margin: '0 0 4px 0', lineHeight: '18px' }}>
                    <strong>Analyse et recommande</strong>
                  </Text>
                  <Text style={{ fontSize: '12px', color: T1, margin: '0 0 4px 0', lineHeight: '18px' }}>
                    <strong>Vos donnees reelles</strong>
                  </Text>
                  <Text style={{ fontSize: '12px', color: T1, margin: '0 0 4px 0', lineHeight: '18px' }}>
                    <strong>7 experts avec des avis differents</strong>
                  </Text>
                  <Text style={{ fontSize: '12px', color: T1, margin: '0', lineHeight: '18px' }}>
                    <strong>Connait vos chiffres Frouard</strong>
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Infographic ClawdBot */}
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/infographic-clawdbot-agents.png"
              width="400"
              alt="ClawdBot — 7 agents IA Telegram pour E.Leclerc Frouard"
              style={{ width: '80%', display: 'block', margin: '0 auto 4px auto' }}
            />
            <Text style={{ fontSize: '11px', color: T3, textAlign: 'center' as const, margin: '0 0 24px 0', fontStyle: 'italic' }}>
              Infographie generee avec Gemini
            </Text>

            <AgentCard
              icon="🎯"
              name="Le Coordinateur"
              domain="Synthese et plan d'action priorise — orchestre les 6 autres agents"
              quote="Je synthetise les avis, tranche les desaccords et livre un plan d'action en 60 secondes."
              color={BLUE_LIGHT}
            />
            <AgentCard
              icon="📊"
              name="Le Commercial"
              domain="CA, marges, performance par rayon, comparaison aux 22 magasins SCAPEST"
              quote="Il faut investir pour vendre plus."
              color={ORANGE_LIGHT}
            />
            <AgentCard
              icon="💰"
              name="La Finance"
              domain="Marge semi-nette, impayes fournisseurs, ecarts de facturation, rentabilite"
              quote="Chaque euro depense doit prouver son retour."
              color={BLUE_LIGHT}
            />
            <AgentCard
              icon="👥"
              name="Les RH"
              domain="Planning des 37 employes caisse, droit du travail, convention collective"
              quote="On ne surcharge pas toujours les memes."
              color={ORANGE_LIGHT}
            />
            <AgentCard
              icon="✅"
              name="La Qualite"
              domain="HACCP, etiquetage, reclamations clients, 4 500+ avis Google (4,2/5)"
              quote="La conformite n'est pas negociable."
              color={BLUE_LIGHT}
            />
            <AgentCard
              icon="🔒"
              name="La Securite"
              domain="Protocoles incendie, circulation, accidents, demarque inconnue"
              quote="Aucun compromis sur la securite."
              color={ORANGE_LIGHT}
            />
            <AgentCard
              icon="🛒"
              name="La Com & le Drive"
              domain="Marketing, Drive (574 commandes/jour au pic), communication interne"
              quote="Le client a toujours quelque chose a nous apprendre."
              color={BLUE_LIGHT}
            />

            {/* Chiffres cles ClawdBot */}
            <Section
              style={{
                backgroundColor: BLUE_LIGHT,
                borderRadius: '12px',
                padding: '16px 20px',
                marginTop: '8px',
                borderLeft: `4px solid ${BLUE}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: BLUE, margin: '0 0 8px 0' }}>
                Chiffres cles
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Temps de reponse moyen</strong> : 10 secondes (vs. plusieurs heures sans)
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Cout total</strong> : 100-170 euros/mois (hebergement + IA)
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong>Interface</strong> : Telegram gratuit, donnees sur serveur prive separe
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ 3 DEMOS LIVE ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Les 3 demonstrations live
            </Heading>
            <Text style={sectionSubtitle}>
              Realisees en direct sur Telegram pendant la session — sur vos donnees reelles
            </Text>

            <DemoCard
              number="1"
              title="Question rapide a l'agent Finance"
              scenario="En pleine reunion, besoin immediat des chiffres Drive. Question envoyee : 'Quel est le CA Drive cumule et la marge semi-nette ?'"
              result="Chiffres reels Frouard en moins de 15 secondes, avec un point d'attention automatique sur la tendance."
              time="8 sec"
              color={BLUE}
            />

            <DemoCard
              number="2"
              title="Debat collectif des 7 agents"
              scenario="La demarque Poissonnerie coute 41 000 euros. Faut-il investir 15 000 euros dans un plan anti-demarque ? Les 6 agents sont interroges simultanement."
              result="Le Commercial dit oui, la Finance freine, la Qualite souleve un risque inattendu, les RH protegent les equipes. Le Coordinateur synthetise : equivalent d'1h de reunion en moins d'1 minute."
              time="42 sec"
              color={ORANGE}
            />

            <DemoCard
              number="3"
              title="Analyse de document"
              scenario="Reclamation client pour double facturation, PDF joint. Question : 'Analyse cette reclamation et propose une reponse client.'"
              result="L'agent Qualite lit le PDF, identifie la cause (erreur de scan), cite le Code de la consommation, redige une reponse prete a envoyer."
              time="12 sec"
              color={BLUE}
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
                <strong style={{ color: ORANGE }}>Resume matin automatique</strong> : une fois
                deploye, ClawdBot envoie chaque matin a 8h sur Telegram un resume
                de la journee — chiffres cles, alertes, taches prioritaires. Pret
                quand vous arrivez au bureau.
              </Text>
            </Section>

            {/* Ce que l'IA fait vs ne fait PAS */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '24px 0 16px 0' }}>
              Ce que l'IA fait vs ne fait PAS
            </Heading>
            <Section style={{ marginBottom: '16px' }}>
              <Row>
                <Column style={{ width: '48%', verticalAlign: 'top' }}>
                  <Section
                    style={{
                      backgroundColor: BLUE_LIGHT,
                      borderRadius: '12px',
                      padding: '14px 16px',
                      borderLeft: `4px solid ${BLUE}`,
                    }}
                  >
                    <Text style={{ fontSize: '12px', fontWeight: 700, color: BLUE, textTransform: 'uppercase' as const, margin: '0 0 8px 0' }}>
                      L'IA fait
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0 0 4px 0', lineHeight: '18px' }}>
                      Analyser en 10 secondes
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0 0 4px 0', lineHeight: '18px' }}>
                      Recommander des actions
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0 0 4px 0', lineHeight: '18px' }}>
                      Citer la reglementation
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0 0 4px 0', lineHeight: '18px' }}>
                      Identifier les tensions
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0', lineHeight: '18px' }}>
                      Repondre jour et nuit
                    </Text>
                  </Section>
                </Column>
                <Column style={{ width: '4%' }} />
                <Column style={{ width: '48%', verticalAlign: 'top' }}>
                  <Section
                    style={{
                      backgroundColor: ORANGE_LIGHT,
                      borderRadius: '12px',
                      padding: '14px 16px',
                      borderLeft: `4px solid ${ORANGE}`,
                    }}
                  >
                    <Text style={{ fontSize: '12px', fontWeight: 700, color: ORANGE, textTransform: 'uppercase' as const, margin: '0 0 8px 0' }}>
                      L'IA ne fait PAS
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0 0 4px 0', lineHeight: '18px' }}>
                      Decider a votre place
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0 0 4px 0', lineHeight: '18px' }}>
                      Remplacer le terrain
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0 0 4px 0', lineHeight: '18px' }}>
                      Gerer les urgences physiques
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0 0 4px 0', lineHeight: '18px' }}>
                      Garantir l'exhaustivite
                    </Text>
                    <Text style={{ fontSize: '12px', color: T2, margin: '0', lineHeight: '18px' }}>
                      Partager vos donnees
                    </Text>
                  </Section>
                </Column>
              </Row>
            </Section>

            {/* FAQ ClawdBot */}
            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '12px',
                padding: '16px 20px',
                border: `1px solid ${BD}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: T1, margin: '0 0 10px 0' }}>
                Questions frequentes
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong>Nos donnees sont-elles en securite ?</strong> — Oui. Les donnees
                sont sur un serveur prive, separe du moteur IA (DeepSeek via OpenRouter).
                L'IA n'a pas acces au serveur de donnees en dehors des requetes.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong>L'IA peut-elle se tromper ?</strong> — Oui. C'est pourquoi
                chaque reponse est presentee pour validation. L'IA recommande,
                l'humain decide.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong>Qui peut parler aux assistants ?</strong> — Seuls les
                utilisateurs autorises sur le groupe Telegram Frouard. Acces controle
                par administrateur.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong>Les assistants apprennent-ils de nos conversations ?</strong> — Non.
                Chaque requete est independante. Les donnees de reference sont mises
                a jour manuellement quand vous deposez de nouveaux fichiers.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ L'ART DU PROMPT — ICID ════════════════ */}
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
                L'Art du Prompt — Framework ICID
              </Heading>
              <Text style={{ fontSize: '14px', color: '#FFD4C7', margin: '0' }}>
                Du prompt intuitif au prompt maitrise et reproductible
              </Text>
            </Section>

            <Text style={paragraph}>
              Apres 12 sessions, il est temps de passer du prompt improvise au
              prompt structure. Le framework <strong>ICID</strong> est votre
              methode pour obtenir des resultats precis du premier coup.
            </Text>

            {/* Infographic ICID */}
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/infographic-icid-framework.png"
              width="400"
              alt="Framework ICID — Instruction, Contexte, Input Data, Output Indicator"
              style={{ width: '80%', display: 'block', margin: '0 auto 4px auto' }}
            />
            <Text style={{ fontSize: '11px', color: T3, textAlign: 'center' as const, margin: '0 0 24px 0', fontStyle: 'italic' }}>
              Infographie generee avec Gemini
            </Text>

            {/* Les 4 piliers ICID */}
            <Section style={{ marginBottom: '20px' }}>
              <Row>
                <Column style={{ width: '40px', verticalAlign: 'top' }}>
                  <Text
                    style={{
                      backgroundColor: ORANGE,
                      color: '#ffffff',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      textAlign: 'center' as const,
                      lineHeight: '32px',
                      fontSize: '16px',
                      fontWeight: 800,
                      margin: '0',
                    }}
                  >
                    I
                  </Text>
                </Column>
                <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
                  <Text style={stepTitle}>Instruction</Text>
                  <Text style={stepDesc}>
                    Le verbe d'action : Redige, Analyse, Synthetise, Compare, Classe...
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={{ marginBottom: '20px' }}>
              <Row>
                <Column style={{ width: '40px', verticalAlign: 'top' }}>
                  <Text
                    style={{
                      backgroundColor: BLUE,
                      color: '#ffffff',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      textAlign: 'center' as const,
                      lineHeight: '32px',
                      fontSize: '16px',
                      fontWeight: 800,
                      margin: '0',
                    }}
                  >
                    C
                  </Text>
                </Column>
                <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
                  <Text style={stepTitle}>Contexte</Text>
                  <Text style={stepDesc}>
                    Qui vous etes, dans quel secteur. Ex : &ldquo;responsable qualite E.Leclerc Frouard, 12 000 m2&rdquo;
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={{ marginBottom: '20px' }}>
              <Row>
                <Column style={{ width: '40px', verticalAlign: 'top' }}>
                  <Text
                    style={{
                      backgroundColor: ORANGE,
                      color: '#ffffff',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      textAlign: 'center' as const,
                      lineHeight: '32px',
                      fontSize: '16px',
                      fontWeight: 800,
                      margin: '0',
                    }}
                  >
                    I
                  </Text>
                </Column>
                <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
                  <Text style={stepTitle}>Input Data</Text>
                  <Text style={stepDesc}>
                    Les donnees fournies : email fournisseur, chiffres COMBINE, avis Goodays, PDF
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={{ marginBottom: '24px' }}>
              <Row>
                <Column style={{ width: '40px', verticalAlign: 'top' }}>
                  <Text
                    style={{
                      backgroundColor: BLUE,
                      color: '#ffffff',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      textAlign: 'center' as const,
                      lineHeight: '32px',
                      fontSize: '16px',
                      fontWeight: 800,
                      margin: '0',
                    }}
                  >
                    D
                  </Text>
                </Column>
                <Column style={{ verticalAlign: 'top', paddingLeft: '12px' }}>
                  <Text style={stepTitle}>Output Indicator</Text>
                  <Text style={stepDesc}>
                    Le format souhaite : 3 bullets, 100 mots, tableau, email professionnel, PDF
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Les 5 techniques */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '0 0 16px 0' }}>
              5 techniques pour aller plus loin
            </Heading>

            <TechniqueCard
              number="1"
              name="Zero-shot"
              description="Prompt direct sans exemple — ideal pour redaction, synthese, ODJ."
              example="Redige l'ordre du jour de la reunion de direction de lundi."
              color={BLUE}
            />
            <TechniqueCard
              number="2"
              name="Few-shot"
              description="Montrer 1 a 3 exemples avant la vraie demande. L'IA reproduit le style."
              example="Voici 2 reponses Goodays que j'ai ecrites. Reponds aux 5 suivantes dans le meme ton."
              color={ORANGE}
            />
            <TechniqueCard
              number="3"
              name="Chain of Thought"
              description="Demander a l'IA de reflechir etape par etape. Reduit les erreurs sur les analyses complexes."
              example="Analyse la demarque Poissonnerie etape par etape avant de conclure."
              color={BLUE}
            />
            <TechniqueCard
              number="4"
              name="Role Prompting"
              description="Assigner un role precis pour activer des connaissances specialisees."
              example="Tu es DAF d'un hypermarche de 12 000 m2. Analyse ce compte d'exploitation."
              color={ORANGE}
            />
            <TechniqueCard
              number="5"
              name="Prompt Chaining"
              description="Decomposer une tache complexe en 2 a 4 prompts successifs."
              example="Prompt 1 : Extrais les KPIs. Prompt 2 : Analyse les ecarts. Prompt 3 : Redige le CR."
              color={BLUE}
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ BOITE A PROMPTS FROUARD ════════════════ */}
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
                style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 4px 0' }}
              >
                Boite a prompts Frouard
              </Heading>
              <Text style={{ fontSize: '14px', color: '#B3D4F7', margin: '0' }}>
                12 prompts prets a l'emploi — copiez-collez dans Claude, ChatGPT ou Gemini
              </Text>
            </Section>

            <PromptExample
              feature="📊 Direction — Brief reunion"
              context="Avant chaque comite de direction :"
              prompt="Tu es directeur adjoint d'un hypermarche E.Leclerc. Voici mes notes brutes de la semaine [coller notes]. Redige un brief de reunion structure : 3 points positifs, 3 alertes, et 3 decisions a prendre. Format : une page maximum, ton direct et factuel."
              result="Brief structure pret en 30 secondes, calibre pour un comite de direction."
              featureColor={BLUE}
            />

            <PromptExample
              feature="📊 Direction — CR automatique"
              context="Apres chaque reunion :"
              prompt="A partir de ces notes brutes [coller], redige un compte-rendu professionnel : participants, decisions prises, actions avec responsable et deadline, points en attente. Format PDF pret a diffuser. Ton : professionnel E.Leclerc, pas de jargon IA."
              featureColor={BLUE}
            />

            <PromptExample
              feature="💰 Finance — Analyse demarque"
              context="Pour preparer un arbitrage budgetaire :"
              prompt="Tu es DAF d'un hypermarche E.Leclerc Frouard (12 000 m2, 37 employes caisse). Voici les chiffres de demarque par rayon [coller donnees COMBINE]. Analyse etape par etape : identifie les 3 rayons les plus touches, compare avec la moyenne SCAPEST, propose un plan d'action chiffre avec ROI estime. Format : tableau + recommandation en 3 bullets."
              result="Analyse en 3 etapes avec tableau comparatif et plan d'action chiffre."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="💰 Finance — Synthese COMBINE"
              context="Pour le reporting mensuel :"
              prompt="Voici l'export COMBINE du mois [joindre fichier]. Extrais les KPIs cles (CA, marge brute, marge semi-nette, panier moyen, frequentation) par rayon. Compare avec M-1 et N-1. Genere un tableau de bord avec codes couleur (vert/orange/rouge) et 3 points d'attention prioritaires."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="👥 RH — Planning caisses"
              context="Pour optimiser le planning hebdomadaire :"
              prompt="Tu es responsable caisse d'un E.Leclerc. Voici le planning de la semaine prochaine et les donnees de frequentation des 4 dernieres semaines [joindre]. Identifie les creneaux en sous-effectif (ratio clients/caissiers > 25), propose un reamenagement en respectant les 11h de repos et les contraintes legales. Format : tableau par jour/creneau."
              featureColor={PURPLE}
            />

            <PromptExample
              feature="✅ Qualite — Reponse Goodays"
              context="Pour traiter les avis clients en lot :"
              prompt="Voici 3 exemples de reponses Goodays que j'ai ecrites et qui representent notre ton [coller exemples]. Maintenant, voici 10 nouveaux avis non repondus. Redige une reponse personnalisee pour chacun dans le meme style. Classe par priorite (note inferieure a 3 en premier). Presente pour validation."
              result="Few-shot : l'IA reproduit exactement votre ton a partir de vos exemples."
              featureColor={GREEN}
            />

            <PromptExample
              feature="⚖️ Juridique — Demande de conseil"
              context="Pour preparer un dossier avant consultation avocat :"
              prompt="Tu es juriste specialise droit du travail grande distribution. Un salarie conteste ses horaires de badgeage sur les 3 derniers mois. Voici les faits [decrire la situation]. Structure ma reflexion : qualification juridique, textes applicables (convention collective, Code du travail), risques en cas de contentieux, et prochaines etapes recommandees. Attention : ceci est une aide a la reflexion, pas un avis juridique."
              featureColor={T3}
            />

            <PromptExample
              feature="📊 Direction — Aide a la decision"
              context="Pour trancher un arbitrage complexe :"
              prompt="Tu es consultant en management grande distribution. Reflechis etape par etape. Contexte : [decrire la decision a prendre]. Analyse les pour et les contre. Propose 3 options avec avantages, risques et cout estime. Recommande celle qui maximise le ratio benefice/risque. Format : tableau comparatif + recommandation en 3 bullets."
              featureColor={BLUE}
            />

            <PromptExample
              feature="👥 RH — Email collaborateur"
              context="Pour les communications sensibles :"
              prompt="Tu es RRH bienveillant dans un hypermarche E.Leclerc (convention collective commerce de detail). Redige un email a [prenom] pour [objet : changement planning / rappel a l'ordre / felicitations / entretien]. Ton : professionnel, empathique, conforme au droit du travail. Maximum 150 mots."
              featureColor={PURPLE}
            />

            <PromptExample
              feature="✅ Qualite — Rapport d'incident"
              context="Pour documenter un incident :"
              prompt="Redige un rapport d'incident pour [decrire : chute client, probleme produit, reclamation grave]. Structure en fiche : faits (date, lieu, personnes presentes), causes identifiees, actions correctives immediates, actions preventives, responsable du suivi, date de revue. Ton factuel et neutre. Format PDF."
              featureColor={GREEN}
            />

            <PromptExample
              feature="📧 Communication — Email fournisseur"
              context="Pour les echanges fournisseurs (retard, erreur, negociation) :"
              prompt="Tu es responsable approvisionnement E.Leclerc Frouard. Redige un email au fournisseur [nom] concernant [retard de livraison / erreur de facturation / negociation tarifaire]. Ton : ferme mais professionnel, orienté solution. Cite les references commande et les delais contractuels. Maximum 200 mots."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="📧 Communication — Note interne"
              context="Pour informer les equipes :"
              prompt="Redige une note interne pour informer les [equipes / cadres / chefs de rayon] de [objet : nouveau process, changement horaire, evenement]. Inclus : date d'entree en vigueur, ce qui change concretement, et le contact pour les questions. 150 mots maximum, ton direct."
              featureColor={ORANGE}
            />
          </Section>

          <Hr style={divider} />

          {/* ════════════════ ERREURS CLASSIQUES ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              8 erreurs a eviter
            </Heading>
            <Text style={sectionSubtitle}>
              Les pieges les plus frequents — et comment les contourner
            </Text>

            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '12px',
                padding: '16px 20px',
                border: `1px solid ${BD}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '22px' }}>
                <strong style={{ color: '#E11D48' }}>1.</strong> Prompt trop vague — &ldquo;Parle-moi de la demarque&rdquo; ne donnera rien d'utile
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '22px' }}>
                <strong style={{ color: '#E11D48' }}>2.</strong> Absence de contexte metier — l'IA ne sait pas que vous etes en grande distribution
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '22px' }}>
                <strong style={{ color: '#E11D48' }}>3.</strong> Tout demander en un seul prompt — decomposez en 2-3 etapes
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '22px' }}>
                <strong style={{ color: '#E11D48' }}>4.</strong> Format non precise — &ldquo;en 3 bullets&rdquo; ou &ldquo;en tableau&rdquo; change tout
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '22px' }}>
                <strong style={{ color: '#E11D48' }}>5.</strong> Accepter le premier resultat — iterez : &ldquo;plus concis&rdquo;, &ldquo;plus ferme&rdquo;
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '22px' }}>
                <strong style={{ color: '#E11D48' }}>6.</strong> Oublier le role — &ldquo;Tu es DAF&rdquo; active des connaissances specialisees
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '22px' }}>
                <strong style={{ color: '#E11D48' }}>7.</strong> Ne pas tester sur donnees reelles — un prompt generique reste generique
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '22px' }}>
                <strong style={{ color: '#E11D48' }}>8.</strong> Faire confiance aveuglément — verifiez toujours les chiffres et references legales
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ WORKSPACE STUDIO ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Google Workspace Studio
            </Heading>
            <Text style={sectionSubtitle}>
              Automatisez vos taches Google en decrivant en francais ce que vous voulez — sans coder
            </Text>

            {/* Infographic Workspace Studio */}
            <Img
              src="https://symplesssp.github.io/Mailreact/emails/static/infographic-workspace-studio.png"
              width="400"
              alt="Workspace Studio — Starter, Steps, Variables"
              style={{ width: '80%', display: 'block', margin: '0 auto 4px auto' }}
            />
            <Text style={{ fontSize: '11px', color: T3, textAlign: 'center' as const, margin: '0 0 24px 0', fontStyle: 'italic' }}>
              Infographie generee avec Gemini
            </Text>

            <Text style={paragraph}>
              <strong>Workspace Studio</strong> est un outil natif Google
              disponible depuis mars 2026. Accessible sur{' '}
              <strong>studio.workspace.google.com</strong> ou via l'icone dans
              Gmail/Drive. Propulse par Gemini 3, inclus sans surcout dans
              Google Workspace Business et Enterprise.
            </Text>

            <Section
              style={{
                backgroundColor: BLUE_LIGHT,
                borderRadius: '12px',
                padding: '16px 20px',
                marginBottom: '20px',
                borderLeft: `4px solid ${BLUE}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: BLUE, margin: '0 0 8px 0' }}>
                3 briques d'un flow
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Starter</strong> — Le declencheur : email recu, horaire fixe, evenement agenda
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Steps</strong> — Les actions Gemini : analyser, resumer, classer, rediger
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong>Variables</strong> — Les donnees dynamiques reutilisees entre les etapes
              </Text>
            </Section>

            {/* 6 cas d'usage */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '0 0 16px 0' }}>
              6 automatisations pour {magasin}
            </Heading>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Synthese quotidienne emails (Direction)</Text>
                  <Text style={stepDesc}>
                    Chaque matin a 7h50, resume de tous les emails non lus dans Google Chat.
                    Gain : 10-15 min/jour.
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
                  <Text style={stepTitle}>Alerte fournisseurs critiques (Exploitation)</Text>
                  <Text style={stepDesc}>
                    Detection temps reel des emails fournisseurs signalant rupture ou retard.
                    Reactivite immediate.
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
                  <Text style={stepTitle}>Classement automatique factures (DAF)</Text>
                  <Text style={stepDesc}>
                    Classement des factures/BL dans Drive + log Google Sheets.
                    Gain : 30-45 min/semaine.
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
                  <Text style={stepTitle}>Brief pre-reunion automatique (Direction)</Text>
                  <Text style={stepDesc}>
                    30 min avant chaque evenement Agenda, un brief contextuel est pret.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>5</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>CR et actions post-reunion (Direction)</Text>
                  <Text style={stepDesc}>
                    Compte-rendu et liste d'actions envoyes automatiquement apres chaque reunion.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={stepCircle}>6</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Detection emails sensibles (RH/Juridique)</Text>
                  <Text style={stepDesc}>
                    Alerte sur les emails contenant &ldquo;prud'hommes&rdquo;, &ldquo;avocat&rdquo;, &ldquo;accident&rdquo;.
                    Zero sujet oublie.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Prompts exacts Workspace Studio */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '24px 0 16px 0' }}>
              Prompts exacts a coller dans Workspace Studio
            </Heading>

            <PromptExample
              feature="📧 Cas 1 — Synthese emails quotidienne"
              context="Prompt a entrer dans Workspace Studio (Starter : horaire 7h50) :"
              prompt="Chaque matin a 7h50, resume-moi les emails non lus recus depuis la veille a 18h. Classe-les en trois categories : urgent, a traiter, info. Pour chaque email : expediteur, objet, 1 phrase de resume, action requise. Envoie le resultat dans Google Chat."
              result="Resultat : un message Chat structure chaque matin avant l'arrivee au bureau. Gain : 10-15 min/jour."
              featureColor={BLUE}
            />

            <PromptExample
              feature="🔴 Cas 2 — Alerte fournisseurs critiques"
              context="Prompt a entrer dans Workspace Studio (Starter : email recu) :"
              prompt="Quand je recois un email contenant 'rupture', 'retard de livraison', 'incident', 'annulation' ou 'penurie' : 1. Extrais l'expediteur et le produit concerne. 2. Labellise l'email 'EXPLOITATION — Urgent'. 3. Envoie une notification dans Google Chat avec le resume."
              result="Resultat : alerte temps reel. Plus aucune rupture ou retard ne passe inapercu."
              featureColor={ORANGE}
            />

            <PromptExample
              feature="⚠️ Cas 6 — Detection emails sensibles"
              context="Prompt a entrer dans Workspace Studio (Starter : email recu) :"
              prompt="Quand je recois un email contenant 'prud'hommes', 'avocat', 'accident du travail', 'mise en demeure', 'inspection du travail' ou 'constat' : 1. Labellise 'RH — SENSIBLE'. 2. Alerte immediate dans Google Chat avec expediteur, objet et extrait pertinent. 3. Ne reponds pas automatiquement."
              result="Resultat : zero sujet sensible oublie. Severine Chantre et Pascal Cordier alertes en temps reel."
              featureColor={'#E11D48'}
            />

            {/* Guide de demarrage */}
            <Heading as="h3" style={{ fontSize: '16px', fontWeight: 700, color: T1, margin: '24px 0 16px 0' }}>
              Demarrer en 4 etapes
            </Heading>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>1</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Ouvrir studio.workspace.google.com</Text>
                  <Text style={stepDesc}>
                    Avec votre compte Google Workspace Frouard. L'icone apparait aussi
                    dans Gmail et Drive.
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
                  <Text style={stepTitle}>Choisir un template ou creer un flow</Text>
                  <Text style={stepDesc}>
                    Recommande pour debuter : le template &ldquo;Get a daily summary
                    of unread emails&rdquo; dans l'onglet Discover.
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
                  <Text style={stepTitle}>Tester avec Test Run</Text>
                  <Text style={stepDesc}>
                    Cliquez &ldquo;Test Run&rdquo; pour executer le flow sur vos vraies
                    donnees sans risque. Verifiez le resultat avant d'activer.
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
                  <Text style={stepTitle}>Activer avec Turn On</Text>
                  <Text style={stepDesc}>
                    Une fois satisfait du test, activez le flow. Il s'executera
                    automatiquement selon le declencheur configure.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong style={{ color: ORANGE }}>Prerequis</strong> : plan Google Workspace
                Business ou Enterprise. L'administrateur doit activer Workspace Studio
                et Gemini for Workspace (sans Gemini, seules les automatisations basiques
                fonctionnent). Si un flow est partage avec un compte sans Gemini,
                les etapes IA sont automatiquement retirees.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: ORANGE }}>Securite</strong> : les donnees restent
                propriete de l'organisation, non utilisees pour l'entrainement IA Google.
                Conformite SOC 2 / ISO 27001 / RGPD. Controle admin granulaire.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ QUESTIONNAIRE MATURITE IA ════════════════ */}
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
                style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 4px 0' }}
              >
                Auto-evaluation — 9 dimensions de maturite IA
              </Heading>
              <Text style={{ fontSize: '14px', color: '#B3D4F7', margin: '0' }}>
                Ou en etes-vous ? Notez-vous de 1 (debutant) a 5 (autonome)
              </Text>
            </Section>

            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '12px',
                padding: '16px 20px',
                border: `1px solid ${BD}`,
                marginBottom: '16px',
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '22px' }}>
                <strong style={{ color: BLUE }}>1. Comprehension</strong> — Je comprends ce que l'IA peut et ne peut pas faire sur mon metier
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '22px' }}>
                <strong style={{ color: BLUE }}>2. Usage reel</strong> — Cette semaine, j'ai utilise l'IA pour une tache pro concrete
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '22px' }}>
                <strong style={{ color: ORANGE }}>3. Autonomie</strong> — Je peux refaire seul une analyse equivalente a celles vues en formation
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '22px' }}>
                <strong style={{ color: ORANGE }}>4. Mise a jour</strong> — Je sais reprendre une analyse et la relancer avec les donnees du mois suivant
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '22px' }}>
                <strong style={{ color: BLUE }}>5. Besoin a prompt</strong> — Je sais traduire un besoin metier flou en un prompt IA clair
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '22px' }}>
                <strong style={{ color: BLUE }}>6. Reutilisation</strong> — Je reutilise un agent, un prompt ou un notebook au moins 1 fois par semaine
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '22px' }}>
                <strong style={{ color: ORANGE }}>7. Validation</strong> — Je sais reperer quand l'IA se trompe ou hallucine sur mes donnees
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 6px 0', lineHeight: '22px' }}>
                <strong style={{ color: ORANGE }}>8. Confidentialite</strong> — Je sais ce que je peux et ne peux pas mettre dans l'IA
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '22px' }}>
                <strong style={{ color: BLUE }}>9. Valeur</strong> — L'IA m'a fait gagner du temps ce mois-ci
              </Text>
            </Section>

            {/* Grille de scoring */}
            <Section
              style={{
                backgroundColor: BLUE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                marginBottom: '16px',
                borderLeft: `4px solid ${BLUE}`,
              }}
            >
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Score moyen inferieur a 2</strong> : Initiation — poursuivre l'accompagnement
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Score 2 a 3</strong> : Decouverte — ancrer les usages avec un referent
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Score 3 a 3,5</strong> : Appropriation — deployer les agents en production
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                <strong>Score 3,5 a 4,2</strong> : Operationnel — capitaliser et diffuser
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                <strong>Score superieur a 4,2</strong> : Maitrise / Autonome
              </Text>
            </Section>

            {/* 3 questions ouvertes */}
            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '14px 18px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: ORANGE, margin: '0 0 8px 0' }}>
                3 questions collectives pour la suite
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                1. Qu'est-ce qui bloque le plus le groupe avec l'IA aujourd'hui ?
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                2. Un usage IA dont le groupe est fier ou qui a marque ?
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                3. La priorite n°1 pour les 6 prochains mois ?
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ ACQUIS PAR DOMAINE ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Bilan des acquis — 10 mois de parcours
            </Heading>
            <Text style={sectionSubtitle}>
              Evaluation des competences acquises par domaine
            </Text>

            <Section
              style={{
                backgroundColor: BG,
                borderRadius: '12px',
                padding: '16px 20px',
                border: `1px solid ${BD}`,
                marginBottom: '16px',
              }}
            >
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 10px 0', lineHeight: '22px' }}>
                <strong style={{ color: GREEN }}>Solide</strong> — Acculturation generale IA
                <br />
                <span style={{ fontSize: '12px', color: T3 }}>Livrable : Bibliotheque de prompts Drive | Suite : automatiser les syntheses</span>
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 10px 0', lineHeight: '22px' }}>
                <strong style={{ color: GREEN }}>Bien engage</strong> — Comptes-rendus & notes
                <br />
                <span style={{ fontSize: '12px', color: T3 }}>Livrable : Templates CR Drive | Suite : integrer dans la routine hebdo</span>
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 10px 0', lineHeight: '22px' }}>
                <strong style={{ color: BLUE }}>En progression</strong> — RH / Social
                <br />
                <span style={{ fontSize: '12px', color: T3 }}>Livrable : Support Formation Klatovsky (Drive) | Suite : automatiser le suivi badgeages</span>
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 10px 0', lineHeight: '22px' }}>
                <strong style={{ color: BLUE }}>En progression</strong> — Qualite / Goodays
                <br />
                <span style={{ fontSize: '12px', color: T3 }}>Livrable : Templates de reponses clients | Suite : routine hebdo J-2</span>
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 10px 0', lineHeight: '22px' }}>
                <strong style={{ color: ORANGE }}>Demonstration avancee</strong> — Finance / Reporting
                <br />
                <span style={{ fontSize: '12px', color: T3 }}>Livrable : Demo OpenClaw Finance | Suite : deployer l'agent Finance en production</span>
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '22px' }}>
                <strong style={{ color: ORANGE }}>Pret au deploiement</strong> — Agents IA autonomes (ClawdBot)
                <br />
                <span style={{ fontSize: '12px', color: T3 }}>Livrable : 7 agents Telegram operationnels | Suite : deploiement pilote</span>
              </Text>
            </Section>

            {/* 6 prompts valides */}
            <Section
              style={{
                backgroundColor: BLUE_LIGHT,
                borderRadius: '12px',
                padding: '16px 20px',
                borderLeft: `4px solid ${BLUE}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: BLUE, margin: '0 0 8px 0' }}>
                6 prompts cles-en-main valides
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                Reporting rayon, plannings, reponses Goodays, comptes-rendus,
                analyse financiere, emails delicats — avec des gains de{' '}
                <strong>10 a 60 minutes</strong> par semaine par routine.
              </Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* ════════════════ PROCHAINES ETAPES ════════════════ */}
          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Recommandations pour la suite
            </Heading>
            <Text style={sectionSubtitle}>
              3 scenarios proposes — notre recommandation : combiner B + C
            </Text>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: T3 }}>A</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Consolidation & diffusion interne</Text>
                  <Text style={stepDesc}>
                    Elargir les usages aux equipes terrain, former les chefs de rayon
                    sur les prompts valides, standardiser les pratiques.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: ORANGE }}>B</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>
                    Deploiement operationnel ClawdBot
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
                      RECOMMANDE
                    </span>
                  </Text>
                  <Text style={stepDesc}>
                    Deployer les 7 agents en production sur un perimetre pilote,
                    former 3 a 5 utilisateurs cles sur Telegram.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={stepBox}>
              <Row>
                <Column style={stepNum}>
                  <Text style={{ ...stepCircle, backgroundColor: BLUE }}>C</Text>
                </Column>
                <Column style={stepBody}>
                  <Text style={stepTitle}>Capitalisation & autonomie</Text>
                  <Text style={stepDesc}>
                    Guide interne Frouard, formation d'un binome referent IA
                    (operationnel + direction), point de suivi juillet 2026.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section
              style={{
                backgroundColor: ORANGE_LIGHT,
                borderRadius: '12px',
                padding: '16px 20px',
                marginTop: '8px',
                borderLeft: `4px solid ${ORANGE}`,
              }}
            >
              <Text style={{ fontSize: '14px', fontWeight: 700, color: ORANGE, margin: '0 0 8px 0' }}>
                Notre recommandation : B + C
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0 0 4px 0', lineHeight: '20px' }}>
                Deployer ClawdBot en production sur un perimetre pilote, designer
                un <strong>binome referent IA</strong> interne, formaliser le guide
                des usages, et prevoir un point de suivi a <strong>juillet 2026</strong>.
              </Text>
              <Text style={{ fontSize: '13px', color: T2, margin: '0', lineHeight: '20px' }}>
                Noms proposes : Alazard, Gourmelon, Cordier.
              </Text>
            </Section>

            <Section style={{ textAlign: 'center' as const, marginTop: '32px' }}>
              <Button style={ctaButton} href="https://studio.workspace.google.com">
                Decouvrir Workspace Studio
              </Button>
              <Text style={ctaSubtext}>
                Inclus dans Google Workspace Business — Demandez l'activation a votre administrateur
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
              et les outils modernes permettent de produire :
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
                integration des contenus de formation.
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0 0 8px 0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>Gemini</strong> — A genere les
                infographies (ClawdBot, ICID, Workspace Studio).
              </Text>
              <Text style={{ fontSize: '13px', color: T1, margin: '0', lineHeight: '20px' }}>
                <strong style={{ color: BLUE }}>GitHub Pages</strong> — Hebergement
                des visuels et deploiement automatique.
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
                <strong style={{ color: ORANGE }}>En resume</strong> : plusieurs IA
                et outils modernes ont collabore pour produire cet email. C'est
                exactement le type d'industrialisation que nous avons construit
                ensemble pendant ces 10 mois.
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
              Session J12 — 10 avril 2026 — {magasin} — Parcours IA : 12 sessions (juin 2025 – avril 2026)
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

LeclercFrouardJ12.PreviewProps = {
  destinataire: 'Monsieur Alazard',
  magasin: 'E.Leclerc Frouard',
} as LeclercFrouardJ12Props;

export default LeclercFrouardJ12;

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
