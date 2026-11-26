import { useEffect, useMemo, useState } from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import useSiteNav from '../hooks/useSiteNav';
import { CONTACT } from '../data/siteData';
import {
  PROJECTS_HERO, FLAGSHIP, PROJECT_CATEGORIES, FEATURED_PROJECTS,
  APARTMENTS, FINISH_LABELS, STATUS_LABELS, SORT_OPTIONS,
  PROGRESS, MASTER_PLAN, INFRASTRUCTURE, CAPABILITIES, PIPELINE, METRICS, ESG,
} from '../data/projectsData';
import styles from './ProjectsPage.module.css';

const fmt = (n) => new Intl.NumberFormat('ru-RU').format(Math.round(n));
const formatPrice = (price, currency) =>
  currency === 'USD' ? `$${fmt(price)}` : `${fmt(price)} сом.`;

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function ProjectsPage() {
  const [bookingApt, setBookingApt] = useState(null); // null = closed, {} = no apartment chosen

  useEffect(() => {
    document.title = 'Проекты — QUDRAT';
    return () => { document.title = 'QUDRAT — Строим будущее Таджикистана'; };
  }, []);

  return (
    <main className={styles.page}>
      <ProjectsHero />
      <Featured />
      <Catalog onBook={setBookingApt} />
      <Progress />
      <MasterPlan />
      <Infrastructure />
      <Capabilities />
      <Pipeline />
      <Metrics />
      <Esg />
      <FinalCta onBook={() => setBookingApt({})} />
      {bookingApt && <BookingModal apt={bookingApt} onClose={() => setBookingApt(null)} />}
    </main>
  );
}

/* ---------------- Hero ---------------- */

