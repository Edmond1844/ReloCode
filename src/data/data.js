import { Users, Briefcase, FileText, Globe, Target, Award, Globe2 } from 'lucide-react';

// Сервисы
export const servicesBase = [
    {
        icon: Users,
        title: 'services.digitalnomad',       
        description: 'services.digitalnomad.desc',
        details: 'services.digitalnomad.details',
        url: 'digitalnomad',
    },
    {
        icon: Briefcase,
        title: 'services.startup',
        description: 'services.startup.desc',
        details: 'services.startup.details',
        url: 'startup',
    },
    {
        icon: FileText,
        title: 'services.consultation',
        description: 'services.consultation.desc',
        details: 'services.consultation.details',        
        url: 'consultation',
    },
    {
        icon: Globe,
        title: 'services.translation',
        description: 'services.translation.desc',
        details: 'services.translation.details',
        url: 'translation',
    },
];

// Who is this for 
export const targetAudience  = [
    // Удалённые специалисты
    {
        url: 'professionals',
        image: 'https://images.unsplash.com/photo-1623251606108-512c7c4a3507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbm9tYWQlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4MzgzNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'whofor.professionals.title',
        subTitle: 'whofor.professionals.subtitle',
        description: 'whofor.professionals.desc',
        benefits: [
            'whofor.professionals.benefit1',
            'whofor.professionals.benefit2',
            'whofor.professionals.benefit3',
        ]
    },
    // Предприниматели
    {
        url: 'entrepreneurs',
        image: 'https://images.unsplash.com/photo-1587875643728-b630ed947dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyfGVufDF8fHx8MTc2ODM4MzE2OXww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'whofor.entrepreneurs.title',
        subTitle: 'whofor.entrepreneurs.subtitle',
        description: 'whofor.entrepreneurs.desc',
            benefits: [
            'whofor.entrepreneurs.benefit1',
            'whofor.entrepreneurs.benefit2',
            'whofor.entrepreneurs.benefit3',
            'whofor.entrepreneurs.benefit4',
        ],
        
    }
];

export const countries = [
    {
        url: 'spain',
        name: 'countries.spain',
        flag: '🇪🇸',
        description:'countries.spain.desc',
        programs: ['Digital Nomad Visa', 'Startup Visa', 'Non-Lucrative Residence'],
    },
    {
        url: 'portugal',
        name: 'countries.portugal',
        flag: '🇵🇹',
        description: 'countries.portugal.desc',
        programs: ['D7 Visa', 'Golden Visa', 'Digital Nomad Visa'],
    },
    {
        url: 'france',
        name: 'countries.france',
        flag: '🇫🇷',
        description: 'countries.france.desc',
        programs: ['Talent Passport', 'Auto-entrepreneur Visa', 'Tech Visa'],
    },
    {
        url: 'germany',
        name: 'countries.germany',
        flag: '🇩🇪',
        description: 'countries.germany.desc',
        programs: ['Freelance Visa', 'Job Seeker Visa', 'Blue Card'],
    },
    {
        url: 'usa',
        name: 'countries.usa',
        flag: '🇺🇸',
        description: 'countries.usa.desc',
        programs: ['O-1 Visa', 'EB-2 NIW', 'E-2 Visa'],
    },
];

// Blog
export const blogFilter = [
    {
        id: "All",
        name: "Все статьи",
        type: "button",
        filterType: "all",
    },
    {
        id: "Guides",
        name: "Гиды",
        type: "button",
        filterType: "guides",
    },
    {
        id: "Spain",
        name: "Испания",
        type: "button",
        filterType: "spain",
    },
    {
        id: "Germany",
        name: "Германия",
        type: "button",
        filterType: "germany",
    },
    {
        id: "Portugal",
        name: "Португалия",
        type: "button",
        filterType: "portugal",
    },
];

export const articles = [ 
    {
        title: 'blog.card.title.spain',
        excerpt: 'blog.card.excerpt.spain',
        date: '2024-01-10',
        categoryName: 'blog.card.category.spain',
        category: ['spain'],
        url: 'complete-guide-digital-nomad-visa-spain'
    },
    {
        title: 'blog.card.title.visa-guides',
        excerpt: 'blog.card.excerpt.visa-guides',
        date: '2024-01-08',
        categoryName: 'blog.card.category.visa-guides',
        category: ['guides'],
        url: 'startup-visa-vs-digital-nomad'
    },
    {
        title: 'blog.card.title.Portugal',
        excerpt: 'blog.card.excerpt.Portugal',
        date: '2024-01-05',
        categoryName: 'blog.card.category.Portugal',
        category: ['portugal'],
        url: 'tax-benefits-portuguese-d7-visa'
    },
    {
        title: 'blog.card.title.Germany',
        excerpt: 'blog.card.excerpt.Germany',
        date: '2024-01-03',
        categoryName: 'blog.card.category.Germany',
        category: ['germany'],
        url: 'moving-to-germany-freelancer-checklist'
    },
    {
        title: 'blog.card.title.famaly-guides',
        excerpt: 'blog.card.excerpt.famaly-guides',
        date: '2023-12-28',
        categoryName: 'blog.card.category.famaly-guides',
        category: ['guides'],
        url: 'family-relocation-spouse-children'
    },
    {
        title: 'blog.card.title.life-in-Spain',
        excerpt: 'blog.card.excerpt.life-in-Spain',
        date: '2023-12-25',
        categoryName: 'blog.card.category.life-in-Spain',
        category: ['spain'],
        url: 'life-in-spain-first-month-essentials'
    },
];

export const values = [
    {
        id: 1, 
        icon: Target,
        title: 'values.mission.title',
        description: 'values.mission.description',
    },
    {
        id: 2,
        icon: Users,
        title: 'values.team.title',
        description: 'values.team.description',
    },
    {
        id: 3,
        icon: Award,
        title: 'values.approach.title',
        description: 'values.approach.description',
    },
    {
        id: 4,
        icon: Globe2,
        title: 'values.expertise.title',
        description: 'values.expertise.description',
    },
];
