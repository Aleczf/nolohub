# Nolo Vault — Website UI Kit

Recreation high-fidelity del sito editoriale Nolo Vault. Quattro screen principali, tutti dentro `index.html` come click-thru prototype:

- **Home** — hero asimmetrico (articolo principale + colonna laterale Vault Pick + mini-articoli), griglia recensioni, blocco database invertito, newsletter.
- **Article (Tier 2 review)** — pagina prodotto singolo con score hero, ficha tecnica, corpo articolo, related.
- **Database** — listing invertito, filtri laterali, score-rows.
- **Newsletter** — landing iscrizione + ultimo numero.

## File

```
ui_kits/website/
  index.html          ← entry point, switch tra le 4 screen
  Header.jsx          ← nav sticky + monogramma
  Footer.jsx
  Home.jsx
  Article.jsx
  Database.jsx
  Newsletter.jsx
  components.jsx      ← kicker, score, badge pick, article card, db row, button
```

## Riferimenti

Il design segue **`colors_and_type.css`** dal root. Tutti i token (`--nv-*`) sono già caricati. Le icone sono in `assets/icons/`, il logo in `assets/logo/`.
