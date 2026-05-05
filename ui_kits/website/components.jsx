/* eslint-disable */
// Shared atoms for Nolo Vault website UI kit.

const Kicker = ({ children, color = "var(--nv-accent)", as: As = "div" }) => (
  <As style={{
    fontFamily: "var(--nv-font-body)", fontWeight: 500,
    fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
    color, lineHeight: 1,
  }}>{children}</As>
);

const Meta = ({ children, dim = false, style = {} }) => (
  <div style={{
    fontSize: 13, lineHeight: 1.4, color: dim ? "var(--nv-ink-fg-mute)" : "var(--nv-ink-mute)",
    letterSpacing: ".04em", ...style,
  }}>{children}</div>
);

const Caption = ({ children }) => (
  <div style={{
    fontSize: 11, lineHeight: 1.45, color: "var(--nv-ink-mute)",
    letterSpacing: ".06em",
  }}>{children}</div>
);

const Score = ({ value, size = "lg", invert = false }) => {
  const px = size === "xl" ? 144 : size === "lg" ? 96 : size === "md" ? 64 : 48;
  return (
    <span style={{
      fontFamily: "var(--nv-font-display)", fontWeight: 800,
      fontSize: px, lineHeight: 0.85, letterSpacing: "-0.04em",
      color: invert ? "var(--nv-accent)" : "var(--nv-accent)",
      fontVariantNumeric: "tabular-nums lining-nums",
      display: "inline-block",
    }}>{value}</span>
  );
};

const VaultPickBadge = () => (
  <span style={{
    fontFamily: "var(--nv-font-display)", fontWeight: 800,
    fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase",
    background: "var(--nv-accent)", color: "var(--nv-paper)",
    padding: "5px 9px", borderRadius: 2, lineHeight: 1,
    display: "inline-block",
  }}>VAULT PICK</span>
);

const Button = ({ children, variant = "primary", size = "md", onClick, type = "button", style = {} }) => {
  const base = {
    fontFamily: "var(--nv-font-body)", fontWeight: 500,
    fontSize: size === "sm" ? 13 : 15,
    padding: size === "sm" ? "8px 14px" : "12px 22px",
    borderRadius: 2, cursor: "pointer",
    letterSpacing: ".01em", lineHeight: 1.2,
    transition: "background 120ms ease, color 120ms ease, border-color 120ms ease",
  };
  const variants = {
    primary: { background: "var(--nv-accent)", color: "var(--nv-paper)", border: "1px solid var(--nv-accent)" },
    ghost: { background: "transparent", color: "var(--nv-ink)", border: "1px solid var(--nv-ink)" },
    "ghost-invert": { background: "transparent", color: "var(--nv-paper)", border: "1px solid var(--nv-paper)" },
  };
  return (
    <button type={type} onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
};

// Placeholder image — soft duotone, mai bianco puro.
const Photo = ({ ratio = "16/9", tone = "warm", label = "" }) => {
  const tones = {
    warm: "linear-gradient(135deg, #B8A185 0%, #6B5A48 100%)",
    deep: "linear-gradient(135deg, #4A3A2E 0%, #1F1A14 100%)",
    sage: "linear-gradient(135deg, #8A7F6A 0%, #3E382C 100%)",
    paper: "linear-gradient(135deg, #E2DCD0 0%, #C9C3B6 100%)",
  };
  return (
    <div style={{
      aspectRatio: ratio, width: "100%",
      background: tones[tone] || tones.warm,
      border: "1px solid var(--nv-ink)",
      position: "relative",
    }}>
      {label && (
        <div style={{
          position: "absolute", bottom: 8, left: 10,
          fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase",
          color: "rgba(245,242,237,.78)",
        }}>{label}</div>
      )}
    </div>
  );
};

const Icon = ({ name, size = 22, color = "currentColor" }) => (
  <img
    src={`../../assets/icons/${name}.svg`}
    width={size} height={size}
    alt=""
    style={{ display: "inline-block", filter: color === "currentColor" ? "none" : undefined }}
  />
);

// Article card — niente ombra, bordo netto, hover titolo accento
const ArticleCard = ({ tone = "warm", kicker, title, byline, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ cursor: onClick ? "pointer" : "default" }}>
      <Photo ratio="3/2" tone={tone}/>
      <div style={{ marginTop: 14 }}>
        <Kicker>{kicker}</Kicker>
        <h3 style={{
          fontFamily: "var(--nv-font-body)", fontWeight: 500,
          fontSize: 22, lineHeight: 1.18, letterSpacing: "-.005em",
          margin: "8px 0 6px",
          color: hover ? "var(--nv-accent)" : "var(--nv-ink)",
          transition: "color 120ms ease",
        }}>{title}</h3>
        <Meta>{byline}</Meta>
      </div>
    </article>
  );
};

// Database row — invertito, score arancio
const DBRow = ({ score, name, producer, country, category, price, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr 140px 120px 80px",
        gap: 24, alignItems: "center",
        padding: "20px 0",
        borderTop: "1px solid var(--nv-ink-rule)",
        cursor: onClick ? "pointer" : "default",
        background: hover ? "rgba(196,83,26,.04)" : "transparent",
        transition: "background 120ms ease",
      }}>
      <div style={{ paddingLeft: 12 }}><Score value={score} size="md" /></div>
      <div>
        <div style={{
          fontFamily: "var(--nv-font-body)", fontWeight: 500,
          fontSize: 18, lineHeight: 1.2,
          color: hover ? "var(--nv-accent)" : "var(--nv-ink-fg)",
        }}>{name}</div>
        <Meta dim style={{ marginTop: 4, textTransform: "uppercase" }}>{producer} · {country}</Meta>
      </div>
      <Meta dim style={{ textTransform: "uppercase" }}>{category}</Meta>
      <Meta dim>NV / 750ml</Meta>
      <div style={{
        fontFamily: "var(--nv-font-mono), monospace", fontSize: 14,
        color: "var(--nv-ink-fg-mute)", textAlign: "right", paddingRight: 12,
      }}>{price}</div>
    </div>
  );
};

const Rule = ({ soft = false, invert = false }) => (
  <hr style={{
    border: 0, margin: 0,
    borderTop: `1px solid ${
      invert ? "var(--nv-ink-rule)" : soft ? "var(--nv-rule-soft)" : "var(--nv-rule)"
    }`,
  }}/>
);

Object.assign(window, {
  Kicker, Meta, Caption, Score, VaultPickBadge,
  Button, Photo, Icon, ArticleCard, DBRow, Rule,
});
