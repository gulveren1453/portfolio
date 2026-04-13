export type Lang = 'tr' | 'en'

export const translations = {
  tr: {
    nav: {
      about: 'Hakkımda',
      experience: 'Deneyim',
      education: 'Eğitim',
      skills: 'Yetenekler',
      projects: 'Projeler',
      certificates: 'Sertifikalar',
      contact: 'İletişim',
    },
    hero: {
      greeting: 'Merhaba, ben',
      title: 'Yazılım Mühendisi & Veri Analisti',
      subtitle: 'Hasan Kalyoncu Üniversitesi Yazılım Mühendisliği Haziran 2026 mezunu. Veriye dayalı çözümler geliştiren ve teknolojik yeniliklere odaklanan bir mühendisim.',
      cta: 'İletişime Geç',
      projects: 'Projelerimi Gör',
    },
    about: {
      label: 'Hakkımda',
      title: 'Ben Kimim?',
      text: 'Hasan Kalyoncu Üniversitesi Yazılım Mühendisliği bölümünden Haziran 2026 itibarıyla mezun oldum. Öğrenme tutkusu yüksek, araştırmacı ve detay odaklı bir yazılım mühendisi olarak; veri analizi, kurumsal sistemler (SAP ABAP) ve modern web teknolojileri üzerine uzmanlaşıyorum. Kariyerimde, karmaşık problemleri verimli ve ölçeklenebilir çözümlerle çözmeyi temel prensip ediniyorum.',
      location: 'Gaziantep, Türkiye',
      university: 'Hasan Kalyoncu Üniversitesi',
      language: 'İngilizce — B1',
    },
    experience: {
      label: 'Deneyim',
      title: 'İş Deneyimi',
      items: [
        {
          role: 'Yazılım Mühendisliği Stajyeri',
          company: 'Çimko Çimento ve Beton',
          period: 'Şubat 2026 — Haziran 2026',
          desc: 'SAP ABAP ortamında kurumsal yazılım geliştirme süreçlerine katkı sağlanması, özel projelerin yürütülmesi ve IT departmanı bünyesinde donanım yönetimi ile teknik destek operasyonlarında deneyim kazanılması.',
        },
        {
          role: 'Yazılım Mühendisi (Stajyer)',
          company: 'MMT Amerikan Hastanesi',
          period: 'Kasım 2025 — Ocak 2026',
          desc: 'Hastane iç web portalının WordPress ve Elementor ile modernize edilmesi, içerik yönetim süreçlerinin optimize edilmesi ve kullanıcı deneyimi (UX) iyileştirme çalışmaları.',
        },
        {
          role: 'Yönetim Kurulu Üyesi',
          company: 'HKU Yazılım Topluluğu',
          period: '2021 — 2023',
          desc: 'Topluluğun dijital varlığını yönetmek adına sosyal medya stratejilerinin oluşturulması, oryantasyon etkinliklerinin koordinasyonu ve üye ağının genişletilmesi süreçlerinde aktif rol aldım.',
        },
      ],
    },
    education: {
      label: 'Eğitim',
      title: 'Eğitim',
      degree: 'Yazılım Mühendisliği (İngilizce)',
      school: 'Hasan Kalyoncu Üniversitesi',
      period: '2021 — 2026',
    },
    skills: {
      label: 'Yetenekler',
      title: 'Teknik Beceriler',
      categories: [
        {
          name: 'Programlama & ERP',
          items: ['SAP ABAP', 'Python', 'C#', 'SQL', 'C++'],
        },
        {
          name: 'Veri Analizi',
          items: ['NumPy', 'Pandas', 'Power BI', 'Excel', 'CRM Analytics'],
        },
        {
          name: 'Web & Mobil',
          items: ['React Native', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'Elementor'],
        },
      ],
    },
    projects: {
      label: 'Projeler',
      title: 'Öne Çıkan Projeler',
      github: "GitHub'da Gör",
      items: [
        {
          name: 'Airline Customer Satisfaction Analysis',
          desc: 'Havayolu müşteri memnuniyetini tahmin eden makine öğrenmesi modeli. Pandas ve NumPy ile veri ön işleme, görselleştirme ve sınıflandırma algoritmaları uygulandı.',
          tags: ['Python', 'Pandas', 'ML'],
          url: 'https://github.com/gulveren1453/airline-customer-satisfaction-Analysis-Analysis',
        },
        {
          name: 'Dükkan — Mobil E-Ticaret',
          desc: 'React Native ile geliştirilen modern mobil uygulama arayüzü. Ürün listeleme ve kullanıcı akışları üzerine odaklanılmıştır.',
          tags: ['React Native', 'Mobile UI'],
          url: 'https://github.com/gulveren1453/dukkan',
        },
        {
          name: 'Smart Retail RFM Analysis',
          desc: 'Müşteri segmentasyonu için CRM analitiği. Perakende verisi üzerinde RFM analizi uygulanarak müşteri davranışları modellendi.',
          tags: ['Python', 'Data Analysis'],
          url: 'https://github.com/gulveren1453/smart-retail-rfm-analysis',
        },
      ],
    },
    certificates: {
      label: 'Sertifikalar',
      title: 'Sertifikalar & Eğitimler',
      items: [
        {
          name: 'Data Analyst Path',
          org: 'Yetkin Gençler (YETGEN)',
          desc: 'SQL, Power BI, Python ve CRM analitiği üzerine kapsamlı veri analizi eğitimi.',
        },
        {
          name: 'Python for Data Science',
          org: 'Online Education',
          desc: 'Veri bilimi ekosisteminde Python kütüphaneleri ve uygulama teknikleri.',
        },
      ],
    },
    contact: {
      label: 'İletişim',
      title: 'Bana Ulaşın',
      subtitle: 'Projeler, iş birliği veya sadece tanışmak için bana her zaman ulaşabilirsiniz.',
      email: 'E-posta Gönder',
      links: 'Sosyal Medya',
    },
    footer: {
      text: 'Gülveren Canpolat tarafından geliştirildi',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      title: 'Software Engineer & Data Analyst',
      subtitle: 'Software Engineering Graduate (Class of June 2026) from Hasan Kalyoncu University. Focused on data-driven solutions and building efficient, scalable software.',
      cta: 'Get In Touch',
      projects: 'View My Projects',
    },
    about: {
      label: 'About',
      title: 'Who Am I?',
      text: "I am a Software Engineering graduate from Hasan Kalyoncu University (June 2026). As a curious and detail-oriented engineer, I specialize in data analysis, enterprise systems (SAP ABAP), and modern web technologies. My goal is to leverage my technical skills to solve complex problems with innovative and user-centric solutions.",
      location: 'Gaziantep, Turkey',
      university: 'Hasan Kalyoncu University',
      language: 'English — B1',
    },
    experience: {
      label: 'Experience',
      title: 'Work Experience',
      items: [
        {
          role: 'Software Engineering Intern',
          company: 'Cimko Cement and Concrete',
          period: 'February 2026 — June 2026',
          desc: 'Contributing to enterprise software development lifecycle using SAP ABAP, executing custom business logic projects, and gaining hands-on experience in IT hardware management and technical operations.',
        },
        {
          role: 'Software Engineer (Intern)',
          company: 'MMT American Hospital',
          period: 'November 2025 — January 2026',
          desc: 'Modernized the internal hospital web portal using WordPress and Elementor, streamlined content management systems, and implemented UI/UX enhancements.',
        },
        {
          role: 'Board Member',
          company: 'HKU Software Community',
          period: '2021 — 2023',
          desc: 'Managed social media strategies to enhance digital presence, coordinated orientation events, and led recruitment initiatives to grow the community network.',
        },
      ],
    },
    education: {
      label: 'Education',
      title: 'Education',
      degree: 'B.S. in Software Engineering (English)',
      school: 'Hasan Kalyoncu University',
      period: '2021 — 2026',
    },
    skills: {
      label: 'Skills',
      title: 'Technical Skills',
      categories: [
        {
          name: 'Programming & ERP',
          items: ['SAP ABAP', 'Python', 'C#', 'SQL', 'C++'],
        },
        {
          name: 'Data Analysis',
          items: ['NumPy', 'Pandas', 'Power BI', 'Excel', 'CRM Analytics'],
        },
        {
          name: 'Web & Mobile',
          items: ['React Native', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'Elementor'],
        },
      ],
    },
    projects: {
      label: 'Projects',
      title: 'Featured Projects',
      github: 'View on GitHub',
      items: [
        {
          name: 'Airline Customer Satisfaction Analysis',
          desc: 'A machine learning model to predict passenger satisfaction. Applied data preprocessing, visualization, and classification using Pandas and NumPy.',
          tags: ['Python', 'Pandas', 'ML'],
          url: 'https://github.com/gulveren1453/airline-customer-satisfaction-Analysis-Analysis',
        },
        {
          name: 'Dükkan — Mobile E-Commerce',
          desc: 'A modern mobile application interface built with React Native, focusing on seamless user flows and product discovery.',
          tags: ['React Native', 'Mobile UI'],
          url: 'https://github.com/gulveren1453/dukkan',
        },
        {
          name: 'Smart Retail RFM Analysis',
          desc: 'CRM analytics for customer segmentation. Performed RFM analysis on retail data to model and understand customer behavior.',
          tags: ['Python', 'Data Science'],
          url: 'https://github.com/gulveren1453/smart-retail-rfm-analysis',
        },
      ],
    },
    certificates: {
      label: 'Certificates',
      title: 'Certificates & Training',
      items: [
        {
          name: 'Data Analyst Path',
          org: 'Yetkin Gençler (YETGEN)',
          desc: 'Comprehensive training covering SQL, Power BI, Python, and CRM analytics.',
        },
        {
          name: 'Python for Data Science',
          org: 'Online Training',
          desc: 'Deep dive into Python libraries and applications within the data science ecosystem.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Get In Touch',
      subtitle: 'Feel free to reach out for collaborations, project inquiries, or just to say hi.',
      email: 'Send Email',
      links: 'Social Links',
    },
    footer: {
      text: 'Built by Gülveren Canpolat',
    },
  },
} as const

export type Translations = typeof translations['tr']