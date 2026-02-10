
import { useParams } from "react-router-dom";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { servicesBase } from "../../../data/data";

import styles from "./Service.module.css";

export function Service() {
		const { slug } = useParams();
		const { t } = useLanguage();
		const currentService = servicesBase.find((s) => s.url === slug);
	
		return (
			<div className={styles.service}>
				<h2 className={styles.service__title}>{t(currentService.title)}</h2>
				<p className={styles.service__description}>
					{t(currentService.description)}
				</p>
			</div>
		);
}

