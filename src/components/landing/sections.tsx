import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Бесплатный замер</Badge>,
    title: "Натяжные потолки под ключ.",
    showButton: true,
    buttonText: 'Заказать замер',
    bgImage: 'https://cdn.poehali.dev/projects/df01d801-93ae-4324-9ec7-c076d8cc097e/files/9188ed60-b0f4-411e-a32d-286205b07d45.jpg'
  },
  {
    id: 'about',
    title: 'Почему выбирают нас?',
    content: 'Более 10 лет опыта, сотни довольных клиентов и гарантия на все виды работ до 15 лет. Работаем аккуратно — без пыли и мусора.'
  },
  {
    id: 'features',
    title: 'Что входит в услугу',
    content: 'Замер, подбор материалов, профессиональный монтаж за 1 день, вывоз мусора и чистовая уборка. Всё включено в стоимость — никаких скрытых доплат.'
  },
  {
    id: 'testimonials',
    title: 'Нам доверяют',
    content: '«Сделали потолок в трёх комнатах за один день. Всё аккуратно, быстро, мастера вежливые. Рекомендуем!» — Анна, Москва'
  },
  {
    id: 'join',
    title: 'Оставьте заявку сегодня',
    content: 'Приедем, замерим и рассчитаем стоимость — бесплатно и без обязательств. Монтаж уже на следующий день.',
    showButton: true,
    buttonText: 'Заказать замер бесплатно'
  },
]