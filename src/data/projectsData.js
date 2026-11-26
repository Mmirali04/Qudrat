// Content for the /projects page (source: qudrat.tj/objects)

export const PROJECTS_HERO = {
  eyebrow: 'Наши проекты',
  titleLines: ['Проекты,', 'которые красят'],
  titleAccent: 'город',
  subtitle:
    'Жилые комплексы мирового уровня и коммерческая недвижимость в Душанбе — создаём пространство для жизни, бизнеса и инвестиций.',
  image: '/hero/hero-1.webp',
  kpis: [
    { value: '15+', label: 'лет опыта' },
    { value: '50+', label: 'завершённых проектов' },
    { value: '80+', label: 'специалистов' },
    { value: '$2M+', label: 'привлечено инвестиций' },
    { value: '24/7', label: 'поддержка' },
  ],
};

export const FLAGSHIP = {
  name: 'QUDRAT CITY',
  label: 'Флагманский проект',
  status: 'В продаже',
  location: 'Душанбе, Таджикистан',
  image: '/projects/qudrat-city.webp',
  facts: [
    { value: '5', label: 'этажей' },
    { value: '2026', label: 'год сдачи' },
    { value: '27 м²', label: 'площадь от' },
    { value: '$15 442', label: 'цена от' },
  ],
};

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'Все проекты' },
  { id: 'residential', label: 'Жилая недвижимость' },
  { id: 'commercial', label: 'Коммерческая недвижимость' },
  { id: 'mining', label: 'Горнодобыча' },
];

export const FEATURED_PROJECTS = [
  {
    slug: 'mkr-162',
    name: 'Жилой комплекс в 162-м микрорайоне',
    image: '/hero/hero-3.png',
    category: 'residential',
    type: 'Премиум',
    status: 'Проект',
    location: 'Душанбе, Таджикистан',
    description: 'Многобашенный премиум-комплекс нового поколения',
    stats: [
      { value: '2026', label: 'Проект' },
      { value: 'Премиум', label: 'Класс' },
    ],
  },
  {
    slug: 'mkr-172',
    name: 'Жилой комплекс в 172-м микрорайоне',
    image: '/projects/mkr-172.jpg',
    category: 'residential',
    type: 'Премиум',
    status: 'Проект',
    location: 'Душанбе, Таджикистан',
    description: 'Многобашенный премиум-комплекс нового поколения',
    stats: [
      { value: '2026', label: 'Проект' },
      { value: 'Премиум', label: 'Класс' },
    ],
  },
  {
    slug: 'qudrat-city',
    name: 'QUDRAT CITY',
    image: '/projects/qudrat-city.webp',
    category: 'residential',
    type: 'Комфорт',
    status: 'Строится',
    location: 'Душанбе, Таджикистан',
    description: 'Масштабный жилой район с развитой инфраструктурой',
    stats: [
      { value: 'от 35 м²', label: 'Площадь' },
      { value: '2026', label: 'Сдача' },
      { value: '$950', label: 'За м²' },
    ],
  },
  {
    slug: 'qudrat-coal-complex',
    name: 'QUDRAT COAL COMPLEX',
    image: '/projects/coal-complex.webp',
    category: 'mining',
    type: 'Mining',
    status: 'Строится',
    location: 'Хатлонская обл., Таджикистан',
    description: 'Угольный комплекс полного цикла — добыча и переработка',
    stats: [
      { value: '5.2 млн т', label: 'Мощность' },
      { value: '2026', label: 'Запуск' },
      { value: '100%', label: 'Безопасность' },
    ],
  },
  {
    slug: 'qudrat-business-center',
    name: 'QUDRAT BUSINESS CENTER',
    image: '/hero/hero-2.webp',
    category: 'commercial',
    type: 'Бизнес',
    status: 'Планируется',
    location: 'Душанбе, Таджикистан',
    description: 'Современный бизнес-центр класса A+ в деловом центре',
    stats: [
      { value: 'от 100 м²', label: 'Площадь' },
      { value: '2026', label: 'Сдача' },
      { value: '$1,800', label: 'За м²' },
    ],
  },
];

/* ---------- Apartments catalog (QUDRAT CITY) ---------- */

