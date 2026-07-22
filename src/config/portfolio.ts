export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "backend" | "mobile" | "fullstack";
  techStack: string[];
  architecture: string;
  challenges: string;
  lessonsLearned: string;
  githubUrl: string;
  liveUrl: string;
  caseStudy: string;
  color: string; // Used for dynamic mesh/card styling
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; info: string }[];
}

export const portfolioConfig = {
  owner: {
    name: "Nguyễn Hạnh Phúc",
    roles: ["Backend Developer", "Flutter Developer", "Software Engineer"],
    headline: "Architecting High-Performance Backends & Seamless Mobile Experiences",
    subHeadline: "Crafting scalable server-side systems, cross-platform mobile apps, and robust cloud architectures with clean code and modern design systems.",
    email: "nguyenhanhphuc.dev@gmail.com",
    github: "https://github.com/HappyBoi04092004",
    linkedin: "https://linkedin.com/in/nguyenhanhphuc",
    facebook: "https://facebook.com/nguyenhanhphuc.dev",
    resumeUrl: "#", // Standard placeholder link that can be bound to public/resume.pdf
  },
  
  about: {
    mission: "To engineer secure, highly-scalable backend systems and premium mobile experiences that bridge technical complexity and elegant user interaction.",
    vision: "To push the boundaries of digital workspaces, leveraging 3D technologies, cloud-native deployments, and strict architectural standards to design the future of software.",
    story: "Starting my journey as a computer science student with a passion for logic, I fell in love with backend engineering—specifically the challenge of scaling APIs to handle millions of transactions. Recognizing the importance of end-user experience, I mastered Flutter to develop modern cross-platform mobile applications. Today, I build full-stack solutions with clean architectures, focusing on developer experience, strict testing protocols, and robust CI/CD automation.",
    stats: [
      { label: "Years of Experience", value: 4, suffix: "+" },
      { label: "Projects Completed", value: 25, suffix: "" },
      { label: "Active Repositories", value: 42, suffix: "" },
      { label: "Mock Commits This Year", value: 1842, suffix: "+" },
    ]
  },

  skills: [
    {
      title: "Backend Engineering",
      icon: "Server",
      skills: [
        { name: "Go (Golang)", level: 90, info: "Microservices, gRPC, Gin, Fiber, Goroutines concurrency" },
        { name: "Node.js / NestJS", level: 95, info: "TypeScript, REST APIs, TypeORM, Prisma, WebSockets" },
        { name: "Python / FastAPI", level: 85, info: "AsyncIO, data parsing, machine learning pipelines" },
        { name: "Java / Spring Boot", level: 80, info: "Enterprise APIs, Hibernate, Maven, JUnit testing" },
      ]
    },
    {
      title: "Mobile Development",
      icon: "Smartphone",
      skills: [
        { name: "Flutter & Dart", level: 92, info: "BLoC state management, Clean Architecture, custom painter UI" },
        { name: "React Native", level: 80, info: "Expo, TS, bridging native modules, reanimated animations" },
        { name: "iOS/Android Native Integration", level: 78, info: "Method channels, Gradle scripting, Swift & Kotlin basics" },
      ]
    },
    {
      title: "Database & Caching",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", level: 90, info: "Indexing tuning, CTE queries, JSONB columns, replication" },
        { name: "MongoDB", level: 88, info: "Aggregation frameworks, sharding, document modeling" },
        { name: "Redis", level: 85, info: "Caching strategies, distributed locks, pub-sub messaging" },
        { name: "Elasticsearch", level: 75, info: "Full-text index configuration, search query optimization" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "Cloud",
      skills: [
        { name: "Docker & K8s", level: 85, info: "Containerization, pod networking, Helm charts, Docker Compose" },
        { name: "AWS Services", level: 80, info: "EC2, ECS, Lambda (Serverless), RDS, S3, CloudFront, IAM" },
        { name: "CI/CD Pipelines", level: 88, info: "GitHub Actions, GitLab CI, automated testing & semantic releases" },
        { name: "Linux / Bash", level: 85, info: "Server configuration, cron scripting, process monitoring" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "skyroute",
      title: "SkyRoute Logistics",
      subtitle: "Enterprise Transport Booking & Dispatch Engine",
      description: "A highly-scalable logistics routing API and corresponding Flutter application managing multi-stop route optimization, driver dispatching, and live tracking.",
      category: "fullstack",
      techStack: ["Go", "Flutter", "PostgreSQL", "Redis", "Google Maps API", "Docker", "gRPC"],
      architecture: "Clean Architecture on Mobile, Domain-Driven Design (DDD) on Backend",
      challenges: "Real-time dispatch synchronization between driver Flutter apps and the Go central server during network outages without losing telemetry packets.",
      lessonsLearned: "Designed an offline-first local SQL database in Flutter, batching GPS telemetry logs and syncing them securely with custom backoff retry middleware.",
      githubUrl: "https://github.com/nguyenhanhphuc/skyroute-logistics",
      liveUrl: "https://skyroute.example.com",
      caseStudy: "SkyRoute Logistics operates in five Southeast Asian countries. The Go backend utilizes a custom priority queue to dispatch tasks to drivers. By moving from REST to gRPC, binary message sizes were reduced by 60%, resulting in a 40% improvement in mobile battery performance.",
      color: "from-blue-600 to-indigo-800"
    },
    {
      id: "paypulse",
      title: "PayPulse Gateway",
      subtitle: "High-Throughput Payment Orchestration Engine",
      description: "A transactional backend system enabling unified vendor API checkouts with multi-tenant card vaults, fraud auditing, and automated reconciliations.",
      category: "backend",
      techStack: ["NestJS", "TypeScript", "PostgreSQL", "Kafka", "Redis", "Kubernetes", "AWS RDS"],
      architecture: "Event-Driven Microservices using Apache Kafka & CQRS design pattern",
      challenges: "Ensuring exact-once transaction processing guarantees under extreme traffic bursts of 10,000+ RPS during seasonal sales.",
      lessonsLearned: "Leveraged distributed locks using Redis (Redlock) combined with PostgreSQL transaction isolations and idempotent API consumer keys.",
      githubUrl: "https://github.com/nguyenhanhphuc/paypulse-gateway",
      liveUrl: "https://paypulse.example.com",
      caseStudy: "PayPulse safely handled transactions for over 20 concurrent partner portals. It stores secure cards with asymmetric AES-256 GCM encryption inside isolated Docker namespaces. Average transaction resolution speeds dropped below 150ms globally.",
      color: "from-cyan-600 to-teal-800"
    },
    {
      id: "mediconnect",
      title: "MediConnect App",
      subtitle: "Telehealth Video Consultation & Records Mobile Client",
      description: "A sleek cross-platform HIPAA-compliant healthcare portal allowing patients to securely consult doctors, view e-prescriptions, and sync health metrics.",
      category: "mobile",
      techStack: ["Flutter", "Dart", "WebRTC", "Node.js", "MongoDB", "Firebase Cloud Messaging"],
      architecture: "Bloc State Management with Repository Pattern",
      challenges: "Establishing low-latency WebRTC streams with high quality on low-tier mobile devices in areas with weak 3G signals.",
      lessonsLearned: "Integrated STUN/TURN server optimizations and wrote custom adaptive bitrate scripts that scale camera frame rates dynamically based on WebRTC connection stats.",
      githubUrl: "https://github.com/nguyenhanhphuc/mediconnect-app",
      liveUrl: "https://mediconnect.example.com",
      caseStudy: "MediConnect was deployed to remote clinics, facilitating over 5,000 active remote consultations. The user interface was optimized for maximum contrast, matching WCAG AAA accessibility rules for vision-impaired patients.",
      color: "from-purple-600 to-pink-800"
    },
    {
      id: "cloudguard",
      title: "CloudGuard Daemon",
      subtitle: "Server Health & Threat Auditing Background Agent",
      description: "A lightweight Linux backend daemon that monitors filesystem changes, kernel audits, and logs anomaly events to an Elasticsearch central node.",
      category: "backend",
      techStack: ["Go", "eBPF", "Linux API", "Elasticsearch", "Docker"],
      architecture: "Monolithic CLI Agent utilizing Linux eBPF probes",
      challenges: "Extracting system audit logs without exceeding 1% CPU utilization limits on client production host machines.",
      lessonsLearned: "Wrote high-efficiency assembly probes inside the Linux kernel space using eBPF, transferring telemetry data to user space via ring buffers.",
      githubUrl: "https://github.com/nguyenhanhphuc/cloudguard-daemon",
      liveUrl: "https://cloudguard.example.com",
      caseStudy: "CloudGuard is deployed across 500+ staging VM clusters. It registers critical file permission modifications within 2ms, alerting sysadmins via Webhook Integrations instantly.",
      color: "from-emerald-600 to-teal-900"
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Senior Software Engineer",
      company: "Aura Tech Solutions",
      location: "Ho Chi Minh City, Vietnam",
      period: "2024 - Present",
      description: [
        "Architected scalable backend microservices using Go and NestJS, boosting system stability by 30%.",
        "Developed core mobile Flutter applications, integrating local SQL databases with offline synchronization features.",
        "Refactored relational database schemas in PostgreSQL, resulting in a 45% speed improvement on heavy search queries.",
        "Established CI/CD deployment pipelines inside AWS ECS using GitHub Actions, decreasing releases times from hours to 5 minutes."
      ],
      skills: ["Go", "NestJS", "Flutter", "PostgreSQL", "AWS", "GitHub Actions"]
    },
    {
      id: "exp-2",
      role: "Backend & Mobile Developer",
      company: "Nexus Software Hub",
      location: "Da Nang, Vietnam",
      period: "2022 - 2024",
      description: [
        "Implemented high-fidelity mobile apps using Flutter, establishing clean BLoC patterns and interactive custom painters.",
        "Constructed multi-tenant REST APIs in Node.js, managing integrations for diverse third-party payment providers.",
        "Utilized Redis cache layers, successfully mitigating database load bursts during peak campaign times.",
        "Authored comprehensive unit/integration test suites, increasing code coverage to 92%."
      ],
      skills: ["Flutter", "Node.js", "Redis", "TypeScript", "Jest", "Docker"]
    },
    {
      id: "exp-3",
      role: "Junior Backend Developer",
      company: "VietSoft Innovators",
      location: "Hanoi, Vietnam",
      period: "2021 - 2022",
      description: [
        "Designed and maintained Spring Boot backend applications servicing enterprise billing platforms.",
        "Assisted in database migration activities, moving legacy structures to modern PostgreSQL clusters.",
        "Participated in agile ceremonies, writing comprehensive documentation for newly created API endpoints."
      ],
      skills: ["Java", "Spring Boot", "PostgreSQL", "Git", "Swagger"]
    }
  ] as Experience[],

  certificates: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2025",
      credentialId: "AWS-ASA-99432",
      url: "https://aws.amazon.com",
      color: "#ff9900"
    },
    {
      id: "cert-2",
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "Aug 2025",
      credentialId: "GCP-PCD-11234",
      url: "https://cloud.google.com",
      color: "#4285f4"
    },
    {
      id: "cert-3",
      title: "Flutter Certified Application Developer",
      issuer: "Android ATC",
      date: "Mar 2024",
      credentialId: "FL-ATC-4482",
      url: "https://androidatc.com",
      color: "#02569B"
    }
  ] as Certificate[],

  githubStats: {
    totalCommits: 2439,
    streak: 42,
    repositoriesCount: 38,
    primaryLanguages: [
      { name: "Go", percentage: 45, color: "bg-cyan-500" },
      { name: "Dart (Flutter)", percentage: 35, color: "bg-blue-400" },
      { name: "TypeScript", percentage: 15, color: "bg-amber-400" },
      { name: "Shell & Others", percentage: 5, color: "bg-gray-500" }
    ],
    // High-fidelity fake calendar matrix (53 weeks * 7 days)
    contributions: Array.from({ length: 371 }, (_, i) => {
      // Create interesting patterns with peaks and quiet periods
      const weekIndex = Math.floor(i / 7);
      const dayIndex = i % 7;
      let count = 0;
      
      // Weekends have fewer commits
      const isWeekend = dayIndex === 0 || dayIndex === 6;
      const baseChance = isWeekend ? 0.2 : 0.7;
      
      if (Math.random() < baseChance) {
        // Random commit amount
        count = Math.floor(Math.random() * 8);
        
        // Give certain periods (like sprints) higher volume
        if (weekIndex % 8 === 0 || weekIndex % 12 === 3) {
          count += Math.floor(Math.random() * 5);
        }
      }
      
      return count;
    })
  }
};
