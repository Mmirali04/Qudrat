import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '../data/siteData';
import {
  MINING_HERO, MINING_ABOUT, DEPOSIT, EXPORT, LOGISTICS, OFFERS,
  PROCESS, SPECS, SALES, CERTIFICATES, COLLAB,
} from '../data/miningData';
import styles from './MiningPage.module.css';

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function MiningPage() {
  const [zoom, setZoom] = useState(null); // image src shown in the lightbox

  useEffect(() => {
    document.title = 'Горнодобыча и уголь — QUDRAT';
    return () => { document.title = 'QUDRAT — Строим будущее Таджикистана'; };
  }, []);

  return (
    <main className={styles.page}>
      <Hero />
      <About />
      <Deposit onZoom={setZoom} />
      <Export />
      <Logistics />
      <Offers />
      <Process />
      <Specs />
      <Sales />
      <Certificates onZoom={setZoom} />
      <Collab />
      {zoom && <Lightbox src={zoom} onClose={() => setZoom(null)} />}
    </main>
  );
}

function SectionHead({ badge, title, accent, subtitle, center }) {
  return (
    <div className={`${styles.head} ${center ? styles.headCenter : ''}`}>
      <p className={styles.badge}>{badge}</p>
      <h2 className="section-title">{title} <span className="gold-text">{accent}</span></h2>
      <div className={`divider ${center ? styles.dividerCenter : ''}`} />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/* ---------------- Hero ---------------- */

function Hero() {
  const h = MINING_HERO;
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} style={{ backgroundImage: `url(${h.image})` }} />
      <div className={styles.heroOverlay} />
      <div className={`container ${styles.heroInner}`}>
        <span className={styles.heroTag}>{h.eyebrow}</span>
        <h1 className={styles.heroTitle}>
          {h.title}<br />
          <span className="gold-text">{h.titleAccent}</span>
        </h1>
        <p className={styles.heroSub}>{h.subtitle}</p>
        <div className={styles.heroChips}>
          <span className={styles.heroPlace}>{h.place}</span>
          {h.coalTypes.map((t) => <span key={t} className={styles.heroChip}>{t}</span>)}
        </div>
        <div className={styles.heroCtas}>
          <button className="btn btn-light" onClick={() => scrollTo('mining-request')}>B2B запрос</button>
          <button className="btn btn-glass" onClick={() => scrollTo('mining-specs')}>Характеристики угля</button>
        </div>
      </div>

      <div className={`container ${styles.kpis}`}>
        {h.stats.map((s) => (
          <div key={s.label} className={styles.kpi}>
            <strong>{s.value}</strong>
            <em>{s.unit}</em>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  const a = MINING_ABOUT;
  return (
    <section className="section">
      <div className="container">
        <div className={styles.split}>
          <div>
            <SectionHead badge={a.badge} title={a.title} accent={a.titleAccent} />
            {a.paragraphs.map((p) => <p key={p} className={styles.text}>{p}</p>)}
          </div>
          <div className={styles.locCard}>
            <p className={styles.badge}>{a.location.sub}</p>
            <h3>{a.location.title}</h3>
            <p>{a.location.desc}</p>
            <a href={a.location.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.locNote}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
              </svg>
              {a.location.note}
            </a>
          </div>
        </div>

        <div className={styles.grid4}>
          {a.advantages.map((k) => (
            <div key={k.title} className={styles.card}>
              <span className={styles.cardIcon}><Check /></span>
              <h4>{k.title}</h4>
              <p>{k.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.grid4} ${styles.capacity}`}>
          {a.capacity.map((c) => (
            <div key={c.title} className={styles.capItem}>
              <strong>{c.value}</strong>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Deposit + license ---------------- */

function Deposit({ onZoom }) {
  const d = DEPOSIT;
  return (
    <section className={`section ${styles.alt}`}>
      <div className="container">
        <div className={styles.split}>
          <div>
            <SectionHead badge={d.badge} title={d.title} accent={d.titleAccent} />
            {d.paragraphs.map((p) => <p key={p} className={styles.text}>{p}</p>)}
          </div>
          <div className={styles.license}>
            <p className={styles.badge}>{d.license.badge}</p>
            <h3>{d.license.serial}</h3>
            <p>{d.license.date}</p>
            <div className={styles.prodGrid}>
              {d.production.map((p) => (
                <div key={p.label}>
                  <strong>{p.value}</strong>
                  <span>{p.label}</span>
                  <em>{p.note}</em>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.docsHead}>
          <p className={styles.badge}>{d.docsBadge}</p>
          <p className={styles.hint}>{d.docsHint}</p>
        </div>
        <div className={styles.docs}>
          {d.docs.map((doc) => (
            <button key={doc.src} className={styles.doc} onClick={() => onZoom(doc.src)}>
              <div className={styles.docImg}>
                <img src={doc.src} alt={doc.title} loading="lazy" />
                <span className={styles.docZoom}>Увеличить</span>
              </div>
              <div className={styles.docBody}>
                <h4>{doc.title}</h4>
                <span>{doc.type}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Export ---------------- */

function Export() {
  const e = EXPORT;
  return (
    <section className="section">
      <div className="container">
        <SectionHead badge={e.badge} title={e.title} accent={e.titleAccent} subtitle={e.subtitle} />
        <div className={styles.grid4}>
          {e.countries.map((c) => (
            <div key={c.code} className={styles.card}>
              <div className={styles.countryTop}>
                <span className={styles.countryCode}>{c.code}</span>
                <span className={styles.pill}>{c.badge}</span>
              </div>
              <h4>{c.name}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.statRow}>
          {e.stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
              <em>{s.note}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Logistics ---------------- */

function Logistics() {
  const l = LOGISTICS;
  return (
    <section className={`section ${styles.alt}`}>
      <div className="container">
        <SectionHead badge={l.badge} title={l.title} accent={l.titleAccent} />
        <div className={styles.routes}>
          {l.routes.map((r) => (
            <div key={r.to} className={styles.route}>
              <div className={styles.routeEnds}>
                <span>{r.from}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <strong>{r.to}</strong>
              </div>
              <p>{r.desc}</p>
              <ul className={styles.segments}>
                {r.segments.map((s) => (
                  <li key={s.label}><b>{s.km}</b>{s.label}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.grid3}>
          {l.transport.map((t) => (
            <div key={t.title} className={styles.card}>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Offers ---------------- */

function Offers() {
  const o = OFFERS;
  return (
    <section className="section">
      <div className="container">
        <SectionHead badge={o.badge} title={o.title} accent={o.titleAccent} />
        <div className={styles.grid3}>
          {o.items.map((i, idx) => (
            <div key={i.title} className={styles.card}>
              <span className={styles.cardNum}>{String(idx + 1).padStart(2, '0')}</span>
              <h4>{i.title}</h4>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  const p = PROCESS;
  return (
    <section className={`section ${styles.alt}`}>
      <div className="container">
        <SectionHead badge={p.badge} title={p.title} accent={p.titleAccent} center />
        <ol className={styles.pipeline}>
          {p.steps.map((s) => (
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

/* ---------------- Specs + quality ---------------- */

function Specs() {
  const s = SPECS;
  return (
    <section id="mining-specs" className="section">
      <div className="container">
        <SectionHead badge={s.badge} title={s.title} accent={s.titleAccent} subtitle={s.subtitle} />
        <div className={styles.tables}>
          {s.tables.map((t) => (
            <div key={t.name} className={styles.table}>
              <div className={styles.tableHead}>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.desc}</span>
                </div>
                <span className={styles.pill}>{t.badge}</span>
              </div>
              <dl>
                {t.rows.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className={styles.quality}>
          <div>
            <p className={styles.badge}>{s.quality.sub}</p>
            <h3>{s.quality.title}</h3>
            <p className={styles.text}>{s.quality.desc}</p>
            <ul className={styles.docList}>
              {s.documents.map((d) => (
                <li key={d.name}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" />
                  </svg>
                  <span>{d.name}</span>
                  <em>{d.type}</em>
                </li>
              ))}
            </ul>
          </div>
          <ol className={styles.qSteps}>
            {s.quality.steps.map((q, i) => (
              <li key={q.title}>
                <span>{i + 1}</span>
                <div>
                  <h4>{q.title}</h4>
                  <p>{q.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sales ---------------- */

function Sales() {
  const s = SALES;
  return (
    <section className={`section ${styles.alt}`}>
      <div className="container">
        <SectionHead badge={s.badge} title={s.title} accent={s.titleAccent} subtitle={s.subtitle} />
        <div className={styles.grid5}>
          {s.items.map((i, idx) => (
            <div key={i.title} className={styles.card}>
              <span className={styles.cardNum}>{String(idx + 1).padStart(2, '0')}</span>
              <h4>{i.title}</h4>
              <p>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certificates gallery ---------------- */

// Slides visible at once: 4 on desktop, 3 on tablets, 2 on phones
function usePerView() {
  const get = () => {
    const w = window.innerWidth;
    if (w <= 600) return 2;
    if (w <= 900) return 3;
    return 4;
  };
  const [perView, setPerView] = useState(get);
  useEffect(() => {
    const onResize = () => setPerView(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return perView;
}

function Certificates({ onZoom }) {
  const c = CERTIFICATES;
  const total = c.images.length;
  const perView = usePerView();
  const maxIndex = Math.max(0, total - perView);
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0); // px offset while dragging
  const dragRef = useRef(null); // { startX, moved }

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Move by one page of visible slides
  const slide = (dir) =>
    setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir * perView)));

  const onPointerDown = (e) => {
    dragRef.current = { startX: e.clientX, moved: false };
  };

  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    setDrag(dx);
  };

  const onPointerUp = () => {
    const d = dragRef.current;
    if (!d) return;
    if (drag < -50) slide(1);
    else if (drag > 50) slide(-1);
    setDrag(0);
    // keep "moved" until the click event fires, then reset
    setTimeout(() => { dragRef.current = null; }, 0);
  };

  const openZoom = (src) => {
    if (dragRef.current?.moved) return;
    onZoom(src);
  };

  const shift = `calc(${-index} * (100% + var(--gap)) / ${perView} + ${drag}px)`;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.sliderHead}>
          <SectionHead badge={c.badge} title={c.title} accent={c.titleAccent} subtitle={c.subtitle} />
          <div className={styles.sliderNav}>
            <span className={styles.sliderCount}>
              {index + 1}–{Math.min(index + perView, total)} / {total}
            </span>
            <button onClick={() => slide(-1)} disabled={index === 0} aria-label="Назад">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={() => slide(1)} disabled={index >= maxIndex} aria-label="Вперёд">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
        <div
          className={styles.slider}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            className={`${styles.sliderTrack} ${drag ? styles.dragging : ''}`}
            style={{ '--per-view': perView, transform: `translateX(${shift})` }}
          >
            {c.images.map((src, i) => (
              <button key={src} className={styles.galleryItem} onClick={() => openZoom(src)}>
                <img src={src} alt={`Сертификат ${i + 1}`} draggable="false" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Request form ---------------- */

function Collab() {
  const c = COLLAB;
  const [form, setForm] = useState({ company: '', phone: '', email: '', volume: '', type: '', info: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.company.trim()) errs.company = 'Укажите компанию или имя';
    if (!form.phone.trim()) errs.phone = 'Укажите телефон';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const lines = [
      'Здравствуйте! Заявка на поставку угля.',
      `Компания / Имя: ${form.company}`,
      `Телефон: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.volume && `Объём: ${form.volume}`,
      form.type && `Тип угля: ${form.type}`,
      form.info && `Дополнительно: ${form.info}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    setSent(true);
  };

  return (
    <section id="mining-request" className={`section ${styles.alt}`}>
      <div className={`container ${styles.collab}`}>
        <div>
          <SectionHead badge={c.badge} title={c.title} accent={c.titleAccent} subtitle={c.desc} />
          <ul className={styles.contacts}>
            <li>
              <span>Телефон (уголь)</span>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <span>Адрес</span>
              <p>{CONTACT.address}</p>
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={submit} noValidate>
          <label className={`${styles.field} ${styles.span2}`}>
            <span>Компания / Имя *</span>
            <input value={form.company} onChange={set('company')} placeholder="Название организации или ФИО" />
            {errors.company && <em>{errors.company}</em>}
          </label>
          <label className={styles.field}>
            <span>Телефон *</span>
            <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+992" />
            {errors.phone && <em>{errors.phone}</em>}
          </label>
          <label className={styles.field}>
            <span>Email</span>
            <input type="email" value={form.email} onChange={set('email')} />
          </label>
          <label className={styles.field}>
            <span>Объём (тонн/месяц)</span>
            <input value={form.volume} onChange={set('volume')} placeholder="напр. 500 т/мес" />
          </label>
          <label className={styles.field}>
            <span>Тип угля</span>
            <select value={form.type} onChange={set('type')}>
              <option value="">Выберите...</option>
              {c.coalTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
          <label className={`${styles.field} ${styles.span2}`}>
            <span>Дополнительная информация</span>
            <textarea rows="4" value={form.info} onChange={set('info')} placeholder="Условия доставки, сроки, специфика..." />
          </label>
          <button type="submit" className={`btn btn-primary ${styles.span2}`} disabled={sent}>
            {sent ? 'Заявка отправлена ✓' : 'Отправить заявку'}
          </button>
          <p className={`${styles.hint} ${styles.span2}`}>{c.callback}</p>
        </form>
      </div>
    </section>
  );
}

/* ---------------- Lightbox ---------------- */

function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.lightbox} onClick={onClose} role="dialog" aria-modal="true">
      <button className={styles.lightboxClose} onClick={onClose} aria-label="Закрыть">×</button>
      <img src={src} alt="Документ" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
