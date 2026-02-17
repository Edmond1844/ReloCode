import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.countries': 'Countries',
    'nav.blog': 'Blog',
    'nav.videos': 'Videos',
    'nav.about': 'About',
    'nav.contacts': 'Contacts',
    'cta.consultation': 'Free Consultation',
    'nav.documents': 'Documents',
    'nav.forwhom': 'Audience',
    
    // Hero
    'hero.title': 'We help you obtain residence permits in Europe and America',
    'hero.subtitle': 'Startup visas and Digital Nomad programs. Get your case reviewed in a free consultation',
    'cta.question': 'Ask a Question',
    
    // About
    'about.title': 'About Our Service',
    'about.subtitle': 'Relosafe — your reliable partner in obtaining a residence permit and moving to Europe and America.',

    'about.desc1': 'Selection of the best residence permit option',
    'about.desc2': 'Full support before and after relocation',
    'about.desc3': 'Legal and everyday relocation assistance',
    
    // Who is this for
    'whofor.title': 'Who is this for?',
    'whofor.professionals.title': 'For Remote Professionals',
    'whofor.professionals.subtitle': 'in Spain',
    'whofor.professionals.desc': 'Employment or service contracts',
    'whofor.professionals.benefit1': '3-year residence permit for the whole family',
    'whofor.professionals.benefit2': 'Fast processing',
    'whofor.professionals.benefit3': 'High approval rate',
    'whofor.entrepreneurs.title': 'For Entrepreneurs',
    'whofor.entrepreneurs.subtitle': 'Startup visa in Spain',
    'whofor.entrepreneurs.desc': 'For business owners or startup founders',
    'whofor.entrepreneurs.benefit1': '3-year residence permit',
    'whofor.entrepreneurs.benefit2': 'Ability to run a business in the EU',
    'whofor.entrepreneurs.benefit3': 'Access to accelerators, grants, and funding programs',
    'whofor.entrepreneurs.benefit4': 'Tax benefits',
    'cta.learnmore': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.digitalnomad': 'Digital Nomad Residence Permit',
    'services.digitalnomad.desc': 'Complete assistance with obtaining residence permits for remote workers',
    'services.digitalnomad.details': 'Full documentation assistance, case preparation, legal support throughout the process.',
    'services.startup': 'Startup Visa',
    'services.startup.desc': 'Business plan preparation, project submission, residence permits for the whole team',
    'services.startup.details' : 'Business plan development, pitch preparation, regulatory compliance, team visa support.',
    'services.consultation': 'Personal Consultation',
    'services.consultation.desc': 'Case analysis and document audit',
    'services.consultation.details': 'One-on-one expert consultation, document review, eligibility assessment.',
    'services.translation': 'Certificates and Sworn Translations',
    'services.translation.desc': 'Professional translation services for legal documents',
    'services.translation.details': 'Certified translations, apostille services, document legalization.',

     // ForWhom
    'forwhom.title': 'For Whom?',
    
    // Countries
    'countries.title': 'Countries',
    'countries.subtitle': 'Explore residence permit programs across different countries',
    'countries.spain': 'Spain',
    'countries.spain.desc': 'Digital Nomad visa, Startup visa',
    'countries.portugal': 'Portugal',
    'countries.portugal.desc': 'D7 visa, Golden visa',
    'countries.france': 'France',
    'countries.france.desc': 'Talent passport, Self-employed visa',
    'countries.germany': 'Germany',
    'countries.germany.desc': 'Freelance visa, Job seeker visa',
    'countries.usa': 'USA',
    'countries.usa.desc': 'O-1 visa, EB-2 NIW',
    'cta.programs': 'View Programs',

    // Blog 
    'blog.subtitle': 'Expert insights and guides on relocation and residence permits',

    'blog.card.title.spain': 'Complete Guide to Digital Nomad Visa in Spain',
    'blog.card.excerpt.spain': 'Everything you need to know about the Spain Digital Nomad visa - requirements, process, and timeline.',
    'blog.card.category.spain': 'Spain',

    'blog.card.title.visa-guides': 'Startup Visa vs Digital Nomad: Which is Right for You?',
    'blog.card.excerpt.visa-guides': 'Compare the key differences between startup and digital nomad visas to make the right choice.',
    'blog.card.category.visa-guides': 'Guides',

    'blog.card.title.Portugal': 'Tax Benefits of Portuguese D7 Visa',
    'blog.card.excerpt.Portugal': 'Learn about the NHR tax regime and other financial benefits available to D7 visa holders.',
    'blog.card.category.Portugal': 'Portugal',

    'blog.card.title.Germany': 'Moving to Germany as a Freelancer: Complete Checklist',
    'blog.card.excerpt.Germany': 'Step-by-step guide to relocating to Germany on a freelance visa, including required documents.',
    'blog.card.category.Germany': 'Germany',

    'blog.card.title.famaly-guides': 'Family Relocation: Bringing Your Spouse and Children',
    'blog.card.excerpt.famaly-guides': 'How to include family members in your residence permit application and what documents you need.',
    'blog.card.category.famaly-guides': 'Guides',

    'blog.card.title.life-in-Spain': 'Life in Spain: First Month Essentials',
    'blog.card.excerpt.life-in-Spain': 'What to expect and how to settle in during your first month living in Spain.',
    'blog.card.category.life-in-Spain': 'Spain',


    'blog.card.button': 'Read more',



    
    // Videos
    'videos.title': 'Useful Materials',
    'videos.subtitle': 'Videos about residence permits and life in Spain',
    'cta.watchall': 'Watch All Videos',

    // Values
    'values.mission.title': 'Our Mission',
    'values.mission.description': 'To make relocation simple, transparent, and accessible for everyone seeking new opportunities in Europe and America.',

    'values.team.title': 'Our Team',
    'values.team.description': 'Experienced immigration lawyers, consultants, and relocation specialists with deep knowledge of European and American programs.',

    'values.approach.title': 'Our Approach',
    'values.approach.description': 'Personalized service, detailed case analysis, and full support from initial consultation to successful relocation.',

    'values.expertise.title': 'Our Expertise',
    'values.expertise.description': '5+ years of experience, 500+ successful cases, partnerships with government agencies and accelerators.',

    // About
    'about.whyChoose.title': 'Why Choose Us?',
    'about.whyChoose.items.transparency.title': 'Transparency',
    'about.whyChoose.items.transparency.description': 'Clear pricing, honest timelines, and no hidden fees',

    'about.whyChoose.items.expertise.title': 'Expertise',
    'about.whyChoose.items.expertise.description': 'Deep knowledge of immigration law and practical relocation experience',

    'about.whyChoose.items.support.title': 'Support',
    'about.whyChoose.items.support.description': 'Full support before, during, and after the relocation process',



    // Contacts
    'contacts.subtitle': 'Get in touch with us for a free consultation',
    
    // Trust
    'trust.title': 'Why Trust Us',
    'trust.experience': 'Years of Experience',
    'trust.approval': 'Approval Rate',
    'trust.cases': 'Successful Cases',
    
    // Footer
    'footer.askquestion.telegram': 'Ask a Question on Telegram',
    'footer.askquestion.whatsapp': 'Ask a Question on WhatsApp',
    'footer.copyright': 'All rights reserved.',

    // Footer links 
    'footer.links.digitalnomad': 'Digital Nomad Residence Permit',
    'footer.links.startup': 'Startup Visa',
    'footer.links.consultation': 'Personal Consultation',
  },
  ru: {
    // Header
    'nav.services': 'Услуги',
    'nav.countries': 'Страны',
    'nav.blog': 'Блог',
    'nav.videos': 'Видео',
    'nav.about': 'О нас',
    'nav.contacts': 'Контакты',
    'cta.consultation': 'Бесплатная консультация',
    'nav.documents': 'Документы',
    'nav.forwhom': 'Аудитория',
    
    // Hero
    'hero.title': 'Помогаем получить вид на жительство в Европе и Америке',
    'hero.subtitle': 'Startup-визы и программы Digital Nomad. Получите разбор вашего кейса на бесплатной консультации',
    'cta.question': 'Задать вопрос',
    
    // About
    'about.title': 'О нашем сервисе', 
    'about.subtitle': 'Relosafe — ваш надежный партнер в получении вида на жительство и переезде в Европу и Америку.',

    'about.desc1': 'Подбор оптимального варианта ВНЖ',
    'about.desc2': 'Полное сопровождение до и после релокации',
    'about.desc3': 'Юридическая и бытовая помощь в переезде',
    
    // Who is this for
    'whofor.title': 'Кому подходит?',
    'whofor.professionals.title': 'Удалённым специалистам',
    'whofor.professionals.subtitle': 'в Испании',
    'whofor.professionals.desc': 'Трудовой договор или договор оказания услуг',
    'whofor.professionals.benefit1': 'ВНЖ на 3 года для всей семьи',
    'whofor.professionals.benefit2': 'Быстрое рассмотрение',
    'whofor.professionals.benefit3': 'Высокий процент одобрения',
    
    'whofor.entrepreneurs.title': 'Предпринимателям',
    'whofor.entrepreneurs.subtitle': 'Startup-виза в Испании',
    'whofor.entrepreneurs.desc': 'Для владельцев бизнеса или основателей стартапов',
    'whofor.entrepreneurs.benefit1': 'ВНЖ на 3 года',
    'whofor.entrepreneurs.benefit2': 'Возможность вести бизнес в ЕС',
    'whofor.entrepreneurs.benefit3': 'Доступ к акселераторам, грантам и программам финансирования',
    'whofor.entrepreneurs.benefit4': 'Налоговые льготы',
    'cta.learnmore': 'Подробнее',
    
    // Services
    'services.title': 'Наши услуги',
    'services.digitalnomad': 'ВНЖ Digital Nomad',
    'services.digitalnomad.desc': 'Полное сопровождение получения ВНЖ для удалённых работников',
    'services.digitalnomad.details': 'Полная помощь в оформлении документов, подготовка дела, юридическая поддержка на протяжении всего процесса.',
    'services.startup': 'Startup-виза',
    'services.startup.desc': 'Подготовка бизнес-плана, подача проекта, ВНЖ для всей команды',
    'services.startup.details' : 'Разработка бизнес-плана, подготовка презентаций, соблюдение нормативных требований, визовая поддержка команды.',
    'services.consultation': 'Персональная консультация',
    'services.consultation.desc': 'Разбор кейса и аудит документов',
    'services.consultation.details': 'Индивидуальная консультация эксперта, анализ документов, оценка соответствия критериям.',
    'services.translation': 'Справки и переводы jurado',
    'services.translation.desc': 'Профессиональные переводы юридических документов',
    'services.translation.details': 'Заверенные переводы, услуги апостиля, легализация документов.',

    // ForWhom
    'forwhom.title': 'Кому подходит?',
    
    // Countries
    'countries.title': 'Страны',
    'countries.subtitle': 'Изучите программы ординатуры в разных странах.',
    'countries.spain': 'Испания',
    'countries.spain.desc': 'Digital Nomad виза, Startup виза',
    'countries.portugal': 'Португалия',
    'countries.portugal.desc': 'D7 виза, Золотая виза',
    'countries.france': 'Франция',
    'countries.france.desc': 'Talent паспорт, Самозанятость',
    'countries.germany': 'Германия',
    'countries.germany.desc': 'Фриланс виза, Job seeker виза',
    'countries.usa': 'США',
    'countries.usa.desc': 'O-1 виза, EB-2 NIW',
    'cta.programs': 'Смотреть программы',

   // Blog 
    'blog.subtitle': 'Экспертные рекомендации и руководства по вопросам переезда и получения вида на жительство.',

    'blog.card.title.spain': 'Полное руководство по получению визы для цифровых кочевников в Испании.',
    'blog.card.excerpt.spain': 'Вся необходимая информация о визе для цифровых кочевников в Испанию: требования, процедура и сроки.',
    'blog.card.category.spain': 'Испания',

    'blog.card.title.visa-guides': 'Виза для стартапов или статус цифрового кочевника: что подходит именно вам?',
    'blog.card.excerpt.visa-guides': 'Сравните ключевые различия между визами для стартапов и визами для цифровых кочевников, чтобы сделать правильный выбор.',
    'blog.card.category.visa-guides': 'Путеводители',

    'blog.card.title.Portugal': 'Налоговые преимущества португальской визы D7',
    'blog.card.excerpt.Portugal': 'Узнайте о налоговом режиме NHR и других финансовых преимуществах, доступных обладателям визы D7.',
    'blog.card.category.Portugal': 'Португалия',

    'blog.card.title.Germany': 'Переезд в Германию в качестве фрилансера: полный контрольный список.',
    'blog.card.excerpt.Germany': 'Пошаговое руководство по переезду в Германию по визе для фрилансеров, включая необходимые документы.',
    'blog.card.category.Germany': 'Германия',

    'blog.card.title.famaly-guides': 'Переезд семьи: проживание супруга(и) и детей.',
    'blog.card.excerpt.famaly-guides': 'Как включить членов семьи в заявление на получение вида на жительство и какие документы вам понадобятся.',
    'blog.card.category.famaly-guides': 'Путеводители',

    'blog.card.title.life-in-Spain': 'Жизнь в Испании: все необходимое для первого месяца',
    'blog.card.excerpt.life-in-Spain': 'Чего ожидать и как освоиться в течение первого месяца жизни в Испании.',
    'blog.card.category.life-in-Spain': 'Испания',
    
    'blog.card.button': 'Читать далее',
    
    // Videos
    'videos.title': 'Полезные материалы',
    'videos.subtitle': 'Видео о ВНЖ и жизни в Испании',
    'cta.watchall': 'Смотреть все видео',

    
    // Values
    'values.mission.title': 'Наша миссия',
    'values.mission.description': 'Сделать переезд простым, прозрачным и доступным для всех, кто ищет новые возможности в Европе и Америке.',

    'values.team.title': 'Наша команда',
    'values.team.description': 'Опытные юристы, консультанты и специалисты по вопросам иммиграции, обладающие глубокими знаниями европейских и американских программ.',

    'values.approach.title': 'Наш подход',
    'values.approach.description': 'Индивидуальный подход к каждому клиенту, детальный анализ ситуации и всесторонняя поддержка от первоначальной консультации до успешного переезда.',

    'values.expertise.title': 'Наш опыт',
    'values.expertise.description': 'Более 5 лет опыта, более 500 успешных проектов, партнерские отношения с государственными учреждениями и акселераторами.',
    
    // About
    'about.whyChoose.title': 'Почему выбирают нас?',
    'about.whyChoose.items.transparency.title': 'Прозрачность',
    'about.whyChoose.items.transparency.description': 'Прозрачное ценообразование, честные сроки и никаких скрытых платежей.',

    'about.whyChoose.items.expertise.title': 'Экспертиза',
    'about.whyChoose.items.expertise.description': 'Глубокие знания иммиграционного права и практический опыт в сфере переезда.',

    'about.whyChoose.items.support.title': 'Поддерживать',
    'about.whyChoose.items.support.description': 'Полная поддержка до, во время и после процесса переезда.',

    // Contacts
    'contacts.subtitle': 'Свяжитесь с нами для бесплатной консультации.',
    
    // Trust
    'trust.title': 'Почему нам доверяют',
    'trust.experience': 'Лет опыта',
    'trust.approval': 'Процент одобрения',
    'trust.cases': 'Успешных кейсов',
    
    // Footer
    'footer.askquestion.telegram': 'Задать вопрос в Telegram',
    'footer.askquestion.whatsapp': 'Задать вопрос в WhatsApp',
    'footer.copyright': 'Все права защищены.',

    //Footer links в переменную и закинуть в футер? 
    'footer.links.digitalnomad': 'ВНЖ Digital Nomad', 
    'footer.links.startup': 'Startup-виза',
    'footer.links.consultation': 'Персональная консультация',

    'footer.links.videos': 'Видео',

    
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return saved === "en" || saved === "ru" ? saved : "ru";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  console.log('Язык поменялся');
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
