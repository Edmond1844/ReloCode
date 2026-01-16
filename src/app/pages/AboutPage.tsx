import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent } from '@/app/components/ui/card';
import { Target, Users, Award, Globe2 } from 'lucide-react';

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make relocation simple, transparent, and accessible for everyone seeking new opportunities in Europe and America.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Experienced immigration lawyers, consultants, and relocation specialists with deep knowledge of European and American programs.',
    },
    {
      icon: Award,
      title: 'Our Approach',
      description: 'Personalized service, detailed case analysis, and full support from initial consultation to successful relocation.',
    },
    {
      icon: Globe2,
      title: 'Our Expertise',
      description: '5+ years of experience, 500+ successful cases, partnerships with government agencies and accelerators.',
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t('nav.about')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Relosafe is your trusted partner in obtaining residence permits and relocating to Europe and America
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Why Choose Relosafe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Transparency</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Clear pricing, honest timelines, and no hidden fees
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Expertise</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Deep knowledge of immigration law and practical relocation experience
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Support</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Full support before, during, and after the relocation process
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
