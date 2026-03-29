---
name: email-formation
description: "Cree un email de formation pedagogique avec React Email : analyse doc, recherche contenu, produit le template, teste visuellement via Chrome DevTools, valide la pertinence pedagogique de chaque section."
user_invocable: true
arguments:
  - name: sujet
    description: "Sujet de la formation (ex: 'Claude Cowork pour E.Leclerc', 'IA generative pour avocats', 'Automatisation RH')"
    required: true
  - name: client
    description: "Nom du client / organisation (ex: 'E.Leclerc Frouard', 'Cabinet Dupont')"
    required: true
  - name: template
    description: "Nom du fichier template a creer ou modifier dans emails/ (ex: 'leclerc-j12.tsx'). Si existant, on l'ameliore."
    required: false
---

# Email Formation Pedagogique — Pipeline Complet

Tu es un expert en creation de contenu de formation et en email design avec React Email.
Tu travailles pour Guillaume Wilmin (IPLN / Praxelia), formateur IA.

**Sujet** : `$ARGUMENTS.sujet`
**Client** : `$ARGUMENTS.client`
**Template** : `{{ template | default: "nouveau template" }}`

---

## PHASE 1 : ANALYSE DE L'EXISTANT (5 min)

### 1A — Inventaire React Email

Lis les composants disponibles dans le projet :
```
emails/*.tsx — templates existants
node_modules/@react-email/components — composants disponibles
```

Produis un inventaire rapide :
- Composants utilises dans les templates existants
- Composants disponibles mais pas encore exploites
- Patterns visuels deja en place (cards, badges, steps, pricing, etc.)

### 1B — Analyse du template existant (si modification)

Si un template existant est specifie, lis-le en entier et identifie :
- Structure des sections
- Composants custom (FeatureCard, PromptExample, etc.)
- Palette de couleurs
- Points forts visuels
- Points faibles / sections qui pourraient etre plus pedagogiques

### 1C — Recherche de contenu

Utilise WebSearch et WebFetch pour rechercher :
- Les dernieres informations sur le sujet de formation (nouveautes, fonctionnalites, tarifs)
- Des exemples de contenu pedagogique similaire
- Des donnees factuelles a integrer (chiffres, dates, fonctionnalites)

**REGLE CRITIQUE** : Note CHAQUE fait recherche avec sa source. Tout ce qui sera dans l'email doit etre verifiable.

Presente les resultats :

```
ANALYSE TERMINEE
================================================
Template existant : [analyse]
Composants disponibles : [liste]
Contenu recherche : [resume avec sources]
================================================
```

Demande validation avant de continuer.

---

## PHASE 2 : CONCEPTION PEDAGOGIQUE (10 min)

### 2A — Structure narrative

Un email de formation efficace raconte une histoire en 5 actes :

1. **ACCROCHE** — Header impactant avec badge, titre, sous-titre. Le destinataire doit comprendre en 3 secondes de quoi il s'agit.

2. **CONTEXTE** — Pourquoi cette formation ? Lien avec leur metier, leurs problemes concrets. Personnalise au client.

3. **CONTENU CLE** — Le coeur pedagogique. Utilise des composants visuels riches :
   - **FeatureCards** avec icones + description courte + lien video
   - **StepBoxes** numerotes pour les processus
   - **PromptExamples** dans des blocs styles pour les cas pratiques
   - **Comparaisons** en colonnes (avant/apres, plans tarifaires)
   - **Callout boxes** pour les points importants
   - **Chiffres cles** mis en evidence

4. **MISE EN PRATIQUE** — Prompts prets a l'emploi, exercices, next steps concrets

5. **CALL TO ACTION** — Bouton principal + etapes numerotees + footer pro

### 2B — Composants pedagogiques a utiliser

Pour chaque section, choisis le composant React Email le plus adapte :

| Besoin pedagogique | Composant React Email | Technique |
|----|----|----|
| Feature avec demo video | Section + Row + Column + Img + Link | Thumbnail YouTube cliquable |
| Etape numerotee | Section + Row + Column (cercle numero) | Cercle colore + texte |
| Prompt a copier | Section (fond gris) + Text (italic) | Bloc code-like avec label |
| Chiffre cle | Section + Text (gros) | Nombre XXL + legende |
| Comparaison | Row + Column + Column | Deux cartes cote a cote |
| Alerte / important | Section (fond colore + border-left) | Callout avec icone |
| Timeline | Sections empilees avec connecteur | Cercles relies visuellement |
| Temoignage / citation | Section (fond, italic, guillemets) | Bloc citation style |

### 2C — Plan detaille

Presente le plan section par section avec :
- Titre de la section
- Composant(s) utilise(s)
- Contenu prevu (texte exact)
- Source de chaque fait mentionne

```
PLAN PEDAGOGIQUE
================================================
[Plan detaille]
================================================
```

Demande validation avant de coder.

---

## PHASE 3 : PRODUCTION DU TEMPLATE (15 min)

### Regles de code React Email

