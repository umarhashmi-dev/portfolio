import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.css';
import '@/styles/themes.css';

import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isCVPage = router.pathname === '/cv';

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  if (isCVPage) {
    return (
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    );
  }

  return (
    <Layout>
      <Head title={`Umar Hashmi | ${pageProps.title} `} />
      <Script src="//code.tidio.co/fbdrtd1bgclkrqsd0jnng1y2ygncz1am.js" strategy="lazyOnload" />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
