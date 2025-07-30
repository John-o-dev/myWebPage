import Link from 'next/link';
import styles from './logo.module.css';

type Props = {
  link?: string;
};

export default function Logo({ link }: Props) {
  const href = link || '/';

  return (
    <Link href={href}>
      <a className={styles.logo}>
        <span>J</span>ohn<span>&nbsp;O</span>'<span>D</span>ev
      </a>
    </Link>
  );
}
