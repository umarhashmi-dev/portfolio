import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
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
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Umar Hashmi',
};
