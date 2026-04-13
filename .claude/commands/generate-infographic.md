---
name: generate-infographic
description: "Genere une infographie professionnelle avec Gemini (Nano Banana Pro / Imagen 4) pour integration dans un email React Email. Optimise automatiquement (taille, transparence, compression)."
user_invocable: true
arguments:
  - name: sujet
    description: "Description de l'infographie a generer (ex: 'framework ICID en 4 colonnes', '7 agents ClawdBot en hub-spoke')"
    required: true
  - name: filename
    description: "Nom du fichier de sortie sans extension (ex: 'infographic-icid-framework'). Sera sauve dans emails/static/"
    required: true
  - name: palette
    description: "Palette de couleurs (ex: 'leclerc' pour bleu #0B70B5 + orange #ED8B18, ou couleurs custom)"
    required: false
---

# Generation d'Infographie Professionnelle — Gemini API

Tu es un expert en design d'infographies pour emails de formation professionnelle.
Tu travailles pour Guillaume Wilmin (IPLN / Praxelia), formateur IA.

**Sujet** : `$ARGUMENTS.sujet`
**Fichier** : `emails/static/$ARGUMENTS.filename.png`
**Palette** : `{{ palette | default: "leclerc (bleu #0B70B5, orange #ED8B18)" }}`

---

## MODELES DISPONIBLES (avril 2026)

| Modele | ID API | Force | Quand l'utiliser |
|--------|--------|-------|------------------|
| **Nano Banana Pro** | `gemini-3-pro-image-preview` | Meilleur texte, reasoning 4K | Infographies complexes, texte FR |
| **Nano Banana 2** | `gemini-3.1-flash-image-preview` | Rapide, 4K | Iterations rapides |
| **Nano Banana** | `gemini-2.0-flash-exp` | Gratuit, rapide | Brouillons, tests |
| **Imagen 4** | `imagen-4.0-generate-001` | Photorealiste | Photos, pas diagrammes |

**Defaut recommande** : `gemini-3-pro-image-preview` (Nano Banana Pro)
**Fallback si erreur** : `gemini-2.0-flash-exp` (Nano Banana original, free tier)

---

## PHASE 1 : CONSTRUCTION DU PROMPT (critique)

### Regle n°1 : Conversation en 2 etapes

Ne genere PAS l'image directement. D'abord, elabore le prompt parfait.

### Framework ICS renforce pour infographies

Construis le prompt en 3 blocs :

```
IMAGE : [type de visuel] [layout] [dimensions] [fond]
Ex: "infographie professionnelle horizontale, 4 colonnes, fond blanc pur, 1200x600px"

CONTENT : [chaque element textuel ENTRE GUILLEMETS]
Ex: 
- Titre "FRAMEWORK ICID" en gras
- Colonne 1 : cercle orange, lettre "I", sous-titre "Instruction"
- Texte sous colonne 1 : "Le verbe d'action"
[CHAQUE mot de texte doit etre entre guillemets dans le prompt]

STYLE : [palette] [police] [effets] [contraintes]  
Ex: "design corporate, palette bleu #0B70B5 orange #ED8B18, 
sans-serif, ombres legeres, coins arrondis, resolution maximale"
```

### Regles critiques pour le texte

1. **TOUT le texte entre guillemets** dans le prompt — c'est la regle n°1
2. **Limiter le texte** : max 30-40 mots de texte total dans l'image
3. **Pas d'accents** dans le texte demande (Gemini fait des fautes FR) — OU utiliser PIL pour ajouter le texte apres
4. **Gros texte** : demander min 24pt pour les titres, 16pt pour le body
5. **Verifier** chaque mot apres generation — regenerer si texte incorrect

### Palettes predefinies

- **Leclerc** : fond blanc, titres `#0B70B5`, accents `#ED8B18`, texte `#1a1a2e`
- **Praxelia** : fond blanc, violet `#7C3AED`, bleu `#2563EB`, texte `#1e293b`
- **Neutre** : fond blanc, bleu `#3B82F6`, gris `#64748b`, texte `#0f172a`

---

