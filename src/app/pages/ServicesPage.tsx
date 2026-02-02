import { Link } from 'react-router-dom';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Users, Briefcase, FileText, Globe } from 'lucide-react';

export function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      title: t('services.digitalnomad'),
      description: t('services.digitalnomad.desc'),
      details: t('services.digitalnomad.details'),
      to: '/services/digital-nomad',
    },
    {
      icon: Briefcase,
      title: t('services.startup'),
      description: t('services.startup.desc'),
      details: t('services.startup.details'),
      to: '/services/startup',
    },
    {
      icon: FileText,
      title: t('services.consultation'),
      description: t('services.consultation.desc'),
      details: t('services.consultation.details'),
      to: '/services/consultation',
    },
    {
      icon: Globe,
      title: t('services.translation'),
      description: t('services.translation.desc'),
      details: t('services.translation.details'),
      // to: '/services/translation',
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('about.desc2')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-6">
                    {service.details}
                  </p>
                <Link to={service.to}> 
                  <Button className="w-full" style={{ cursor: 'pointer' }}>{t('cta.consultation')}</Button> 
                </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
