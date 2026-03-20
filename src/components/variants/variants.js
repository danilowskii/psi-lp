export const THEME = {
  // Cor primária (botões, destaques, badges)
  primary: "#5C7A5F", // Sage Green escuro
  primaryLight: "#7A9E7E", // Sage médio
  primaryPale: "#D0DDD1", // Sage muito claro (fundos suaves)
  primaryXPale: "#EBF0EB", // Sage quase branco

  // Cor de acento (hover, estrelas, detalhes)
  accent: "#8B6F4E", // Terracota/caramelo
  accentLight: "#C4A882", // Caramelo claro

  // Fundos
  bgPage: "#FAF8F5", // Off-white quente
  bgSection: "#F2EDE6", // Bege suave
  bgDark: "#2A2A28", // Rodapé escuro

  // Tipografia
  textDark: "#1C1C1A", // Títulos
  textBody: "#3D3D3A", // Corpo principal — MAIS ESCURO para leitura
  textMuted: "#6B6B68", // Texto secundário

  // Bordas
  border: "#D4CCC3", // Bordas gerais
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1600&q=80&fit=crop",
  about:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop&crop=face",
  testimonial1:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&fit=crop&crop=face",
  testimonial2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop&crop=face",
  testimonial3:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&fit=crop&crop=face",
  service1:
    "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?w=600&q=80&fit=crop",
  service2:
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600&q=80&fit=crop",
  service3:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&fit=crop",
  service4:
    "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=600&q=80&fit=crop",
  service5:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&fit=crop",
  service6:
    "https://images.unsplash.com/photo-1518101645466-7795885ff8f8?w=600&q=80&fit=crop",
};

export const globalStyle = `
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Outfit', sans-serif; background: ${THEME.bgPage}; color: ${THEME.textBody}; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
    .serif { font-family: 'Cormorant Garamond', serif; }
  
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both; }
    .animate-fade-in { animation: fadeIn 0.6s ease both; }
  
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
    .reveal.visible { opacity: 1; transform: none; }
    .reveal-d1 { transition-delay: 0.1s; }
    .reveal-d2 { transition-delay: 0.2s; }
    .reveal-d3 { transition-delay: 0.3s; }
    .reveal-d4 { transition-delay: 0.4s; }
  
    .faq-body { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.22,1,0.36,1); }
    .faq-body.open { max-height: 300px; }
  
    .card-hover { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s; }
    .card-hover:hover { transform: translateY(-5px); box-shadow: 0 16px 48px rgba(0,0,0,0.12); }
  
    /* Parallax subtle on hero */
    .hero-bg { background-attachment: fixed; }
    @media (max-width: 768px) { .hero-bg { background-attachment: scroll; } }
  `;
