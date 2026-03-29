# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Email project for building visual, pedagogical email templates for professional training (formations IA). The main template is a Cowork formation invitation for E.Leclerc (`leclerc-cowork-formation.tsx`). The goal is to create polished, branded emails that present training content in a visually engaging and educational way.

## Commands

```bash
npm run dev       # Start preview server at localhost:3000
npm run build     # Build all email templates
npm run export    # Export emails to static HTML in out/
```

## Architecture

- **`emails/`** — React Email templates (`.tsx`). Each file exports a default React component that renders an email. Uses `@react-email/components` (Body, Button, Column, Container, Head, Heading, Html, Img, Link, Section, Tailwind, Text, etc.)
- **`emails/static/`** — Images and GIFs embedded in emails (logos, illustrations)
- **`out/`** — Exported static HTML output from `npm run export`

## Email Template Conventions

- Templates use inline styles (email client compatibility), not CSS files
- Brand colors are defined as constants at the top of each template (e.g., `LECLERC_BLUE`, `LECLERC_ORANGE`)
- Props interfaces define customizable fields (e.g., `destinataire`, `magasin`)
- Static assets referenced via `emails/static/` path
- Components like `VideoThumbnail`, `FeatureCard` are defined inline within the template file, not extracted to shared modules

## Design Philosophy

- Emails must be **visuellement riches et pedagogiques** — not plain text with a link
- Use sections, cards, icons, color coding to structure training content
- Each email should tell a story: context, what they'll learn, how it works, call to action
- Optimize for readability on mobile (single column, large touch targets)
- Compatible with major email clients (Gmail, Outlook, Apple Mail)
