import { INVESTMENT_PLANS } from '../../data/siteData';
import styles from './Investors.module.css';

export default function Investors() {
  return (
    <section id="investors" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.sectionTag}>Вложите и зарабатывайте</p>
          <h2 className="section-title">Инвестиционные <span className="gold-text">программы</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Прозрачные условия, юридическая защита, гарантированный доход. Инвестируйте в реальные объекты.
          </p>
        </div>

        <div className={styles.grid}>
          {INVESTMENT_PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className={styles.guarantee}>
          <div className={styles.guaranteeIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div>
            <h4 className={styles.guaranteeTitle}>100% выполнение обязательств</h4>
            <p className={styles.guaranteeText}>
              Более 15 лет QUDRAT своевременно выполняет все финансовые обязательства перед инвесторами.
              $2M+ привлечённых инвестиций. Юридически оформленные договоры.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  return (
    <div className={`${styles.card} ${plan.highlight ? styles.cardHighlight : ''}`}>
      {plan.highlight && <div className={styles.popularBadge}>Популярный</div>}
      <div className={styles.cardTop}>
        <h3 className={styles.planTitle}>{plan.title}</h3>
        <div className={styles.returnRate}>
          <span className={styles.returnValue}>{plan.return}</span>
          <span className={styles.returnPeriod}>{plan.period}</span>
        </div>
      </div>
      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f} className={styles.feature}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} ${styles.btn}`}>
        Узнать подробнее
      </button>
    </div>
  );
}
