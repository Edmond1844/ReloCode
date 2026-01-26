import { Link } from 'react-router-dom';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Youtube, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';


export function Footer() {
  const { t } = useLanguage();

  const navFooterLinksServices = [
  { to: '/services/digital-nomad', label: t('footer.links.digitalnomad') }, // для всех сдеалть 2 страницы смотри в архиологии подробнее 
  { to: '/services/startup', label: t('footer.links.startup') },
  { to: '/services/consultation', label: t('footer.links.consultation') },
  { to: '/documents', label: t('footer.links.documents') },
  ];

  const navFooterLinksVideos = [
    { to: '/videos', label: t('footer.links.videos') },
  ];

  const styleForLink = 'text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors';


  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              ReloCode
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t('about.desc1')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2">
              {navFooterLinksServices.map(linkFooterServices => (
                <li key={linkFooterServices.to}>
                  <Link
                  to={linkFooterServices.to}
                  className={styleForLink}
                  >
                    {linkFooterServices.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
              {t('nav.videos')}
            </h4>
              <a
                href="#"
                className={`${styleForLink} inline-flex items-center gap-2`}
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </a>
              <ul className="space-y-2"> 
                {navFooterLinksVideos.map(linkFooterVideos => (
                  <li key={linkFooterVideos.to}>
                    <Link
                      to={linkFooterVideos.to}
                      className={styleForLink}
                    >
                      {linkFooterVideos.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          {/* Contact Buttons */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
              {t('nav.contacts')}
            </h4>
            <div className="space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <a href="#" className="inline-flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="#" className="inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t dark:border-slate-700">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
