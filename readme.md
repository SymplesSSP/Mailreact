# Mailreact — Emails de formation IA (E.Leclerc / Praxelia)

Emails pedagogiques de formation IA construits avec [React Email](https://react.email). Template principal : recapitulatif Claude Cowork pour E.Leclerc Frouard (session J11, mars 2026).

## Stack

- **React Email** — composants React pour emails compatibles Gmail/Outlook/Apple Mail
- **TypeScript** — typage des props (destinataire, magasin)
- **Tailwind** (via React Email) — utilitaires CSS inline
- **Font Inter** — typographie web

## Commandes

```bash
npm install     # Installer les dependances
npm run dev     # Preview live sur localhost:3000
npm run build   # Build des templates
npm run export  # Export HTML dans out/
```

## Structure

```
emails/
  leclerc-cowork-formation.tsx   # Template principal E.Leclerc
  static/
    leclerc-logo.png             # Logo E.Leclerc officiel
    demo-skill-goodays-leclerc.gif    # Demo creation skill
    demo-reponse-goodays-leclerc.gif  # Demo skill en action
    thumb-skill-creation.png     # Thumbnail demo 1
    thumb-skill-action.png       # Thumbnail demo 2
out/                             # HTML exporte (gitignore)
```

## Template E.Leclerc Cowork Formation

### Sections (12)
1. **Header** — Logo E.Leclerc + badge session + titre Claude Cowork
2. **Intro** — Personnalise (destinataire, magasin) + stats (50+/7/24/7)
3. **Actu IA semaine** — Timeline 23-29 mars 2026 (Computer Use, Dispatch, Auto Mode, Apps mobile, Claude Mythos)
4. **7 fonctionnalites** — Feature cards + video webinaire + liens doc officiels
5. **Focus Skills** — Pourquoi, comment creer, cycle de vie, demos cliquables, skills integrees
6. **Prompts creation skills** — 4 prompts pour creer ses propres skills (Goodays, rapport hebdo, CR, adaptatif)
7. **Prompts metier** — 7 prompts E.Leclerc (dispatch, taches programmees, Goodays, CR, computer use, connecteurs)
8. **Process TSE + Drive + Claude** — Passerelle Google Drive entre TSE et Claude (4 etapes)
9. **React Email** — Comment ce mail est construit
10. **Next Steps** — 4 etapes + CTA download
11. **Footer** — Guillaume Wilmin, IPLN, Praxelia

### Couleurs (extraites du logo E.Leclerc)
- Bleu : `#0B70B5`
- Orange : `#ED8B18`
- Bleu clair : `#EAF3FB`
- Orange clair : `#FFF7EB`

### Personnalisation
Props TypeScript :
```tsx
interface LeclercCoworkFormationProps {
  destinataire?: string;  // "Monsieur Alazard"
  magasin?: string;       // "E.Leclerc Frouard"
}
```

## Demos capturees sur claude.ai

2 conversations reelles enregistrees :
1. **Creation skill Goodays** — Claude genere un SKILL.md complet avec classification par priorite, charte de ton E.Leclerc, variables par magasin
2. **Skill en action** — Avis client 2/5 → Claude redige la reponse professionnelle et propose des ajustements

GIFs dans `emails/static/`. A uploader sur Google Drive et remplacer les URLs dans `DEMO_URLS` du template.

## TODO

Voir les Issues GitHub du projet.

## Auteur

Guillaume Wilmin — [IPLN](https://www.ipln.fr) | [Praxelia](https://www.praxelia.com)
