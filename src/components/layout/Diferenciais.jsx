import { useReveal } from "../../hooks/useReveal";
import Label from "./Label";
import SectionTitle from "./SectionTitle";

export default function Diferenciais({ theme }) {
  useReveal();
  const items = [
    {
      icon: "🧠",
      title: "Terapia Cognitivo-Comportamental",
      desc: "Abordagem estruturada e baseada em evidências, que transforma a relação entre pensamentos, emoções e comportamentos para gerar mudanças reais e duradouras.",
    },
    {
      icon: "🤝",
      title: "Escuta Empática & Vínculo",
      desc: "A relação terapêutica é o coração do processo. Um espaço de acolhimento genuíno, sem julgamentos, onde você pode ser autenticamente você mesmo.",
    },
    {
      icon: "💻",
      title: "Online & Presencial",
      desc: "Flexibilidade para cuidar da saúde mental onde estiver. Sessões seguras e sigilosas no formato que melhor se adapta à sua rotina de vida.",
    },
  ];

  return (
    <section style={{ padding: "100px 0", background: theme.bgPage }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Label>Minha Abordagem</Label>
          <SectionTitle>
            Terapia com base{" "}
            <em
              className="serif"
              style={{ fontStyle: "italic", color: theme.primaryLight }}
            >
              científica e humana
            </em>
          </SectionTitle>
          <p
            className="reveal"
            style={{
              maxWidth: 520,
              margin: "0 auto",
              color: theme.textBody,
              fontSize: "1rem",
            }}
          >
            Cada sessão é um espaço de escuta ativa, ferramentas práticas e
            presença genuína.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className={`card-hover reveal reveal-d${i + 1}`}
              style={{
                padding: "2.5rem 2rem",
                borderRadius: 24,
                background:
                  i === 0
                    ? theme.primaryXPale
                    : i === 1
                      ? "#EAF0F4"
                      : theme.bgSection,
                border: `1px solid ${i === 0 ? theme.primaryPale : i === 1 ? "#C5D4DF" : theme.border}`,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                }}
              >
                {icon}
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  color: theme.textDark,
                  marginBottom: "0.75rem",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.93rem",
                  lineHeight: 1.7,
                  color: theme.textBody,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
