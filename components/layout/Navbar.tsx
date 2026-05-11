"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/lib/data";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Leaf,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card py-3 shadow-lg shadow-black/30"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Flora<span className="text-sage-300">Vision</span>
            <span className="text-gold-400">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-sage-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
                  style={{ fontFamily: "var(--font-caveat)", fontSize: "1rem" }}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-sage-300 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide"
                  style={{ fontFamily: "var(--font-caveat)", fontSize: "1rem" }}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.hasDropdown && dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 glass-card rounded-2xl py-2 shadow-xl shadow-black/40">
                  {["Indoor Plants", "Outdoor Plants", "Succulents", "Ferns"].map((sub) => (
                    <Link
                      key={sub}
                      href="#"
                      className="block px-4 py-2 text-sm text-sage-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-sage-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-sage-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gold-400 rounded-full"></span>
          </button>
          <button
            className="md:hidden p-2 text-sage-300 hover:text-white transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <button className="hidden md:flex p-2 text-sage-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-white/10 px-6 py-4 mt-1 mx-4 rounded-2xl">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-3 text-sage-300 hover:text-white border-b border-white/5 last:border-0 transition-colors"
              style={{ fontFamily: "var(--font-caveat)", fontSize: "1.1rem" }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
