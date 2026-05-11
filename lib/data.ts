import { NavItem, PlantCard, Review } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Plants Type", href: "/plants", hasDropdown: true },
  { label: "More", href: "/more" },
  { label: "Contact", href: "/contact" },
];

export const reviews: Review[] = [
  {
    id: "1",
    author: "Ronnie Hamill",
    avatar: "/images/avatar1.jpg",
    rating: 4.5,
    text: "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.",
  },
  {
    id: "2",
    author: "Sarah Kim",
    avatar: "/images/avatar2.jpg",
    rating: 5,
    text: "Absolutely love my new desk plant. It's transformed my workspace completely!",
  },
];

export const trendyPlants: PlantCard[] = [
  {
    id: "1",
    name: "For Your Desks Decorations",
    category: "Desk Plant",
    price: 599,
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    image: "/images/plant-desk1.png",
    layout: "image-left",
  },
  {
    id: "2",
    name: "For Your Desks Decorations",
    category: "Succulent",
    price: 399,
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    image: "/images/plant-desk2.png",
    layout: "image-right",
  },
];

export const contributorAvatars = [
  { initial: "R", color: "bg-emerald-600" },
  { initial: "P", color: "bg-teal-600" },
  { initial: "S", color: "bg-green-700" },
  { initial: "D", color: "bg-lime-700" },
];
