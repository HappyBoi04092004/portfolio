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
      id: "bookstore",
      title: "Bookstore E-commerce",
      subtitle: "Nền tảng mua bán sách trực tuyến hiện đại",
      description: "Một nền tảng thương mại điện tử đầy đủ tính năng để mua sắm sách trực tuyến, đi kèm với xác thực người dùng, quản lý giỏ hàng, danh mục sản phẩm và theo dõi đơn hàng.",
      category: "fullstack",
      techStack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      architecture: "REST API với mô hình thiết kế MVC",
      challenges: "Triển khai quản lý phiên làm việc bảo mật và đồng bộ hóa trạng thái giỏ hàng giữa local storage phía client và các node cơ sở dữ liệu khi xảy ra nghẽn thanh toán.",
      lessonsLearned: "Thiết kế các truy vấn giao dịch mạnh mẽ trong SQL, xử lý khóa lạc quan (optimistic lock) trong quản lý tồn kho và thiết lập bộ nhớ đệm phản hồi API tối ưu.",
      githubUrl: "https://github.com/HappyBoi04092004/Doan_Bookstore-E-cormerce",
      liveUrl: "#",
      caseStudy: "Doan_Bookstore-E-cormerce xử lý an toàn các giao dịch thanh toán đồng thời. Thiết kế các interface TypeScript rõ ràng trên toàn bộ hệ thống, giúp giảm 80% lỗi giao tiếp giữa front-end và back-end.",
      color: "from-blue-600 to-indigo-800"
    },
    {
      id: "music-share",
      title: "Music Share Platform",
      subtitle: "Mạng lưới truyền phát âm thanh cộng tác",
      description: "Một không gian xã hội cộng tác nhẹ nhàng cho phép người dùng tải lên các tệp âm thanh, chia sẻ danh sách phát cá nhân và khám phá các bài hát mới với giao diện gọn gàng.",
      category: "fullstack",
      techStack: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "Apache"],
      architecture: "Kiến trúc Monolith dạng mô-đun",
      challenges: "Tối ưu hóa cấu hình lưu trữ đa phương tiện và xử lý chuyển đổi định dạng âm thanh chạy ẩn mà không làm tiêu hao quá nhiều tài nguyên máy chủ.",
      lessonsLearned: "Thành thạo các mẫu định tuyến PHP tùy chỉnh, tích hợp các trình lắng nghe sự kiện của API âm thanh HTML5 và áp dụng tối ưu hóa index truy vấn để sắp xếp danh sách phát.",
      githubUrl: "https://github.com/HappyBoi04092004/Music-Share",
      liveUrl: "#",
      caseStudy: "Music-Share cung cấp thanh điều khiển phát nhạc mượt mà trên nhiều trang. Sơ đồ cơ sở dữ liệu quan hệ PHP cấu trúc các danh sách lồng nhau mượt mà, phân phối tài nguyên âm nhạc với độ trễ dưới 200ms.",
      color: "from-cyan-600 to-teal-800"
    },
    {
      id: "flower-shop",
      title: "Flower Shop Inventory & POS",
      subtitle: "Hệ thống POS & Quản lý hàng tồn kho doanh nghiệp",
      description: "Một ứng dụng quản lý nội bộ mạnh mẽ dành cho các cửa hàng hoa để quản lý mức tồn kho, tính toán doanh thu hàng ngày, ghi nhận đơn hàng và tạo biểu đồ doanh số.",
      category: "backend",
      techStack: ["JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "Chart.js"],
      architecture: "Kiến trúc API RESTful với mẫu thiết kế Repository",
      challenges: "Thiết kế các schemas linh hoạt trong MongoDB để thích ứng với biến động giá hoa theo mùa và kích hoạt trừ kho thời gian thực khi thanh toán.",
      lessonsLearned: "Triển khai pipelines aggregation của MongoDB để trích xuất báo cáo tài chính đa chiều và xây dựng các bộ xử lý lỗi tùy chỉnh cho các ràng buộc cơ sở dữ liệu.",
      githubUrl: "https://github.com/HappyBoi04092004/QuanLiTiemHoa",
      liveUrl: "#",
      caseStudy: "QuanLiTiemHoa cung cấp thống kê doanh số trực quan sử dụng Chart.js. Sổ cái hàng tồn kho kích hoạt cảnh báo tức thời khi nguyên liệu giảm dưới ngưỡng an toàn, giúp tránh gián đoạn kinh doanh.",
      color: "from-purple-600 to-pink-800"
    },
    {
      id: "task-management",
      title: "Task Management System",
      subtitle: "Công cụ lập kế hoạch dự án Agile",
      description: "Một nền tảng sắp xếp công việc trực quan cho phép các nhóm tạo dự án, phân công thẻ công việc, thiết lập mức độ khẩn cấp và trực quan hóa tiến độ công việc.",
      category: "fullstack",
      techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "Local Storage"],
      architecture: "Client Single Page Application (SPA) kết hợp REST API",
      challenges: "Xây dựng bảng trạng thái công việc kéo thả và đồng bộ hóa các thay đổi trạng thái chính xác về máy chủ backend với cập nhật UI lạc quan (optimistic UI).",
      lessonsLearned: "Hiểu sâu về các yêu cầu JS bất đồng bộ (Fetch API), cấu hình các endpoint REST dưới Express và tạo kiểu cho các thành phần UI mượt mà không dùng thư viện nặng.",
      githubUrl: "https://github.com/HappyBoi04092004/TASK-MANAGEMENT-SYSTEM",
      liveUrl: "#",
      caseStudy: "TASK-MANAGEMENT-SYSTEM hợp lý hóa sự phối hợp của dự án. Cấu trúc nhẹ tải trong vòng 120ms trên thiết bị di động, giúp các nhóm trưởng truy cập nhanh vào danh sách công việc hàng ngày.",
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
      id: "bookstore",
      title: "Bookstore E-commerce",
      subtitle: "Modern Online Bookshop Platform",
      description: "A full-featured e-commerce platform for purchasing books, complete with user authentication, shopping cart management, product catalogs, and order tracking.",
      category: "fullstack",
      techStack: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      architecture: "REST API with MVC design pattern",
      challenges: "Implementing secure session management and synchronizing cart states between client-side local storage and database nodes during checkout bottlenecks.",
      lessonsLearned: "Designed robust transactional queries in SQL, handled optimistic locks on stock management, and established optimized API response caching.",
      githubUrl: "https://github.com/HappyBoi04092004/Doan_Bookstore-E-cormerce",
      liveUrl: "#",
      caseStudy: "Bookstore E-commerce safely processes concurrent user checkouts. Designed clean TypeScript interfaces across the stack, reducing front-backend communication issues by 80%.",
      color: "from-blue-600 to-indigo-800"
    },
    {
      id: "music-share",
      title: "Music Share Platform",
      subtitle: "Collaborative Audio Streaming Network",
      description: "A lightweight collaborative social space for users to upload audio files, share custom playlists, and discover new songs with clean navigation.",
      category: "fullstack",
      techStack: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "Apache"],
      architecture: "Modular Monolith Architecture",
      challenges: "Optimizing media storage configurations and handling background audio formats conversion without consuming excessive server resources.",
      lessonsLearned: "Mastered PHP custom routing patterns, integrated HTML5 audio API event listeners, and utilized database query index tuning for playlist sorting.",
      githubUrl: "https://github.com/HappyBoi04092004/Music-Share",
      liveUrl: "#",
      caseStudy: "Music-Share provides fluid music player control bars across multiple pages. The PHP relational database scheme structures nested lists seamlessly, serving media assets with less than 200ms latency.",
      color: "from-cyan-600 to-teal-800"
    },
    {
      id: "flower-shop",
      title: "Flower Shop Inventory & POS",
      subtitle: "Business POS & Inventory Management System",
      description: "A robust backoffice application for florists to manage inventory levels, calculate daily revenues, record customer orders, and generate detailed sales charts.",
      category: "backend",
      techStack: ["JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "Chart.js"],
      architecture: "RESTful API Architecture with Repository Pattern",
      challenges: "Designing flexible schemas in MongoDB to accommodate seasonal flower pricing variances and real-time inventory deduction triggers during checkout.",
      lessonsLearned: "Implemented MongoDB aggregation pipelines to extract multi-dimensional financial reports and handled custom error handlers for database constraints.",
      githubUrl: "https://github.com/HappyBoi04092004/QuanLiTiemHoa",
      liveUrl: "#",
      caseStudy: "QuanLiTiemHoa features visual sales statistics using Chart.js. The inventory ledger triggers instant warning indicators when material levels drop below safety thresholds, preventing sales blockages.",
      color: "from-purple-600 to-pink-800"
    },
    {
      id: "task-management",
      title: "Task Management System",
      subtitle: "Agile Workspace Project Planner",
      description: "An intuitive task organizer platform allowing teams to create projects, assign task tickets, set urgency labels, and visualize workflow progressions.",
      category: "fullstack",
      techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "Local Storage"],
      architecture: "Single Page Application (SPA) Client with REST API",
      challenges: "Building a drag-and-drop workflow status board and synchronizing state changes accurately to the backend server with optimistic UI updates.",
      lessonsLearned: "Deeply understood asynchronous JS requests (Fetch API), configured REST endpoints under Express, and styled fluid UI components without heavy library overheads.",
      githubUrl: "https://github.com/HappyBoi04092004/TASK-MANAGEMENT-SYSTEM",
      liveUrl: "#",
      caseStudy: "The Task Management System streamlines project coordination. The lightweight structure loads within 120ms on mobile devices, providing team leads with quick access to daily action lists.",
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
