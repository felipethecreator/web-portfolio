export type Language = "pt-BR" | "en-US"

export const LANGUAGE_COOKIE_NAME = "portfolio-language"
export const DEFAULT_LANGUAGE: Language = "pt-BR"

export const LANGUAGE_FLAGS: Record<Language, string> = {
  "pt-BR": "🇧🇷",
  "en-US": "🇺🇸",
}

export function isLanguage(value?: string | null): value is Language {
  return value === "pt-BR" || value === "en-US"
}

export function getNextLanguage(language: Language): Language {
  return language === "pt-BR" ? "en-US" : "pt-BR"
}

type NavItem = {
  href: string
  label: string
}

type SkillItem = {
  icon: "frontend" | "backend" | "devops" | "design"
  title: string
  description: string
}

type ProjectItem = {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

type ExperienceItem = {
  title: string
  company: string
  type: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

export type PortfolioContent = {
  header: {
    name: string
    navigation: NavItem[]
    languageToggleLabel: string
    socialLabels: {
      github: string
      linkedin: string
    }
  }
  hero: {
    titleIntro: string
    titleHighlight: string
    description: string
    contactCta: string
    resumeCta: string
    imageAlt: string
  }
  about: {
    title: string
    paragraphs: string[]
    education: {
      badge: string
      title: string
      description: string
    }
    softSkills: {
      badge: string
      title: string
      description: string
    }
  }
  skills: {
    title: string
    items: SkillItem[]
  }
  projects: {
    title: string
    githubLabel: string
    liveDemoLabel: string
    items: ProjectItem[]
  }
  experience: {
    title: string
    items: ExperienceItem[]
  }
  contact: {
    title: string
    description: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      subjectLabel: string
      subjectPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      submit: string
      submitting: string
      successToast: string
      errorToast: string
    }
  }
}

export const portfolioContent: Record<Language, PortfolioContent> = {
  "pt-BR": {
    header: {
      name: "Felipe Rodrigues",
      navigation: [
        { href: "#about", label: "Sobre" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projetos" },
        { href: "#experience", label: "Experiência" },
        { href: "#contact", label: "Contato" },
      ],
      languageToggleLabel: "Mudar idioma para inglês",
      socialLabels: {
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    hero: {
      titleIntro: "Olá, me chamo Felipe",
      titleHighlight: "Dev Full Stack",
      description:
        "Eu desenvolvo aplicações web acessíveis e fáceis de usar com tecnologias modernas.",
      contactCta: "Entre em contato",
      resumeCta: "Baixar currículo",
      imageAlt: "Foto de Felipe Rodrigues",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Tenho 20 anos e sou um desenvolvedor apaixonado por desafios e tecnologia, com uma base sólida em desenvolvimento web. Tenho aprendido e criado projetos com Angular, Java, React, Next.js e Node.js, sempre em busca de novas oportunidades como desenvolvedor.",
        "Dedico-me à criação de APIs e soluções elegantes e eficientes, sempre adotando as melhores práticas de desenvolvimento.",
      ],
      education: {
        badge: "BCc",
        title: "Educação",
        description: "Bacharelado em Ciências da Computação - 7º semestre",
      },
      softSkills: {
        badge: "STs",
        title: "Soft Skills",
        description:
          "Autodidata, Proatividade, Comunicação, Colaboração, Liderança.",
      },
    },
    skills: {
      title: "Habilidades e Tecnologias",
      items: [
        {
          icon: "frontend",
          title: "Frontend",
          description:
            "Angular, Svelte, React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, Sass",
        },
        {
          icon: "backend",
          title: "Backend",
          description:
            "Java, Spring Boot, Maven, Swagger (OpenAPI), Nest.js, Node.js, Express, Prisma ORM, PostgreSQL, MongoDB",
        },
        {
          icon: "devops",
          title: "DevOps",
          description:
            "Git, Linux, Docker, Google Cloud Platform (GCP), Deploy de aplicações backend/frontend, CI/CD, Vercel",
        },
        {
          icon: "design",
          title: "Design",
          description: "Figma, UI/UX, Design Responsivo",
        },
      ],
    },
    projects: {
      title: "Projetos",
      githubLabel: "GitHub",
      liveDemoLabel: "Demonstração ao vivo",
      items: [
        {
          title: "Panchito",
          description:
            "Sistema full-stack desenvolvido para gerenciar operações de uma hamburgueria de forma prática e eficiente. O sistema foi criado como um projeto freelancer colaborativo, aplicando boas práticas de desenvolvimento, organização de código e integração entre frontend e backend, tornando o gerenciamento do negócio mais ágil e confiável.",
          image: "/projects/panchito.png",
          technologies: ["Go", "React", "MongoDB", "Vercel", "Railway"],
          github: "https://github.com/orgs/Javex-Inc/repositories",
          demo: "https://github.com/orgs/Javex-Inc/repositories",
        },
        {
          title: "Realizando Sonhos App",
          description:
            "Realizando Sonhos é um sistema full-stack open-source desenvolvido voluntariamente para a Associação Realizando Sonhos em Brasília. O projeto, sem fins lucrativos, permite que educadores gerenciem turmas, alunos e presença, contribuindo para o acompanhamento e desenvolvimento de crianças e adolescentes.",
          image: "/projects/realizando-sonhos.png",
          technologies: [
            "Next.js",
            "Node.js",
            "Prisma ORM",
            "PostgreSQL",
            "Supabase",
            "Vercel",
          ],
          github: "https://github.com/guirra-byte/realizando-sonhos-app",
          demo: "https://realizando-sonhos-app.vercel.app/",
        },
        {
          title: "Nexa",
          description:
            "Aplicação full-stack desenvolvida como parte da disciplina Projeto Integrador I, com foco no gerenciamento financeiro pessoal. O sistema permite o controle de despesas e ganhos, geração de gráficos interativos e criação de orçamentos por categorias, oferecendo uma visão clara da saúde financeira do usuário.",
          image: "/projects/nexa.png",
          technologies: ["React", "Go", "Supabase", "Vercel"],
          github: "https://github.com/orgs/Nexa-Money/repositories",
          demo: "https://github.com/orgs/Nexa-Money/repositories",
        },
        {
          title: "Web Portfólio",
          description:
            "Aplicação front-end desenvolvida para apresentar meus projetos, habilidades e experiências de forma profissional e interativa. Construído com Next e TailwindCSS, ele reflete minha identidade como desenvolvedor, reunindo trabalhos práticos, projetos de impacto social e experimentos pessoais em um só lugar.",
          image: "/projects/web-portfolio.png",
          technologies: ["Next.js", "Tailwind CSS", "Vercel"],
          github: "https://github.com/felipethecreator/web-portfolio",
          demo: "https://web-portfolio-one-swart.vercel.app/",
        },
        {
          title: "MovieFlix",
          description:
            "Aplicação web desenvolvida como parte do processo seletivo de estágio front-end da CEVICOM. Inspirada no estilo da Netflix, a plataforma permite buscar filmes e séries, visualizar detalhes completos e navegar pelos resultados de forma totalmente responsiva. Além das funcionalidades principais, inclui dark mode, modal de detalhes e paginação, demonstrando domínio técnico e atenção a boas práticas de código e design.",
          image: "/projects/movieflix.png",
          technologies: ["HTML", "TailwindCSS", "Javascript", "OMDb API"],
          github: "https://github.com/felipethecreator/desafio-catalogo-filmes",
          demo: "https://github.com/felipethecreator/desafio-catalogo-filmes",
        },
        {
          title: "Product API",
          description:
            "Aplicação back-end desenvolvida em Java com Spring Boot, criada para treinar habilidades em construção de APIs REST usando Spring. O sistema implementa um CRUD completo de produtos, permitindo criar, listar, atualizar e excluir registros. O projeto teve como foco o aprendizado prático de conceitos fundamentais do ecossistema Spring, como controllers, DTOs, services, repositories e integração com banco de dados, além de boas práticas para organização de código e arquitetura de aplicações back-end.",
          image: "",
          technologies: [
            "Next.js",
            "OpenAI API",
            "Tailwind CSS",
            "Vercel AI SDK",
          ],
          github: "https://github.com/felipethecreator/product-api",
          demo: "https://github.com/felipethecreator/product-api",
        },
      ],
    },
    experience: {
      title: "Experiência Profissional",
      items: [
        {
          title: "Desenvolvedor Full-Stack",
          company: "Vicax - Soluções Tecnológicas",
          type: "Desenvolvedor Júnior - PJ",
          location: "Remoto, Brasília - DF",
          period: "Nov 2025 - O momento",
          description: [
            "Desenvolvimento de funcionalidades full-stack para uma plataforma de acompanhamento e gestão de doações, com foco em dashboards e visualização de dados.",
            "Implementação de filtros e melhorias de usabilidade para tornar a navegação e a análise de informações mais rápidas e intuitivas.",
            "Utilização de Svelte no frontend e NestJS no backend, integrando as camadas da aplicação e garantindo consistência nos dados exibidos.",
            "Criação de otimizações de queries e índices no PostgreSQL para reduzir tempo de resposta e melhorar o desempenho das consultas usadas nos dashboards.",
            "Utilização de metodologias ágeis (Scrum/Kanban) para organização das tarefas.",
          ],
          technologies: [
            "Svelte",
            "Typescript",
            "Nest.js",
            "Prisma ORM",
            "PostgreSQL",
          ],
        },
        {
          title: "Desenvolvedor Full-Stack",
          company: "LightBase - Serviços e Consultoria em Software Público",
          type: "Estágio",
          location: "Remoto, Brasília - DF",
          period: "Ago 2025 - O momento",
          description: [
            "Desenvolvendo soluções full-stack utilizando Spring, Java e Angular",
            "Construção de interfaces responsivas em Angular, seguindo boas práticas de UX/UI.",
            "Utilização de metodologias ágeis (Scrum/Kanban) para organização das tarefas.",
            "Apoio a migração de sistemas legados para arquiteturas mais modernas.",
          ],
          technologies: [
            "Angular",
            "Typescript",
            "Spring",
            "Java",
            "PostgreSQL",
          ],
        },
        {
          title: "Desenvolvedor Front-End",
          company: "IGUT Clínicas",
          type: "Estágio",
          location: "Híbrido, Brasília - DF",
          period: "Jun 2025 - Ago 2025",
          description: [
            "Desenvolvimento e otimização da interface de usuário para um aplicativo mobile destinado a médicos, com foco na entrega de uma experiência fluida e intuitiva.",
            "Implementação de funcionalidades interativas e dinâmicas utilizando JavaScript, abrangendo desde a validação de formulários até a conexão eficiente com APIs RESTful para gerenciamento e persistência de dados.",
            "Consumo de APIs seguras, implementando a autenticação via JWT (JSON Web Tokens) e utilizando o esquema Bearer Authentication.",
            "Implementação de um sistema de roteamento dinâmico com NavigoJS, otimizando a navegação interna e a organização do fluxo de trabalho do aplicativo.",
            "Gerenciamento e exibição de dados dinâmicos através da manipulação de templates com MustacheJS, possibilitando a criação de interfaces flexíveis e reativas.",
            "Aplicação de HTML para estruturação semântica, Tailwind CSS para estilização responsiva e ágil, e Capacitor para a integração com funcionalidades nativas do dispositivo móvel.",
            "Experiência fundamental para o aprimoramento de habilidades técnicas, resolução de desafios complexos em tempo real e colaboração eficaz em um ambiente de equipe, solidificando o conhecimento em desenvolvimento front-end.",
          ],
          technologies: [
            "Javascript",
            "HTML",
            "TailwindCSS",
            "Capacitor",
            "MustacheJS",
            "Navigo",
          ],
        },
        {
          title: "Desenvolvedor Full-Stack",
          company: "Instituição Realizando Sonhos",
          type: "Voluntário",
          location: "Remoto, Brasília - DF",
          period: "Abr 2025 - Jun 2025",
          description: [
            "Desenvolvimento de um sistema com Next.js, Node.js, TypeScript, TailwindCSS e shadcn/ui para gestão educacional para mais de 200 alunos usando Supabase como banco de dados principal utilizando Prisma ORM para modelagem e consulta dos dados.",
            "Implementei CRUDs completos, com interfaces reativas e experiência fluida para o usuário.",
            "Boas práticas com React Hooks e organização de contexts e utils reutilizáveis.",
            "Integração com APIs REST, incluindo operações de autenticação, atualização e exclusão de dados persistidos via Prisma e PostgreSQL.",
            "Autenticação e autorização OAuth2 do Google.",
            "Gerenciamento de conflitos e versionamento com Git e GitHub, incluindo resolução de merges complexos e organização de commits semânticos.",
          ],
          technologies: [
            "Next.js",
            "Typescript",
            "Node.js",
            "TailwindCSS",
            "PostgreSQL",
            "Prisma ORM",
            "Supabase",
          ],
        },
        {
          title: "Monitor de Desenvolvimento Front-End (React)",
          company: "Instituição Realizando Sonhos",
          type: "Voluntário",
          location: "Presencial, Brasília - DF",
          period: "Jul 2024 - Dez 2024",
          description: [
            "Atuei como Instrutor de Desenvolvimento Web na monitoria de TI do UniCEUB, onde lecionei aulas de React para grupos no período vespertino e noturno (das 17h às 19h). Minhas atribuições envolveram planejar e ministrar o curso, oferecer suporte técnico e acadêmico, além de guiar os alunos em projetos práticos.",
            "Essa oportunidade me permitiu aprimorar minhas habilidades em React, ensino e comunicação, ao mesmo tempo que contribuo para o desenvolvimento de novos talentos na área de tecnologia.",
          ],
          technologies: ["React", "Javascript", "HTML", "CSS"],
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      description:
        "Mesmo trabalhando atualmente, estou sempre curioso para conhecer novos projetos e desafios. Se você busca um desenvolvedor que possa agregar valor ao seu time ou projeto, vamos conversar!",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      form: {
        nameLabel: "Nome",
        namePlaceholder: "De que posso te chamar?",
        emailLabel: "Email",
        emailPlaceholder: "Onde posso te responder?",
        subjectLabel: "Assunto",
        subjectPlaceholder: "Qual é o tema da mensagem?",
        messageLabel: "Mensagem",
        messagePlaceholder: "Compartilhe comigo o que deseja",
        submit: "Enviar Email",
        submitting: "Enviando...",
        successToast: "Email enviado com sucesso!",
        errorToast: "Ocorreu um erro ao enviar o email.",
      },
    },
  },
  "en-US": {
    header: {
      name: "Felipe Rodrigues",
      navigation: [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
      ],
      languageToggleLabel: "Switch language to Portuguese",
      socialLabels: {
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    hero: {
      titleIntro: "Hi, I'm Felipe",
      titleHighlight: "Full Stack Developer",
      description:
        "I build accessible, easy-to-use web applications with modern technologies.",
      contactCta: "Get in touch",
      resumeCta: "Download resume",
      imageAlt: "Photo of Felipe Rodrigues",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I am 20 years old and a developer passionate about challenges and technology, with a solid foundation in web development. I have been learning and building projects with Angular, Java, React, Next.js, and Node.js, always looking for new opportunities as a developer.",
        "I focus on building APIs and elegant, efficient solutions while consistently following development best practices.",
      ],
      education: {
        badge: "BSc",
        title: "Education",
        description: "Bachelor's in Computer Science - 7th semester",
      },
      softSkills: {
        badge: "SS",
        title: "Soft Skills",
        description:
          "Self-taught, proactive, communication, collaboration, leadership.",
      },
    },
    skills: {
      title: "Skills & Technologies",
      items: [
        {
          icon: "frontend",
          title: "Frontend",
          description:
            "Angular, Svelte, React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, Sass",
        },
        {
          icon: "backend",
          title: "Backend",
          description:
            "Java, Spring Boot, Maven, Swagger (OpenAPI), Nest.js, Node.js, Express, Prisma ORM, PostgreSQL, MongoDB",
        },
        {
          icon: "devops",
          title: "DevOps",
          description:
            "Git, Linux, Docker, Google Cloud Platform (GCP), Backend/frontend deployment, CI/CD, Vercel",
        },
        {
          icon: "design",
          title: "Design",
          description: "Figma, UI/UX, Responsive Design",
        },
      ],
    },
    projects: {
      title: "Projects",
      githubLabel: "GitHub",
      liveDemoLabel: "Live Demo",
      items: [
        {
          title: "Panchito",
          description:
            "Full-stack system built to manage a burger restaurant's operations in a practical and efficient way. The system was created as a collaborative freelance project, applying solid development practices, code organization, and frontend/backend integration to make business management faster and more reliable.",
          image: "/projects/panchito.png",
          technologies: ["Go", "React", "MongoDB", "Vercel", "Railway"],
          github: "https://github.com/orgs/Javex-Inc/repositories",
          demo: "https://github.com/orgs/Javex-Inc/repositories",
        },
        {
          title: "Realizando Sonhos App",
          description:
            "Realizando Sonhos is an open-source full-stack system voluntarily developed for the Associação Realizando Sonhos in Brasília. The non-profit project allows educators to manage classes, students, and attendance, helping track and support the development of children and teenagers.",
          image: "/projects/realizando-sonhos.png",
          technologies: [
            "Next.js",
            "Node.js",
            "Prisma ORM",
            "PostgreSQL",
            "Supabase",
            "Vercel",
          ],
          github: "https://github.com/guirra-byte/realizando-sonhos-app",
          demo: "https://realizando-sonhos-app.vercel.app/",
        },
        {
          title: "Nexa",
          description:
            "Full-stack application built as part of the Integrated Project I course, focused on personal finance management. The system allows users to track expenses and income, generate interactive charts, and create category-based budgets, offering a clear view of their financial health.",
          image: "/projects/nexa.png",
          technologies: ["React", "Go", "Supabase", "Vercel"],
          github: "https://github.com/orgs/Nexa-Money/repositories",
          demo: "https://github.com/orgs/Nexa-Money/repositories",
        },
        {
          title: "Web Portfolio",
          description:
            "Front-end application built to present my projects, skills, and experience in a professional and interactive way. Built with Next.js and Tailwind CSS, it reflects my identity as a developer by bringing together practical work, social-impact projects, and personal experiments in one place.",
          image: "/projects/web-portfolio.png",
          technologies: ["Next.js", "Tailwind CSS", "Vercel"],
          github: "https://github.com/felipethecreator/web-portfolio",
          demo: "https://web-portfolio-one-swart.vercel.app/",
        },
        {
          title: "MovieFlix",
          description:
            "Web application built as part of CEVICOM's front-end internship selection process. Inspired by Netflix, the platform lets users search for movies and TV series, view full details, and browse the results in a fully responsive interface. In addition to the main features, it includes dark mode, a details modal, and pagination, demonstrating technical ownership and attention to code and design best practices.",
          image: "/projects/movieflix.png",
          technologies: ["HTML", "TailwindCSS", "Javascript", "OMDb API"],
          github: "https://github.com/felipethecreator/desafio-catalogo-filmes",
          demo: "https://github.com/felipethecreator/desafio-catalogo-filmes",
        },
        {
          title: "Product API",
          description:
            "Back-end application built in Java with Spring Boot to sharpen REST API development skills with Spring. The system implements a complete product CRUD, allowing users to create, list, update, and delete records. The project focused on hands-on learning of core Spring ecosystem concepts such as controllers, DTOs, services, repositories, database integration, and good practices for code organization and back-end architecture.",
          image: "",
          technologies: [
            "Next.js",
            "OpenAI API",
            "Tailwind CSS",
            "Vercel AI SDK",
          ],
          github: "https://github.com/felipethecreator/product-api",
          demo: "https://github.com/felipethecreator/product-api",
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          title: "Full-Stack Developer",
          company: "Vicax - Soluções Tecnológicas",
          type: "Junior Developer - Contractor",
          location: "Remote, Brasília - DF",
          period: "Nov 2025 - Present",
          description: [
            "Developing full-stack features for a donation tracking and management platform, with a focus on dashboards and data visualization.",
            "Implementing filters and usability improvements to make navigation and information analysis faster and more intuitive.",
            "Using Svelte on the frontend and NestJS on the backend, integrating the application layers and ensuring consistency across the data shown in the dashboards.",
            "Creating PostgreSQL query and index optimizations to reduce response times and improve the performance of dashboard-related queries.",
            "Working with agile methodologies (Scrum/Kanban) to organize tasks.",
          ],
          technologies: [
            "Svelte",
            "Typescript",
            "Nest.js",
            "Prisma ORM",
            "PostgreSQL",
          ],
        },
        {
          title: "Full-Stack Developer",
          company: "LightBase - Serviços e Consultoria em Software Público",
          type: "Intern",
          location: "Remote, Brasília - DF",
          period: "Aug 2025 - Present",
          description: [
            "Building full-stack solutions using Spring, Java, and Angular.",
            "Creating responsive Angular interfaces while following UX/UI best practices.",
            "Working with agile methodologies (Scrum/Kanban) to organize tasks.",
            "Supporting the migration of legacy systems to more modern architectures.",
          ],
          technologies: [
            "Angular",
            "Typescript",
            "Spring",
            "Java",
            "PostgreSQL",
          ],
        },
        {
          title: "Front-End Developer",
          company: "IGUT Clínicas",
          type: "Intern",
          location: "Hybrid, Brasília - DF",
          period: "Jun 2025 - Aug 2025",
          description: [
            "Developed and optimized the user interface for a mobile app aimed at doctors, focused on delivering a smooth and intuitive experience.",
            "Implemented interactive and dynamic features with JavaScript, from form validation to efficient REST API integration for data management and persistence.",
            "Consumed secure APIs, implementing JWT (JSON Web Tokens) authentication with the Bearer Authentication scheme.",
            "Built a dynamic routing system with NavigoJS, improving the application's internal navigation and workflow organization.",
            "Managed and rendered dynamic data through MustacheJS template handling, enabling flexible and reactive interfaces.",
            "Used HTML for semantic structure, Tailwind CSS for responsive styling, and Capacitor to integrate with native mobile device features.",
            "This experience was fundamental to strengthening my technical skills, solving complex real-time challenges, and collaborating effectively in a team environment.",
          ],
          technologies: [
            "Javascript",
            "HTML",
            "TailwindCSS",
            "Capacitor",
            "MustacheJS",
            "Navigo",
          ],
        },
        {
          title: "Full-Stack Developer",
          company: "Instituição Realizando Sonhos",
          type: "Volunteer",
          location: "Remote, Brasília - DF",
          period: "Apr 2025 - Jun 2025",
          description: [
            "Developed a system with Next.js, Node.js, TypeScript, TailwindCSS, and shadcn/ui for educational management for more than 200 students, using Supabase as the primary database and Prisma ORM for data modeling and queries.",
            "Implemented complete CRUD flows with reactive interfaces and a smooth user experience.",
            "Applied React Hooks best practices and organized reusable contexts and utilities.",
            "Integrated REST APIs, including authentication, update, and deletion flows for data persisted with Prisma and PostgreSQL.",
            "Implemented Google OAuth2 authentication and authorization.",
            "Handled conflict management and versioning with Git and GitHub, including complex merge resolution and semantic commit organization.",
          ],
          technologies: [
            "Next.js",
            "Typescript",
            "Node.js",
            "TailwindCSS",
            "PostgreSQL",
            "Prisma ORM",
            "Supabase",
          ],
        },
        {
          title: "Front-End Development Teaching Assistant (React)",
          company: "Instituição Realizando Sonhos",
          type: "Volunteer",
          location: "On-site, Brasília - DF",
          period: "Jul 2024 - Dec 2024",
          description: [
            "I worked as a Web Development Instructor in UniCEUB's IT mentoring program, where I taught React classes for afternoon and evening groups (from 5 PM to 7 PM). My responsibilities included planning and teaching the course, offering technical and academic support, and guiding students through hands-on projects.",
            "This opportunity allowed me to strengthen my React, teaching, and communication skills while contributing to the development of new talent in technology.",
          ],
          technologies: ["React", "Javascript", "HTML", "CSS"],
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      description:
        "Even though I am currently working, I am always curious to hear about new projects and challenges. If you are looking for a developer who can add value to your team or project, let's talk.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      form: {
        nameLabel: "Name",
        namePlaceholder: "How should I call you?",
        emailLabel: "Email",
        emailPlaceholder: "Where can I reply to you?",
        subjectLabel: "Subject",
        subjectPlaceholder: "What is your message about?",
        messageLabel: "Message",
        messagePlaceholder: "Tell me what you need",
        submit: "Send email",
        submitting: "Sending...",
        successToast: "Email sent successfully!",
        errorToast: "Something went wrong while sending the email.",
      },
    },
  },
}
