import { useRouter } from 'next/router';
import styles from './header.module.css'

// import Navigation from '../Navigation';
// import Logo from '../Logo';
import useTranslation from '../../hooks/useTranslation';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Header({ className, children }: Props) {
  const headerClass = className || 'header';
  const { setLocale, locales } = useTranslation();
  const { asPath, pathname, push, route } = useRouter();

  function handleLocaleChange(language: string) {
    if (!window) {
      return;
    }

    const regex = new RegExp(`^/(${locales.join('|')})`);
    localStorage.setItem('lang', language);
    setLocale(language);

    if (!route.includes('post/')) {
      push(pathname, asPath.replace(regex, `/${language}`));
    }
  }

  return (
    // <header className={headerClass}>
    //   <nav className={styles.navbar}>
    //     <div className="logo"><span>J</span>ohn <span>O</span>'<span>D</span>ev</div>
		// 		<ul className={styles.navbar_list}>

		// 			<li className="navbar-item">
		// 				<button className={styles.navbar_link} data-nav-link>Página Inicial</button>
		// 			</li>

		// 			<li className="navbar-item">
		// 				<button className={styles.navbar_link} data-nav-link>Sobre</button>
		// 			</li>

		// 			<li className="navbar-item">
		// 				<button className={styles.navbar_link} data-nav-link>Resumo</button>
		// 			</li>

		// 			<li className="navbar-item">
		// 				<button className={styles.navbar_link} data-nav-link>Portfólio</button>
		// 			</li>

		// 			<li className="navbar-item">
		// 				<button className={styles.navbar_link} data-nav-link>Blog</button>
		// 			</li>

		// 			<li className="navbar-item">
		// 				<button className={styles.navbar_link} data-nav-link>Entre em Contato</button>
		// 			</li>
		// 		</ul>
    //     <div id="menu-icon" className="bx bx-menu"></div>
		// 	</nav>
    //   <div className="lang">
    //     {locales.map((locale) => (
    //       <button key={locale} onClick={() => handleLocaleChange(locale)}>
    //         {locale}
    //       </button>
    //     ))}
    //   </div>
    // </header>
    <header className={headerClass}>
      {/* <Logo link={`/`} /> */}
      {/* <Navigation /> */}
      {children}
      <div className="lang">
        {locales.map((locale) => (
          <button key={locale} onClick={() => handleLocaleChange(locale)}>
            {locale}
          </button>
        ))}
      </div>
    </header>
  );
}
