
import { useParams } from "react-router-dom";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { targetAudience } from "../../../data/data";

export function ForWhomCard() {
    const { slug } = useParams();
	const { t } = useLanguage();
	const currentAudience  = targetAudience.find((c) => c.url === slug);

    return (
        <>
            <div>
                <p>{t(currentAudience.title)}</p>
            </div>
        </>
    );
}