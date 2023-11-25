/* Altere este arquivo para obter seu Portfólio pessoal */

// Para alterar as cores do portfólio globalmente, vá para o arquivo _globalColor.scss

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Renomeie para o nome do seu arquivo para animação personalizada

// Tela de Abertura (Splash Screen)

const splashScreen = {
  enabled: true, // defina como false para desativar a tela de abertura
  animation: splashAnimation,
  duration: 2000 // defina a duração da animação conforme sua animação
};

// Seção de Resumo e Saudação

const illustration = {
  animated: true // defina como false para usar SVG estático
};

const greeting = {
  username: "Stelvio Chibuco",
  title: "Olá a todos, sejam bem-vindos ao meu webfolio",
  subTitle: emoji(
    "Um apaixonado desenvolvedor full stack 🚀 com experiência na construção de aplicações web e mobile com JavaScript / Reactjs / Nodejs / React Native e outras bibliotecas e frameworks interessantes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // deixe vazio para ocultar o botão
  displayGreeting: true // defina como false para ocultar esta seção, padrão é true
};

// Links de Mídias Sociais

const socialMediaLinks = {
  github: "https://github.com/Stelvio-Chibuco",
  linkedin: "www.linkedin.com/in/stélvio-chibuco-301676263",
  gmail: "stelviochibuco799@gmail.com",
  gitlab: "",
  facebook: "https://web.facebook.com/stelvio.chibuco/",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter e Kaggle também são suportados nos links!
  // Para personalizar ícones e links sociais, ajuste src/components/SocialMedia
  display: true // defina como true para exibir esta seção, padrão é false
};

// Seção de Habilidades

const skillsSection = {
  title: "Quem sou eu?",
  subTitle: "DESENVOLVEDOR FULL STACK LOUCO QUE QUER EXPLORAR TODA TECNOLOGIA",
  skills: [
    emoji(
      "⚡ Desenvolver interfaces de usuário altamente interativas para suas aplicações web e mobile"
    ),
    emoji("⚡ Aplicações Web Progressivas (PWA) em pilhas normais e SPA"),
    emoji(
      "⚡ Integração de serviços de terceiros como Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Certifique-se de incluir o nome correto da Font Awesome para visualizar seu ícone
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // defina como false para ocultar esta seção, padrão é true
};

// Seção de Educação

const educationInfo = {
  display: true, // defina como false para ocultar esta seção, padrão é true
  schools: [
    {
      schoolName: "Universidade Save",
      logo: require("./assets/images/UniSave_logo.png"),
      subHeader: "Especialização em Engenharia de sistemas",
      duration: "Janeiro de 2022 - Dezembro de 2023",
      desc: "Participou das II Jornadas Cientificas na UJC.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Universidade Save",
      logo: require("./assets/images/UniSave_logo.png"),
      subHeader: "Licenciatura em Informática",
      duration: "Marco de 2020 - Dezembro de 2023",
      desc: "Classificado entre os 10% melhores do programa. Cursou disciplinas sobre Engenharia de Software, Segurança na Web, Sistemas Operacionais, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Suas 3 principais pilhas de tecnologia/experiência técnica

const techStack = {
  viewSkillBars: true, // Defina como true para mostrar a Seção de Proficiência
  experience: [
    {
      Stack: "Frontend/Design", //Insira a pilha ou tecnologia na qual você tem experiência
      progressPercentage: "90%" //Insira a proficiência relativa em porcentagem
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programação",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Defina como true para exibir as insígnias do codersrank, precisa alterar seu nome de usuário em src/containers/skillProgress/skillProgress.js:17:62, padrão é false
};

// Seção de Experiência Profissional

const workExperiences = {
  display: true, // Defina como true para mostrar a Seção de Experiências Profissionais
  experience: [
    {
      role: "Engenheiro de Software",
      company: "UniSave",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Janeiro de 2022 – Presente",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Desenvolvedor Front-End",
      company: "UniSave",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Maio de 2021 – Presente",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Estagiário em Engenharia de Software",
      company: "UniSave",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Julho 2023 – Dezembro 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Sua Seção de Código Aberto para Visualizar Seus Projetos Fixados no Github
Para saber como obter a chave do github, consulte readme.md */

const openSource = {
  showGithubProfile: "true", // Defina como true ou false para mostrar o perfil de Contato usando Github, padrão é true
  display: true // Defina como false para ocultar esta seção, padrão é true
};

// Alguns projetos grandes em que você trabalhou

const bigProjects = {
  title: "Grandes Projetos",
  subtitle: "ALGUMAS STARTUPS E EMPRESAS QUE AJUDEI A CRIAR SUA TECNOLOGIA",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Stock&venda",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visitar o site",
          url: "http://stock&venda.co.mz./"
        }
        //  você pode adicionar botões extras aqui.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visitar o site",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Defina como false para ocultar esta seção, padrão é true
};

// Seção de Conquistas
// Inclua certificados, palestras, etc.

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆 "),
  subtitle:
    "Conquistas, Certificações, Cartas de Prêmios e Algumas Coisas Legais que Eu Fiz!",

  achievementsCards: [
    {
      title: "Finalista do Google Code-In",
      subtitle:
        "Primeiro paquistanês a ser selecionado como Finalista do Google Code-In entre 4000 estudantes de 77 países diferentes.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certificação",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Carta de Prêmio",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Blog do Google Code-in",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Ação do Google Assistant",
      subtitle:
        "Desenvolveu uma Ação do Google Assistant, JavaScript Guru, disponível em 2 bilhões de dispositivos em todo o mundo.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Visualizar a Ação do Google Assistant",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Desenvolvedor de Aplicativos Web PWA",
      subtitle: "Certificado pela SMIT em Desenvolvimento de Aplicativos Web PWA",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certificação", url: ""},
        {
          name: "Projeto Final",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Defina como false para ocultar esta seção, padrão é true
};

// Seção de Blogs

const blogSection = {
  title: "Blogs",
  subtitle:
    "Com amor pelo desenvolvimento de coisas legais, adoro escrever e ensinar aos outros o que aprendi.",
  displayMediumBlogs: "true", // Defina como true para exibir blogs do Medium em vez dos codificados manualmente
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Ganhe uma camiseta do Google Assistant e $200 em créditos na Google Cloud",
      description:
        "Você quer ganhar $200 e uma camiseta do Google Assistant criando uma Ação do Google Assistant em menos de 30 minutos?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Por que REACT é o melhor?",
      description:
        "React é uma biblioteca JavaScript para construir Interfaces de Usuário. É mantido pelo Facebook e uma comunidade de desenvolvedores individuais e empresas."
    }
  ],
  display: true // Defina como false para ocultar esta seção, padrão é true
};


// Seção de Palestras

const talkSection = {
  title: "PALESTRAS",
  subtitle: emoji(
    "AMO COMPARTILHAR MEU CONHECIMENTO LIMITADO E RECEBER UM CRACHÁ DE PALESTRANTE 😅"
  ),

  talks: [
    {
      title: "Criar Ações para o Google Assistant",
      subtitle: "Codelab na GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Defina como false para ocultar esta seção, padrão é true
};

// Seção de Podcast

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "AMO FALAR SOBRE MIM E TECNOLOGIA",

  // Forneça o link incorporado do seu podcast
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Defina como false para ocultar esta seção, padrão é true
};

const contactInfo = {
  title: emoji("Entre em Contato ☎️"),
  subtitle:
    "Quer discutir um projeto ou apenas dizer oi? Minha caixa de entrada está aberta para todos.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Seção do Twitter

const twitterDetails = {
  userName: "twitter", // Substitua "twitter" pelo seu nome de usuário no Twitter sem o @
  display: true // Defina como true para exibir esta seção, padrão é false
};

const isHireable = false; // Defina como false se você não estiver procurando emprego. Também será exibido como "Aberto para oportunidades: Sim/Não" no rodapé do GitHub

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
