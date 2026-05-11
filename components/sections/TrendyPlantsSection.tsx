"use client";

import { useRef, useEffect, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";

const products = [
  {
    id: "1",
    name: "For Your Desks Decorations",
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: 599,
    image: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=600&q=80",
    layout: "image-left" as const,
  },
  {
    id: "2",
    name: "For Your Desks Decorations",
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: 399,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    layout: "image-right" as const,
  },
];

export default function TrendyPlantsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32"
      style={{ background: "var(--forest-900)" }}
    >
      {/* Background plant image overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a0e] via-[#0d1a0e]/60 to-[#0d1a0e]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="bracket-accent text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Trendy plants
          </h2>
        </div>

        {/* Product Cards */}
        <div className="space-y-8 lg:space-y-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