export const FINISH_LABELS = {
  none: 'Без отделки',
  rough: 'Черновая',
  fine: 'Чистовая',
  furnished: 'Меблированная',
};

export const STATUS_LABELS = {
  available: 'Доступна',
  reserved: 'Забронирована',
  sold: 'Продана',
};

// [id, number, rooms, area, floor, price, currency, status, finish]
const RAW_APARTMENTS = [
  [3, '102', 1, 38, 2, 15933, 'USD', 'available', 'furnished'],
  [4, '103', 1, 39, 3, 15442, 'USD', 'reserved', 'fine'],
  [5, '104', 1, 27, 4, 18001, 'USD', 'available', 'none'],
  [6, '105', 1, 40, 5, 16154, 'USD', 'reserved', 'fine'],
  [22, '13', 1, 68, 5, 650000, 'TJS', 'available', 'rough'],
  [7, '106', 2, 57, 1, 34710, 'USD', 'reserved', 'furnished'],
  [8, '107', 2, 64, 2, 31705, 'USD', 'available', 'none'],
  [1, '1', 2, 58, 2, 62000, 'USD', 'reserved', 'rough'],
  [9, '108', 2, 59, 3, 30144, 'USD', 'available', 'none'],
  [10, '109', 2, 53, 4, 33338, 'USD', 'available', 'none'],
  [11, '110', 2, 60, 5, 32524, 'USD', 'sold', 'none'],
  [12, '111', 3, 77, 1, 45548, 'USD', 'reserved', 'rough'],
  [13, '112', 3, 82, 2, 47902, 'USD', 'available', 'fine'],
  [14, '113', 3, 83, 3, 49573, 'USD', 'available', 'fine'],
  [15, '114', 3, 83, 4, 49446, 'USD', 'available', 'furnished'],
  [16, '115', 3, 86, 5, 45408, 'USD', 'available', 'fine'],
  [17, '116', 4, 103, 1, 60096, 'USD', 'available', 'fine'],
  [18, '117', 4, 110, 2, 60530, 'USD', 'sold', 'furnished'],
  [19, '118', 4, 110, 3, 62542, 'USD', 'available', 'rough'],
  [20, '119', 4, 110, 4, 64966, 'USD', 'reserved', 'none'],
  [21, '120', 4, 105, 5, 64643, 'USD', 'sold', 'none'],
];

export const APARTMENTS = RAW_APARTMENTS.map(
  ([id, number, rooms, area, floor, price, currency, status, finish]) => ({
    id, number, rooms, area, floor, price, currency, status, finish,
    project: 'QUDRAT CITY',
  }),
);

export const SORT_OPTIONS = [
  { id: 'rooms', label: 'Комнатность ↑' },
  { id: 'price_asc', label: 'Цена: дешевле' },
  { id: 'price_desc', label: 'Цена: дороже' },
  { id: 'area_asc', label: 'Площадь ↑' },
  { id: 'area_desc', label: 'Площадь ↓' },
  { id: 'floor', label: 'Этаж ↑' },
];

/* ---------- Construction progress ---------- */

export const PROGRESS = {
  overall: 34,
  updates: [
    {
      date: '20.05.2026',
      title: 'Текущий прогресс строительства',
      description: 'Завершён нулевой цикл, ведётся возведение монолитного каркаса.',
      progress: 34,
    },
  ],
};

/* ---------- Master plan ---------- */

export const MASTER_PLAN = {
  badge: 'Мастер-план',
  title: 'Генплан',
  titleAccent: 'QUDRAT CITY',
  subtitle:
    'Продуманное зонирование — жилые башни, коммерция, парки, образование и спорт в единой экосистеме',
  image: '/hero/hero-2.webp',
  zones: [
    { label: 'Жилые башни', color: '#B39A78' },
    { label: 'Коммерческие зоны', color: '#60a5fa' },
    { label: 'Парки и скверы', color: '#22c55e' },
    { label: 'Образовательные учреждения', color: '#a855f7' },
    { label: 'Спортивные объекты', color: '#f97316' },
    { label: 'Транспортная инфраструктура', color: '#6F6A65' },
  ],
  advantages: [
    { title: 'Оптимальное зонирование', desc: 'Комфортное разделение пространств для жизни, работы и отдыха' },
    { title: 'Удобные транспортные решения', desc: 'Лёгкий доступ ко всем ключевым точкам города' },
    { title: 'Устойчивое развитие', desc: 'Экологичные решения и забота о будущем поколении' },
  ],
  metrics: [
    { value: '10+', label: 'Крупных проектов' },
    { value: '500К+', label: 'м² общей площади' },
    { value: '20К+', label: 'Будущих жителей' },
    { value: '15+', label: 'Лет опыта' },
  ],
};

