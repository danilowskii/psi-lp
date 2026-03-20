import Label from "./Label.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Sobre({ theme, images }) {
  return (
    <section
      id="sobre"
      style={{ padding: "100px 0", background: theme.bgSection }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        <div className="reveal" style={{ position: "relative" }}>
          <img
            src={images.about}
            alt="Dra. Sofia Almeida"
            style={{
              width: "100%",
              aspectRatio: "4/5",
              objectFit: "cover",
              borderRadius: "50% 50% 40px 40px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          {/* Floating card */}
          <div
            style={{
              position: "absolute",
              bottom: 28,
              right: -24,
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.9)",
              borderRadius: 20,
              padding: "1.1rem 1.4rem",
              boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="serif"
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                color: theme.textDark,
                lineHeight: 1,
              }}
            >
              8+
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: theme.textMuted,
                marginTop: "0.2rem",
              }}
            >
              anos de experiência
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -16,
              right: -16,
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: theme.primaryPale,
              zIndex: -1,
            }}
          />
        </div>

        <div>
          <Label>Sobre Mim</Label>
          <SectionTitle>
            Olá, eu sou{" "}
            <em
              className="serif"
              style={{ fontStyle: "italic", color: theme.primaryLight }}
            >
              Sofia Almeida
            </em>
          </SectionTitle>
          <p
            className="reveal"
            style={{
              marginBottom: "1.1rem",
              color: theme.textBody,
              fontSize: "0.98rem",
            }}
          >
            Sou psicóloga clínica há mais de 8 anos, especializada no cuidado de
            adultos que vivenciam ansiedade, burnout, crises de identidade e
            dificuldades nos relacionamentos.
          </p>
          <p
            className="reveal reveal-d1"
            style={{
              marginBottom: "1.1rem",
              color: theme.textBody,
              fontSize: "0.98rem",
            }}
          >
            Acredito que a psicoterapia é um convite para olhar para dentro com
            curiosidade e compaixão — não como sinal de fraqueza, mas como um
            dos maiores atos de coragem que uma pessoa pode ter.
          </p>
          <p
            className="reveal reveal-d2"
            style={{ color: theme.textBody, fontSize: "0.98rem" }}
          >
            Minha prática é orientada pela TCC, com integração de mindfulness e
            psicologia positiva, sempre respeitando a singularidade de cada
            pessoa.
          </p>

          <div
            className="reveal reveal-d3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              marginTop: "2rem",
            }}
          >
            {[
              "CRP 06/123456",
              "Esp. em TCC – USP",
              "Membro CFP",
              "Formação em Mindfulness",
            ].map((c) => (
              <span
                key={c}
                style={{
                  padding: "0.4rem 1rem",
                  borderRadius: 100,
                  background: "#fff",
                  fontSize: "0.8rem",
                  color: theme.textBody,
                  border: `1px solid ${theme.border}`,
                  fontWeight: 500,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 860px) { #sobre > div { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}
