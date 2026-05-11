import { Leaf, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16" style={{ background: "var(--forest-950)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Flora<span className="text-sage-300">Vision</span>
                <span className="text-gold-400">.</span>
              </span>
            </div>
            <p className="text-sage-400 text-sm leading-relaxed">
              Bringing nature closer to you — one plant at a time.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-sage-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Plants", items: ["Indoor Plants", "Outdoor Plants", "Succulents", "Ferns", "Tropical"] },
            { title: "Company", items: ["About Us", "Blog", "Careers", "Press", "Contact"] },
            { title: "Support", items: ["FAQ", "Shipping Policy", "Returns", "Track Order", "Plant Care"] },
          ].map(({ title, items }) => (
            <div key={title} className="space-y-4">
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sage-400 text-sm hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sage-400/60 text-xs">
            © 2024 FloraVision. All rights reserved.
          </p>
          <p className="text-sage-400/60 text-xs">
            Crafted with 🌿 for plant lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
