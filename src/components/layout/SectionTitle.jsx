import { THEME } from "../variants/variants.js";

export default function SectionTitle({ children, light = false }) {
  return (
    <h2
      className="serif reveal"
      style={{
        fontSize: "clamp(2rem, 4vw, 2.8rem)",
        fontWeight: 500,
        lineHeight: 1.15,
        color: light ? "#fff" : THEME.textDark,
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  );
}
