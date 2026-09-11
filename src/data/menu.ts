/**
 * CLIENT DATA — REPLACE BEFORE PRODUCTION
 * Complete demo menu. Replace names, descriptions, prices and image URLs
 * with the client's actual menu. Prices are illustrative PKR values.
 */

import type { MenuCategory, MenuItem } from "@/types";

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    description: "Crisp, shareable plates to begin the table.",
  },
  {
    id: "bbq",
    name: "BBQ",
    description: "Charcoal-grilled tikka, boti and platters.",
  },
  {
    id: "pakistani",
    name: "Pakistani",
    description: "Karahi, handi, biryani and slow-cooked classics.",
  },
  {
    id: "chinese",
    name: "Chinese",
    description: "Restaurant-style Chinese favourites.",
  },
  {
    id: "continental",
    name: "Continental",
    description: "Pasta, steak, pizza and burgers.",
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet finishes from the pastry counter.",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Fresh juices, shakes, tea and coffee.",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    description: "Crispy wings tossed in house chilli-garlic glaze, served with dip.",
    price: 850,
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Crispy chicken wings with dipping sauce",
    tags: ["popular", "spicy"],
  },
  {
    id: "dynamite-chicken",
    name: "Dynamite Chicken",
    description: "Golden fried chicken bites in a creamy dynamite sauce.",
    price: 950,
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Fried dynamite chicken bites",
    tags: ["spicy", "popular"],
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    description: "Thick-cut fries with cheese, jalapeños, sauce and herbs.",
    price: 650,
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Loaded fries with cheese and toppings",
    tags: ["popular"],
    featured: true,
  },
  {
    id: "hot-and-sour-starter",
    name: "Soup of the Day",
    description: "A warming bowl — ask the team for today's pot.",
    price: 450,
    category: "starters",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Bowl of restaurant soup",
  },
  {
    id: "chicken-tikka",
    name: "Chicken Tikka",
    description: "Bone-in chicken marinated in yoghurt and spices, grilled on charcoal.",
    price: 1100,
    category: "bbq",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Charcoal grilled chicken tikka",
    tags: ["popular", "spicy"],
  },
  {
    id: "malai-boti",
    name: "Malai Boti",
    description: "Tender chicken cubes in a cream and cheese marinade, mildly spiced.",
    price: 1250,
    category: "bbq",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Creamy malai boti kebabs",
    tags: ["popular"],
  },
  {
    id: "seekh-kabab",
    name: "Seekh Kabab",
    description: "Minced kebab with fresh coriander, green chilli and garam masala.",
    price: 1050,
    category: "bbq",
    image:
      "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Seekh kebabs on a platter",
    tags: ["spicy"],
  },
  {
    id: "bbq-platter",
    name: "BBQ Platter",
    description: "A mixed grill of tikka, malai boti, seekh and wings — made for sharing.",
    price: 2450,
    category: "bbq",
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d5fdd91c84?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mixed BBQ platter with grilled meats",
    tags: ["popular", "chef"],
    featured: true,
  },
  {
    id: "chicken-karahi",
    name: "Chicken Karahi",
    description: "Wok-finished karahi with tomatoes, ginger, green chilli and a finishing of butter.",
    price: 1450,
    category: "pakistani",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Chicken karahi in a traditional wok",
    tags: ["popular", "spicy", "chef"],
    featured: true,
  },
  {
    id: "mutton-karahi",
    name: "Mutton Karahi",
    description: "On-the-bone mutton karahi, slow-cooked then flash-finished in the wok.",
    price: 2150,
    category: "pakistani",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mutton karahi with naan on the side",
    tags: ["spicy"],
  },
  {
    id: "chicken-handi",
    name: "Chicken Handi",
    description: "Creamy handi gravy with tender chicken, kasuri methi and a hint of smoke.",
    price: 1550,
    category: "pakistani",
    image:
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Chicken handi in a clay pot",
    tags: ["popular"],
  },
  {
    id: "mutton-handi",
    name: "Mutton Handi",
    description: "Rich mutton handi finished with cream and whole spices.",
    price: 2250,
    category: "pakistani",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mutton handi curry",
    tags: ["chef"],
    featured: true,
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    description: "Layered basmati biryani with dum-cooked chicken, fried onions and raita.",
    price: 750,
    category: "pakistani",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b9d44c903c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Chicken biryani served in a bowl",
    tags: ["popular"],
    featured: true,
  },
  {
    id: "nihari",
    name: "Nihari",
    description: "Slow-cooked nihari with bone marrow, julienned ginger and lemon.",
    price: 850,
    category: "pakistani",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Bowl of nihari with naan",
    tags: ["spicy"],
  },
  {
    id: "chicken-manchurian",
    name: "Chicken Manchurian",
    description: "Crisp chicken in a sweet-heat Manchurian sauce with peppers.",
    price: 950,
    category: "chinese",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Chicken Manchurian in a serving bowl",
    tags: ["spicy"],
  },
  {
    id: "chicken-chow-mein",
    name: "Chicken Chow Mein",
    description: "Wok-tossed noodles with chicken, cabbage and a savoury soy glaze.",
    price: 850,
    category: "chinese",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Chicken chow mein noodles",
  },
  {
    id: "fried-rice",
    name: "Chicken Fried Rice",
    description: "Egg fried rice with chicken, spring onion and house seasoning.",
    price: 750,
    category: "chinese",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Chicken fried rice in a bowl",
  },
  {
    id: "hot-and-sour-soup",
    name: "Hot & Sour Soup",
    description: "Classic hot and sour soup with chicken, mushrooms and chilli oil.",
    price: 450,
    category: "chinese",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Hot and sour soup",
    tags: ["spicy"],
  },
  {
    id: "alfredo-pasta",
    name: "Alfredo Pasta",
    description: "Fettuccine in a creamy Alfredo sauce with grilled chicken.",
    price: 1250,
    category: "continental",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Fettuccine Alfredo with chicken",
    tags: ["popular"],
    featured: true,
  },
  {
    id: "chicken-steak",
    name: "Chicken Steak",
    description: "Grilled chicken steak with pepper sauce, sautéed vegetables and fries.",
    price: 1650,
    category: "continental",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Grilled chicken steak with sauce",
    tags: ["chef"],
  },
  {
    id: "courtyard-pizza",
    name: "Courtyard Pizza",
    description: "12-inch pizza with chicken, peppers, olives and mozzarella.",
    price: 1450,
    category: "continental",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Freshly baked chicken pizza",
    tags: ["popular"],
  },
  {
    id: "courtyard-burger",
    name: "Courtyard Burger",
    description: "Grilled chicken burger with house sauce, cheese and seasoned fries.",
    price: 850,
    category: "continental",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Chicken burger with fries",
  },
  {
    id: "brownie",
    name: "Chocolate Brownie",
    description: "Warm brownie with chocolate sauce and a scoop of vanilla ice cream.",
    price: 450,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Chocolate brownie with ice cream",
    tags: ["popular"],
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description: "New York-style slice with berry compote.",
    price: 550,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Slice of cheesecake",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    description: "Warm gulab jamun in rose syrup — a courtyard favourite.",
    price: 350,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1665686310934-8fab52ca9d2d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Gulab jamun in syrup",
    tags: ["vegetarian"],
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    description: "Two scoops. Ask for today's flavours.",
    price: 300,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Scoops of ice cream",
    tags: ["vegetarian"],
  },
  {
    id: "fresh-juices",
    name: "Fresh Juices",
    description: "Seasonal pressed juices — orange, apple, or mixed.",
    price: 350,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Glass of fresh juice",
    tags: ["vegetarian"],
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    description: "Thick shakes in chocolate, vanilla or strawberry.",
    price: 450,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Milkshake with whipped cream",
    tags: ["vegetarian"],
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    description: "Chilled regular and diet options.",
    price: 120,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Soft drink in a glass with ice",
  },
  {
    id: "karak-chai",
    name: "Karak Chai",
    description: "Strong milk tea, the way Rawalpindi likes it.",
    price: 150,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cup of karak chai",
    tags: ["vegetarian", "popular"],
  },
  {
    id: "coffee",
    name: "Coffee",
    description: "Freshly brewed coffee — black or with milk.",
    price: 350,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1511920170033-208997cb3166?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cup of coffee",
    tags: ["vegetarian"],
  },
];

export function getFeaturedDishes() {
  return menuItems.filter((item) => item.featured);
}

export function getMenuItem(id: string) {
  return menuItems.find((item) => item.id === id);
}

export function getItemsByCategory(category: MenuItem["category"]) {
  return menuItems.filter((item) => item.category === category);
}
