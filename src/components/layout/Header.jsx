import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSiteNav from '../../hooks/useSiteNav';
import { NAV_LINKS } from '../../data/siteData';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const go = useSiteNav();
  const [activeHash, setActiveHash] = useState('#home');
  const activeLink = pathname === '/' ? activeHash : pathname;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    if (href.startsWith('#')) setActiveHash(href);
    setMenuOpen(false);
    go(href);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="/" className={styles.logo} onClick={(e) => { e.preventDefault(); handleNav('#home'); }}>
          <img src="/logo.webp" alt="Qudrat" className={styles.logoImg} />
          <span className={styles.logoText}>QUDRAT</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`${styles.navLink} ${activeLink === link.href ? styles.active : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.headerRight}>
          <a href="tel:+992666555555" className={styles.phone}>
            +992 666 555 555
          </a>
          <button className={`btn btn-primary ${styles.ctaBtn}`} onClick={() => handleNav('#contacts')}>
            Связаться
          </button>
        </div>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className={`${styles.mobileLink} ${activeLink === link.href ? styles.active : ''}`}
          >
            {link.label}
          </button>
        ))}
        <a href="tel:+992666555555" className={styles.mobilePhone}>
          +992 666 555 555
        </a>
      </div>
    </header>
  );
}
