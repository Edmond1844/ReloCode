
import { useParams } from "react-router-dom";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { articles } from "../../../data/data";

export function CardBlog() {
    const { slug } = useParams();
	const { t } = useLanguage();
	const currentArticles = articles.find((c) => c.url === slug);

    return (
        <div>
            <p>{t(currentArticles.title)}</p>
        </div>
    );
}