"use client";

import { ChevronRight } from "lucide-react";
import aglaonema from "./aglaonema.png";

export default function PlantFeaturedCard() {
  return (
    <div className="relative right-10 top-1/2 -translate-y-1/4">
  <div
    className="rounded-3xl overflow-visible pb-6 px-6"
    style={{
      background: "rgba(13, 26, 14, 0.75)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(139, 171, 142, 0.15)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
      
    }}
  >
        {/* Plant image — overflows top of card */}
        <div className="relative flex justify-center" style={{ marginTop: "80px" }}>
        <img
  src={aglaonema.src}
  alt="Aglaonema Plant"
  className="object-contain"
  style={{
    width: "260px",
    height: "260px",
    filter: "drop-shadow(0px -98px 80px rgba(0,0,0,0.17)) drop-shadow(0px -40.94px 33.42px rgba(0,0,0,0.1222)) drop-shadow(0px -21.89px 17.87px rgba(0,0,0,0.1013)) drop-shadow(0px -12.27px 10.02px rgba(0,0,0,0.085)) drop-shadow(0px -6.52px 5.32px rgba(0,0,0,0.0687)) drop-shadow(0px -2.71px 2.21px rgba(0,0,0,0.0478))",
  }}
/>
          
        </div>

        {/* Plant info */}
        <div className="space-y-3 mt-4">
          <p className="text-sage-400 text-xs uppercase tracking-widest font-medium">
            Indoor Plant
          </p>
          <div className="flex items-center justify-between">
            <h3
              className="text-white text-xl lg:text-2xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Aglaonema plant
            </h3>
            <ChevronRight className="w-5 h-5 text-sage-400" />
          </div>

          <button className="w-full btn-outline text-center py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-all">
            Buy Now
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-6 h-1 bg-white/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}