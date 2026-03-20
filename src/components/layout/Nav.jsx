import { useState, useEffect } from "react";

import Btn from "../button/Button.jsx";

export default function Nav({ theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Sobre", "Serviços", "Depoimentos", "FAQ"];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(250,248,245,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? `1px solid ${theme.border}` : "none",
          transition: "background 0.4s, backdrop-filter 0.4s, border 0.4s",
        }}
      >
        <div
          className="serif"
          style={{
            fontSize: "1.4rem",
            fontWeight: 500,
            color: scrolled ? theme.textDark : "#fff",
            transition: "color 0.4s",
          }}
        >
          Sofia{" "}
          <em
            style={{ color: scrolled ? theme.primaryLight : theme.primaryPale }}
          >
            Almeida
          </em>
        </div>

        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontSize: "1.3rem",
                fontWeight: 300,
                color: scrolled ? theme.textMuted : "rgba(255,255,255,0.85)",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? theme.textDark
                  : "#fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? theme.textMuted
                  : "rgba(255,255,255,0.85)")
              }
            >
              {l}
            </a>
          ))}
          <Btn
            href="https://wa.me/5581999999999"
            variant={scrolled ? "primary" : "white"}
            style={{ padding: "0.6rem 1.4rem", fontSize: "0.82rem" }}
          >
            Agendar Sessão
          </Btn>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: scrolled ? theme.textDark : "#fff",
                borderRadius: 2,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(250,248,245,0.97)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: theme.textMuted,
            }}
          >
            ✕
          </button>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="serif"
              style={{
                fontSize: "2.2rem",
                fontWeight: 400,
                color: theme.textDark,
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
          <Btn href="https://wa.me/5581999999999">Agendar Sessão</Btn>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
