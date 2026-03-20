export default function Footer({ theme }) {
  const SocialIcon = ({ path, label }) => (
    <a
      href="#"
      aria-label={label}
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = theme.primary)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
      }
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
        dangerouslySetInnerHTML={{ __html: path }}
      />
    </a>
  );

  return (
    <footer style={{ background: theme.bgDark, padding: "60px 0 32px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <div
              className="serif"
              style={{
                fontSize: "1.4rem",
                fontWeight: 500,
                color: "#fff",
                marginBottom: "0.75rem",
              }}
            >
              Sofia{" "}
              <em style={{ color: theme.primaryLight, fontStyle: "italic" }}>
                Almeida
              </em>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.55)",
                maxWidth: 280,
                lineHeight: 1.7,
              }}
            >
              Psicóloga clínica dedicada a oferecer um espaço de cuidado
              genuíno, ético e baseado em evidências científicas.
            </p>
            <div
              style={{
                display: "inline-block",
                marginTop: "1.25rem",
                fontSize: "0.75rem",
                padding: "0.35rem 0.9rem",
                borderRadius: 100,
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              CRP 06/123456 — Conselho Regional de Psicologia
            </div>
            <div
              style={{ display: "flex", gap: "0.6rem", marginTop: "1.25rem" }}
            >
              <SocialIcon
                label="Instagram"
                path='<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>'
              />
              <SocialIcon
                label="LinkedIn"
                path='<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'
              />
              <SocialIcon
                label="WhatsApp"
                path='<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>'
              />
            </div>
          </div>

          <div>
            <div
              className="serif"
              style={{
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "#fff",
                marginBottom: "1.25rem",
              }}
            >
              Navegação
            </div>
            {[
              "Sobre Mim",
              "Abordagem",
              "Especialidades",
              "Depoimentos",
              "FAQ",
            ].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "0.6rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = theme.primaryLight)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                }
              >
                {l}
              </a>
            ))}
          </div>

          <div>
            <div
              className="serif"
              style={{
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "#fff",
                marginBottom: "1.25rem",
              }}
            >
              Contato
            </div>
            {[
              { text: "(81) 99999-9999", href: "https://wa.me/5581999999999" },
              {
                text: "sofia@psicologia.com.br",
                href: "mailto:sofia@psicologia.com.br",
              },
            ].map(({ text, href }) => (
              <a
                key={text}
                href={href}
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "0.6rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = theme.primaryLight)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
                }
              >
                {text}
              </a>
            ))}
            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.35)",
                marginTop: "0.75rem",
              }}
            >
              Recife, PE — Brasil
            </p>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)" }}>
              Atendimento Online para todo o Brasil
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.35)",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span>
            © 2025 Sofia Almeida Psicóloga. Todos os direitos reservados.
          </span>
          <span>Desenvolvido por Danilo</span>
        </div>
      </div>

      <style>{`@media (max-width: 720px) { footer > div > div:first-child { grid-template-columns: 1fr !important; } }`}</style>
    </footer>
  );
}
