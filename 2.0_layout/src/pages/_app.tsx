import type { AppProps } from 'next/app'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Inter, Sora } from 'next/font/google'
import Loader from '@/components/Loader/loader';
import NavSpinner from '@/components/NavSpinner/navSpinner';
import "../styles/globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [bootRunId] = useState(0);
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    const start = () => setNavigating(true);
    const done = () => setNavigating(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, [router]);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-sora: ${sora.style.fontFamily};
        }
      `}</style>
      <main className={`${inter.variable} ${sora.variable}`}>
        <Loader runId={bootRunId} />
        <NavSpinner show={navigating} />
        <Component {...pageProps} />
      </main>
    </>
  )
}
