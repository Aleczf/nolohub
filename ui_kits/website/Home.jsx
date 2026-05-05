/* eslint-disable */
const Home = ({ onNav, onArticle }) => {
  const PAD = "clamp(20px, 4vw, 56px)";
  const reviews = [
    { tone: "warm", k: "RECENSIONE — VERMOUTH", t: "Mareterra Zero: il primo vermouth italiano senza zucchero che funziona", b: "Alessandro Frau · 02 mag" },
    { tone: "deep", k: "ANALISI", t: "Perché il dealcolato premium non riesce a uscire dalla nicchia", b: "Alessandro Frau · 28 apr" },
    { tone: "sage", k: "RECENSIONE — AMARO", t: "Tre amari NoLo italiani provati alla cieca: il risultato sorprende", b: "Alessandro Frau · 24 apr" },
    { tone: "paper", k: "INTERVISTA", t: "Erika Bonacorsi: «Lavorare con il gusto, non contro l'alcol»", b: "Redazione · 20 apr" },
  ];

  return (
    <>
      {/* HERO — asimmetrico 8/4 */}
      <section style={{ padding: `48px ${PAD} 24px`, maxWidth: 1440, margin: "0 auto" }}>
        <Kicker>EDIZIONE 014 — 04 MAGGIO 2026</Kicker>
        <div style={{ display: "grid", gridTemplateColumns: "8fr 4fr", gap: 48, marginTop: 24, alignItems: "start" }}>
          {/* main story */}
          <article onClick={() => onArticle()} style={{ cursor: "pointer" }}>
            <Photo ratio="16/10" tone="deep" label="Champagne · Lallier 2022" />
            <div style={{ marginTop: 24 }}>
              <Kicker>RECENSIONE — DEALC. CHAMPAGNE</Kicker>
              <h1 className="nv-display" style={{ marginTop: 14, marginBottom: 16, fontSize: "clamp(48px, 6vw, 84px)" }}>
                Il dosaggio<br/>è la firma
              </h1>
              <p style={{ fontSize: 22, lineHeight: 1.4, color: "var(--nv-ink-soft)", maxWidth: 640, marginBottom: 14 }}>
                Lallier de-alcoholised, brut nature: il primo champagne smontato che resiste al confronto con la versione tradizionale. Tutto si gioca su tre grammi.
              </p>
              <Meta>Alessandro Frau — 04 maggio 2026 · 7 min lettura</Meta>
            </div>
          </article>

          {/* sidebar — Vault Pick + mini articles */}
          <aside style={{ borderLeft: "1px solid var(--nv-ink)", paddingLeft: 32 }}>
            <div style={{ marginBottom: 32 }}>
              <VaultPickBadge />
              <div style={{ display: "flex", alignItems: "flex-end", gap: 18, marginTop: 18, marginBottom: 14 }}>
                <Score value="91" size="lg" />
                <div style={{ fontSize: 14, color: "var(--nv-ink-mute)", paddingBottom: 8, letterSpacing: ".06em", textTransform: "uppercase" }}>
                  Su 100 — vintage 2022
                </div>
              </div>
              <h3 style={{ fontFamily: "var(--nv-font-body)", fontWeight: 500, fontSize: 22, lineHeight: 1.18, margin: 0 }}>
                Lallier de-alc. Brut Nature — Champagne, FR
              </h3>
            </div>
            <Rule soft />
            <div style={{ marginTop: 24 }}>
              <Kicker color="var(--nv-ink-soft)">DAL JOURNAL</Kicker>
              <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0" }}>
                {[
                  "Tre amari NoLo italiani provati alla cieca",
                  "Cosa beviamo quando smettiamo di bere",
                  "Il dealcolato spiegato dal disciplinare",
                ].map((t, i) => (
                  <li key={i} style={{
                    padding: "14px 0", borderTop: i ? "1px solid var(--nv-rule-soft)" : "0",
                    fontSize: 17, lineHeight: 1.3, fontWeight: 500,
                  }}>{t}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION: ULTIME RECENSIONI */}
      <section style={{ padding: `64px ${PAD}`, maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32, borderTop: "1px solid var(--nv-ink)", paddingTop: 18 }}>
          <h2 className="nv-headline" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>Ultime Recensioni</h2>
          <a onClick={() => onNav("database")} style={{
            fontSize: 13, letterSpacing: ".08em", textTransform: "uppercase",
            cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 4,
          }}>Tutto il database →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {reviews.map((r, i) => (
            <ArticleCard key={i} tone={r.tone} kicker={r.k} title={r.t} byline={r.b} onClick={onArticle}/>
          ))}
        </div>
      </section>

      {/* DATABASE BLOCK — inversione */}
      <section style={{ background: "var(--nv-ink-bg)", color: "var(--nv-ink-fg)", padding: `80px ${PAD}` }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--nv-accent)" }}>
                IL DATABASE — 412 PRODOTTI
              </div>
              <h2 className="nv-headline" style={{ marginTop: 18, fontSize: "clamp(40px, 5vw, 76px)" }}>
                Tutto quello che<br/>vale la pena bere
              </h2>
            </div>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--nv-ink-fg-mute)", maxWidth: 460, justifySelf: "end" }}>
              Catalogo navigabile per categoria, paese, metodo produttivo e score. Filtri precisi, niente algoritmi opachi. Solo prodotti che abbiamo assaggiato.
            </p>
          </div>
          <div>
            {[
              { score: "91", name: "Lallier de-alc. Brut Nature", producer: "Lallier", country: "Francia", category: "Champagne", price: "€42" },
              { score: "88", name: "Mareterra Vermouth Zero", producer: "Distilleria Mareterra", country: "Italia", category: "Vermouth", price: "€26" },
              { score: "82", name: "Three Cents Bitter Lemon NA", producer: "Three Cents", country: "Grecia", category: "Mixer", price: "€8" },
              { score: "79", name: "Crodino Plus Rabarbaro", producer: "Campari Group", country: "Italia", category: "Aperitivo", price: "€4" },
            ].map((r, i) => <DBRow key={i} {...r} onClick={() => onNav("database")}/>)}
            <div style={{ borderTop: "1px solid var(--nv-ink-rule)", paddingTop: 28, marginTop: 0, textAlign: "center" }}>
              <Button variant="ghost-invert" onClick={() => onNav("database")}>Esplora il database completo →</Button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <NewsletterStrip onNav={onNav}/>
    </>
  );
};

const NewsletterStrip = ({ onNav }) => (
  <section style={{ padding: `96px clamp(20px, 4vw, 56px)`, maxWidth: 1440, margin: "0 auto" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center", borderTop: "1px solid var(--nv-ink)", paddingTop: 48 }}>
      <div>
        <Kicker>NEWSLETTER · OGNI VENERDÌ</Kicker>
        <h2 className="nv-headline" style={{ marginTop: 16, fontSize: "clamp(48px, 7vw, 110px)" }}>
          Un prodotto.<br/>Un'analisi.
        </h2>
      </div>
      <form onSubmit={e => { e.preventDefault(); onNav("newsletter"); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <p style={{ fontSize: 17, lineHeight: 1.5, margin: 0 }}>
          Settimanale. Una recensione approfondita e una lettura. Niente sponsor, niente affiliazioni nascoste. 4.200 lettori.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <input type="email" placeholder="alessandro@vino.it" defaultValue="" style={{
            flex: 1, fontFamily: "var(--nv-font-body)", fontSize: 15,
            padding: "12px 14px", border: "1px solid var(--nv-ink)", borderRadius: 4,
            background: "var(--nv-paper)", color: "var(--nv-ink)",
          }}/>
          <Button variant="primary" type="submit">Iscriviti</Button>
        </div>
        <Caption>Niente spam. Cancellazione in un click. Powered by Beehiiv.</Caption>
      </form>
    </div>
  </section>
);

window.Home = Home;
