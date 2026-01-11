import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';
import Script from 'next/script';

const ContactPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Umar Hashmi",
      "email": "umarhashmi1999@gmail.com",
      "telephone": "+923021550385",
      "url": "https://umarhashmi.dev/contact"
    }
  };

  return (
    <div className={styles.layout}>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Feel free to reach out to me through any of the social platforms below.
        I&apos;m always open to new opportunities and connections.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
