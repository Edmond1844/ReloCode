import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ServicesPage } from '@/app/pages/ServicesPage';
import { Service } from '@/app/pages/Service/Service';
import { CountriesPage } from '@/app/pages/CountriesPage';
import { Countrie } from '@/app/pages/Countrie/Countrie';
import { BlogPage } from '@/app/pages/BlogPage';
import { VideosPage } from '@/app/pages/VideosPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ContactsPage } from '@/app/pages/ContactsPage';
import { DocumentsPage } from '@/app/pages/DocumentsPage';
import { ForWhom } from "@/app/pages/forWhom/ForWhom";
import { ForWhomCard } from "@/app/pages/forWhom/ForWhomCard";


export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
            <Header />
            <main className='flex-1'>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<Service />} />
                <Route path="/countries" element={<CountriesPage />} />
                <Route path="/countries/:slug" element={<Countrie />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPage />} />
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/consultation" element={<ContactsPage />} />
                <Route path="/documents" element={<DocumentsPage />} />
                <Route path='/forwhom' element={<ForWhom/>}/>
                <Route path='/forwhom/:slug' element={<ForWhomCard/>}/>
              </Routes>
            </main>
            <Footer className='flex-shrink-0'/>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
