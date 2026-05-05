/* eslint-disable */
const Header = ({ current, onNav }) => {
  const links = [
    { id: "home", label: "Journal" },
    { id: "database", label: "Database" },
    { id: "newsletter", label: "Newsletter" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(245,242,237,.94)",
      borderBottom: "1px solid var(--nv-ink)",
    }}>
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        padding: "14px clamp(20px, 4vw, 56px)",
        display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 24,
      }}>
        <a onClick={() => onNav("home")} style={{
          textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 10,
          cursor: "pointer",
        }}>
          <img src="../../assets/logo/monogram.svg" width="28" height="28" alt=""/>
          <span style={{
            fontFamily: "var(--nv-font-display)", fontWeight: 800,
            fontSize: 22, letterSpacing: "-.01em", textTransform: "uppercase", lineHeight: 1,
          }}>
            NOLO<span style={{ color: "var(--nv-accent)" }}>VAULT</span>
          </span>
        </a>
        <nav style={{ display: "flex", gap: 28, justifyContent: "center" }}>
          {links.map(l => (
            <a key={l.id} onClick={() => onNav(l.id)} style={{
              fontSize: 14, fontWeight: 500, letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
              color: current === l.id ? "var(--nv-accent)" : "var(--nv-ink)",
              cursor: "pointer",
              borderBottom: current === l.id ? "1px solid var(--nv-accent)" : "1px solid transparent",
              paddingBottom: 4,
            }}>{l.label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="../../assets/icons/ui-search.svg" width="20" height="20" alt="search"
               style={{ cursor: "pointer", opacity: .8 }}/>
          <Button variant="ghost" size="sm" onClick={() => onNav("newsletter")}>Iscriviti</Button>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
