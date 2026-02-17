import { useLanguage } from '@/app/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

import { articles } from '../../data/data';
import { Title } from '@/app/pages/Titles/Title';



export function BlogPage() {
  const { t } = useLanguage();
      const processedArticles  = articles.map(article  => ({
        title: t(article.title),           
        excerpt: t(article.excerpt), 
        category: t(article.category),
        date: article.date, 
        url: article.url,
      }));  

  return (
    <div className="py-16 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="nav.blog" text="blog.subtitle"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processedArticles.map((article, index) => (
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
                <Link 
                  to={`/blog/${article.url}`}
                  className="w-full flex items-center justify-between group"
                >
                  <button>
                    {t('blog.card.button')}
                  </button>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
