/**
 * Single source of content for the GARMONIA CAFÉ landing page.
 * Swap the `image` URLs for local files in /public whenever they are available.
 */

export const BRAND = {
  name: "GARMONIA",
  sub: "CAFÉ",
  tagline: "Їжа, що об’єднує людей.",
};

export const NAV_LINKS = [
  { href: "#home", label: "Головна" },
  { href: "#menu", label: "Меню" },
  { href: "#about", label: "Про нас" },
  { href: "#gallery", label: "Фотогалерея" },
  { href: "#contacts", label: "Контакти" },
];

export const CONTACT = {
  addressLines: ["м. Боярка,", "вул. Білогородська 51,", "корпус 6, Boyarka 08150"],
  addressFlat: "м. Боярка, вул. Білогородська 51, корпус 6, Боярка 08150",
  hoursLines: ["Щодня", "10:00 – 22:00"],
  hoursFlat: "Щодня 10:00 – 22:00",
  phone: "+380 (97) 123 45 67",
  phoneHref: "tel:+380971234567",
  email: "cafe.garmonia@gmail.com",
  instagramHandle: "@cafe_garmonia",
  instagramUrl: "https://instagram.com/cafe_garmonia",
  facebookUrl: "https://facebook.com/cafe.garmonia",
  telegramUrl: "https://t.me/cafe_garmonia",
};

export const HERO_HIGHLIGHTS = [
  { icon: "sofa", label: "Затишна атмосфера" },
  { icon: "coffee", label: "Смачна кухня" },
  { icon: "heart", label: "Привітний персонал" },
  { icon: "leaf", label: "Багато рослин" },
] as const;

export const FEATURES = [
  {
    icon: "leaf",
    title: "Свіжі продукти\nта авторські рецепти",
    text: "Використовуємо тільки якісні та свіжі інгредієнти.",
  },
  {
    icon: "chair",
    title: "Затишний інтер’єр\nу природних тонах",
    text: "Простір, де хочеться залишитися довше.",
  },
  {
    icon: "users",
    title: "Для друзів, родини\nта особливих подій",
    text: "Ідеальне місце для зустрічей і святкувань.",
  },
] as const;

export const MENU_ITEMS = [
  {
    name: "Цезар з куркою",
    price: "190 ₴",
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Піца Маргарита",
    price: "220 ₴",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Паста з креветками",
    price: "260 ₴",
    image:
      "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Чізкейк з ягідним соусом",
    price: "150 ₴",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Капучино",
    price: "75 ₴",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const FOOTER_MENU = [
  "Сніданки",
  "Основне меню",
  "Десерти",
  "Напої",
  "Бар",
];

export const GALLERY = [
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    alt: "Затишний зал кафе з великими вікнами",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    alt: "Келих кави та десерт зі свіжими ягодами",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=80",
    alt: "Чізкейк з ягідним соусом на тарілці",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    alt: "Чашка кави з латте-артом",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    alt: "Піца з дровʼяної печі",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    alt: "Барна стійка кафе з рослинами",
  },
] as const;

export const IMAGES = {
  heroInterior:
    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1400&q=80",
  aboutLarge:
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
  aboutCoffee:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
  aboutInterior:
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=700&q=80",
};
