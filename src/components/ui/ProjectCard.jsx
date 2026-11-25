import styles from './ProjectCard.module.css';

const STATUS_COLORS = {
  'В продаже': '#22c55e',
  'Строится': '#f59e0b',
  'Проект': '#60a5fa',
  'Планируется': '#a855f7',
  'Готов': '#6F6A65',
};

export default function ProjectCard({ project, onClick }) {
  return (
    <article className={styles.card} onClick={onClick}>
      <div className={styles.img}>
        <img src={project.image} alt={project.name} loading="lazy" />
        <span
          className={styles.status}
          style={{ '--status-color': STATUS_COLORS[project.status] || '#6F6A65' }}
        >
          {project.status}
        </span>
        <span className={styles.type}>{project.type}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.loc}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          {project.location}
        </p>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.desc}>{project.description}</p>
        <dl className={styles.stats}>
          {project.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
        <span className={styles.more}>
          Подробнее
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </article>
  );
}
