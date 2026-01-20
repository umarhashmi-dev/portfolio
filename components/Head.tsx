import Head from 'next/head';
import { useRouter } from 'next/router';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  const router = useRouter();
  const canonicalUrl = `https://www.umarhashmi.dev${router.asPath === '/' ? '' : router.asPath}`.split('?')[0];

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="I’m a Full-Stack Web Developer, UI/UX Designer, and Database Expert with 6+ years of experience building modern, fast, and intelligent web solutions."
      />
      <meta
        name="keywords"
        content="umar hashmi, umar, hashmi, web developer portfolio, umar web developer, umar developer, mern stack, umar hashmi portfolio, vscode-portfolio, full stack developer"
      />
      <meta property="og:title" content="Umar Hashmi's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="google-site-verification" content="FGI7BwfcS4csirQc6iGDSbtvjYjVPWuYEuVW5GxxlJ4" />
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Umar Hashmi',
};
