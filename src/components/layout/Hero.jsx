import Btn from "../button/Button.jsx";

export default function Hero({ images, theme }) {
  return (
    <section
      id="hero"
      className="hero-bg"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${images.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(110deg, rgba(28,28,26,0.82) 0%, rgba(28,28,26,0.55) 55%, rgba(92,122,95,0.35) 100%)`,
        }}
      />

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          position: "relative",
          zIndex: 2,
          paddingTop: "90px",
        }}
      >
        <div style={{ maxWidth: 660 }}>
          <div
            className="animate-fade-up"
            style={{
              animationDelay: "0.1s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 100,
              padding: "0.4rem 1rem",
              marginBottom: "1.75rem",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#7CBF8E",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.08em",
              }}
            >
              Psicóloga Clínica · CRP 06/123456
            </span>
          </div>

          <h1
            className="serif animate-fade-up"
            style={{
              animationDelay: "0.2s",
              fontSize: "clamp(2.8rem, 6vw, 4.6rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "1.25rem",
            }}
          >
            Um espaço seguro
            <br />
            para{" "}
            <em style={{ color: theme.primaryPale, fontStyle: "italic" }}>
              reencontrar você.
            </em>
          </h1>

          <p
            className="animate-fade-up"
            style={{
              animationDelay: "0.35s",
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 500,
              marginBottom: "2.5rem",
              fontWeight: 300,
            }}
          >
            Terapia psicológica online e presencial. Para quem busca equilíbrio
            emocional, autoconhecimento e uma vida com mais leveza.
          </p>

          <div
            className="animate-fade-up"
            style={{
              animationDelay: "0.5s",
              display: "flex",
              gap: "1rem",
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
              Agende sua Sessão Experimental
            </Btn>
            <Btn href="#sobre" variant="ghost">
              Conhecer mais
            </Btn>
          </div>

          {/* Trust bar */}
          <div
            className="animate-fade-up"
            style={{
              animationDelay: "0.65s",
              marginTop: "3.5rem",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "8+", label: "Anos de experiência" },
              { num: "200+", label: "Pacientes atendidos" },
              { num: "100%", label: "Sigilo garantido" },
            ].map(({ num, label }) => (
              <div key={num} style={{ textAlign: "center" }}>
                <div
                  className="serif"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.65)",
                    marginTop: "0.2rem",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            color: "#fff",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Rolar
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, #fff, transparent)",
          }}
        />
      </div>
    </section>
  );
}
