import { useLanguage } from "@/app/contexts/LanguageContext";
import { ServicePageIntro } from "../ServicePageIntro/ServicePageIntro";

export function StartupVisa() {
	const { t } = useLanguage();

	return (
		<div>
			<ServicePageIntro title={t("services.startup")}/>
		</div>
	);
}


