export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  tags?: string[];
  signature?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
}

export interface MenuData {
  categories: MenuCategory[];
  items: MenuItem[];
}

export interface GalleryItem {
  id: string;
  image: string;
  category: "interior" | "food" | "coffee" | "events";
  caption: string;
  size?: "sm" | "md" | "lg";
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  price: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SettingsData {
  brand: {
    name: string;
    legalName: string;
    tagline: string;
  };
  contact: {
    address: string;
    city: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    mapUrl: string;
    mapEmbedUrl: string;
    coordinates: { lat: number; lng: number };
  };
  hours: { day: string; time: string }[];
  social: { label: string; url: string; icon: string }[];
  stats: { label: string; value: string }[];
}
