import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { MapPin } from 'lucide-react';

export function CountriesPage() {
  const { t } = useLanguage();

  const countries = [
    {
      name: t('countries.spain'),
      flag: '🇪🇸',
      description: t('countries.spain.desc'),
      programs: ['Digital Nomad Visa', 'Startup Visa', 'Non-Lucrative Residence'],
    },
    {
      name: t('countries.portugal'),
      flag: '🇵🇹',
      description: t('countries.portugal.desc'),
      programs: ['D7 Visa', 'Golden Visa', 'Digital Nomad Visa'],
    },
    {
      name: t('countries.france'),
      flag: '🇫🇷',
      description: t('countries.france.desc'),
      programs: ['Talent Passport', 'Auto-entrepreneur Visa', 'Tech Visa'],
    },
    {
      name: t('countries.germany'),
      flag: '🇩🇪',
      description: t('countries.germany.desc'),
      programs: ['Freelance Visa', 'Job Seeker Visa', 'Blue Card'],
    },
    {
      name: t('countries.usa'),
      flag: '🇺🇸',
      description: t('countries.usa.desc'),
      programs: ['O-1 Visa', 'EB-2 NIW', 'E-2 Visa'],
    },
  ];

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t('countries.title')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore residence permit programs across different countries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-6xl mb-4 text-center">{country.flag}</div>
                <CardTitle className="text-2xl text-center">{country.name}</CardTitle>
                <CardDescription className="text-center">{country.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-slate-700 dark:text-slate-300">
                    Available programs:
                  </p>
                  <ul className="space-y-1">
                    {country.programs.map((program, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  {t('cta.learnmore')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