## PHASE 2 : GENERATION

### Commande Python

```bash
cd /Volumes/GitHub_SSD/Mailreact

python3 scripts/generate-infographic.py \
  --prompt "LE PROMPT CONSTRUIT EN PHASE 1" \
  --output "emails/static/$ARGUMENTS.filename.png" \
  --model "gemini-3-pro-image-preview" \
  --aspect-ratio "16:9" \
  --max-width 1200 \
  --max-kb 400 \
  --api-key "$GEMINI_API_KEY"
```

### Options aspect-ratio selon le type

| Type d'infographie | Aspect ratio | Dimensions approx |
|----|----|----|
| Horizontale (timeline, flow) | `16:9` | 1200x675 |
| Carree (hub-spoke, cycle) | `1:1` | 800x800 |
| Verticale (liste, steps) | `3:4` | 800x1067 |

### Si le modele echoue

1. Essayer `gemini-2.0-flash-exp` (fallback gratuit)
2. Si le texte est faux : ajouter `--raw` et corriger avec PIL manuellement
3. Si l'image est generique : enrichir le prompt avec plus de details visuels

---

## PHASE 3 : VERIFICATION VISUELLE

### Obligatoire : ouvrir et verifier l'image

```bash
# Lire l'image generee pour la verifier visuellement
```

Utilise l'outil Read pour voir l'image generee. Verifie :

1. **Texte** : chaque mot est correct ? pas de fautes ? lisible ?
2. **Layout** : le schema est clair et bien organise ?
3. **Couleurs** : la palette est respectee ?
4. **Lisibilite** : le texte sera lisible dans un email a 80% de largeur ?
5. **Taille fichier** : < 400KB ?

### Si le texte est incorrect

Option A : Regenerer avec un prompt corrige (reformuler le texte)
Option B : Post-traitement PIL pour remplacer le texte :

```python
from PIL import Image, ImageDraw, ImageFont
img = Image.open("emails/static/$ARGUMENTS.filename.png")
draw = ImageDraw.Draw(img)
# Ajouter texte correct par-dessus
font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
draw.text((x, y), "Texte correct", fill="#0B70B5", font=font)
img.save("emails/static/$ARGUMENTS.filename.png")
```

---

## PHASE 4 : INTEGRATION EMAIL

### Ajout dans le template React Email

```tsx
<Img
  src="https://symplesssp.github.io/Mailreact/emails/static/$ARGUMENTS.filename.png"
  width="400"
  alt="Description accessible de l'infographie"
  style={{ width: '80%', display: 'block', margin: '0 auto 4px auto' }}
/>
<Text style={{ fontSize: '11px', color: '#64748b', textAlign: 'center' as const, margin: '0 0 24px 0', fontStyle: 'italic' }}>
  Infographie generee avec Gemini
</Text>
```

### Regles d'integration

- **width="400"** sur l'attribut HTML (pas de height pour garder le ratio)
- **style width 80%** pour centrer avec marge
- **Alt text descriptif** pour accessibilite
- **Caption italique** en dessous

---

## PHASE 5 : ITERATIONS

Si l'infographie n'est pas satisfaisante :

1. **Identifie** ce qui ne va pas (texte, layout, couleurs, lisibilite)
2. **Ajuste** le prompt (plus de details sur le point faible)
3. **Regenere** avec le meme script
4. **Compare** avec la version precedente

Max 3 iterations. Si apres 3 essais le resultat n'est pas bon, propose une alternative PIL (generation 100% programmatique).

---

## RAPPORT FINAL

```
INFOGRAPHIE GENEREE
================================================
Fichier : emails/static/$ARGUMENTS.filename.png
Modele : [modele utilise]
Taille : [X KB]
Dimensions : [WxH px]
Iterations : [N]

GitHub Pages URL :
https://symplesssp.github.io/Mailreact/emails/static/$ARGUMENTS.filename.png

Integration TSX :
<Img src="https://symplesssp.github.io/Mailreact/emails/static/$ARGUMENTS.filename.png" width="400" alt="..." />

Verification texte : [OK | Corrige avec PIL]
================================================
```
