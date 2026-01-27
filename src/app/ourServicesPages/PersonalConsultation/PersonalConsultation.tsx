
import { useLanguage } from "@/app/contexts/LanguageContext";
import { ServicePageIntro } from "../ServicePageIntro/ServicePageIntro";

export function PersonalConsultation() {
    const { t } = useLanguage();
    return (
        <div>
            <ServicePageIntro title={t("services.consultation")}/>
        </div>
    );
}