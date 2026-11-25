import { useState } from 'react';
import { CONTACT } from '../../data/siteData';
import styles from './Contacts.module.css';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contacts" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Info */}
          <div className={styles.info}>
            <p className={styles.sectionTag}>Свяжитесь с нами</p>
            <h2 className="section-title">
              Мы всегда<br />на <span className="gold-text">связи</span>
            </h2>
            <div className="divider" />
            <p className={styles.infoText}>
              Оставьте заявку или свяжитесь с нами напрямую. Наши специалисты ответят
              в течение 30 минут в рабочее время.
            </p>

            <div className={styles.contacts}>
              <ContactItem
                icon={<PhoneIcon />}
                label="Телефон"
                value={CONTACT.phone}
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              />
              <ContactItem
                icon={<MailIcon />}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactItem
                icon={<MapIcon />}
                label="Адрес"
                value={CONTACT.address}
              />
              <ContactItem
                icon={<ClockIcon />}
                label="Режим работы"
                value={CONTACT.workTime}
              />
            </div>

            <div className={styles.socials}>
              <a href="https://t.me/" className={styles.social} aria-label="Telegram">
                <TelegramIcon />
              </a>
              <a href="https://wa.me/992666555555" className={styles.social} aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
              <a href="https://instagram.com/" className={styles.social} aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formWrap}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Оставить заявку</h3>
              <p className={styles.formSubtitle}>Мы перезвоним вам в течение 30 минут</p>

              <div className={styles.field}>
                <label className={styles.label}>Ваше имя</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Номер телефона</label>
                <input
                  type="tel"
                  className={styles.input}
                  placeholder="+992 __ ___ ____"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Сообщение</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Расскажите о вашем запросе..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                {sent ? 'Заявка отправлена!' : 'Отправить заявку'}
                {!sent && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className={styles.contactItem}>
      <div className={styles.contactIcon}>{icon}</div>
      <div>
        <span className={styles.contactLabel}>{label}</span>
        <span className={styles.contactValue}>{value}</span>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.17 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  );
}
function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.94 8.19l-2.02 9.52c-.15.69-.54.86-1.09.54l-3-2.21-1.45 1.4c-.16.16-.3.3-.61.3l.21-3.06 5.52-4.99c.24-.21-.05-.33-.37-.12l-6.82 4.3-2.94-.92c-.64-.2-.65-.64.13-.95l11.49-4.43c.53-.19 1 .13.95.62z"/>
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}
