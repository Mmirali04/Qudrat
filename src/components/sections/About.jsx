import styles from './About.module.css';

const TIMELINE = [
  { year: '2010', text: 'Основание компании QUDRAT LLC в Душанбе' },
  { year: '2013', text: 'Сдача первого жилого комплекса на 200+ квартир' },
  { year: '2017', text: 'Получение лицензии на горнодобывающую деятельность (MPIT #0000031)' },
  { year: '2019', text: 'Запуск программы Smart Home в новых объектах' },
  { year: '2022', text: 'Превысили отметку в 2000 сданных квартир' },
  { year: '2024', text: 'Запуск инвестиционных программ для частных инвесторов' },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Image stack */}
          <div className={styles.imageBlock}>
            <div className={styles.imgMain}>
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="QUDRAT офис"
              />
            </div>
            <div className={styles.imgSecondary}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                alt="QUDRAT строительство"
              />
            </div>
            <div className={styles.yearsBadge}>
              <span className={styles.yearsNum}>15</span>
              <span className={styles.yearsText}>лет<br />опыта</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles.content}>
            <p className={styles.sectionTag}>О компании</p>
            <h2 className="section-title">
              Строим с заботой <span className="gold-text">о будущем</span>
            </h2>
            <div className="divider" />
            <p className={styles.text}>
              QUDRAT LLC — ведущий застройщик и горнодобывающая компания Таджикистана.
              С 2010 года мы реализуем проекты, которые меняют облик Душанбе и улучшают
              качество жизни тысяч семей.
            </p>
            <p className={styles.text}>
              Мы используем передовые технологии Smart Home, строим энергоэффективные здания
              и создаём комфортную городскую среду. Каждый наш проект — это долгосрочная
              инвестиция в качество жизни.
            </p>

            <div className={styles.perks}>
              {[
                { icon: '🏗', label: 'Полный цикл строительства' },
                { icon: '📱', label: 'Smart Home технологии' },
                { icon: '⚖️', label: 'Юридическая прозрачность' },
                { icon: '💎', label: 'Премиальное качество' },
              ].map((perk) => (
                <div key={perk.label} className={styles.perk}>
                  <span className={styles.perkIcon}>{perk.icon}</span>
                  <span className={styles.perkLabel}>{perk.label}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-primary">
              Скачать презентацию
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <h3 className={styles.timelineTitle}>История компании</h3>
          <div className={styles.timelineItems}>
            {TIMELINE.map((item, i) => (
              <div key={item.year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineText}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
