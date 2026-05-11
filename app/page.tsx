import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrendyPlantsSection from "@/components/sections/TrendyPlantsSection";

export default function Home() {
  return (
    <main className="min-h-screen" style={{  background: "#1B2316",
    minHeight: "100vh",
    position: "relative", }}>
      <Navbar />
      <HeroSection />
      <TrendyPlantsSection />
      <Footer />
    </main>
  );
}
