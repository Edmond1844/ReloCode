import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ServicesPage } from '@/app/pages/ServicesPage';
import { CountriesPage } from '@/app/pages/CountriesPage';
import { BlogPage } from '@/app/pages/BlogPage';
import { VideosPage } from '@/app/pages/VideosPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ContactsPage } from '@/app/pages/ContactsPage';
import { DocumentsPage } from '@/app/pages/DocumentsPage';

// Имрорты услуги сервиса
import {ResidencePermit} from "@/app/ourServicesPages/ResidencePermit/ResidencePermit";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/countries" element={<CountriesPage />} />
                <Route path="/blog::slug" element={<BlogPage />} />
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/consultation" element={<ContactsPage />} />
                <Route path="/documents" element={<DocumentsPage />} />
                <Route path="/services/digital-nomad" element={<ResidencePermit />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
