import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'umarhashmi.dev',
    href: 'https://www.umarhashmi.dev',
  },
  {
    social: 'email',
    link: 'contact@umarhashmi.dev',
    href: 'mailto:contact@umarhashmi.dev',
  },
  {
    social: 'github',
    link: 'umarhashmi-dev',
    href: 'https://github.com/umarhashmi-dev',
  },
  {
    social: 'linkedin',
    link: 'umarhashmi-dev',
    href: 'https://www.linkedin.com/in/umarhashmi-dev',
  },
  {
    social: 'twitter',
    link: 'umarhashmi_dev',
    href: 'https://x.com/umarhashmi_dev/',
  },
  {
    social: 'instagram',
    link: 'umarhashmi.dev',
    href: 'https://www.instagram.com/umarhashmi.dev/',
  },
  {
    social: 'facebook',
    link: 'umarhashmi.dev',
    href: 'https://www.facebook.com/umarhashmi.dev',
  },
  {
    social: 'whatsapp',
    link: '+923021550385',
    href: 'https://wa.me/923021550385',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
