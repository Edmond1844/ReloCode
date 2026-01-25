import { Link } from 'react-router-dom';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTheme } from '@/app/contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/services', label: t('nav.services') },
    { to: '/countries', label: t('nav.countries') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/videos', label: t('nav.videos') },
    { to: '/about', label: t('nav.about') },
    { to: '/contacts', label: t('nav.contacts') },
    { to: '/documents', label: t('nav.documents') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur dark:bg-slate-900/95 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ReloCode
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild>
              <Link to="/consultation">{t('cta.consultation')}</Link>
            </Button>

            <div className="flex items-center gap-1 border rounded-lg p-1 dark:border-slate-700">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'ru'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                RU
              </button>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t dark:border-slate-700">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t dark:border-slate-700 flex flex-col gap-4">
                <Button asChild>
                  <Link to="/consultation" onClick={() => setMobileMenuOpen(false)}>
                    {t('cta.consultation')}
                  </Link>
                </Button>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 border rounded-lg p-1 dark:border-slate-700">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        language === 'en'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage('ru')}
                      className={`px-3 py-1 text-sm rounded transition-colors ${
                        language === 'ru'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      RU
                    </button>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? (
                      <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    ) : (
                      <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                    )}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
