import Label from "./Label.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Depoimentos({ images, theme }) {
  const deps = [
    {
      quote:
        "Comecei a terapia no meu pior momento. Hoje não só aprendi a lidar com a ansiedade, mas descobri quem eu realmente sou. O acolhimento da Sofia é genuíno e transformador.",
      name: "M. L., 34 anos",
      desc: "1 ano e meio em terapia",
      img: images.testimonial1,
    },
    {
      quote:
        "Depois de meses em burnout severo, encontrei na terapia um caminho de volta para mim. As ferramentas que aprendi mudaram completamente minha relação com o trabalho.",
      name: "R. S., 41 anos",
      desc: "8 meses em terapia",
      img: images.testimonial2,
    },
    {
      quote:
        "Sempre achei que terapia era para quem estava muito mal. Hoje entendo que é para quem quer viver de forma mais consciente. Meu único arrependimento é não ter começado antes.",
      name: "C. A., 28 anos",
      desc: "2 anos em terapia",
      img: images.testimonial3,
    },
  ];

  return (
    <section
      id="depoimentos"
      style={{
        padding: "100px 0",
        background: theme.primaryXPale,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -150,
          top: -150,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.primaryPale} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Label>Histórias Reais</Label>
          <SectionTitle>
            O que dizem{" "}
            <em
              className="serif"
              style={{ fontStyle: "italic", color: theme.primaryLight }}
            >
              meus pacientes
            </em>
          </SectionTitle>
          <p
            className="reveal"
            style={{
              fontSize: "0.82rem",
              color: theme.textMuted,
              marginTop: "0.5rem",
            }}
          >
            Depoimentos compartilhados com autorização. Identidades preservadas
            para garantir o sigilo ético.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {deps.map(({ quote, name, desc, img }, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: 24,
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="serif"
                style={{
                  fontSize: "3.5rem",
                  color: theme.primaryLight,
                  lineHeight: 0.6,
                  marginBottom: "1rem",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                  color: theme.textBody,
                  marginBottom: "1.5rem",
                }}
              >
                {quote}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <img
                  src={img}
                  alt={name}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `2px solid ${theme.primaryPale}`,
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: theme.accentLight,
                      marginBottom: "0.15rem",
                    }}
                  >
                    ★★★★★
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: theme.textDark,
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: theme.textMuted }}>
                    {desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
