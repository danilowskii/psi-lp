import Btn from "../button/Button.jsx";

export default function CTABanner({ theme }) {
  return (
    <section
      id="contato"
      style={{
        background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
        padding: "90px 0",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
        }}
      >
        <div
          className="reveal"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 100,
            padding: "0.4rem 1rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.1em",
            }}
          >
            PRONTO PARA COMEÇAR?
          </span>
        </div>
        <h2
          className="serif reveal"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 500,
            color: "#fff",
            marginBottom: "1rem",
            lineHeight: 1.15,
          }}
        >
          O primeiro passo é<br />
          <em style={{ fontStyle: "italic" }}>o mais importante.</em>
        </h2>
        <p
          className="reveal"
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "1.05rem",
            marginBottom: "2.5rem",
          }}
        >
          A sessão experimental é um espaço sem compromisso para você conhecer o
          processo terapêutico. Vamos conversar?
        </p>
        <div
          className="reveal reveal-d1"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Btn href="https://wa.me/5581999999999" variant="white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            Agendar via WhatsApp
          </Btn>
          <Btn href="mailto:sofia@psicologia.com.br" variant="ghost">
            Enviar e-mail
          </Btn>
        </div>
      </div>
    </section>
  );
}
