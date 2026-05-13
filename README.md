# Nolo Vault — Design System

> **Working title.** "Nolo Vault" is in the dominio-validation phase. The system is designed to absorb minor naming variations (e.g. *Nolo Journal*, *The Vault*) without changes to the visual language.

Nolo Vault è una **testata editoriale italiana premium** dedicata al mondo NoLo (bevande non alcoliche e a bassa gradazione premium). Non è un aggregatore, non è un blog wellness, non è un retailer. È media verticale autoriale, modellato su una triade di riferimenti: **New Yorker** per il respiro narrativo, **Il Post** per la chiarezza italiana, **Pitchfork** per l'autorità di giudizio e il sistema di scoring.

Founder: **Alessandro Frau** — sommelier AIS III, background fine dining (Troisgros, Seta by Mandarin Oriental) e sviluppo tecnologico. La voce editoriale è la sua; il design la **supporta, non la sovrasta**.

---

## I tre prodotti

Il sito ha tre anime, gerarchicamente differenti:

| Prodotto       | Ruolo                                                                                       | Peso in home |
|----------------|---------------------------------------------------------------------------------------------|--------------|
| **Journal**    | Articoli editoriali, analisi, recensioni 600–1.200 parole. Score proprietario su scala 60–100. | Domina       |
| **Database**   | Catalogo strutturato 400+ prodotti NoLo. Filtrabile. Tier 1 listing / Tier 2 review / Tier 3 Vault Pick. | Secondario, navigabile |
| **Newsletter** | Settimanale. Un prodotto + un'analisi per numero. Stack Beehiiv.                            | Sempre presente, non invasiva |

Il **Database inverte la palette** (sfondo `#1A1A18`, score arancio) come segnale di cambio modalità. È una scelta tipograficamente identitaria.

---

## Pubblico

Doppio, e il sito deve parlare a entrambi senza che si accorgano di condividere lo spazio:

1. **Appassionati con background vino/beverage** — cercano profondità tecnica, terminologia precisa, scoring rigoroso.
2. **Giovani italiani che si avvicinano al NoLo come scelta culturale generazionale** — non come rinuncia. Tono curatoriale, mai lifestyle-coach.

---

## Stack tecnico di riferimento

- **Frontend:** Astro statico, deploy Vercel
- **Database:** Notion + sync
- **Newsletter:** Beehiiv (i template HTML qui dentro sono già compatibili)
- **Vincoli:** niente dipendenze pesanti, niente animazioni che richiedano framework JS complessi

---

## Sources e materiali ricevuti

| Sorgente                          | Stato                                                                    |
|-----------------------------------|--------------------------------------------------------------------------|
| `github.com/Aleczf/nolohub`       | **Repo vuoto al momento dell'esplorazione** (nessun commit su `main`).   |
| Brief testuale (founder)          | Ricevuto integralmente — è la fonte di verità di questo design system.   |
| Riferimenti visivi citati         | Zero.eu, RollingWine, Apartamento, Guardian Long Reads, Pitchfork.       |

> **CAVEAT** — non avendo trovato codice nel repo, l'identità visiva è stata derivata interamente dal brief. Le UI kit qui dentro sono **proposte**, non recreations: appena Alessandro pubblica il primo commit possiamo iterare contro il codice reale.
> 

---

## Index — cosa trovi nel root

```
README.md                  ← questo file
SKILL.md                   ← contratto skill cross-compatibile (Claude Code)
colors_and_type.css        ← tutti i token: colore, tipo, spacing, radii
preview/                   ← cards del Design System tab (browse-friendly)
ui_kits/
  website/                 ← Homepage, Article (Tier 2), Database, Newsletter
    index.html             ← entry point click-thru
    *.jsx                  ← componenti riutilizzabili
assets/
  logo/                    ← lockup principale, monogramma, favicon
  icons/                   ← icone botaniche tratto lineare 1.2px
```

---

## CONTENT FUNDAMENTALS

### Voce

**Curatoriale, non promozionale.** L'articolo non vende il prodotto: lo giudica. Il lettore arriva per **un'opinione informata**, non per essere convinto.

- **Lingua primaria:** italiano. Termini tecnici stranieri (sommellerie, beverage industry) si lasciano in lingua originale, in *corsivo* la prima volta.
- **Persona:** **terza persona prevalente**, prima persona plurale ("abbiamo assaggiato", "leggiamo l'etichetta") quando il giudizio è esplicito. Mai "tu" — non è un blog di consigli.
- **Casing:** **frase normale** nei body, **UPPERCASE** solo nei display Barlow Condensed e nei kicker. Mai title-case all'inglese.
- **Punteggiatura italiana:** virgolette caporali « » per le citazioni, lineette lunghe — per gli incisi.
- **Numeri:** **sempre cifre per gli score** (88, non ottantotto). Quantità sotto dieci in lettere ("tre bottiglie", "88/100").

### Esempi di copy reale (tono target)

