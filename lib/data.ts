export type NavItem = {
  label: string
  href: string
  hasDropdown?: boolean
}

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