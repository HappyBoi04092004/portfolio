'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioConfigEn, portfolioConfigVi, PortfolioConfig } from '@/config/portfolio';

export type Language = 'en' | 'vi';

export const translations = {
  vi: {
    nav: {
      services: "Dịch vụ",
      experience: "Kinh nghiệm",
      stack: "Công nghệ",
      education: "Học vấn",
      projects: "Dự án",
      manifesto: "Triết lý",
      contact: "Liên hệ",
      downloadCv: "Tải CV",
    },
    hero: {
      roles: ["Kiến trúc sư Backend", "Lập trình viên Flutter / Mobile", "Kỹ sư Hệ thống"],
      title1: "Kiến trúc hệ thống.",
      title2: "Và tôi tối ưu quy mô.",
      ctaHire: "Hợp tác ngay",
      ctaProjects: "Khám phá dự án",
      ctaCv: "Tải CV",
      location: "Vị trí",
      techStack: "Tech Stack",
      status: "Trạng thái",
      statusValue: "Sẵn sàng nhận dự án mới",
    },
    services: {
      badge: "Dịch vụ",
      title: "Bốn phương thức hợp tác.",
      subtitle: "Xây dựng các giải pháp kỹ thuật hiệu năng cao, tối ưu cơ sở dữ liệu và triển khai hệ thống an toàn. Lựa chọn giải pháp phù hợp với mục tiêu của bạn.",
      contactNow: "Liên hệ ngay →",
      list: [
        {
          title: "Phát triển Backend & APIs",
          desc: "Kiến trúc và triển khai hệ thống server-side, APIs chịu tải lớn và microservices. Đảm bảo hiệu năng cao, luồng dữ liệu bảo mật và khả năng mở rộng.",
          bullets: [
            "Thiết kế gRPC / REST API tối ưu",
            "Concurrency & Distributed Systems (Go/NestJS)",
            "Tự động hóa & Tích hợp Service"
          ]
        },
        {
          title: "Phát triển Ứng dụng Di động",
          desc: "Xây dựng ứng dụng di động đa nền tảng chất lượng cao bằng Flutter. Tối ưu hóa UI/UX mượt mà, lưu trữ dữ liệu offline và đồng bộ hóa thời gian thực.",
          bullets: [
            "Ứng dụng đa nền tảng Flutter (iOS & Android)",
            "Clean Architecture & BLoC state management",
            "Offline-first & Local Sync engines"
          ]
        },
        {
          title: "Tối ưu Cơ sở dữ liệu & Caching",
          desc: "Phân tích, thiết kế cấu trúc database và triển khai các giải pháp bộ nhớ đệm (caching). Tối ưu hóa tốc độ truy vấn dữ liệu phức tạp.",
          bullets: [
            "Tối ưu hóa PostgreSQL (Index tuning, CTEs)",
            "Redis Caching & Distributed Locks (Redlock)",
            "Search Engine integration (Elasticsearch)"
          ]
        },
        {
          title: "Hạ tầng Cloud & CI/CD",
          desc: "Container hóa ứng dụng và cấu hình quy trình triển khai tự động. Thiết lập hạ tầng cloud bảo mật, chịu lỗi cao và dễ dàng giám sát.",
          bullets: [
            "Dockerization & Kubernetes orchestration",
            "CI/CD Pipelines (GitHub Actions / GitLab CI)",
            "AWS Cloud Infrastructure architecture"
          ]
        }
      ]
    },
    experience: {
      badge: "Kinh nghiệm",
      title: "Hành trình của tôi.",
      subtitle: "Các vị trí đảm nhiệm và đóng góp thực tế trên môi trường production.",
    },
    stack: {
      badge: "Chuyên môn kỹ thuật",
      title: "Technology stack.",
      subtitle: "Những công cụ và công nghệ tôi sử dụng hàng ngày để xây dựng sản phẩm chất lượng.",
    },
    education: {
      badge: "Học vấn & Chứng chỉ",
      title: "Bằng cấp & Chứng nhận.",
      subtitle: "Những cột mốc trên con đường tích lũy kiến thức chuyên môn.",
      verify: "Xác minh chứng chỉ",
    },
    projects: {
      badge: "Dự án tiêu biểu",
      title: "Những sản phẩm đã triển khai.",
      subtitle: "Dưới đây là các dự án nổi bật mà tôi chịu trách nhiệm thiết kế hệ thống và phát triển cốt lõi.",
    },
    manifesto: {
      badge: "Triết lý",
      title1: "Không chỉ là dòng code.",
      title2: "Là hệ thống bền bỉ.",
      paragraphs: [
        "Tôi tập trung vào chất lượng kỹ thuật, tính chịu tải và cấu trúc mã nguồn tối ưu. Không xây dựng các giải pháp chắp vá để đạt mục tiêu ngắn hạn.",
        "Mỗi dòng code đều được chăm chút, kiểm thử cẩn thận và sẵn sàng mở rộng khi quy mô người dùng tăng nhanh.",
        "Hiệu năng thực tế và trải nghiệm lập trình viên tốt (Developer Experience) mới là thước đo thành công cuối cùng của một hệ thống phần mềm."
      ]
    },
    contact: {
      badge: "Bắt đầu cuộc trò chuyện",
      title: "Sẵn sàng kiến tạo.",
      subtitle: "Bạn đang tìm kiếm một backend engineer chuyên sâu, một mobile developer năng lực để cùng xây dựng sản phẩm chất lượng? Hãy kết nối với tôi.",
      cta: "Liên hệ ngay",
    }
  },
  en: {
    nav: {
      services: "Services",
      experience: "Experience",
      stack: "Stack",
      education: "Education",
      projects: "Projects",
      manifesto: "Philosophy",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      roles: ["Backend Architect", "Flutter / Mobile Dev", "Systems Engineer"],
      title1: "Architecting Systems.",
      title2: "Then I scale.",
      ctaHire: "Hire Me Now",
      ctaProjects: "Explore Projects",
      ctaCv: "Download CV",
      location: "Location",
      techStack: "Tech Stack",
      status: "Status",
      statusValue: "Available for new projects",
    },
    services: {
      badge: "Services",
      title: "Four methods of collaboration.",
      subtitle: "Building high-performance technical solutions, database optimization, and secure infrastructure. Choose the best approach for your targets.",
      contactNow: "Contact now →",
      list: [
        {
          title: "Backend & API Development",
          desc: "Architecting and implementing high-throughput server-side systems, APIs, and microservices. Ensuring peak performance, secure data flows, and seamless scalability.",
          bullets: [
            "Optimized gRPC / REST API design",
            "Concurrency & Distributed Systems (Go/NestJS)",
            "Service Integration & Automation"
          ]
        },
        {
          title: "Mobile App Development",
          desc: "Building high-fidelity cross-platform mobile apps with Flutter. Optimizing for smooth fluid UX, local offline-first databases, and real-time synchronizations.",
          bullets: [
            "Cross-platform Flutter Apps (iOS & Android)",
            "Clean Architecture & BLoC state management",
            "Offline-first & Local Sync engines"
          ]
        },
        {
          title: "Database & Caching Optimization",
          desc: "Designing robust schemas, indexing strategies, and caching layers to minimize database loads and optimize complex queries.",
          bullets: [
            "PostgreSQL optimization (Index tuning, CTEs)",
            "Redis Caching & Distributed Locks (Redlock)",
            "Search Engine integration (Elasticsearch)"
          ]
        },
        {
          title: "Cloud Infrastructure & CI/CD",
          desc: "Containerizing applications and scripting CI/CD automation pipelines. Provisioning highly available, secure, and monitorable cloud systems.",
          bullets: [
            "Dockerization & Kubernetes orchestration",
            "CI/CD Pipelines (GitHub Actions / GitLab CI)",
            "AWS Cloud Infrastructure architecture"
          ]
        }
      ]
    },
    experience: {
      badge: "Experience",
      title: "My journey.",
      subtitle: "Roles held and hands-on contributions in production environments.",
    },
    stack: {
      badge: "Technical Expertise",
      title: "Technology stack.",
      subtitle: "The tools and technologies I use daily to build high-quality products.",
    },
    education: {
      badge: "Education & Certificates",
      title: "Degrees & Certifications.",
      subtitle: "Milestones along the path of acquiring professional knowledge.",
      verify: "Verify Credential",
    },
    projects: {
      badge: "Featured Projects",
      title: "Built & deployed systems.",
      subtitle: "Here are the key projects where I took responsibility for system design and core development.",
    },
    manifesto: {
      badge: "Philosophy",
      title1: "More than code.",
      title2: "Resilient systems.",
      paragraphs: [
        "I focus on engineering quality, scalability, and optimal code structure. No patch jobs for short-term goals.",
        "Every line of code is carefully crafted, tested, and ready to scale as the user base grows.",
        "Real-world performance and great Developer Experience (DX) are the ultimate measures of a software system's success."
      ]
    },
    contact: {
      badge: "Start a conversation",
      title: "Ready to build.",
      subtitle: "Looking for a specialized backend engineer or a skilled mobile developer to build a high-quality product together? Let's connect.",
      cta: "Contact now",
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  portfolioData: PortfolioConfig;
  t: typeof translations.vi;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi'); // default is Vietnamese
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Safely fetch language preference from localStorage on client mount
    const saved = localStorage.getItem('portfolio-lang') as Language;
    if (saved === 'en' || saved === 'vi') {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-lang', lang);
  };

  const portfolioData = language === 'vi' ? portfolioConfigVi : portfolioConfigEn;
  const t = language === 'vi' ? translations.vi : translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, portfolioData, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
