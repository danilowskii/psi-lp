import { useState } from "react";
import Label from "./Label";
import SectionTitle from "./SectionTitle";
import Btn from "../button/Button";

export default function FAQ({ theme }) {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: "Como funciona a primeira sessão?",
      a: "A primeira sessão é um espaço de acolhimento e escuta. Conversamos sobre o que te trouxe à terapia, suas expectativas e como você está se sentindo. Não há pressão — é um encontro para nos conhecermos e verificar se há conexão terapêutica.",
    },
    {
      q: "As sessões online têm a mesma qualidade?",
      a: "Sim. A terapia online pelo CFP tem a mesma eficácia que o atendimento presencial. Utilizamos uma plataforma segura e sigilosa. Você precisa apenas de um lugar tranquilo e conexão à internet.",
    },
    {
      q: "Com que frequência devo fazer terapia?",
      a: "O padrão é uma sessão por semana, especialmente no início. Isso permite que o processo avance com consistência. Com o tempo, podemos avaliar juntos a frequência ideal para o seu momento.",
    },
    {
      q: "Minha privacidade está garantida?",
      a: "Absolutamente. O sigilo profissional é um dever ético e legal do psicólogo, garantido pelo Código de Ética do CFP. Nenhuma informação compartilhada em sessão será divulgada sem seu consentimento expresso.",
    },
    {
      q: "Qual o valor e as formas de pagamento?",
      a: "Os valores são informados via WhatsApp ou e-mail. Aceito Pix, cartão de crédito e débito. Também ofereço valor social para casos de vulnerabilidade financeira — entre em contato para conversarmos.",
    },
  ];

  return (
    <section
      id="faq"
      style={{ padding: "100px 0", background: theme.bgSection }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        <div>
          <Label>Dúvidas Frequentes</Label>
          <SectionTitle>
            Suas perguntas,{" "}
            <em
              className="serif"
              style={{ fontStyle: "italic", color: theme.primaryLight }}
            >
              respondidas
            </em>
          </SectionTitle>
          <p
            className="reveal"
            style={{
              color: theme.textBody,
              marginBottom: "2rem",
              fontSize: "0.98rem",
            }}
          >
            É natural ter dúvidas antes de dar o primeiro passo. Aqui estão as
            questões mais comuns sobre o processo terapêutico.
          </p>
          <Btn href="https://wa.me/5581999999999">
            Ainda tem dúvidas? Me chame
          </Btn>
        </div>

        <div
          className="reveal reveal-d2"
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${open === i ? theme.primary : theme.border}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.25s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.1rem 1.4rem",
                  background: open === i ? theme.primaryXPale : "#fff",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                  transition: "background 0.2s",
                }}
              >
                <span
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: theme.textDark,
                  }}
                >
                  {q}
                </span>
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: open === i ? theme.primary : "transparent",
                    border: `1.5px solid ${open === i ? theme.primary : theme.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M5.5 2v7M2 5.5h7"
                      stroke={open === i ? "#fff" : theme.textMuted}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div className={`faq-body ${open === i ? "open" : ""}`}>
                <p
                  style={{
                    padding: "0 1.4rem 1.1rem",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: theme.textBody,
                  }}
                >
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 860px) { #faq > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
