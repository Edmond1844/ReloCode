import { Link } from 'react-router-dom';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Check, Users, Briefcase, FileText, Globe, TrendingUp, Award, MapPin } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';


import { targetAudience, servicesBase, countries } from '../../data/data';


export function HomePage() {
    const { t } = useLanguage();
    const benefitsByAudience   = targetAudience.map(targetItem => ({
      title: t(targetItem.title),           
      subTitle: t(targetItem.subTitle), 
      image: targetItem.image,
      benefits: targetItem.benefits.map(benefit => t(benefit)),
      url: targetItem.url,
    }));

    const services = servicesBase.map(service => ({
      icon: service.icon,
      title: t(service.title),           
      description: t(service.description), 
      details: t(service.details),   
      url: service.url,
    }));  
  
    const processedCountries = countries.map(country => ({
      name: t(country.name),
      flag: t(country.description),
      description: t(country.description),
      url: country.url,
    }));



  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  {t('cta.consultation')}
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  {t('cta.question')}
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1691314690862-a2b8d3fb99a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjBjaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODI4NTc2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Europe city"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            {t('about.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[t('about.desc1'), t('about.desc2'), t('about.desc3')].map((desc, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            {t('whofor.title')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefitsByAudience.map((item, index) => (
              <Card key={index}>
                <CardHeader> 
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt="Startup entrepreneur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>{t('whofor.professionals.title')}</CardTitle>
                  <CardDescription className="text-base">
                    <strong>Digital Nomad {t('whofor.professionals.subtitle')}</strong>
                    <br />
                    {t('whofor.professionals.desc')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link className="w-full"to={`/services/${item.url}/`} >
                    <Button >{t('cta.learnmore')}</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link className="w-full" to={`/services/${service.url}/`}>
                      <Button variant="outline" className="w-full">
                        {t('cta.consultation')}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
            {t('countries.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processedCountries.map((country, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{country.flag}</div>
                </CardHeader>
                <CardContent>
                  <CardTitle>{country.name}</CardTitle>
                  <CardDescription>{country.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={`/countries/${country.url}/`}>
                    <Button variant="outline" className="w-full">
                      <MapPin className="w-4 h-4 mr-2" />
                        {t('cta.programs')}
                    </Button>
                  </Link>

                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              {t('videos.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('videos.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg">
              {t('cta.watchall')}
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            {t('trust.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">{t('trust.experience')}</div>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">{t('trust.approval')}</div>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-white/10 rounded-full mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">{t('trust.cases')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
