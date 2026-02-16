import { useLanguage } from "@/app/contexts/LanguageContext";
import { Title } from '@/app/pages/Titles/Title';

export function ForWhom() {
    const { t } = useLanguage();
    return (
        <>
            <div>
                <Title title="forwhom.title"/>
            </div>
        </>
    )
}