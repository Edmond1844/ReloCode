import { useParams } from "react-router-dom";
import styles from "./Service.module.css";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { servicesBase } from "../../../data/data";

export function Service() {
	const { slug } = useParams();
	const service = servicesBase.find((s) => s.url === slug);

	const { t } = useLanguage();

	return (
		<div className={styles.service}>
			<h2 className={styles.service__title}>{t(service.title)}</h2>
			<p className={styles.service__description}>
				{t(service.description)}
			</p>
		</div>
	);
}