| Contesto         | ❌ NO                                          | ✅ SÌ                                                                    |
|------------------|------------------------------------------------|--------------------------------------------------------------------------|
| Titolo articolo  | "I 10 migliori NoLo del 2026!!"                | "Cosa beviamo quando smettiamo di bere"                                  |
| Kicker           | "TRENDING NOW"                                 | "RECENSIONE — VERMOUTH ZERO"                                             |
| Standfirst       | "Scopri questo prodotto incredibile!"          | "Lallier de-alcoholised, dosaggio brut nature: il primo champagne smontato che resiste al confronto." |
| CTA              | "Acquista subito"                              | "Leggi la scheda"                                                        |
| Vault Pick badge | "BEST CHOICE"                                  | "VAULT PICK"                                                             |
| Score caption    | "Voto: 88/100 ⭐"                               | "88 — Il dosaggio è la firma"                                            |

### Cosa NON fare

- **Mai emoji** in copy editoriale o UI. Mai. Nemmeno nei kicker.
- **Mai esclamativi** nei titoli. Mai claim assoluti ("il migliore", "definitivo").
- **Mai linguaggio wellness:** "benessere", "self-care", "mindful drinking", "lifestyle". Il NoLo qui è **scelta culturale**, non terapia.
- **Mai gergo da e-commerce:** "subito disponibile", "spedizione gratuita", "imperdibile".
- **Mai "scopri":** verbo da SEO. Si usa "leggi", "esplora", "consulta", "abbiamo provato".

---

## VISUAL FOUNDATIONS

### Filosofia

**Organico e autorevole.** Non artigianale-rustico, non tech-freddo. Il riferimento storico è la **stampa culturale italiana degli anni '70** — *Domus*, *Casabella* — riletta in registro contemporaneo.

### Tipografia — *contrasto di scala estremo*

Il principio centrale del sistema. Salti **60–100px display** che convivono con **caption 10–11px**. Niente gradazioni intermedie timide. Crea tensione visiva, ritmo editoriale, memorabilità.

| Ruolo        | Famiglia          | Peso | Size                | Casing      |
|--------------|-------------------|------|---------------------|-------------|
| Monument     | Barlow Condensed  | 800  | 64–128px (clamp)    | UPPERCASE   |
| Display      | Barlow Condensed  | 800  | 48–96px (clamp)     | UPPERCASE   |
| Headline     | Barlow Condensed  | 800  | 36–60px (clamp)     | UPPERCASE   |
| Title        | DM Sans           | 500  | 28px                | Sentence    |
| Lede         | DM Sans           | 400  | 20px                | Sentence    |
| Body         | DM Sans           | 400  | 17px / lh 1.55      | Sentence    |
| UI           | DM Sans           | 500  | 15px                | Sentence    |
| Meta         | DM Sans           | 400  | 13px                | Sentence    |
| Caption      | DM Sans           | 400  | 11px / 0.06em       | Sentence    |
| Micro        | DM Sans           | 400  | 10px                | UPPERCASE   |
| **Score**    | Barlow Condensed  | 800  | 72–144px (clamp)    | numeric     |

Display ha **letter-spacing leggermente negativo** (`-0.02em`). Score ha tracking ancora più stretto (`-0.04em`) e usa `tabular-nums`.

### Palette — *un colore di accento, e basta*

| Token             | Valore     | Uso                                                       |
|-------------------|------------|-----------------------------------------------------------|
| `--nv-paper`      | `#F5F2ED`  | Sfondo dominante. Avorio caldo, carta non patinata.       |
| `--nv-paper-deep` | `#ECE7DE`  | Secondo piano per separazioni delicate.                   |
| `--nv-ink`        | `#1A1A18`  | Testo, bordi netti, fondo del Database (inversione).      |
| `--nv-ink-soft`   | `#4A4A46`  | Body secondario.                                          |
| `--nv-ink-mute`   | `#8A8780`  | Meta, caption.                                            |
| `--nv-accent`     | `#C4531A`  | **Unico colore.** Kicker, badge Vault Pick, score, CTA, dettagli logo. |
| `--nv-accent-deep`| `#9E3F12`  | Hover/press, score nel database invertito.                |

**Regola assoluta:** un colore dominante forte su campo neutro. **Niente palette multipla, niente gradazioni di azzurri/verdi/sage.**

### Backgrounds e materialità

- **Mai bianco puro.** Sempre `--nv-paper` (`#F5F2ED`).
- **Niente gradienti.** Mai. Né sfondi, né bottoni, né overlay.
- **Niente texture/grana applicate via CSS.** La matericità arriva dalle **immagini fotografiche** (warm tone, pellicola, mai patinato lucido).
- **Imagery vibe:** caldo, naturale, ombre morbide, leggero grano. Mai HDR, mai saturazioni spinte. Stampa culturale italiana, non Instagram.

### Layout

