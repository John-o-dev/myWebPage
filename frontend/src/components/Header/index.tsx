
import Navbar from '../Navbar';

import styles from './header.module.css'

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Header({ className, children }: Props) {
  return (
    <header className={styles.headerClass}>
      <Navbar />
      {children}
    </header>
  );
}
