import { SERVICES } from '../../data/siteData';
import styles from './Services.module.css';

const ICONS = {
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4M9 7h2M13 7h2M9 11h2M13 11h2"/>
    </svg>
  ),
  smart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
  invest: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/>
      <circle cx="12" cy="12" r="6"/>
      <path d="M12 8v4l3 3"/>
    </svg>
  ),
  mining: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 20h20M4 20V10l8-7 8 7v10M10 20v-5h4v5"/>
      <path d="M12 7v3M9 10h6"/>
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.sectionTag}>Что мы делаем</p>
            <h2 className="section-title">Наши <span className="gold-text">услуги</span></h2>
            <div className="divider" />
            <p className="section-subtitle">
              Полный цикл услуг — от проектирования и строительства до управления активами и добычи ресурсов.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <div key={service.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.iconWrap}>
                {ICONS[service.icon]}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <button className={styles.link}>
                Узнать больше
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
