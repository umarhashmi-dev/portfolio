import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.css';
import '@/styles/themes.css';

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
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Head title={`Umar Hashmi | ${pageProps.title} `} />
      <Component {...pageProps} />
    </Layout>
  );
}


