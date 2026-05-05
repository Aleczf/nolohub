/* eslint-disable */
const Newsletter = () => {
  const PAD = "clamp(20px, 4vw, 56px)";
  return (
    <>
      {/* HERO */}
      <section style={{ padding: `80px ${PAD} 64px`, maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <Kicker>NEWSLETTER · OGNI VENERDÌ</Kicker>
            <h1 className="nv-display" style={{ marginTop: 18, fontSize: "clamp(64px, 9vw, 144px)" }}>
              Un prodotto.<br/>Un'analisi.<br/>Una settimana.
            </h1>
            <p style={{ fontSize: 22, lineHeight: 1.45, color: "var(--nv-ink-soft)", marginTop: 24, maxWidth: 580 }}>
              Settimanale curato da Alessandro Frau. Una recensione approfondita e una lettura ragionata dal mondo NoLo. Niente sponsor, niente affiliazioni nascoste.
            </p>
          </div>
          <form onSubmit={e => e.preventDefault()} style={{
            border: "1px solid var(--nv-ink)", padding: 32, background: "var(--nv-paper-deep)",
          }}>
            <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--nv-ink-mute)", marginBottom: 14 }}>
              4.247 LETTORI · GRATIS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input type="email" placeholder="alessandro@vino.it" style={{
                fontFamily: "var(--nv-font-body)", fontSize: 16,
                padding: "14px 16px", border: "1px solid var(--nv-ink)", borderRadius: 4,
                background: "var(--nv-paper)", color: "var(--nv-ink)",
              }}/>
              <Button variant="primary" type="submit" style={{ width: "100%", padding: "14px 22px", fontSize: 16 }}>
                Iscriviti gratis
              </Button>
            </div>
            <Caption><div style={{ marginTop: 14, lineHeight: 1.5 }}>
              Ogni venerdì alle 7:30. Cancellazione in un click. Powered by Beehiiv. Niente spam, mai.
            </div></Caption>
          </form>
        </div>
      </section>

      <div style={{ padding: `0 ${PAD}`, maxWidth: 1440, margin: "0 auto" }}>
        <Rule />
      </div>

      {/* LATEST ISSUE */}
      <section style={{ padding: `64px ${PAD}`, maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32 }}>
          <h2 className="nv-headline" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>Ultimo numero</h2>
          <Meta>Edizione 014 · 2 maggio 2026</Meta>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 48, alignItems: "start" }}>
          <Photo ratio="4/5" tone="deep" label="Edizione 014 · Lallier"/>
          <div>
            <Kicker>QUESTO VENERDÌ</Kicker>
            <h3 style={{ fontFamily: "var(--nv-font-display)", fontWeight: 800, fontSize: 56, lineHeight: 1, letterSpacing: "-.015em", textTransform: "uppercase", margin: "16px 0 24px" }}>
              Il Dosaggio<br/>è la Firma
            </h3>
            <p style={{ fontSize: 19, lineHeight: 1.55, marginBottom: 16 }}>
              Lallier de-alcoholised, brut nature: il primo champagne smontato che resiste al confronto con la versione tradizionale. Tutto si gioca su tre grammi.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--nv-ink-soft)", marginBottom: 24 }}>
              In più: tre amari NoLo italiani provati alla cieca, e perché il dealcolato premium fatica ancora a uscire dalla nicchia.
            </p>
            <Button variant="ghost">Leggi nel browser →</Button>
          </div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section style={{ padding: `48px ${PAD} 96px`, maxWidth: 1440, margin: "0 auto" }}>
        <Kicker>ARCHIVIO</Kicker>
        <div style={{ marginTop: 18 }}>
          {[
            ["013", "25 apr 2026", "Mareterra Zero, e il vermouth che non chiede sconti"],
            ["012", "18 apr 2026", "De-alcolazione a freddo: cosa cambia rispetto al sotto vuoto"],
            ["011", "11 apr 2026", "Crodino, vent'anni dopo: cosa è successo agli aperitivi senza alcol"],
            ["010", "04 apr 2026", "Erika Bonacorsi: «Lavorare con il gusto, non contro l'alcol»"],
            ["009", "28 mar 2026", "Tre kombuchas italiani provati alla cieca"],
          ].map(([n, d, t], i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "80px 140px 1fr 80px",
              gap: 24, alignItems: "baseline",
              padding: "20px 0", borderTop: "1px solid var(--nv-rule-soft)",
              fontSize: 18,
            }}>
              <div style={{ fontFamily: "var(--nv-font-display)", fontWeight: 800, fontSize: 28, color: "var(--nv-accent)", letterSpacing: "-.02em" }}>{n}</div>
              <Meta>{d}</Meta>
              <div style={{ fontWeight: 500 }}>{t}</div>
              <div style={{ textAlign: "right", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nv-ink-mute)" }}>Leggi →</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

window.Newsletter = Newsletter;
