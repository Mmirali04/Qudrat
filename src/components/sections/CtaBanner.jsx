import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.banner}>
      <div
        className={styles.bg}
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80)' }}
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>
          Готовы инвестировать в своё<br />
          <span className={styles.gold}>будущее?</span>
        </h2>
        <p className={styles.subtitle}>
          Оставьте заявку — наш менеджер свяжется с вами и расскажет о всех доступных объектах и программах.
        </p>
        <div className={styles.btns}>
          <button
            className="btn btn-light"
            onClick={() => document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Оставить заявку
          </button>
          <a href="tel:+992666555555" className="btn btn-glass">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.17 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            +992 666 555 555
          </a>
        </div>
      </div>
    </section>
  );
}