- **Griglia editoriale a 12 colonne** con gutter 24px.
- **Rotture intenzionali nell'asimmetria.** Hero = articolo principale 8 col + colonna laterale 4 col (Pick + mini-articoli).
- **Inversione del Database** come segnale di cambio modalità.
- **Newsletter:** titolo display enorme a sinistra, form a destra. Mai centrato.
- **Bordi:** `1px solid var(--nv-ink)`. Hairline `1px solid var(--nv-rule-soft)` per separazioni soft.
- **Niente card con ombra.** Mai. Si usano solo bordi netti.
- **Border-radius:** **massimo 2–4px**. Ideale 0px sui blocchi editoriali, 2px su badge/score-pill, 4px solo sui campi form.

### Animazioni e interazioni

Sobrie. Il sito è una **rivista**, non un'app.

- **Transizioni:** 120–180ms, `ease` standard. Mai bounce, mai spring.
- **Hover su link:** sostituisce il colore underline con `--nv-accent` e il testo passa anch'esso ad accento.
- **Hover su card articolo:** il titolo passa ad accento; nient'altro si muove.
- **Hover su CTA pieno:** sfondo passa da `--nv-accent` a `--nv-accent-deep`. Niente translate, niente scale.
- **Press:** sposta di 1px in basso (`transform: translateY(1px)`), nessun ring.
- **Niente parallax, niente reveal-on-scroll, niente lottie.** Stack-compatible (Astro statico).

### Borders, shadows, capsule

- **Shadow:** **non esistono nel sistema.** Se ne avete bisogno, state sbagliando componente.
- **Capsule (pill):** ammesse solo per i **filtri** del Database e i **tag categoria** in mobile. Border `1px solid var(--nv-ink)`, radius `2px` (è un rettangolo, non una capsula vera).
- **Score pill** nel listing Database: rettangolo `1A1A18` con score arancio dentro. **Mai cerchio.**

### Trasparenza e blur

- **Mai blur** su elementi UI.
- **Trasparenze** ammesse solo per la **sticky nav** sopra hero immagine (sfondo `rgba(245,242,237,0.92)` + hairline bottom). Mai backdrop-blur.

### Imagery temperature

Calda. Naturale. Punteggiatura ombre morbide. **Mai b&w**, **mai cool blue**. Se una foto è troppo fredda, va riscaldata in editing prima di entrare.

---

## ICONOGRAPHY

### Sistema icone — botaniche, lineari, intenzionalmente imperfette

**Specifica:** stroke uniforme **1.2px**, pen-tool drawing, terminazioni `round`, joint `round`. Volutamente non pixel-perfect — la mano deve sentirsi.

**Soggetti:** **processi e ingredienti**, **mai bottiglie**.
- Foglia di luppolo, bacca di ginepro, fiore di sambuco, foglia di tè, chicco di caffè, agrume, radice di zenzero.
- Processi: distillazione, fermentazione, infusione, filtrazione.

**Ogni categoria del Database ha la propria icona.** Funzione **strutturale**, non decorativa. Stanno accanto al nome categoria, mai come elemento grafico fine-a-se-stesso.

### Format

- **SVG inline**, viewBox 24×24, stroke `currentColor`, fill `none`.
- Si trovano in `assets/icons/`.
- Per UI di sistema (chevron, search, close, arrow) si usa lo **stesso linguaggio** — stroke 1.2px, terminazioni round — non un set Heroicons importato.

### Non-uso

- **Mai emoji**, in nessun contesto. Né come icona, né come decorazione, né nei kicker.
- **Mai unicode chars come icone** ("→ ★ ●"). Tranne il **carattere `—` (em-dash)** come separatore editoriale, fortemente italiano.
- **Mai icon-font** (FontAwesome ecc.).

### Sostituzione segnalata al founder

Le icone in `assets/icons/` sono **proposte iniziali tracciate secondo la specifica**. Vanno riviste con un illustratore prima del go-live — il brief chiede esplicitamente "volutamente imperfetto" e questo richiede mano umana, non output automatico. **🚩 ASK ALESSANDRO:** illustrator di riferimento per il set definitivo (12–16 icone categoria + 8 UI).

---

## Logo e identità

Il logo principale è un **lockup tipografico** in Barlow Condensed 800: la parola `NOLO` in `--nv-ink` e la parola `VAULT` in `--nv-accent`, sulla stessa riga, kerning stretto. Esiste anche un **monogramma** circolare con la `V` per favicon e applicazioni quadrate.

Vedi `assets/logo/` per le varianti (lockup, monogramma, inverso, favicon).

---

## Caveat e prossimi passi

- 🚩 **Repo `Aleczf/nolohub` vuoto** al momento dell'esplorazione. Quando ci saranno i primi commit, le UI kit vanno riallineate al codice reale.
- 🚩 **Icone botaniche** sono proposte iniziali — vanno passate a un illustratore per il "tratto umano" richiesto dal brief.
- 🚩 **Foto** non sono incluse: il system parla di temperatura cromatica ma non fornisce libreria. Va costruita (commissione fotografica o licensing curatoriale).
- 🚩 **Naming:** il design è dimensionato per "Nolo Vault" ma il lockup funziona anche con "Nolo Journal", "The Vault", "Vault Italia". Nessun rework grafico necessario per nome a 1–2 parole.
