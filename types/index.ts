export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  text: string;
  date?: string;
}

export interface PlantCard {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  layout: "image-left" | "image-right";
}
