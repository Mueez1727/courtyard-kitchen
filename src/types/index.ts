export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type DayHours = {
  open: string;
  close: string;
  closed?: boolean;
};

export type OpeningHours = Record<DayKey, DayHours>;

export type SocialPlatform = "instagram" | "facebook" | "tiktok" | "whatsapp";

export type MenuCategoryId =
  | "starters"
  | "bbq"
  | "pakistani"
  | "chinese"
  | "continental"
  | "desserts"
  | "drinks";

export type MenuTag = "spicy" | "vegetarian" | "popular" | "chef";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  image: string;
  imageAlt: string;
  tags?: MenuTag[];
  featured?: boolean;
  available?: boolean;
};

export type MenuCategory = {
  id: MenuCategoryId;
  name: string;
  description: string;
};

export type Facility = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type GalleryCategory = "food" | "interior" | "outdoor" | "events";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  dish?: string;
};

export type Offer = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  imageAlt: string;
  badge: string;
  active: boolean;
  validDays?: DayKey[];
  ctaHref: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type OrderType = "delivery" | "pickup";

export type PaymentMethod = "cod" | "card" | "online";

export type WhyChooseItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type EventType = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type InstagramPost = {
  id: string;
  image: string;
  alt: string;
  href: string;
};
