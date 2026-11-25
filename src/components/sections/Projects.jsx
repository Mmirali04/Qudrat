import { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import useSiteNav from '../../hooks/useSiteNav';
import { FEATURED_PROJECTS, PROJECT_CATEGORIES } from '../../data/projectsData';
import styles from './Projects.module.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const go = useSiteNav();

  const filtered = activeCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.sectionTag}>Наши объекты</p>
            <h2 className="section-title">Проекты <span className="gold-text">QUDRAT</span></h2>
            <div className="divider" />
            <p className="section-subtitle">
              Жилые комплексы, коммерческие объекты и горнодобывающие проекты в Таджикистане.
            </p>
          </div>
        </div>

        <div className={styles.filters}>
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} onClick={() => go('/projects')} />
          ))}
        </div>

        <div className={styles.viewAll}>
          <button className="btn btn-outline" onClick={() => go('/projects')}>Все проекты и квартиры</button>
        </div>
      </div>
    </section>
  );
}
