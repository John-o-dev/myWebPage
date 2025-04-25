import { useRouter } from 'next/router';
import useTranslation from '../hooks/useTranslation';

export default function useHandleLocaleChange() {
  const { setLocale, locales } = useTranslation();
  const { asPath, pathname, push } = useRouter();

  return (language: string) => {
    if (typeof window === 'undefined') return;

    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    setLocale(language);

    push(asPath.replace(regex, `/${language}`));
  };
}
