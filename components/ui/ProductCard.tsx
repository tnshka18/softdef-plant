"use client";

import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  layout: "image-left" | "image-right";
}

export default function ProductCard({
  name,
  description,
  price,
  image,
  layout,
}: ProductCardProps) {
  const isLeft = layout === "image-left";

  return (
    <div className="relative glass-card rounded-3xl overflow-visible group hover:border-sage-400/25 transition-all duration-500 hover:shadow-2xl hover:shadow-green-900/20">
      <div
        className={`flex flex-col md:flex-row items-center ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } gap-0`}
      >
        {/* Plant Image — overflows card */}
        <div
          className={`relative flex-shrink-0 w-full md:w-64 lg:w-72 xl:w-80 ${
            isLeft ? "md:-ml-8" : "md:-mr-8"
          } -mt-8 md:mt-0`}
        >
          <div className="relative h-56 md:h-64 lg:h-72">
            {/* Glow */}
            <div className="absolute inset-0 bg-green-600/10 blur-3xl rounded-full scale-75" />
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}
            />
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex-1 p-8 lg:p-10 ${
            isLeft ? "md:pl-10" : "md:pr-10"
          } space-y-4`}
        >
          <h3
            className="text-white text-2xl lg:text-3xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {name}
          </h3>

          <p className="text-sage-400 text-sm leading-relaxed max-w-md">
            {description}
          </p>

          {/* Price */}
          <p
            className="text-white text-2xl font-bold"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Rs. {price.toLocaleString()}/-
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button className="btn-outline text-sm px-8 py-3 rounded-full font-medium hover:bg-white/8 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20">
              Explore
            </button>
            <button className="btn-icon w-11 h-11 rounded-xl border border-white/30 hover:border-white/60 transition-all duration-300">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
