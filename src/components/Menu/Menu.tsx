import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

// type MenuProps = {
//   children: React.ReactNode;
// };

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <a className={styles.menuLink} href='#'>
        <TimerIcon />
        Chronos
      </a>
    </div>
  );
};
