import { useLanguage } from '@/app/contexts/LanguageContext';
import { Play } from 'lucide-react';

export function VideosPage() {
  const { t } = useLanguage();

  const videos = [
    { title: 'Digital Nomad Visa Spain: Complete Guide', duration: '12:34' },
    { title: 'Startup Visa Requirements and Process', duration: '15:22' },
    { title: 'Living in Barcelona as a Digital Nomad', duration: '18:45' },
    { title: 'Tax Residency Explained', duration: '10:12' },
    { title: 'Family Relocation Tips', duration: '14:56' },
    { title: 'Document Checklist for Spain Visa', duration: '8:30' },
  ];

  return (
    <div className="py-16 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {t('videos.title')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('videos.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
