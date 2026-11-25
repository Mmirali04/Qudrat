import { NAV_LINKS, CONTACT } from '../../data/siteData';
import styles from './Footer.module.css';
import useSiteNav from '../../hooks/useSiteNav';

export default function Footer() {
  const year = new Date().getFullYear();
  const go = useSiteNav();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="/logo.webp" alt="Qudrat" className={styles.logoImg} />
            <span className={styles.logoText}>QUDRAT</span>
          </div>
          <p className={styles.brandDesc}>
            Ведущий застройщик и горнодобывающая компания Таджикистана.
            Строим будущее с 2010 года.
          </p>
          <div className={styles.licenses}>
            <span>Лицензия MPIT #0000031</span>
          </div>
        </div>

        {/* Nav */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Навигация</h4>
          <ul className={styles.colLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.colLink}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Услуги</h4>
          <ul className={styles.colLinks}>
            {['Строительство', 'Smart Home', 'Инвестиции', 'Горнодобыча', 'Дизайн-проект', 'Безопасность'].map((s) => (
              <li key={s}><span className={styles.colLink}>{s}</span></li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Контакты</h4>
          <ul className={styles.contactList}>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.17 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{CONTACT.address}</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>{CONTACT.workTime}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {year} QUDRAT LLC. Все права защищены.</p>
        <div className={styles.bottomLinks}>
          <a href="#" className={styles.bottomLink}>Политика конфиденциальности</a>
          <a href="#" className={styles.bottomLink}>Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  );
}
