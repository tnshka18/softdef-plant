"use client";

import { useEffect, useRef } from "react";
import { Play, ChevronRight, Star } from "lucide-react";
import ReviewCard from "@/components/ui/ReviewCard";
import PlantFeaturedCard from "@/components/ui/PlantFeaturedCard";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 10;
      const bg = hero.querySelector(".hero-bg") as HTMLElement;
      if (bg) {
        bg.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) scale(1.05)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
   <section
  ref={heroRef}
  className="relative min-h-screen overflow-visible flex items-center"
  style={{ background: "var(--forest-900)" }}
>
      {/* Background plant image */}
      <div
  className="hero-bg absolute inset-0 z-0 transition-transform duration-700 ease-out"
  style={{
    backgroundImage: `url('/bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    transform: "scale(1.05)",
  }}
>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a0e]/92 via-[#0d1a0e]/70 to-[#0d1a0e]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0e]/80 via-transparent to-[#0d1a0e]/40" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 z-0 dot-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[85vh]">
          {/* Left: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-xs text-sage-300 animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Premium Natural Plants
            </div>

            {/* Main heading */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
             <h1
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: "108px",
    lineHeight: "100%",
    top:252,
    color: "#FFFFFF",
    opacity: 0.75,
    verticalAlign:"middle",
    letterSpacing:"0%",
    transform: "translateX(-60px)",
  }}
>
  Earth&apos;s
  <span className="text-gradient">Exhale</span>
</h1>
            </div>

            {/* Subtext */}
           <p
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "21px",
    lineHeight: "28px",
    color: "#FFFFFF",
    opacity: 0.75,
    maxWidth: "775px",
    transform: "translateX(-60px)",
  }}
>
  &ldquo;Earth Exhale&rdquo; symbolizes the purity and vitality of the Earth&apos;s
  natural environment and its essential role in sustaining life.
</p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "both" }}
            >
        <button
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: "28px",
    lineHeight: "34px",
    color: "rgba(255,255,255,0.75)",
    border: "2px solid #FFFFFF",
    borderRadius: "12px",
    width: "217px",
    height: "64px",
    background: "transparent",
    cursor: "pointer",
  }}
>
  Buy Now
</button>
              <button className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
               <span
  style={{
    fontFamily: "'Indie Flower', cursive",
    fontWeight: 400,
    fontSize: "25px",
    lineHeight: "36px",
    color: "#FFFFFF",
  }}
>
  Live Demo&hellip;
</span>
              </button>
            </div>

            {/* Floating Review Card */}
            <div
  className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right relative z-10"
  style={{ animationDelay: "0.4s", animationFillMode: "both" }}
>
              <ReviewCard
                author="Ronnie Hamill"
                rating={4.5}
                text="I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home."
                avatarInitial="R"
              />
            </div>
          </div>

          {/* Right: Floating Plant Feature Card */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <PlantFeaturedCard />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1a0e] to-transparent z-10" />
    </section>
  );
}
