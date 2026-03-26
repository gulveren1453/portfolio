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
      email: {
        text: 'E-posta Gönder',
        url: 'mailto:gulveren211504041@gmail.com',
      },
      links: {
        text: 'Sosyal Bağlantılar',
        url: 'https://www.linkedin.com/in/gulveren-canpolat-28b79b231',
      },
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
    experience: { /* aynı kalacak */ },
    education: { /* aynı kalacak */ },
    skills: { /* aynı kalacak */ },
    projects: { /* aynı kalacak */ },
    certificates: { /* aynı kalacak */ },
    contact: {
      label: 'Contact',
      title: 'Get In Touch',
      subtitle: 'Want to collaborate on a project or just say hello? Feel free to reach out.',
      email: {
        text: 'Send Email',
        url: 'mailto:gulveren211504041@gmail.com',
      },
      links: {
        text: 'Social Links',
        url: 'https://www.linkedin.com/in/gulveren-canpolat-28b79b231',
      },
    },
    footer: {
      text: 'Built by Gülveren Canpolat',
    },
  },
} as const

export type Translations = typeof translations['tr']