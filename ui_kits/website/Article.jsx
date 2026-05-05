/* eslint-disable */
const Article = ({ onNav }) => {
  const PAD = "clamp(20px, 4vw, 56px)";
  return (
    <>
      <article style={{ padding: `48px ${PAD} 0`, maxWidth: 1440, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nv-ink-mute)", marginBottom: 32 }}>
          Journal / Recensioni / Champagne
        </div>

        {/* HEADER */}
        <div style={{ display: "grid", gridTemplateColumns: "8fr 4fr", gap: 48, alignItems: "start" }}>
          <div>
            <Kicker>RECENSIONE — DEALC. CHAMPAGNE</Kicker>
            <h1 className="nv-display" style={{ marginTop: 18, fontSize: "clamp(56px, 7.5vw, 110px)" }}>
              Il dosaggio<br/>è la firma
            </h1>
            <p style={{ fontSize: 22, lineHeight: 1.45, color: "var(--nv-ink-soft)", maxWidth: 720, marginTop: 24 }}>
              Lallier de-alcoholised, brut nature: il primo champagne smontato che resiste al confronto con la versione tradizionale. Tutto si gioca su tre grammi.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 28, paddingTop: 18, borderTop: "1px solid var(--nv-rule-soft)", alignItems: "center" }}>
              <Meta>Alessandro Frau — 04 maggio 2026</Meta>
              <Meta>7 min lettura</Meta>
              <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
                <Button variant="ghost" size="sm">Salva</Button>
                <Button variant="ghost" size="sm">Condividi</Button>
              </div>
            </div>
          </div>

          {/* SCORE PANEL */}
          <aside style={{ background: "var(--nv-ink-bg)", color: "var(--nv-ink-fg)", padding: 28, border: "1px solid var(--nv-ink)" }}>
            <VaultPickBadge />
            <div style={{ display: "flex", alignItems: "flex-end", gap: 14, marginTop: 24, marginBottom: 24 }}>
              <Score value="91" size="xl" invert />
              <div style={{ fontSize: 13, color: "var(--nv-ink-fg-mute)", paddingBottom: 12, letterSpacing: ".08em", textTransform: "uppercase" }}>
                / 100
              </div>
            </div>
            <hr style={{ border: 0, borderTop: "1px solid var(--nv-ink-rule)", margin: "0 0 20px" }}/>
            {[
              ["Categoria", "Champagne dealc."],
              ["Paese", "Francia · Côte des Blancs"],
              ["Produttore", "Lallier"],
              ["Vintage", "2022"],
              ["Dosaggio", "Brut Nature · 2g/L"],
              ["ABV", "0,4%"],
              ["Prezzo", "€42 · 750 ml"],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: i ? "1px solid var(--nv-ink-rule)" : "0", fontSize: 13 }}>
                <span style={{ color: "var(--nv-ink-fg-mute)", letterSpacing: ".08em", textTransform: "uppercase" }}>{k}</span>
                <span style={{ fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </aside>
        </div>

        {/* HERO IMAGE */}
        <div style={{ marginTop: 56 }}>
          <Photo ratio="21/9" tone="deep" label="Foto: Lallier — vinificazione 2022"/>
          <Caption><div style={{ marginTop: 10 }}>Lallier, vasche di vinificazione presso la maison di Aÿ. La de-alcolazione avviene a freddo per preservare gli esteri.</div></Caption>
        </div>

        {/* BODY — single column, larga */}
        <div style={{ maxWidth: 720, margin: "64px auto 0", fontSize: 18, lineHeight: 1.65 }}>
          <p style={{ fontSize: 22, lineHeight: 1.55, fontWeight: 400 }}>
            <span style={{ fontFamily: "var(--nv-font-display)", fontWeight: 800, fontSize: 64, lineHeight: .8, float: "left", marginRight: 12, marginTop: 6, color: "var(--nv-accent)" }}>L</span>
            a parte difficile del dealcolato non è togliere l'etanolo. È ricostruire ciò che l'etanolo teneva in piedi: tensione, spalla acida, percezione del corpo. Lallier qui parte da una base solida — vendemmia 2022 in Côte des Blancs, chardonnay in purezza — e ricostruisce la tensione con un dosaggio minimo, due grammi per litro. Il risultato è uno dei pochi champagne smontati che <em>non</em> ti chiede di abbassare le aspettative.
          </p>
          <p>
            All'apertura il naso è discreto: agrumi maturi, mela cotogna, una nota panificata che arriva e va. Niente di smaccato. È un vino che non urla per coprire ciò che gli manca.
          </p>
          <h2 style={{ fontFamily: "var(--nv-font-display)", fontWeight: 800, fontSize: 40, letterSpacing: "-.015em", textTransform: "uppercase", margin: "40px 0 16px", lineHeight: 1.05 }}>
            La firma è nel dosaggio
          </h2>
          <p>
            Tutto si gioca su quei tre grammi. Lallier li dichiara come «brut nature di compensazione» — formula che il disciplinare non prevede ufficialmente ma che descrive bene la cosa: il dosaggio non addolcisce, costruisce. Senza, il vino sarebbe magro.
          </p>
          <p>
            Sul palato la bolla è fine, integrata, mai aggressiva. La persistenza è onesta — sette, otto secondi — il che è già un risultato per la categoria. Il finale ritorna sull'agrume e su una nota leggermente salina che fa pensare al gesso della Côte.
          </p>
          <blockquote style={{
            margin: "40px 0", padding: "24px 0 24px 32px",
            borderLeft: "2px solid var(--nv-accent)",
            fontFamily: "var(--nv-font-display)", fontWeight: 800,
            fontSize: 36, lineHeight: 1.1, letterSpacing: "-.01em", textTransform: "uppercase",
          }}>
            «Non è un vino che chiede sconti. È uno champagne che ha smesso di essere alcolico, non di essere uno champagne.»
          </blockquote>
          <p>
            Resta una questione: a €42, Lallier dealcolato costa quanto la sua versione classica entry-level. Per chi cerca un'occasione genuinamente NoLo, è la miglior bottiglia oggi sul mercato italiano. Per chi sta valutando se il dealcolato premium <em>esiste</em>, la risposta è qui.
          </p>
        </div>

        {/* RELATED */}
        <div style={{ marginTop: 96, paddingTop: 32, borderTop: "1px solid var(--nv-ink)" }}>
          <Kicker>CONTINUA A LEGGERE</Kicker>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 24 }}>
            <ArticleCard tone="warm" kicker="ANALISI" title="Perché il dealcolato premium fatica a uscire dalla nicchia" byline="Alessandro Frau · 28 apr"/>
            <ArticleCard tone="sage" kicker="RECENSIONE — VERMOUTH" title="Mareterra Zero: il primo vermouth italiano senza zucchero che funziona" byline="Alessandro Frau · 02 mag"/>
            <ArticleCard tone="paper" kicker="TECNICA" title="De-alcolazione a freddo: cosa cambia rispetto al sotto vuoto" byline="Redazione · 18 apr"/>
          </div>
        </div>
      </article>
    </>
  );
};

window.Article = Article;
