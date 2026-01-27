
import { useLanguage } from "@/app/contexts/LanguageContext";
import { ServicePageIntro } from "../ServicePageIntro/ServicePageIntro";

export function Documents() {
    const { t } = useLanguage();
    return (
        <div>
            <ServicePageIntro title={t("services.documents")}/>
        </div>
    );
}