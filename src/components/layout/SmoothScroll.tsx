"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LenisContext = createContext<Lenis | null>(null);

export function useLenisInstance() {
  return useContext(LenisContext);
}

export default function SmoothScroll({
  children,
  paused,
}: {
  children: React.ReactNode;
  paused: boolean;
}) {
  const [lenis] = useState<Lenis | null>(() => {
    if (typeof window === "undefined") return null;
    return new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });
  });

  useEffect(() => {
    if (!lenis) return;

    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;
    if (paused) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [lenis, paused]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
