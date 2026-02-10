
import { useParams } from "react-router-dom";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { countries } from "../../../data/data";

export function Countrie() {
    const { slug } = useParams();
	const { t } = useLanguage();
	const currentCountrie = countries.find((c) => c.url === slug);

    return (
        <div>
            <p>{t(currentCountrie.name)}</p>
        </div>
    );
}