export type ServiceItem = {
  id: string;
  name: string;
  shortDescription: string;
  highlight?: boolean;
};

export type TestimonialItem = {
  id: string;
  name: string;
  city?: string;
  text: string;
  source?: "WhatsApp" | "Instagram" | "Google" | "Indicação";
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type BeforeAfterPhoto = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

import { getAssetPath } from "@/lib/paths";

// Helper to add basePath to image URLs
const img = (path: string) => getAssetPath(path);

export const siteContent = {
  brand: {
    professionalName: "Flavia Nolasco",
    headline: "Cabelo e maquiagem com acabamento impecável",
    subheadline:
      "Agendamento direto com Flavia Nolasco. Atendimento no salão Salão Martakblo R. Conselheiro Moreira de Barros, 2511 - Lauzane Paulista, São Paulo - SP, 02430-001.",
    city: " São Paulo - SP",
    neighborhood: "Lauzane Paulista",
    salonName: "Salão Martakblo",
  },

  links: {
    instagramProfileUrl: "https://instagram.com/cabeloeglossflavia",
    whatsappNumberE164: "https://wa.me/5511951352996",
    calendlyUrl: "https://calendly.com/cabeloeglossflavia/30min",
  },

  messages: {
    whatsappPrefill:
      "Oi! Vim pelo Google e quero agendar um horário. Atendimento no salão Salão Martakblo. Tenho interesse em: [SERVIÇO]. Você tem horário para [DIA/TURNO]?",
  },

  trust: {
    bullets: [
      "Atendimento no salão Salão Martakblo (Lauzane Paulista, São Paulo - SP)",
      "Agendamento direto com Flavia Nolasco",
      "Especialista em cabelo e maquiagem para eventos",
    ],
    stats: [],
  },

  beforeAfter: {
    title: "Transformações",
    subtitle:
      "Resultados reais. Selecione algumas transformações para mostrar seu estilo de trabalho.",
    photos: [
      {
        id: "ba-1",
        src: img("/gallery/salao-video-gif.gif"),
        alt: "Local do atendimento - salão Martakblo",
        caption: "Salão Martakblo ✨ Para Sua Transformação completa e Novo visual 💫",
      },
      {
        id: "ba-2",
        src: img("/gallery/flavia.jpeg"),
        alt: "Flavia a sua Cabeleireira e Maquiadora",
        caption: "Flavia a sua Cabeleireira e Maquiadora 😊",
      },
      {
        id: "ba-3",
        src: img("/gallery/hidratacao-corte.png"),
        alt: "Hidratação e corte",
        caption: "💇‍♀️ Corte renovado 💎 Brilho e alinhamento",
      },
      {
        id: "ba-4",
        src: img("/gallery/escova-polida.png"),
        alt: "Escova polida",
        caption: "✨ Brilho e movimento 💫 Acabamento profissional",
      },
      {
        id: "ba-5",
        src: img("/gallery/Corte-tratamento.jpg"),
        alt: "Corte e tratamento",
        caption: "✨ Transformação completa🧴 Hidratação + brilho",
      },
      {
        id: "ba-6",
        src: img("/gallery/Make-cabelo.jpg"),
        alt: "Maquiagem profissional",
        caption: "💄 Make profissional 🌸 Make leve e elegant",
      },
      {
        id: "ba-7",
        src: img("/gallery/Penteado-e-make.jpg"),
        alt: "Penteado para festa",
        caption: "🌿 Natural e sofisticado 🤍 Beleza realçada",
      },
      {
        id: "ba-8",
        src: img("/gallery/make-evento.jpg"),
        alt: "Maquiagem para evento",
        caption: "☀️ Leve e iluminada 🌼 Acabamento suave",
      }
    ] as BeforeAfterPhoto[],
  },

  services: {
    title: "Serviços",
    subtitle:
      "Escolha o serviço e clique em agendar. Se preferir, fale direto no WhatsApp.",
    items: [
      {
        id: "make-evento",
        name: "Maquiagem para evento",
        shortDescription: "Pele bem feita, durabilidade e acabamento profissional.",
        highlight: true,
      },
      {
        id: "escova",
        name: "Escova + finalização",
        shortDescription: "Brilho, alinhamento e acabamento para o seu estilo.",
      },
      {
        id: "penteado",
        name: "Penteado",
        shortDescription: "Do clássico ao moderno, ideal para festas e fotos.",
      },
      {
        id: "hidratacao",
        name: "Hidratação / tratamento",
        shortDescription: "Recuperação, nutrição e maciez para o seu cabelo.",
      },
    ] as ServiceItem[],
  },

  testimonials: {
    title: "O que as clientes dizem",
    subtitle: "Depoimentos curtos ajudam muito a converter.",
    items: [
      {
        id: "t-1",
        name: "Camila",
        city: "SÃO PAULO",
        text: "A maquiagem ficou perfeita e durou a noite inteira. Atendimento impecável!",
        source: "Instagram",
      },
      {
        id: "t-2",
        name: "Juliana",
        city: "SÃO PAULO",
        text: "A escova ficou linda e com muito brilho. Vou voltar com certeza.",
        source: "WhatsApp",
      },
      {
        id: "t-3",
        name: "Renata",
        city: "SÃO PAULO",
        text: "Pontual, caprichosa e super atenciosa. Recomendo demais!",
        source: "Indicação",
      },
      {
        id: "t-4",
        name: "Vanessa",
        city: "SÃO PAULO",
        text: "Ficou do jeitinho que eu queria. Duração excelente e muito cuidado.",
        source: "Google",
      },
      {
        id: "t-5",
        name: "Patrícia",
        city: "SÃO PAULO",
        text: "Atendimento gentil, pontual e com resultado lindo. Voltarei!",
        source: "WhatsApp",
      },
      {
        id: "t-6",
        name: "Fernanda",
        city: "SÃO PAULO",
        text: "O cabelo ficou maravilhoso e o penteado durou a festa toda.",
        source: "Indicação",
      },
    ] as TestimonialItem[],
  },

  howItWorks: {
    title: "Como funciona",
    steps: [
      {
        title: "Escolha o serviço",
        description: "Veja as opções de serviços",
      },
      {
        title: "Agende em 1 minuto",
        description: "Clique em ‘Agendar Horário’ e finalize no Calendly, ou agende pelo WhatsApp, Instagram.",
      },
      {
        title: "Atendimento no salão",
        description:
          "Atendimento no salão Salão Martakblo (Lauzane Paulista, São Paulo - SP), com horário marcado.",
      },
    ],
  },

  location: {
    title: "Local e atendimento",
    addressLine1: "Salão Martakblo",
    addressLine2: "Rua Conselheiro Moreira de Barros, 2511 — Lauzane Paulista — São Paulo/SP",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=SEU_EMBED_AQUI",
    note:
      "Atendimento no salão Salão Martakblo. Agendamento e contato direto com Flavia Nolasco.",
  },

  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        id: "faq-1",
        question: "Como funciona o agendamento?",
        answer:
          "Você pode agendar pelo botão ‘Agendar Horário’ (Calendly) ou chamar no WhatsApp para combinar serviço e horário.",
      },
      {
        id: "faq-2",
        question: "O atendimento é onde?",
        answer:
          "O atendimento é no salão Salão Martakblo (Lauzane Paulista, São Paulo - SP). O agendamento é direto com Flavia Nolasco.",
      },
      {
        id: "faq-3",
        question: "Quanto custa?",
        answer:
          "Os valores variam conforme o serviço e o tempo necessário. Você confirma o valor no agendamento ou pelo WhatsApp.",
      },
      {
        id: "faq-4",
        question: "Como devo me preparar para maquiagem?",
        answer:
          "Se possível, venha com a pele limpa. Se tiver referência do estilo, pode enviar pelo WhatsApp.",
      },
      {
        id: "faq-5",
        question: "Posso remarcar?",
        answer:
          "Sim. Caso precise, avise com antecedência para liberar o horário para outra cliente.",
      },
    ] as FaqItem[],
  },

  ctas: {
    primaryLabel: "Agendar Horário",
    secondaryLabel: "Chamar no WhatsApp",
    tertiaryLabel: "Instagram",
    floatingCtaLabel: "Agendar",
    installPwaLabel: "Instalar app",
  },

  seo: {
    siteName: "Flavia Nolasco — Cabelo e Maquiagem",
    title:
      "Cabeleireira e Maquiadora em Lauzane Paulista | Atendimento no salão Salão Martakblo",
    description:
      "Agende cabelo e maquiagem com Flavia Nolasco. Atendimento no salão Salão Martakblo (Lauzane Paulista, São Paulo - SP). Antes e depois, depoimentos e agendamento rápido.",
    ogImage: img("/og/og-image-v2.png"),
  },

  schema: {
    phone: "+55 11 95135-2996",
    priceRange: "$$",
    sameAs: ["https://instagram.com/cabeloeglossflavia"],
  },

  privacy: {
    shortText:
      "Este site pode usar cookies para métricas de acesso. Links para WhatsApp, Instagram, Calendly, Sentry, Google Tag, SonarCube e Vercel direcionam para serviços de terceiros.",
  },
} as const;
