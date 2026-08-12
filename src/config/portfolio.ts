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

// Shared GitHub stats to keep random contribution arrays consistent
const sharedGithubStats = {
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
    const weekIndex = Math.floor(i / 7);
    const dayIndex = i % 7;
    let count = 0;
    
    // Weekends have fewer commits
    const isWeekend = dayIndex === 0 || dayIndex === 6;
    const baseChance = isWeekend ? 0.2 : 0.7;
    
    if (Math.random() < baseChance) {
      count = Math.floor(Math.random() * 8);
      
      // Give certain periods (like sprints) higher volume
      if (weekIndex % 8 === 0 || weekIndex % 12 === 3) {
        count += Math.floor(Math.random() * 5);
      }
    }
    
    return count;
  })
};

// Common/Shared non-translatable fields
const sharedLinks = {
  email: "nguyenhanhphuc.dev@gmail.com",
  github: "https://github.com/HappyBoi04092004",
  linkedin: "https://linkedin.com/in/nguyenhanhphuc",
  facebook: "https://www.facebook.com/hanhphuc.nguyen.148553",
  resumeUrl: "#"
};

// Vietnamese Configuration
export const portfolioConfigVi = {
  owner: {
    name: "Nguyễn Hạnh Phúc",
    roles: ["Backend Architect", "Flutter / Mobile Dev", "Systems Engineer"],
    headline: "Kiến trúc hệ thống Backend hiệu năng cao & Trải nghiệm Di động mượt mà",
    subHeadline: "Phát triển hệ thống máy chủ có khả năng mở rộng, ứng dụng di động đa nền tảng và kiến trúc đám mây mạnh mẽ với mã nguồn sạch cùng hệ thống thiết kế hiện đại.",
    ...sharedLinks
  },
  
  about: {
    mission: "Phát triển các hệ thống backend an toàn, có khả năng mở rộng cao và các trải nghiệm di động chất lượng cao nhằm kết nối giữa sự phức tạp kỹ thuật và tương tác tinh tế của người dùng.",
    vision: "Vượt qua giới hạn của không gian làm việc số, tận dụng công nghệ 3D, triển khai cloud-native và các tiêu chuẩn kiến trúc nghiêm ngặt để thiết kế tương lai của phần mềm.",
    story: "Bắt đầu hành trình là một sinh viên khoa học máy tính có niềm đam mê với logic, tôi đã yêu thích kỹ thuật backend—đặc biệt là thử thách mở rộng quy mô các API để xử lý hàng triệu giao dịch. Nhận thấy tầm quan trọng của trải nghiệm người dùng cuối, tôi đã thành thạo Flutter để phát triển các ứng dụng di động đa nền tảng hiện đại. Hiện nay, tôi xây dựng các giải pháp full-stack với kiến trúc sạch, tập trung vào trải nghiệm của lập trình viên, các giao thức kiểm thử nghiêm ngặt và tự động hóa CI/CD mạnh mẽ.",
    stats: [
      { label: "Số năm kinh nghiệm", value: 4, suffix: "+" },
      { label: "Dự án đã hoàn thành", value: 25, suffix: "" },
      { label: "Kho lưu trữ hoạt động", value: 42, suffix: "" },
      { label: "Commit (giả lập) năm nay", value: 1842, suffix: "+" },
    ]
  },

  skills: [
    {
      title: "Kỹ thuật Backend",
      icon: "Server",
      skills: [
        { name: "Go (Golang)", level: 90, info: "Microservices, gRPC, Gin, Fiber, Concurrency với Goroutines" },
        { name: "Node.js / NestJS", level: 95, info: "TypeScript, REST APIs, TypeORM, Prisma, WebSockets" },
        { name: "Python / FastAPI", level: 85, info: "AsyncIO, xử lý dữ liệu, pipelines học máy" },
        { name: "Java / Spring Boot", level: 80, info: "APIs doanh nghiệp, Hibernate, Maven, kiểm thử JUnit" },
      ]
    },
    {
      title: "Phát triển Di động",
      icon: "Smartphone",
      skills: [
        { name: "Flutter & Dart", level: 92, info: "Quản lý trạng thái BLoC, Kiến trúc sạch (Clean Architecture), Custom Painter UI" },
        { name: "React Native", level: 80, info: "Expo, TS, liên kết native modules, hiệu ứng reanimated" },
        { name: "Tích hợp Native iOS/Android", level: 78, info: "Method channels, Gradle scripting, cơ bản về Swift & Kotlin" },
      ]
    },
    {
      title: "Cơ sở dữ liệu & Bộ nhớ đệm",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", level: 90, info: "Tối ưu hóa Index, truy vấn CTE, cột JSONB, cấu hình replication" },
        { name: "MongoDB", level: 88, info: "Aggregation framework, sharding, thiết kế mô hình tài liệu" },
        { name: "Redis", level: 85, info: "Chiến lược bộ nhớ đệm, distributed locks, pub-sub messaging" },
        { name: "Elasticsearch", level: 75, info: "Cấu hình chỉ mục tìm kiếm toàn văn, tối ưu hóa truy vấn" },
      ]
    },
    {
      title: "Điện toán Đám mây & DevOps",
      icon: "Cloud",
      skills: [
        { name: "Docker & K8s", level: 85, info: "Container hóa, mạng lưới pod, Helm charts, Docker Compose" },
        { name: "AWS Services", level: 80, info: "EC2, ECS, Lambda (Serverless), RDS, S3, CloudFront, IAM" },
        { name: "CI/CD Pipelines", level: 88, info: "GitHub Actions, GitLab CI, tự động hóa kiểm thử & phát hành ngữ nghĩa" },
        { name: "Linux / Bash", level: 85, info: "Cấu hình máy chủ, viết mã lệnh cron, giám sát tiến trình" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "skyroute",
      title: "SkyRoute Logistics",
      subtitle: "Hệ thống đặt xe & Điều phối vận tải doanh nghiệp",
      description: "API định tuyến logistics có khả năng mở rộng cao và ứng dụng Flutter tương ứng giúp quản lý tối ưu hóa tuyến đường nhiều điểm dừng, điều phối tài xế và theo dõi thời gian thực.",
      category: "fullstack",
      techStack: ["Go", "Flutter", "PostgreSQL", "Redis", "Google Maps API", "Docker", "gRPC"],
      architecture: "Clean Architecture trên Di động, Domain-Driven Design (DDD) trên Backend",
      challenges: "Đồng bộ hóa điều phối theo thời gian thực giữa ứng dụng Flutter của tài xế và máy chủ Go trung tâm khi mất kết nối mạng mà không làm mất các gói tin đo lường.",
      lessonsLearned: "Thiết kế cơ sở dữ liệu SQL cục bộ hoạt động ngoại tuyến (offline-first) trong Flutter, gom cụm nhật ký vị trí GPS và đồng bộ hóa chúng một cách an toàn bằng middleware tự động thử lại.",
      githubUrl: "https://github.com/nguyenhanhphuc/skyroute-logistics",
      liveUrl: "https://skyroute.example.com",
      caseStudy: "SkyRoute Logistics hoạt động tại 5 quốc gia Đông Nam Á. Backend Go sử dụng hàng đợi ưu tiên tùy chỉnh để điều phối tác vụ cho tài xế. Bằng cách chuyển từ REST sang gRPC, kích thước thông điệp nhị phân giảm 60%, giúp cải thiện 40% hiệu năng pin của thiết bị di động.",
      color: "from-blue-600 to-indigo-800"
    },
    {
      id: "paypulse",
      title: "PayPulse Gateway",
      subtitle: "Hệ thống điều phối thanh toán thông lượng cao",
      description: "Hệ thống backend giao dịch cho phép thanh toán qua API của nhiều nhà cung cấp tích hợp với két lưu trữ thẻ multi-tenant, kiểm toán gian lận và đối soát tự động.",
      category: "backend",
      techStack: ["NestJS", "TypeScript", "PostgreSQL", "Kafka", "Redis", "Kubernetes", "AWS RDS"],
      architecture: "Kiến trúc hướng sự kiện (Event-Driven Microservices) sử dụng Apache Kafka & mẫu thiết kế CQRS",
      challenges: "Đảm bảo xử lý giao dịch đúng duy nhất một lần (exactly-once) dưới lượng truy cập cực lớn lên tới hơn 10.000 RPS trong các mùa khuyến mãi.",
      lessonsLearned: "Tận dụng khóa phân tán bằng Redis (Redlock) kết hợp với các cấp độ cô lập giao dịch PostgreSQL và khóa API consumer có tính không đổi (idempotent).",
      githubUrl: "https://github.com/nguyenhanhphuc/paypulse-gateway",
      liveUrl: "https://paypulse.example.com",
      caseStudy: "PayPulse đã xử lý an toàn các giao dịch cho hơn 20 cổng đối tác đồng thời. Hệ thống lưu trữ thẻ bảo mật với mã hóa AES-256 GCM bất đối xứng bên trong các namespaces Docker cô lập. Tốc độ giải quyết giao dịch trung bình giảm xuống dưới 150ms trên toàn cầu.",
      color: "from-cyan-600 to-teal-800"
    },
    {
      id: "mediconnect",
      title: "MediConnect App",
      subtitle: "Ứng dụng Di động tư vấn video & Hồ sơ bệnh án Telehealth",
      description: "Cổng thông tin chăm sóc sức khỏe đa nền tảng tuân thủ tiêu chuẩn HIPAA, cho phép bệnh nhân tư vấn bác sĩ an toàn, xem đơn thuốc điện tử và đồng bộ hóa chỉ số sức khỏe.",
      category: "mobile",
      techStack: ["Flutter", "Dart", "WebRTC", "Node.js", "MongoDB", "Firebase Cloud Messaging"],
      architecture: "Quản lý trạng thái BLoC với mẫu thiết kế Repository",
      challenges: "Thiết lập các luồng truyền phát WebRTC có độ trễ thấp với chất lượng cao trên các thiết bị di động cấu hình thấp ở các vùng có tín hiệu 3G yếu.",
      lessonsLearned: "Tích hợp tối ưu hóa máy chủ STUN/TURN và viết mã lệnh tự động điều chỉnh tốc độ bit thích ứng để thay đổi khung hình camera động dựa trên số liệu kết nối WebRTC.",
      githubUrl: "https://github.com/nguyenhanhphuc/mediconnect-app",
      liveUrl: "https://mediconnect.example.com",
      caseStudy: "MediConnect đã được triển khai cho các phòng khám vùng sâu vùng xa, hỗ trợ hơn 5.000 ca tư vấn từ xa hoạt động. Giao diện người dùng được tối ưu hóa cho độ tương phản tối đa, đáp ứng quy tắc tiếp cận WCAG AAA dành cho bệnh nhân khiếm thị.",
      color: "from-purple-600 to-pink-800"
    },
    {
      id: "cloudguard",
      title: "CloudGuard Daemon",
      subtitle: "Tiến trình chạy ẩn giám sát sức khỏe máy chủ & Kiểm toán đe dọa",
      description: "Một daemon Linux backend nhẹ theo dõi các thay đổi đối với hệ thống tệp, kiểm toán nhân (kernel audits) và ghi nhận các sự kiện bất thường về một node Elasticsearch trung tâm.",
      category: "backend",
      techStack: ["Go", "eBPF", "Linux API", "Elasticsearch", "Docker"],
      architecture: "Monolithic CLI Agent sử dụng các bộ dò Linux eBPF",
      challenges: "Trích xuất nhật ký kiểm toán hệ thống mà không vượt quá giới hạn sử dụng CPU 1% trên các máy chủ production của khách hàng.",
      lessonsLearned: "Viết các bộ dò assembly hiệu năng cao bên trong không gian nhân Linux sử dụng eBPF, truyền dữ liệu đo lường sang không gian người dùng thông qua các bộ đệm vòng (ring buffers)." ,
      githubUrl: "https://github.com/nguyenhanhphuc/cloudguard-daemon",
      liveUrl: "https://cloudguard.example.com",
      caseStudy: "CloudGuard được triển khai trên hơn 500 cụm VM staging. Nó ghi nhận các thay đổi quyền tệp quan trọng trong vòng 2ms, cảnh báo tức thì cho quản trị viên hệ thống qua tích hợp Webhook.",
      color: "from-emerald-600 to-teal-900"
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Kỹ sư Phần mềm Cao cấp",
      company: "Aura Tech Solutions",
      location: "Thành phố Hồ Chí Minh, Việt Nam",
      period: "2024 - Hiện tại",
      description: [
        "Kiến trúc các dịch vụ microservices backend có khả năng mở rộng bằng Go và NestJS, tăng độ ổn định hệ thống thêm 30%.",
        "Phát triển các ứng dụng di động Flutter cốt lõi, tích hợp cơ sở dữ liệu SQL cục bộ với tính năng đồng bộ hóa ngoại tuyến.",
        "Tối ưu hóa lược đồ cơ sở dữ liệu quan hệ trong PostgreSQL, mang lại tốc độ cải thiện 45% cho các truy vấn tìm kiếm nặng.",
        "Thiết lập quy trình triển khai CI/CD trên AWS ECS bằng cách sử dụng GitHub Actions, giảm thời gian phát hành từ nhiều giờ xuống còn 5 phút."
      ],
      skills: ["Go", "NestJS", "Flutter", "PostgreSQL", "AWS", "GitHub Actions"]
    },
    {
      id: "exp-2",
      role: "Nhà phát triển Backend & Mobile",
      company: "Nexus Software Hub",
      location: "Đà Nẵng, Việt Nam",
      period: "2022 - 2024",
      description: [
        "Triển khai các ứng dụng di động chất lượng cao bằng Flutter, áp dụng các mẫu BLoC sạch và vẽ giao diện tùy chỉnh.",
        "Xây dựng các REST APIs đa người dùng (multi-tenant) bằng Node.js, quản lý tích hợp cho nhiều nhà cung cấp thanh toán bên thứ ba.",
        "Sử dụng các lớp bộ nhớ đệm Redis, giảm thiểu thành công tải cơ sở dữ liệu đột biến trong thời gian cao điểm của chiến dịch.",
        "Viết các bộ kiểm thử unit/integration toàn diện, nâng độ bao phủ mã nguồn (code coverage) lên 92%."
      ],
      skills: ["Flutter", "Node.js", "Redis", "TypeScript", "Jest", "Docker"]
    },
    {
      id: "exp-3",
      role: "Nhà phát triển Backend Junior",
      company: "VietSoft Innovators",
      location: "Hà Nội, Việt Nam",
      period: "2021 - 2022",
      description: [
        "Thiết kế và bảo trì các ứng dụng Spring Boot backend phục vụ các nền tảng thanh toán hóa đơn doanh nghiệp.",
        "Hỗ trợ các hoạt động di chuyển cơ sở dữ liệu, chuyển đổi cấu trúc cũ sang cụm PostgreSQL hiện đại.",
        "Tham gia các hoạt động agile, viết tài liệu chi tiết cho các endpoint API mới được tạo."
      ],
      skills: ["Java", "Spring Boot", "PostgreSQL", "Git", "Swagger"]
    }
  ] as Experience[],

  certificates: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "T12 / 2025",
      credentialId: "AWS-ASA-99432",
      url: "https://aws.amazon.com",
      color: "#ff9900"
    },
    {
      id: "cert-2",
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "T8 / 2025",
      credentialId: "GCP-PCD-11234",
      url: "https://cloud.google.com",
      color: "#4285f4"
    },
    {
      id: "cert-3",
      title: "Flutter Certified Application Developer",
      issuer: "Android ATC",
      date: "T3 / 2024",
      credentialId: "FL-ATC-4482",
      url: "https://androidatc.com",
      color: "#02569B"
    }
  ] as Certificate[],

  githubStats: sharedGithubStats
};

// English Configuration
export const portfolioConfigEn = {
  owner: {
    name: "Nguyễn Hạnh Phúc",
    roles: ["Backend Architect", "Flutter / Mobile Dev", "Systems Engineer"],
    headline: "Architecting High-Performance Backends & Seamless Mobile Experiences",
    subHeadline: "Crafting scalable server-side systems, cross-platform mobile apps, and robust cloud architectures with clean code and modern design systems.",
    ...sharedLinks
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

  githubStats: sharedGithubStats
};

// Default export fallback configuration (defaults to Vietnamese to avoid breaking any quick imports)
export const portfolioConfig = portfolioConfigVi;

export type PortfolioConfig = typeof portfolioConfigEn;
