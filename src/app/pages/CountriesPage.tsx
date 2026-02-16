import { Link } from 'react-router-dom';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { MapPin } from 'lucide-react';

import { Title } from '@/app/pages/Titles/Title';

import { countries } from '../../data/data';


export function CountriesPage() {
  const { t } = useLanguage();

  const processedCountries = countries.map(country => ({
    name: t(country.name),
      flag: t(country.description),
      description: t(country.description),
      url: country.url,
      programs: country.programs.map(program => t(program)),
  }));
  
  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title title="countries.title" text="countries.subtitle"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processedCountries.map((country, index) => (
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
                <Link to={`/countries/${country.url}`}>
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    {t('cta.learnmore')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
