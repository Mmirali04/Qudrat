import { useEffect, useRef } from 'react';
import useSiteNav from '../../hooks/useSiteNav';
import styles from './Hero.module.css';

const SLIDES = [
  {
    bg: '/hero/hero-1.webp',
    tag: 'Умные жилые комплексы',
    title: 'Строим будущее\nДушанбе',
    subtitle: 'QUDRAT — застройщик нового поколения. Современные SmartHome комплексы, надёжные инвестиции, горнодобывающие проекты.',
  },
  {
    bg: '/hero/hero-2.webp',
    tag: 'Инвестиции в недвижимость',
    title: 'Доходность\nдо 18% годовых',
    subtitle: 'Три инвестиционных программы: покупка квартир, долевое участие, коммерческая недвижимость.',
  },
  {
    bg: '/hero/hero-3.png',
    tag: '15 лет на рынке',
    title: 'Надёжность\nпроверена временем',
    subtitle: 'Более 2000 квартир сданы в эксплуатацию. 12 завершённых проектов. 100% выполнение обязательств.',
  },
];

export default function Hero() {
  const [current, setCurrent] = React.useState(0);
  const intervalRef = useRef(null);
  const go = useSiteNav();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    setCurrent(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
  };

  const slide = SLIDES[current];

  return (
    <section id="home" className={styles.hero}>
      {/* Background */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`${styles.bg} ${i === current ? styles.bgActive : ''}`}
          style={{ backgroundImage: `url(${s.bg})` }}
        />
      ))}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock} key={current}>
          <span className={styles.tag}>{slide.tag}</span>
          <h1 className={styles.title}>
            {slide.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className={styles.subtitle}>{slide.subtitle}</p>
          <div className={styles.ctas}>
            <button
              className="btn btn-light"
              onClick={() => go('/projects')}
            >
              Смотреть проекты
            </button>
            <button
              className="btn btn-glass"
              onClick={() => document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className={styles.indicators}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>Листайте вниз</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

// Need React import since we use useState outside the top scope
import React from 'react';
