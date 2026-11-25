export const NAV_LINKS = [
  { label: 'Главная', href: '#home' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Услуги', href: '#services' },
  { label: 'Инвесторам', href: '#investors' },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

export const STATS = [
  { value: '15+', label: 'Лет на рынке' },
  { value: '2000+', label: 'Квартир построено' },
  { value: '80+', label: 'Специалистов' },
  { value: '12', label: 'Завершённых проектов' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'QUDRAT Smart Residence',
    description: 'Умный жилой комплекс с системами IoT, 24/7 охраной и современной инфраструктурой.',
    category: 'Жилой',
    status: 'В продаже',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    rooms: '1–4 комнаты',
    area: '45–180 м²',
  },
  {
    id: 2,
    title: 'QUDRAT Invest Tower',
    description: 'Инвестиционный жилой комплекс с высокой доходностью и комфортными апартаментами.',
    category: 'Инвестиционный',
    status: 'Строится',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    rooms: 'Студии – 3 комнаты',
    area: '32–120 м²',
  },
  {
    id: 3,
    title: 'QUDRAT Business Park',
    description: 'Бизнес-центр с коммерческими площадями, переговорными комнатами и офисами.',
    category: 'Коммерческий',
    status: 'Завершён',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    rooms: 'Офисы',
    area: '50–500 м²',
  },
  {
    id: 4,
    title: 'QUDRAT Green Quarter',
    description: 'Эко-квартал с зелёными зонами, детскими площадками и спортивными объектами.',
    category: 'Жилой',
    status: 'Строится',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    rooms: '2–5 комнат',
    area: '70–220 м²',
  },
  {
    id: 5,
    title: 'QUDRAT Mining Complex',
    description: 'Горнодобывающий комплекс по добыче энергетического и коксующегося угля.',
    category: 'Добыча',
    status: 'Активен',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    rooms: 'Промышленный',
    area: 'Лицензия MPIT #0000031',
  },
  {
    id: 6,
    title: 'QUDRAT Plaza',
    description: 'Многофункциональный комплекс с апартаментами, торговыми площадями и паркингом.',
    category: 'Смешанный',
    status: 'Планируется',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    rooms: 'Студии – 4 комнаты',
    area: '35–160 м²',
  },
];

export const SERVICES = [
  {
    id: 1,
    icon: 'building',
    title: 'Строительство',
    description: 'Строительство жилых и коммерческих объектов по современным стандартам с использованием качественных материалов.',
  },
  {
    id: 2,
    icon: 'smart',
    title: 'Smart Home',
    description: 'Интеграция умных технологий: автоматизация освещения, безопасности, климата и энергопотребления.',
  },
  {
    id: 3,
    icon: 'invest',
    title: 'Инвестиции',
    description: 'Выгодные инвестиционные программы с доходностью от 12% до 18% годовых.',
  },
  {
    id: 4,
    icon: 'mining',
    title: 'Горнодобыча',
    description: 'Добыча энергетического угля, коксующегося угля и антрацита по государственной лицензии.',
  },
  {
    id: 5,
    icon: 'design',
    title: 'Дизайн-проект',
    description: 'Разработка дизайн-проектов интерьеров с учётом пожеланий клиента и современных трендов.',
  },
  {
    id: 6,
    icon: 'security',
    title: 'Безопасность',
    description: 'Круглосуточная охрана, видеонаблюдение и современные системы контроля доступа.',
  },
];

export const INVESTMENT_PLANS = [
  {
    id: 1,
    title: 'Покупка квартиры',
    return: '12%',
    period: 'в год',
    features: [
      'Собственность на недвижимость',
      'Гарантированный доход',
      'Юридическое сопровождение',
      'Управление активом',
    ],
    highlight: false,
  },
  {
    id: 2,
    title: 'Долевое участие',
    return: '18%',
    period: 'в год',
    features: [
      'Участие в прибыли',
      'Максимальная доходность',
      'Прямые инвестиции в объект',
      'Ежеквартальные выплаты',
      'Личный менеджер',
    ],
    highlight: true,
  },
  {
    id: 3,
    title: 'Коммерческие площади',
    return: '15%',
    period: 'в год',
    features: [
      'Аренда площадей',
      'Стабильный пассивный доход',
      'Управляющая компания',
      'Страхование объекта',
    ],
    highlight: false,
  },
];

export const PARTNERS = [
  { id: 1, name: 'Таджикская цементная компания', logo: 'https://qudrat.tj/images/logo1.png' },
  { id: 2, name: 'Dushanbe City', logo: 'https://qudrat.tj/images/logo1.png' },
  { id: 3, name: 'Министерство строительства', logo: 'https://qudrat.tj/images/logo1.png' },
  { id: 4, name: 'Alif Bank', logo: 'https://qudrat.tj/images/logo1.png' },
];

export const CONTACT = {
  phone: '+992 666 555 555',
  whatsapp: '992666555555',
  email: 'info@qudrat.tj',
  address: 'г. Душанбе, ул. Титова 13/2',
  workTime: 'Пн–Сб: 9:00 – 18:00',
};
