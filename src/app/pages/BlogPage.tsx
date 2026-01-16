import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const { t } = useLanguage();

  const articles = [
    {
      title: 'Complete Guide to Digital Nomad Visa in Spain',
      excerpt: 'Everything you need to know about the Spain Digital Nomad visa - requirements, process, and timeline.',
      date: '2024-01-10',
      category: 'Spain',
    },
    {
      title: 'Startup Visa vs Digital Nomad: Which is Right for You?',
      excerpt: 'Compare the key differences between startup and digital nomad visas to make the right choice.',
      date: '2024-01-08',
      category: 'Guides',
    },
    {
      title: 'Tax Benefits of Portuguese D7 Visa',
      excerpt: 'Learn about the NHR tax regime and other financial benefits available to D7 visa holders.',
      date: '2024-01-05',
      category: 'Portugal',
    },
    {
      title: 'Moving to Germany as a Freelancer: Complete Checklist',
      excerpt: 'Step-by-step guide to relocating to Germany on a freelance visa, including required documents.',
      date: '2024-01-03',
      category: 'Germany',
    },
    {
      title: 'Family Relocation: Bringing Your Spouse and Children',
      excerpt: 'How to include family members in your residence permit application and what documents you need.',
      date: '2023-12-28',
      category: 'Guides',
    },
    {
      title: 'Life in Spain: First Month Essentials',
      excerpt: 'What to expect and how to settle in during your first month living in Spain.',
      date: '2023-12-25',
      category: 'Spain',
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t('nav.blog')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Expert insights and guides on relocation and residence permits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <time>{article.date}</time>
                  <span className="ml-auto px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button variant="ghost" className="w-full justify-between">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
