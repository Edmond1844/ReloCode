import { useLanguage } from '@/app/contexts/LanguageContext';

export function Title({ title, text }) {
    const { t } = useLanguage();

    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {t(title)}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t(text)}</p>
        </div>

    );
}
