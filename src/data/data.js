import { Users, Briefcase, FileText, Globe } from 'lucide-react';

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