1. **Imports** : Uniquement depuis `@react-email/components`
2. **Styles** : Inline styles (pas de CSS externe). Constantes en haut du fichier.
3. **Couleurs** : Definir la palette comme constantes (BRAND_COLOR, ACCENT, etc.)
4. **Props** : Interface TypeScript avec valeurs par defaut
5. **Composants inline** : Definir les composants custom dans le meme fichier
6. **Images** : Chemin `emails/static/` ou URLs externes (YouTube thumbnails)
7. **Tailwind** : Wrapper `<Tailwind>` disponible si besoin de classes utilitaires
8. **Compatible** : Gmail, Outlook, Apple Mail. Pas de CSS grid, pas de flexbox, pas de gradients.
9. **Mobile** : Single column, boutons larges, texte lisible (min 14px body)
10. **Langue** : Francais. Pas d'accents dans le code (noms de variables), mais accents dans le contenu texte.

### Production

Ecris le template complet dans `emails/[nom].tsx` :
- Export default du composant
- PreviewProps pour le serveur de dev
- Styles constants en bas du fichier
- Composants custom au-dessus du composant principal

---

## PHASE 4 : TEST VISUEL AVEC CHROME DEVTOOLS (10 min)

### 4A — Build et export HTML

```bash
cd /Volumes/GitHub_SSD/Mailreact
npm run export
```

### 4B — Ouvrir dans Chrome et capturer

Utilise les outils MCP Chrome DevTools pour tester visuellement :

1. **Ouvre le HTML exporte** dans Chrome :
   - `mcp__plugin_chrome-devtools-mcp_chrome-devtools__navigate_page` vers `file:///Volumes/GitHub_SSD/Mailreact/out/[nom].html`

2. **Screenshot desktop** (600px large) :
   - `mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_screenshot`
   - Verifie : header lisible, sections bien separees, couleurs coherentes

3. **Screenshot mobile** (375px) :
   - `mcp__plugin_chrome-devtools-mcp_chrome-devtools__resize_page` a 375x812
   - `mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_screenshot`
   - Verifie : colonnes empilees, boutons cliquables, texte lisible

4. **Verification liens** :
   - `mcp__plugin_chrome-devtools-mcp_chrome-devtools__evaluate_script` pour lister tous les liens et verifier qu'ils sont valides

### 4C — Checklist visuelle

Pour chaque screenshot, verifie :
- [ ] Header : badge visible, titre lisible, sous-titre clair
- [ ] Sections : espacement regulier, separation nette
- [ ] Cards/Features : icones visibles, texte aligne, videos cliquables
- [ ] Prompts : blocs bien delimites, texte italique, labels colores
- [ ] CTA : bouton visible et attractif, texte d'action clair
- [ ] Footer : informations completes, liens fonctionnels
- [ ] Mobile : tout s'empile correctement, rien ne deborde

---

## PHASE 5 : VALIDATION PEDAGOGIQUE (5 min)

C'est LA phase critique. Pour chaque section de l'email, reponds a ces questions :

### Grille de validation pedagogique

| Critere | Question | Score |
|---------|----------|-------|
| **Exactitude** | Chaque fait mentionne est-il verifie et source ? | /10 |
| **Clarte** | Un non-technicien comprend-il en 5 secondes ? | /10 |
| **Pertinence** | Le contenu repond-il a un besoin reel du client ? | /10 |
| **Actionnable** | Le lecteur sait-il quoi faire apres lecture ? | /10 |
| **Visuel** | La mise en forme aide-t-elle la comprehension ? | /10 |
| **Concision** | Chaque mot est-il necessaire ? | /10 |
| **Engagement** | Le lecteur a-t-il envie de lire jusqu'au bout ? | /10 |
| **Actualite** | Les infos (tarifs, features, dates) sont-elles a jour ? | /10 |

### Verification factuelle

Pour chaque fait mentionne dans l'email :
1. **Identifie** le fait
2. **Recherche** la source (WebSearch si necessaire)
3. **Verifie** qu'il est exact et a jour
4. **Corrige** si inexact

### Test de comprehension

Relis l'email du point de vue du destinataire :
- **Qui** : Un professionnel non-technicien (directeur, cadre, RH)
- **Contexte** : Il lit ca sur son telephone entre deux reunions
- **Attente** : Comprendre vite, trouver les infos cles, savoir quoi faire

### Rapport de validation

```
VALIDATION PEDAGOGIQUE
================================================
Score global : X/80

SECTION PAR SECTION :
1. [Section] — Score: X/80 — [OK | A corriger: detail]
2. [Section] — Score: X/80 — [OK | A corriger: detail]
...

FAITS VERIFIES :
- [Fait 1] — Source: [URL] — [Exact | Corrige]
- [Fait 2] — Source: [URL] — [Exact | Corrige]
...

CORRECTIONS APPLIQUEES :
- [Ce qui a ete corrige et pourquoi]
================================================
```

Si le score est < 60/80 sur une section, corrige et re-teste visuellement.

---

## PHASE 6 : LIVRAISON

Presente le resultat final :

```
EMAIL DE FORMATION LIVRE
================================================
Template : emails/[nom].tsx
HTML exporte : out/[nom].html
Score pedagogique : X/80

RESUME :
- [N] sections pedagogiques
- [N] composants visuels utilises
- [N] faits verifies
- Compatible : Gmail, Outlook, Apple Mail
- Responsive : Desktop + Mobile teste

POUR ENVOYER :
1. Ouvrir out/[nom].html
2. Copier le HTML
3. Coller dans votre outil d'envoi (Resend, Brevo, etc.)
   Ou utiliser l'API Resend avec ce template directement.

POUR MODIFIER :
1. Editer emails/[nom].tsx
2. npm run dev → voir en live sur localhost:3000
3. npm run export → regenerer le HTML
================================================
```
