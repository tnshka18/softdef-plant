export const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Shop", href: "/shop", hasDropdown: true },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false }
]

export type Review = {
  id: string
  author: string
  avatar: string
  rating: number
  text: string
}

export type PlantCard = {
  id: string
  name: string
  category: string
  price: number
  description: string   // ✅ FIX ADDED
  image: string
  layout: string
}