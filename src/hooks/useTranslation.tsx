import { useContext } from 'react';

import {
	LanguageContext,
	defaultLocale,
	locales,
} from '../contexts/LanguageContext';
import { en } from '../lib/locales/en';
import { pt } from '../lib/locales/pt';

const translations: Record<string, Record<string, Record<string, string>>> = { en, pt };

export default function useTranslation() {
	const [locale, setLocale] = useContext(LanguageContext);

	function t(component: string, key: string) {
		if (!translations[locale]?.[component]?.[key]) {
			console.warn(`No string '${key}' for locale '${locale}'`);
		}
		return translations[locale]?.[component]?.[key] || translations[defaultLocale]?.[component]?.[key] || ''

	}

	return { t, locale, setLocale, locales };
}