/* ---------- Infrastructure ---------- */

export const INFRASTRUCTURE = {
  badge: 'Живая инфраструктура',
  title: 'Коммерция и',
  titleAccent: 'жизнь вместе',
  subtitle:
    'Всё необходимое в пешей доступности — магазины, рестораны, офисы и сервисы прямо в комплексе',
  categories: [
    { icon: '🛒', label: 'Торговые зоны', desc: 'Супермаркеты, бутики и магазины на первых этажах' },
    { icon: '☕', label: 'Кафе и рестораны', desc: 'Места для встреч и деловых обедов рядом с домом' },
    { icon: '🏦', label: 'Сервисы и услуги', desc: 'Банки, салоны, химчистки и медицина' },
    { icon: '👜', label: 'Бутики и магазины', desc: 'Модные бренды и локальные дизайнеры' },
    { icon: '💼', label: 'Офисы и бизнес', desc: 'Коворкинги и офисы для работы и роста' },
  ],
  comfortTitle: 'Всё для комфорта жизни и успеха бизнеса',
  comfortDesc:
    'Коммерческие пространства на первых этажах, удобные пешеходные зоны и развитая инфраструктура создают идеальную среду для жизни, отдыха и работы.',
  stats: [
    { value: '50K+', label: 'м² коммерции' },
    { value: '100+', label: 'Магазинов и бутиков' },
    { value: '30+', label: 'Кафе и ресторанов' },
    { value: '20+', label: 'Сервисов и услуг' },
  ],
};

/* ---------- Capabilities ---------- */

export const CAPABILITIES = [
  {
    title: 'Строительство и девелопмент',
    items: [
      { title: 'Проектирование', desc: 'Архитектурное проектирование и предстроительное планирование' },
      { title: 'Строительство', desc: 'Современные технологии и контроль качества' },
      { title: 'Управление', desc: 'Эффективное управление проектами на всех этапах' },
      { title: 'Сдача под ключ', desc: 'Полный цикл работ и ввод объекта в эксплуатацию' },
    ],
  },
  {
    title: 'Горнодобывающая отрасль',
    items: [
      { title: 'Добыча угля', desc: 'Современные технологии добычи и переработки угля' },
      { title: 'Транспортировка', desc: 'Собственная логистика и железнодорожные маршруты' },
      { title: 'Переработка', desc: 'Обогащение и переработка с применением инноваций' },
      { title: 'Безопасность', desc: 'Международные стандарты охраны труда и экологии' },
    ],
  },
];

export const PIPELINE = [
  { n: '01', title: 'Планирование', desc: 'Анализ, исследование и разработка концепции' },
  { n: '02', title: 'Проектирование', desc: 'Архитектурное и инженерное проектирование' },
  { n: '03', title: 'Строительство', desc: 'Реализация проекта с контролем качества' },
  { n: '04', title: 'Ввод в эксплуатацию', desc: 'Тестирование и запуск объекта' },
  { n: '05', title: 'Расширение', desc: 'Развитие и масштабирование проектов' },
];

export const METRICS = [
  { value: '15+', label: 'Лет опыта' },
  { value: '50+', label: 'Завершённых проектов' },
  { value: '100%', label: 'Выполнение обязательств' },
  { value: '5.2 млн т', label: 'Годовая добыча угля' },
  { value: '24/7', label: 'Операционная поддержка' },
  { value: '80+', label: 'Специалистов' },
];

export const ESG = {
  badge: 'Устойчивое развитие',
  title: 'ESG-принципы',
  titleAccent: 'в действии',
  desc: 'Мы внедряем ESG-принципы во все наши проекты, заботясь об экологии, социальной ответственности и будущих поколениях.',
  items: [
    'Экологическая ответственность',
    'Безопасность и охрана труда',
    'Поддержка местных сообществ',
    'Энергоэффективные технологии',
  ],
};
