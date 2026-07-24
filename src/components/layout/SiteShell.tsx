"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import SmoothScroll from "./SmoothScroll";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import Navbar from "./Navbar";
import MobileStickyCTA from "./MobileStickyCTA";
import Footer from "./Footer";
import { GrainOverlay } from "@/components/ui/FloatingShapes";
import { scrollToReservation } from "@/lib/scroll";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <SmoothScroll paused={loading}>
      <Loader onComplete={() => setLoading(false)} />
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />
      <Navbar onReserve={scrollToReservation} />
      <main className="cursor-none-desktop">{children}</main>
      <Footer />
      <MobileStickyCTA onReserve={scrollToReservation} />
    </SmoothScroll>
  );
}
