import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "FloraVision — Earth's Exhale",
  description: "Premium natural plants for your home and workspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Caveat:wght@400;500;600&family=Inter:wght@400;500;600&family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </head>
     <body style={{
  backgroundColor: "#1B2316",
  backgroundImage: "url('/bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center bottom",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  boxShadow: "260px 616px 250px rgba(255,255,255,0.01), 147px 346px 226px rgba(255,255,255,0.03), 65px 154px 167px rgba(255,255,255,0.06), 16px 38px 92px rgba(255,255,255,0.07)",
}}>
      {children}
      </body>
    </html>
  );
}
