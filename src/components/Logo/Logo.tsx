import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

// type LogoProps = {
//   children: React.ReactNode;
// };

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <TimerIcon />
        Chronos
      </a>
    </div>
  );
};
