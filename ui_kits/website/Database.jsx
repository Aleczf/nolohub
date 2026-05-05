/* eslint-disable */
const Database = ({ onArticle }) => {
  const PAD = "clamp(20px, 4vw, 56px)";
  const [active, setActive] = React.useState("Tutti");
  const cats = ["Tutti", "Champagne", "Vermouth", "Amari", "Spirits", "Mixer", "Aperitivi"];
  const items = [
    { score: "91", name: "Lallier de-alc. Brut Nature", producer: "Lallier", country: "Francia", category: "Champagne", price: "€42" },
    { score: "88", name: "Mareterra Vermouth Zero", producer: "Distilleria Mareterra", country: "Italia", category: "Vermouth", price: "€26" },
    { score: "86", name: "Seedlip Garden 108", producer: "Seedlip", country: "UK", category: "Spirits", price: "€32" },
    { score: "84", name: "Chazalettes Bianco NoLo", producer: "Chazalettes", country: "Italia", category: "Vermouth", price: "€22" },
    { score: "82", name: "Three Cents Bitter Lemon NA", producer: "Three Cents", country: "Grecia", category: "Mixer", price: "€8" },
    { score: "80", name: "Lyre's Italian Spritz", producer: "Lyre's", country: "Australia", category: "Aperitivo", price: "€24" },
    { score: "79", name: "Crodino Plus Rabarbaro", producer: "Campari Group", country: "Italia", category: "Aperitivo", price: "€4" },
    { score: "76", name: "Acqua Bianca Tonica Mediterranea", producer: "Acqua Bianca", country: "Italia", category: "Mixer", price: "€6" },
    { score: "73", name: "Ghia L'Aperitivo", producer: "Ghia", country: "USA", category: "Aperitivo", price: "€28" },
  ];

  return (
    <div style={{ background: "var(--nv-ink-bg)", color: "var(--nv-ink-fg)", minHeight: "calc(100vh - 64px)" }}>
      <div style={{ padding: `64px ${PAD} 96px`, maxWidth: 1440, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "end", marginBottom: 48 }}>
          <div>
            <Kicker>IL DATABASE</Kicker>
            <h1 className="nv-display" style={{ marginTop: 16, fontSize: "clamp(56px, 8vw, 128px)" }}>
              412 Prodotti
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--nv-ink-fg-mute)", marginTop: 14, maxWidth: 540 }}>
              Tutto quello che abbiamo assaggiato e che vale la pena bere. Score proprietario su scala 60–100. Aggiornato ogni venerdì.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "flex-end" }}>
            <div style={{
              flex: 1, maxWidth: 360, display: "flex", alignItems: "center", gap: 10,
              border: "1px solid var(--nv-ink-fg)", padding: "10px 14px", borderRadius: 4,
            }}>
              <img src="../../assets/icons/ui-search.svg" width="18" height="18"
                   alt="" style={{ filter: "invert(1)", opacity: .8 }}/>
              <input placeholder="Cerca nel database…" style={{
                flex: 1, background: "transparent", border: 0, color: "var(--nv-ink-fg)",
                fontFamily: "var(--nv-font-body)", fontSize: 15, outline: "none",
              }}/>
            </div>
          </div>
        </div>

        {/* FILTER BAR */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 12, paddingBottom: 24, borderBottom: "1px solid var(--nv-ink-rule)" }}>
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              fontFamily: "var(--nv-font-body)", fontWeight: 500, fontSize: 13,
              padding: "8px 14px", borderRadius: 2, cursor: "pointer",
              border: "1px solid " + (active === c ? "var(--nv-accent)" : "var(--nv-ink-fg)"),
              background: active === c ? "var(--nv-accent)" : "transparent",
              color: active === c ? "var(--nv-paper)" : "var(--nv-ink-fg)",
              letterSpacing: ".06em", textTransform: "uppercase",
            }}>{c}</button>
          ))}
          <span style={{ marginLeft: "auto", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--nv-ink-fg-mute)" }}>
            Ordina: Score ↓
          </span>
        </div>

        {/* COLUMN HEADERS */}
        <div style={{
          display: "grid", gridTemplateColumns: "100px 1fr 140px 120px 80px",
          gap: 24, padding: "12px 0",
          fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--nv-ink-fg-mute)",
        }}>
          <div style={{ paddingLeft: 12 }}>Score</div>
          <div>Prodotto</div>
          <div>Categoria</div>
          <div>Formato</div>
          <div style={{ textAlign: "right", paddingRight: 12 }}>Prezzo</div>
        </div>

        {items
          .filter(i => active === "Tutti" || i.category === active.replace(/i$/, "").replace("Aperitiv", "Aperitivo") || i.category === active)
          .map((r, i) => <DBRow key={i} {...r} onClick={onArticle}/>)}

        <div style={{ borderTop: "1px solid var(--nv-ink-rule)", paddingTop: 32, textAlign: "center", marginTop: 0 }}>
          <Button variant="ghost-invert">Carica altri (403 rimanenti) →</Button>
        </div>
      </div>
    </div>
  );
};

window.Database = Database;
