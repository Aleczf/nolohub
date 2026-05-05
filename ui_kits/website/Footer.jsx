/* eslint-disable */
const Footer = () => (
  <footer style={{
    background: "var(--nv-ink-bg)", color: "var(--nv-ink-fg)",
    padding: "64px clamp(20px, 4vw, 56px) 32px",
    marginTop: 96,
  }}>
    <div style={{ maxWidth: 1440, margin: "0 auto" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
        gap: 48, alignItems: "start",
      }}>
        <div>
          <img src="../../assets/logo/lockup-invert.svg" alt="Nolo Vault" style={{ width: 220, display: "block" }}/>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--nv-ink-fg-mute)", marginTop: 18, maxWidth: 320 }}>
            Media verticale italiano dedicato al mondo NoLo. Recensioni, database, analisi.
          </p>
        </div>
        {[
          { t: "Journal", l: ["Recensioni", "Analisi", "Interviste", "Tecnica"] },
          { t: "Database", l: ["Champagne", "Vermouth", "Amari", "Spirits", "Mixer"] },
          { t: "Casa", l: ["Chi siamo", "Metodo di scoring", "Contatti", "Press"] },
        ].map(col => (
          <div key={col.t}>
            <div style={{
              fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
              color: "var(--nv-accent)", marginBottom: 14,
            }}>{col.t}</div>
            {col.l.map(li => (
              <div key={li} style={{ fontSize: 14, lineHeight: 2, color: "var(--nv-ink-fg)" }}>
                <a style={{ color: "inherit", textDecoration: "none" }}>{li}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr style={{ border: 0, borderTop: "1px solid var(--nv-ink-rule)", margin: "48px 0 20px" }}/>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        fontSize: 11, letterSpacing: ".06em", color: "var(--nv-ink-fg-mute)",
        textTransform: "uppercase",
      }}>
        <div>© 2026 Nolo Vault — Editore: Alessandro Frau</div>
        <div>Drink less, drink better — italiano dal 2026</div>
      </div>
    </div>
  </footer>
);
window.Footer = Footer;
