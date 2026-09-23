export interface ExpertData {
  name: string;
  title: string;
  subtitle: string;
  city: string;
  state: string;
  cro: string;
  whatsappUrl: string;
  whatsappPhoneRaw: string;
  instagramUrl: string;
  instagramHandle: string;
  heroImage: string;
  expertImages: {
    url: string;
    caption: string;
    highlight: string;
  }[];
  resultsImages: {
    id: number;
    url: string;
    title: string;
    description: string;
    tag: string;
  }[];
  differentials: {
    title: string;
    description: string;
  }[];
  steps: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const EXPERT_DATA: ExpertData = {
  name: "Isabela Damasceno",
  title: "Cirurgiã Dentista",
  subtitle: "Especialista em Implante, Prótese e Laserterapia",
  city: "Salvador",
  state: "BA",
  cro: "CRO-BA",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=71993521600&text&type=phone_number&app_absent=0&utm_source=ig",
  whatsappPhoneRaw: "71993521600",
  instagramUrl: "https://www.instagram.com/damascenoisabela/",
  instagramHandle: "@damascenoisabela",
  
  // Imagens Hero fornecidas
  heroImage: "https://i.imgur.com/6RUy3gI.png",
  
  // Fotos do expert (autoridade, acolhimento e bastidores clínicos)
  expertImages: [
    {
      url: "https://i.imgur.com/6RUy3gI.png",
      caption: "Atendimento acolhedor e individualizado",
      highlight: "Dra. Isabela Damasceno"
    },
    {
      url: "https://i.imgur.com/vbTMCog.png",
      caption: "Planejamento minucioso para cada paciente",
      highlight: "Precisão & Conforto"
    },
    {
      url: "https://i.imgur.com/x5dm47a.png",
      caption: "Cuidado humanizado e tecnologia em Salvador",
      highlight: "Sorrisos Reais"
    }
  ],

  // Provas sociais / Antes e Depois / Resultados fornecidos
  resultsImages: [
    {
      id: 1,
      url: "https://i.imgur.com/U8H850s.png",
      title: "Reabilitação Oral & Implante",
      description: "Recuperação anatômica e funcional com fixação segura e aparência 100% natural.",
      tag: "Implante & Estética"
    },
    {
      id: 2,
      url: "https://i.imgur.com/OCIwQ9T.png",
      title: "Harmonia & Prótese de Alta Precisão",
      description: "Alinhamento, contorno e cor natural devolvendo a segurança de sorrir sem receio.",
      tag: "Prótese Personalizada"
    },
    {
      id: 3,
      url: "https://i.imgur.com/WN90Cz5.png",
      title: "Recuperação do Sorriso e Mastigação",
      description: "Adequação oclusal e estética minuciosa planejada de forma individual.",
      tag: "Reabilitação Completa"
    },
    {
      id: 4,
      url: "https://i.imgur.com/PwYO3KK.png",
      title: "Transformação Funcional Estética",
      description: "Solução definitiva para ausências dentárias com conforto pós-procedimento.",
      tag: "Implantes Dentários"
    },
    {
      id: 5,
      url: "https://i.imgur.com/pTJnTw0.png",
      title: "Estética & Bem-estar Bucal",
      description: "Integração harmônica com gengiva saudável e dentes fortes para o dia a dia.",
      tag: "Saúde & Estética"
    },
    {
      id: 6,
      url: "https://i.imgur.com/Wj4Gwam.png",
      title: "Sorriso Renovado & Autoestima",
      description: "Tratamento personalizado que devolve a alegria de conversar e sorrir nas fotos.",
      tag: "Resultado Real"
    }
  ],

  differentials: [
    {
      title: "Avaliação 100% Honesta e Sem Compromisso",
      description: "Sem empurrar procedimentos que você não precisa. Analiso sua real necessidade e explico cada detalhe de forma transparente."
    },
    {
      title: "Atendimento Direto Comigo do Início ao Fim",
      description: "Você não será repassado para estagiários ou múltiplos profissionais. Eu pessoalmente planejo e executo todo o seu tratamento."
    },
    {
      title: "Laserterapia para Pós-Operatório Confortável",
      description: "Aplicação de laser terapêutico para acelerar a cicatrização, combater inflamações e proporcionar uma recuperação muito mais tranquila e sem dor."
    },
    {
      title: "Naturalidade que Combina com Seu Rosto",
      description: "Nada de dentes artificiais ou artificiais demais. Trabalho próteses e implantes que respeitam sua fisionomia e idade."
    },
    {
      title: "Ambiente Acolhedor e Zero Julgamentos",
      description: "Sei que muitas pessoas têm medo ou vergonha por estarem há tempo sem ir ao dentista. Aqui você encontra escuta atenta, respeito e carinho."
    },
    {
      title: "Planejamento Acessível & Facilitado",
      description: "Condições claras para tornar seu tratamento possível em Salvador, com início em uma primeira consulta de avaliação gratuita."
    }
  ],

  steps: [
    {
      step: "01",
      title: "Contato rápido no WhatsApp",
      description: "Você clica no botão, me envia uma mensagem e conversamos em poucos minutos sem burocracia."
    },
    {
      step: "02",
      title: "Escolha do melhor horário",
      description: "Agendamos sua consulta no consultório em Salvador no dia e turno mais confortáveis para a sua rotina."
    },
    {
      step: "03",
      title: "Avaliação completa e gratuita",
      description: "Sentamos juntos, examino seu caso, ouço suas queixas e você sai com um plano de ação claro e sem custos de avaliação."
    }
  ]
};

export function buildWhatsAppLink(customSubject?: string): string {
  if (!customSubject) {
    return EXPERT_DATA.whatsappUrl;
  }
  const text = encodeURIComponent(
    `Olá, Dra. Isabela! Vim pelo seu site e gostaria de agendar minha PRIMEIRA CONSULTA GRATUITA para ${customSubject}.`
  );
  return `https://api.whatsapp.com/send/?phone=${EXPERT_DATA.whatsappPhoneRaw}&text=${text}&type=phone_number&app_absent=0&utm_source=ig`;
}