function ProjectsHero() {
  const h = PROJECTS_HERO;
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} style={{ backgroundImage: `url(${h.image})` }} />
      <div className={styles.heroOverlay} />
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <span className={styles.heroTag}>{h.eyebrow}</span>
          <h1 className={styles.heroTitle}>
            {h.titleLines.map((l) => <span key={l}>{l}<br /></span>)}
            <span className="gold-text">{h.titleAccent}</span>
          </h1>
          <p className={styles.heroSub}>{h.subtitle}</p>
          <div className={styles.heroCtas}>
            <button className="btn btn-light" onClick={() => scrollTo('featured')}>Смотреть проекты</button>
            <button className="btn btn-glass" onClick={() => scrollTo('catalog')}>Выбрать квартиру</button>
          </div>
        </div>

        <aside className={styles.flagship}>
          <div className={styles.flagshipImg}>
            <img src={FLAGSHIP.image} alt={FLAGSHIP.name} />
            <span className={styles.flagshipStatus}>{FLAGSHIP.status}</span>
          </div>
          <div className={styles.flagshipBody}>
            <p className={styles.flagshipLabel}>{FLAGSHIP.label}</p>
            <h3 className={styles.flagshipName}>{FLAGSHIP.name}</h3>
            <p className={styles.flagshipLoc}>{FLAGSHIP.location}</p>
            <div className={styles.flagshipFacts}>
              {FLAGSHIP.facts.map((f) => (
                <div key={f.label}>
                  <strong>{f.value}</strong>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
            <button className={`btn btn-primary ${styles.full}`} onClick={() => scrollTo('catalog')}>
              Выбрать квартиру
            </button>
          </div>
        </aside>
      </div>

      <div className={`container ${styles.kpis}`}>
        {h.kpis.map((k) => (
          <div key={k.label} className={styles.kpi}>
            <strong>{k.value}</strong>
            <span>{k.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Featured projects ---------------- */

function SectionHead({ badge, title, subtitle, center }) {
  return (
    <div className={`${styles.head} ${center ? styles.headCenter : ''}`}>
      <p className={styles.badge}>{badge}</p>
      <h2 className="section-title">{title}</h2>
      <div className={`divider ${center ? styles.dividerCenter : ''}`} />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

function Featured() {
  const go = useSiteNav();
  const [cat, setCat] = useState('all');
  const list = cat === 'all' ? FEATURED_PROJECTS : FEATURED_PROJECTS.filter((p) => p.category === cat);

  return (
    <section id="featured" className="section">
      <div className="container">
        <SectionHead
          badge="Актуальные проекты"
          title={<>Знаковые <span className="gold-text">объекты</span></>}
          subtitle="Масштабные жилые комплексы, коммерческая недвижимость и инфраструктурные проекты нового поколения."
        />
        <div className={styles.tabs}>
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`${styles.tab} ${cat === c.id ? styles.tabActive : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className={styles.projectGrid}>
          {list.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              onClick={() => {
                if (p.href) go(p.href);
                else scrollTo(p.slug === 'qudrat-city' ? 'catalog' : 'final-cta');
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Apartment catalog ---------------- */

const ROOM_OPTIONS = [1, 2, 3, 4];

function Catalog({ onBook }) {
  const [rooms, setRooms] = useState([]);
  const [finish, setFinish] = useState('any');
  const [status, setStatus] = useState('any');
  const [sort, setSort] = useState('rooms');

  const usd = APARTMENTS.filter((a) => a.currency === 'USD');
  const available = APARTMENTS.filter((a) => a.status === 'available');
  const minPrice = Math.min(...usd.map((a) => a.price));
  const maxPrice = Math.max(...usd.map((a) => a.price));
  const minArea = Math.min(...APARTMENTS.map((a) => a.area));

  const list = useMemo(() => {
    const res = APARTMENTS.filter((a) =>
      (rooms.length === 0 || rooms.includes(a.rooms)) &&
      (finish === 'any' || a.finish === finish) &&
      (status === 'any' || a.status === status));
    const by = {
      rooms: (a, b) => a.rooms - b.rooms || a.price - b.price,
      price_asc: (a, b) => a.price - b.price,
      price_desc: (a, b) => b.price - a.price,
      area_asc: (a, b) => a.area - b.area,
      area_desc: (a, b) => b.area - a.area,
      floor: (a, b) => a.floor - b.floor,
    }[sort];
    return [...res].sort(by);
  }, [rooms, finish, status, sort]);

  const toggleRoom = (r) =>
    setRooms((cur) => (cur.includes(r) ? cur.filter((x) => x !== r) : [...cur, r]));
  const reset = () => { setRooms([]); setFinish('any'); setStatus('any'); };

  return (
    <section id="catalog" className={`section ${styles.alt}`}>
      <div className="container">
        <SectionHead
          badge="QUDRAT CITY"
          title={<>Выберите свою <span className="gold-text">квартиру</span></>}
          subtitle="Премиальный жилой комплекс нового поколения в Душанбе"
        />

        <div className={styles.bar}>
          <div><strong>{available.length}</strong><span>доступных квартир</span></div>
          <div><strong>${fmt(minPrice)}</strong><span>цена от</span></div>
          <div><strong>${fmt(maxPrice)}</strong><span>до</span></div>
          <div><strong>{minArea} м²</strong><span>площадь от</span></div>
          <button className="btn btn-primary" onClick={() => onBook({})}>Забронировать</button>
        </div>

        <div className={styles.catalog}>
          <aside className={styles.filters}>
            <div className={styles.filtersHead}>
              <h3>Фильтры</h3>
              <button onClick={reset}>Сбросить</button>
            </div>

            <p className={styles.fLabel}>Комнат</p>
            <div className={styles.chips}>
              {ROOM_OPTIONS.map((r) => (
                <button
                  key={r}
                  className={`${styles.chip} ${rooms.includes(r) ? styles.chipActive : ''}`}
                  onClick={() => toggleRoom(r)}
                >
                  {r}
                </button>
              ))}
            </div>

            <label className={styles.fLabel} htmlFor="f-finish">Отделка</label>
            <select id="f-finish" className={styles.select} value={finish} onChange={(e) => setFinish(e.target.value)}>
              <option value="any">Любая</option>
              {Object.entries(FINISH_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>

            <label className={styles.fLabel} htmlFor="f-status">Статус</label>
            <select id="f-status" className={styles.select} value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="any">Любой</option>
              {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </aside>

          <div className={styles.results}>
            <div className={styles.resultsHead}>
              <p>Найдено <strong>{list.length}</strong> из {APARTMENTS.length} квартир</p>
              <select className={styles.select} value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Сортировка">
                {SORT_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
              </select>
            </div>

            {list.length === 0 ? (
              <div className={styles.empty}>
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить фильтры или <button onClick={reset}>сбросить все</button></p>
              </div>
            ) : (
              <div className={styles.aptGrid}>
                {list.map((a) => <AptCard key={a.id} apt={a} onBook={onBook} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function AptCard({ apt, onBook }) {
  const disabled = apt.status !== 'available';
  return (
    <article className={styles.apt}>
      <div className={styles.aptTop}>
        <span className={styles.aptRooms}>{apt.rooms}-комнатная</span>
        <span className={`${styles.aptStatus} ${styles['st_' + apt.status]}`}>{STATUS_LABELS[apt.status]}</span>
      </div>
      <div className={styles.aptPlan}>
        <svg viewBox="0 0 120 80" aria-hidden="true">
          <rect x="4" y="4" width="112" height="72" rx="2" />
          <path d="M60 4v40M4 44h56M60 30h56M86 30v46" />
        </svg>
        <span>Кв. {apt.number}</span>
      </div>
      <dl className={styles.aptSpecs}>
        <div><dt>Площадь</dt><dd>{apt.area} м²</dd></div>
        <div><dt>Этаж</dt><dd>{apt.floor}</dd></div>
        <div><dt>Отделка</dt><dd>{FINISH_LABELS[apt.finish]}</dd></div>
      </dl>
      <div className={styles.aptPrice}>
        <strong>{formatPrice(apt.price, apt.currency)}</strong>
        <span>{formatPrice(apt.price / apt.area, apt.currency)} / м²</span>
      </div>
      <button className={`btn btn-primary ${styles.full}`} disabled={disabled} onClick={() => onBook(apt)}>
        {disabled ? STATUS_LABELS[apt.status] : 'Забронировать'}
      </button>
    </article>
  );
}

/* ---------------- Construction progress ---------------- */

function Progress() {
  return (
    <section className="section">
      <div className={`container ${styles.progress}`}>
        <div>
          <SectionHead
            badge="Ход строительства"
            title={<>QUDRAT CITY <span className="gold-text">строится</span></>}
            subtitle="Следите за этапами возведения комплекса — мы регулярно публикуем отчёты о ходе работ."
          />
        </div>
        <div className={styles.progressCard}>
          <div className={styles.progressTop}>
            <span>Общая готовность</span>
            <strong>{PROGRESS.overall}%</strong>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${PROGRESS.overall}%` }} />
          </div>
          {PROGRESS.updates.map((u) => (
            <div key={u.date} className={styles.update}>
              <span className={styles.updateDate}>{u.date}</span>
              <h4>{u.title}</h4>
              <p>{u.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Master plan ---------------- */

function MasterPlan() {
  const m = MASTER_PLAN;
  return (
    <section className={`section ${styles.alt}`}>
      <div className="container">
        <SectionHead badge={m.badge} title={<>{m.title} <span className="gold-text">{m.titleAccent}</span></>} subtitle={m.subtitle} />
        <div className={styles.plan}>
          <div className={styles.planImg}>
            <img src={m.image} alt={`${m.title} ${m.titleAccent}`} loading="lazy" />
            <div className={styles.legend}>
              <p>Легенда</p>
              <ul>
                {m.zones.map((z) => (
                  <li key={z.label}><i style={{ background: z.color }} />{z.label}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.planSide}>
            <h3>Преимущества мастер-плана</h3>
            {m.advantages.map((a, i) => (
              <div key={a.title} className={styles.adv}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
            <div className={styles.planMetrics}>
              {m.metrics.map((x) => (
                <div key={x.label}><strong>{x.value}</strong><span>{x.label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Infrastructure ---------------- */

function Infrastructure() {
  const inf = INFRASTRUCTURE;
  return (
    <section className="section">
      <div className="container">
        <SectionHead badge={inf.badge} title={<>{inf.title} <span className="gold-text">{inf.titleAccent}</span></>} subtitle={inf.subtitle} />
        <div className={styles.infraGrid}>
          {inf.categories.map((c) => (
            <div key={c.label} className={styles.infraCard}>
              <span className={styles.infraIcon}>{c.icon}</span>
              <h4>{c.label}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.comfort}>
          <div>
            <p className={styles.badge}>Всё для комфорта</p>
            <h3>{inf.comfortTitle}</h3>
            <p>{inf.comfortDesc}</p>
          </div>
          <div className={styles.comfortStats}>
            {inf.stats.map((s) => (
              <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */

function Capabilities() {
  return (
    <section className={`section ${styles.alt}`}>
      <div className="container">
        <SectionHead badge="Наши возможности" title={<>Полный <span className="gold-text">цикл работ</span></>} />
        <div className={styles.capGrid}>
          {CAPABILITIES.map((c) => (
            <div key={c.title} className={styles.capCol}>
              <h3>{c.title}</h3>
              <div className={styles.capItems}>
                {c.items.map((i) => (
                  <div key={i.title} className={styles.capItem}>
                    <h4>{i.title}</h4>
                    <p>{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pipeline ---------------- */

function Pipeline() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead badge="Этапы реализации" title={<>Как мы <span className="gold-text">создаём проекты</span></>} center />
        <ol className={styles.pipeline}>
          {PIPELINE.map((s) => (
            <li key={s.n} className={styles.step}>
              <span className={styles.stepN}>{s.n}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Metrics ---------------- */

function Metrics() {
  return (
    <section className={styles.metrics}>
      <div className={`container ${styles.metricsGrid}`}>
        {METRICS.map((m) => (
          <div key={m.label}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ESG ---------------- */

function Esg() {
  return (
    <section className="section">
      <div className={`container ${styles.esg}`}>
        <div>
          <SectionHead badge={ESG.badge} title={<>{ESG.title} <span className="gold-text">{ESG.titleAccent}</span></>} subtitle={ESG.desc} />
        </div>
        <ul className={styles.esgList}>
          {ESG.items.map((i) => (
            <li key={i}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCta({ onBook }) {
  const go = useSiteNav();
  return (
    <section id="final-cta" className={styles.finalCta}>
      <div className={`container ${styles.finalInner}`}>
        <h2>Не нашли нужный вариант?</h2>
        <p>Расскажите о пожеланиях — подберём квартиру бесплатно за 10 минут. Рассматриваете инвестиции или партнёрство? Свяжитесь с нами.</p>
        <div className={styles.finalBtns}>
          <button className="btn btn-light" onClick={onBook}>Подобрать квартиру — бесплатно</button>
          <a className="btn btn-glass" href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>Позвонить нам</a>
          <button className="btn btn-glass" onClick={() => go('#contacts')}>Стать партнёром</button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Booking modal ---------------- */

function BookingModal({ apt, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', comment: '' });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const hasApt = Boolean(apt.id);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Введите имя';
    if (!form.phone.trim()) errs.phone = 'Введите телефон';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const lines = [
      'Здравствуйте! Хочу забронировать квартиру в QUDRAT CITY.',
      hasApt && `Квартира № ${apt.number}: ${apt.rooms}-комн., ${apt.area} м², ${apt.floor} этаж, ${formatPrice(apt.price, apt.currency)}`,
      `Имя: ${form.name}`,
      `Телефон: ${form.phone}`,
      form.comment && `Комментарий: ${form.comment}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    setDone(true);
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="booking-title" onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} aria-label="Закрыть">×</button>
        {done ? (
          <div className={styles.done}>
            <div className={styles.doneIcon}>✓</div>
            <h3>Заявка принята!</h3>
            <p>Наш менеджер свяжется с вами в течение 30 минут для подтверждения бронирования.</p>
            <button className="btn btn-primary" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <p className={styles.badge}>Онлайн-бронирование</p>
            <h3 id="booking-title" className={styles.modalTitle}>Забронировать квартиру</h3>
            {hasApt ? (
              <div className={styles.summary}>
                <span>Кв. {apt.number} · {apt.rooms}-комн. · {apt.area} м² · {apt.floor} этаж</span>
                <strong>{formatPrice(apt.price, apt.currency)}</strong>
              </div>
            ) : (
              <p className={styles.modalSub}>Мы подберём лучший вариант под ваш запрос</p>
            )}
            <label className={styles.field}>
              <span>Имя и фамилия</span>
              <input value={form.name} onChange={set('name')} autoFocus />
              {errors.name && <em>{errors.name}</em>}
            </label>
            <label className={styles.field}>
              <span>Телефон</span>
              <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+992" />
              {errors.phone && <em>{errors.phone}</em>}
            </label>
            <label className={styles.field}>
              <span>Комментарий</span>
              <textarea rows="3" value={form.comment} onChange={set('comment')} />
            </label>
            <button type="submit" className={`btn btn-primary ${styles.full}`}>Отправить заявку в WhatsApp</button>
          </form>
        )}
      </div>
    </div>
  );
}
