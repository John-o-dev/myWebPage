import { AppPropsType } from 'next/dist/shared/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '../contexts/LanguageContext';
// import Loader from '../components/Loader';

import '../styles/global.css';

export default function App({ Component, pageProps, router }: AppPropsType) {
  return (
    <>
      {/* {Loader()} */}
      <LanguageProvider>
        <Component {...pageProps} key={router.route} />
      </LanguageProvider>
      <Analytics />
    </>
  );
}
