import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { IconType } from 'react-icons';

import styles from '@/styles/Tab.module.css';

interface TabProps {
  icon: string;
  filename: string;
  path: string;
  ReactIcon?: IconType;
}

const Tab = ({ icon, filename, path, ReactIcon }: TabProps) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        {ReactIcon ? (
          <ReactIcon className={styles.icon} size={18} />
        ) : (
          <Image src={icon} alt={filename} height={18} width={18} />
        )}
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
