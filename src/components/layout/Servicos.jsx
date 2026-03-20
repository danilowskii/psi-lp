import Label from "./Label.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Servicos({ images, theme }) {
  const services = [
    {
      num: "01",
      title: "Ansiedade e Pânico",
      desc: "Estratégias práticas para romper o ciclo de preocupação excessiva e recuperar o controle da sua vida.",
      tag: "Mais Buscado",
      img: images.service1,
    },
    {
      num: "02",
      title: "Burnout e Estresse",
      desc: "Identificar gatilhos, restaurar energia e redesenhar sua relação com trabalho e limites pessoais.",
      tag: "Corporativo",
      img: images.service2,
    },
    {
      num: "03",
      title: "Depressão",
      desc: "Acompanhamento cuidadoso para reconectar você ao prazer de viver e fortalecer recursos internos.",
      tag: "Saúde Mental",
      img: images.service4,
    },
    {
      num: "04",
      title: "Relacionamentos",
      desc: "Padrões afetivos, comunicação, autoestima e vínculos saudáveis — consigo e com os outros.",
      tag: "Vínculos",
      img: images.service3,
    },
    {
      num: "05",
      title: "Autoconhecimento",
      desc: "Para quem quer se entender melhor e viver de forma mais intencional e plena.",
      tag: "Desenvolvimento",
      img: images.service5,
    },
    {
      num: "06",
      title: "Luto e Transições",
      desc: "Suporte nas perdas, mudanças de fase e momentos de transformação que pedem ressignificação.",
      tag: "Apoio",
      img: images.service6,
    },
  ];

  return (
    <section
      id="serviços"
      style={{ padding: "100px 0", background: theme.bgPage }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <Label>Especialidades</Label>
          <SectionTitle>
            Como posso{" "}
            <em
              className="serif"
              style={{ fontStyle: "italic", color: theme.primaryLight }}
            >
              te ajudar
            </em>
          </SectionTitle>
          <p
            className="reveal"
            style={{
              maxWidth: 500,
              color: theme.textBody,
              fontSize: "0.98rem",
            }}
          >
            Cada jornada terapêutica é única. Trabalho com questões que impactam
            o bem-estar emocional e a qualidade de vida.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map(({ num, title, desc, tag, img }, i) => (
            <div
              key={i}
              className={`card-hover reveal reveal-d${(i % 3) + 1}`}
              style={{
                borderRadius: 20,
                border: `1px solid ${theme.border}`,
                background: "#fff",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {img && (
                <div style={{ height: 180, overflow: "hidden" }}>
                  <img
                    src={img}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>
              )}
              <div style={{ padding: "1.75rem" }}>
                <div
                  className="serif"
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 400,
                    color: theme.primaryPale,
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {num}
                </div>
                <h3
                  className="serif"
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 500,
                    color: theme.textDark,
                    marginBottom: "0.5rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: theme.textBody,
                  }}
                >
                  {desc}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "1.25rem",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: theme.primary,
                    background: theme.primaryXPale,
                    padding: "0.3rem 0.8rem",
                    borderRadius: 100,
                  }}
                >
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
