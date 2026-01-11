import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
  VscEdit,
  VscTools,
  VscBriefcase,
} from 'react-icons/vsc';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/' },
  { Icon: VscGithubAlt, path: '/github' },
  { Icon: VscCode, path: '/projects' },
  { Icon: VscEdit, path: '/articles' },
  { Icon: VscTools, path: '/technologies' },
  { Icon: VscBriefcase, path: '/services' },
  { Icon: VscMail, path: '/contact' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/about' },
  { Icon: VscSettings, path: '/settings' },
];

const socialItems = [
  {
    Icon: FaWhatsapp,
    href: 'https://wa.me/923021550385',
  },
  {
    Icon: FaInstagram,
    href: 'https://www.instagram.com/umarhashmi.dev/',
  },
  {
    Icon: FaFacebook,
    href: 'https://www.facebook.com/umarhashmi.dev',
  },
  {
    Icon: SiThreads,
    href: 'https://www.threads.com/@umarhashmi.dev',
  },
  {
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/umarhashmi-dev',
  },
  {
    Icon: FaTwitter,
    href: 'https://x.com/umarhashmi_dev/',
  },
  {
    Icon: VscGithubAlt,
    href: 'https://github.com/umarhashmi-dev',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${router.pathname === path && styles.active
                }`}
            >
              <Icon
                size={24}
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {socialItems.map(({ Icon, href }) => (
          <div className={styles.iconContainer} key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon
                size={24}
                fill="rgb(106, 115, 125)"
                className={styles.icon}
              />
            </a>
          </div>
        ))}
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                size={24}
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
