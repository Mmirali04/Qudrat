import { useEffect, useRef, useState } from 'react';
import { STATS } from '../../data/siteData';
import styles from './Stats.module.css';

function useCountUp(end, duration = 2000, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const numeric = parseInt(end.replace(/\D/g, ''));
    const suffix = end.replace(/[\d]/g, '');
    if (!numeric) { setCount(end); return; }

    let start = 0;
    const step = numeric / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numeric) {
        setCount(numeric + suffix);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start) + suffix);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return count;
}

function StatItem({ value, label, started }) {
  const count = useCountUp(value, 1800, started);
  return (
    <div className={styles.statItem}>
      <span className={styles.statValue}>{started ? count : '0'}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} ref={ref}>
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.grid}>
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} started={started} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
