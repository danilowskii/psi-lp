import { THEME } from "../variants/variants.js";

export default function Btn({
  children,
  href = "#",
  variant = "primary",
  style: extraStyle = {},
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.85rem 1.9rem",
    borderRadius: "100px",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    textDecoration: "none",
    transition: "transform 0.25s, box-shadow 0.25s",
    fontFamily: "'Outfit', sans-serif",
    ...extraStyle,
  };
  const variants = {
    primary: {
      background: THEME.primary,
      color: "#fff",
      boxShadow: `0 4px 20px ${THEME.primary}55`,
    },
    outline: {
      background: "transparent",
      color: THEME.textDark,
      border: `1.5px solid ${THEME.border}`,
    },
    white: {
      background: "#fff",
      color: THEME.primary,
      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
    },
    ghost: {
      background: "rgba(255,255,255,0.15)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.35)",
    },
  };
  return (
    <a
      href={href}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 10px 28px ${THEME.primary}44`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = variants[variant].boxShadow || "";
      }}
    >
      {children}
    </a>
  );
}
