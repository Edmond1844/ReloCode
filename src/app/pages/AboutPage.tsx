import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent } from '@/app/components/ui/card';
import { Target, Users, Award, Globe2 } from 'lucide-react';

import { values } from '../../data/data';
import { Title } from '@/app/pages/Titles/Title';


export function AboutPage() {
  const { t } = useLanguage();
  const processedValues = values.map(value => ({
    id: value.id,
    icon: value.icon,
    title: t(value.title),
    description: t(value.description),
  }));

  return (
    <div className="py-16 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="about.title" text={"about.subtitle"}/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processedValues.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.id}>
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
            {t('about.whyChoose.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{t('about.whyChoose.items.transparency.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('about.whyChoose.items.transparency.description')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{t('about.whyChoose.items.expertise.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('about.whyChoose.items.expertise.description')}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{t('about.whyChoose.items.support.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('about.whyChoose.items.support.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
