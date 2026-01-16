import { createContext, useContext, useState, ReactNode } from 'react';

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
    
    // Hero
    'hero.title': 'We help you obtain residence permits in Europe and America',
    'hero.subtitle': 'Startup visas and Digital Nomad programs. Get your case reviewed in a free consultation',
    'cta.question': 'Ask a Question',
    
    // About
    'about.title': 'About Our Service',
    'about.desc1': 'Selection of the best residence permit option',
    'about.desc2': 'Full support before and after relocation',
    'about.desc3': 'Legal and everyday relocation assistance',
    
    // Who is this for
    'whofor.title': 'Who is this for?',
    'whofor.professionals.title': 'For Remote Professionals',
    'whofor.professionals.subtitle': 'Digital Nomad in Spain',
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
    'services.startup': 'Startup Visa',
    'services.startup.desc': 'Business plan preparation, project submission, residence permits for the whole team',
    'services.consultation': 'Personal Consultation',
    'services.consultation.desc': 'Case analysis and document audit',
    'services.translation': 'Certificates and Sworn Translations',
    'services.translation.desc': 'Professional translation services for legal documents',
    
    // Countries
    'countries.title': 'Countries',
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
    
    // Videos
    'videos.title': 'Useful Materials',
    'videos.subtitle': 'Videos about residence permits and life in Spain',
    'cta.watchall': 'Watch All Videos',
    
    // Trust
    'trust.title': 'Why Trust Us',
    'trust.experience': 'Years of Experience',
    'trust.approval': 'Approval Rate',
    'trust.cases': 'Successful Cases',
    
    // Footer
    'footer.askquestion.telegram': 'Ask a Question on Telegram',
    'footer.askquestion.whatsapp': 'Ask a Question on WhatsApp',
    'footer.copyright': '© 2026 ReloCode. All rights reserved.',
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
    
    // Hero
    'hero.title': 'Помогаем получить вид на жительство в Европе и Америке',
    'hero.subtitle': 'Startup-визы и программы Digital Nomad. Получите разбор вашего кейса на бесплатной консультации',
    'cta.question': 'Задать вопрос',
    
    // About
    'about.title': 'О нашем сервисе',
    'about.desc1': 'Подбор оптимального варианта ВНЖ',
    'about.desc2': 'Полное сопровождение до и после релокации',
    'about.desc3': 'Юридическая и бытовая помощь в переезде',
    
    // Who is this for
    'whofor.title': 'Кому подходит?',
    'whofor.professionals.title': 'Удалённым специалистам',
    'whofor.professionals.subtitle': 'Digital Nomad в Испании',
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
    'services.startup': 'Startup-виза',
    'services.startup.desc': 'Подготовка бизнес-плана, подача проекта, ВНЖ для всей команды',
    'services.consultation': 'Персональная консультация',
    'services.consultation.desc': 'Разбор кейса и аудит документов',
    'services.translation': 'Справки и переводы jurado',
    'services.translation.desc': 'Профессиональные переводы юридических документов',
    
    // Countries
    'countries.title': 'Страны',
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
    
    // Videos
    'videos.title': 'Полезные материалы',
    'videos.subtitle': 'Видео о ВНЖ и жизни в Испании',
    'cta.watchall': 'Смотреть все видео',
    
    // Trust
    'trust.title': 'Почему нам доверяют',
    'trust.experience': 'Лет опыта',
    'trust.approval': 'Процент одобрения',
    'trust.cases': 'Успешных кейсов',
    
    // Footer
    'footer.askquestion.telegram': 'Задать вопрос в Telegram',
    'footer.askquestion.whatsapp': 'Задать вопрос в WhatsApp',
    'footer.copyright': '© 2026 ReloCode. Все права защищены.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

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
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
