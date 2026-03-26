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
      subtitle: 'Hasan Kalyoncu Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisi. Veriye dayalı çözümler üreten, öğrenmeye ve gelişmeye açık bir yazılımcıyım.',
      cta: 'İletişime Geç',
      projects: 'Projelerimi Gör',
    },
    about: {
      label: 'Hakkımda',
      title: 'Ben Kimim?',
      text: 'Merhaba! Hasan Kalyoncu Üniversitesi Yazılım Mühendisliği bölümünde 4. sınıf öğrencisiyim. Öğrenmeye aç, araştırmacı ve detay odaklı bir yazılımcıyım. Veri analizi, mobil arayüz geliştirme ve web teknolojileri alanlarında kendimi geliştirmeye devam ediyorum. Kariyerimde başarı ve gelişim odaklı hareket etmeyi temel ilkem olarak benimsiyorum.',
      location: 'Gaziantep, Türkiye',
      university: 'Hasan Kalyoncu Üniversitesi',
      language: 'İngilizce — B1',
    },
    experience: {
      label: 'Deneyim',
      title: 'İş Deneyimi',
      items: [
        {
          role: 'Yazılım Mühendisi',
          company: 'MMT Amerikan Hastanesi',
          period: 'Kasım 2025 — Günümüz',
          desc: 'WordPress ve Elementor kullanarak hastane iç web sitesinin düzenlenmesi, içerik güncelleme ve kullanıcı deneyimi iyileştirme çalışmaları.',
        },
        {
          role: 'Yönetim Kurulu Üyesi',
          company: 'HKU Yazılım Topluluğu',
          period: '2021 — 2023 · Gaziantep',
          desc: 'İki yıl boyunca HKU Yazılım Kulübü Yönetim Kurulu Üyesi olarak görev yaptım. Bu süreçte sosyal medya yöneticisi olarak çalıştım, oryantasyon etkinliklerinde kulübü tanıttım ve yeni üye kazanımına katkı sağladım.',
        },
      ],
    },
    education: {
      label: 'Eğitim',
      title: 'Eğitim Hayatım',
      degree: 'Yazılım Mühendisliği (İngilizce)',
      school: 'Hasan Kalyoncu Üniversitesi',
      period: '2021 — 2026',
    },
    skills: {
      label: 'Yetenekler',
      title: 'Teknik Beceriler',
      categories: [
        {
          name: 'Programlama',
          items: ['Python', 'C', 'C++', 'C#', 'SQL'],
        },
        {
          name: 'Veri Analizi',
          items: ['NumPy', 'Pandas', 'Power BI', 'Excel', 'CRM Analitik', 'Veri İşleme'],
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
      github: 'GitHub\'da Gör',
      items: [
        {
          name: 'Airline Customer Satisfaction Analysis',
          desc: 'Havayolu müşteri memnuniyetini tahmin eden makine öğrenmesi modeli. Pandas ve NumPy ile veri ön işleme, görselleştirme ve sınıflandırma algoritmaları uygulandı.',
          tags: ['Python', 'Pandas', 'NumPy', 'ML'],
          url: 'https://github.com/gulveren1453/airline-customer-satisfaction-Analysis-Analysis',
        },
        {
          name: 'Dükkan — E-Ticaret Mobil Arayüzü',
          desc: 'React Native ile geliştirilen modern e-ticaret mobil uygulama arayüzü. Ürün listeleme, sepet ve kullanıcı akışları tasarlandı.',
          tags: ['React Native', 'Mobile UI', 'JavaScript'],
          url: 'https://github.com/gulveren1453/dukkan',
        },
        {
          name: 'Skincare — Web Arayüz Projesi',
          desc: 'HTML, CSS ve JavaScript ile sıfırdan geliştirilen cilt bakım ürünleri web sitesi arayüzü. Responsive tasarım ve kullanıcı deneyimi ön planda tutuldu.',
          tags: ['HTML', 'CSS', 'JavaScript'],
          url: 'https://github.com/gulveren1453/skincare',
        },
        {
          name: 'Smart Retail RFM Analysis',
          desc: 'Müşteri segmentasyonu için RFM (Recency, Frequency, Monetary) analizi. Perakende verisi üzerinde CRM analitiği uygulandı.',
          tags: ['Python', 'CRM', 'Data Analysis'],
          url: 'https://github.com/gulveren1453/smart-retail-rfm-analysis',
        },
        {
          name: 'SaveBite',
          desc: 'Gıda israfını azaltmak amacıyla geliştirilen uygulama projesi.',
          tags: ['Python', 'App'],
          url: 'https://github.com/gulveren1453/SaveBite',
        },
        {
          name: 'Kitap Takip',
          desc: 'Kişisel kitap okuma takip uygulaması.',
          tags: ['Python'],
          url: 'https://github.com/gulveren1453/kitap-takip',
        },
      ],
    },
    certificates: {
      label: 'Sertifikalar',
      title: 'Sertifikalar & Eğitimler',
      items: [
        {
          name: 'Data Analyst Path — Veri Analisti Yolu',
          org: 'Yetkin Gençler (YETGEN)',
          desc: 'Veri analizi, SQL sorgulama, Excel ile analitik, Power BI görselleştirme, Python programlama ve CRM analitiği.',
        },
        {
          name: 'Python Programming for Data Science',
          org: 'Online Eğitim',
          desc: 'Veri bilimi için Python programlama temelleri ve uygulamaları.',
        },
        {
          name: 'Digital Masters Academy Unity Eğitimi',
          org: 'Digital Masters Academy',
          desc: 'Unity oyun geliştirme motoru ile temel oyun geliştirme eğitimi.',
        },
        {
          name: 'Yetkin Gençler (YETGEN) Katılımcısı',
          org: 'YETGEN',
          desc: 'Yazılım ve kişisel gelişim alanlarında kapsamlı eğitim programı.',
        },
      ],
    },
    contact: {
      label: 'İletişim',
      title: 'Bana Ulaşın',
      subtitle: 'Bir proje için iş birliği yapmak veya sadece merhaba demek ister misiniz? Mesaj atmaktan çekinmeyin.',
      email: 'E-posta Gönder',
      links: 'Sosyal Bağlantılar',
    },
    footer: {
      text: 'Gülveren Canpolat tarafından yapıldı',
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
      greeting: 'Hi, I\'m',
      title: 'Software Engineer & Data Analyst',
      subtitle: '4th-year Software Engineering student at Hasan Kalyoncu University. A developer driven by data-driven solutions, always eager to learn and grow.',
      cta: 'Get In Touch',
      projects: 'View My Projects',
    },
    about: {
      label: 'About',
      title: 'Who Am I?',
      text: 'Hello! I am a 4th-year Software Engineering student at Hasan Kalyoncu University. I am a detail-oriented, curious, and eager-to-learn software developer. I continue to improve myself in data analysis, mobile interface development, and web technologies. I embrace growth and success as the core principles of my career.',
      location: 'Gaziantep, Turkey',
      university: 'Hasan Kalyoncu University',
      language: 'English — B1',
    },
    experience: {
      label: 'Experience',
      title: 'Work Experience',
      items: [
        {
          role: 'Software Engineer',
          company: 'MMT American Hospital',
          period: 'November 2025 — Present',
          desc: 'Updating the internal hospital website, content management, and improving user experience using WordPress and Elementor.',
        },
        {
          role: 'Member of the Board of Directors',
          company: 'HKU Software Community',
          period: '2021 — 2023 · Gaziantep',
          desc: 'Served as a Board Member of the HKU Software Club for two years. Worked as social media manager, promoted the club during orientation events and contributed to the recruitment of new members.',
        },
      ],
    },
    education: {
      label: 'Education',
      title: 'Education',
      degree: 'Software Engineering (English)',
      school: 'Hasan Kalyoncu University',
      period: '2021 — 2026',
    },
    skills: {
      label: 'Skills',
      title: 'Technical Skills',
      categories: [
        {
          name: 'Programming',
          items: ['Python', 'C', 'C++', 'C#', 'SQL'],
        },
        {
          name: 'Data Analysis',
          items: ['NumPy', 'Pandas', 'Power BI', 'Excel', 'CRM Analytics', 'Data Processing'],
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
          desc: 'Machine learning model predicting airline customer satisfaction. Data preprocessing, visualization, and classification algorithms applied with Pandas and NumPy.',
          tags: ['Python', 'Pandas', 'NumPy', 'ML'],
          url: 'https://github.com/gulveren1453/airline-customer-satisfaction-Analysis-Analysis',
        },
        {
          name: 'Dükkan — E-Commerce Mobile Interface',
          desc: 'Modern e-commerce mobile app interface built with React Native. Designed product listing, shopping cart, and user flows.',
          tags: ['React Native', 'Mobile UI', 'JavaScript'],
          url: 'https://github.com/gulveren1453/dukkan',
        },
        {
          name: 'Skincare — Web Interface Project',
          desc: 'Skincare product website interface built from scratch with HTML, CSS, and JavaScript. Focused on responsive design and user experience.',
          tags: ['HTML', 'CSS', 'JavaScript'],
          url: 'https://github.com/gulveren1453/skincare',
        },
        {
          name: 'Smart Retail RFM Analysis',
          desc: 'RFM (Recency, Frequency, Monetary) analysis for customer segmentation. CRM analytics applied on retail data.',
          tags: ['Python', 'CRM', 'Data Analysis'],
          url: 'https://github.com/gulveren1453/smart-retail-rfm-analysis',
        },
        {
          name: 'SaveBite',
          desc: 'Application project developed to reduce food waste.',
          tags: ['Python', 'App'],
          url: 'https://github.com/gulveren1453/SaveBite',
        },
        {
          name: 'Kitap Takip (Book Tracker)',
          desc: 'Personal book reading tracker application.',
          tags: ['Python'],
          url: 'https://github.com/gulveren1453/kitap-takip',
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
          desc: 'Comprehensive training in data analysis, SQL querying, Excel analytics, Power BI visualization, Python programming, and CRM analytics.',
        },
        {
          name: 'Python Programming for Data Science',
          org: 'Online Training',
          desc: 'Fundamentals and applications of Python programming for data science.',
        },
        {
          name: 'Digital Masters Academy Unity Training',
          org: 'Digital Masters Academy',
          desc: 'Fundamentals of game development with the Unity game engine.',
        },
        {
          name: 'Yetkin Gençler (YETGEN) Trainee',
          org: 'YETGEN',
          desc: 'Comprehensive training program in software development and personal growth.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Get In Touch',
      subtitle: 'Want to collaborate on a project or just say hello? Feel free to reach out.',
      email: 'Send Email',
      links: 'Social Links',
    },
    footer: {
      text: 'Built by Gülveren Canpolat',
    },
  },
} as const

export type Translations = typeof translations['tr']
