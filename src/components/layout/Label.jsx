import { THEME } from "../variants/variants.js";

export default function Label({ children }) {
  return (
    <p
      className="reveal"
      style={{
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: THEME.primaryLight,
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </p>
  );
}
