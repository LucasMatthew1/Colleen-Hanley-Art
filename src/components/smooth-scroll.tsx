import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis, { type LenisOptions } from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(REDUCED_MOTION).matches,
  );
  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION);
    const onChange = () => setReduce(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

/**
 * Smooth (inertial) page scrolling for the whole site. Wrap the app's routes
 * in it once, in `App.tsx`. Never create a second Lenis anywhere else.
 *
 * It runs Lenis on GSAP's clock and keeps ScrollTrigger in step with it, so
 * pinned and scrubbed sections move with the smoothed scroll instead of
 * lagging behind it. Scroll positions are re-measured once fonts and images
 * have loaded. Under reduced motion the page keeps native scrolling.
 */
export function SmoothScroll({
  children,
  options,
}: {
  children: ReactNode;
  /** Lenis options, e.g. `{ lerp: 0.08 }` for a heavier glide. */
  options?: LenisOptions;
}) {
  const reduce = usePrefersReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (reduce) return;
    const instance = new Lenis({
      lerp: 0.1,
      anchors: true,
      ...options,
      // GSAP's ticker drives it below.
      autoRaf: false,
    });
    instance.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    // A dropped frame must not make the scroll jump to catch up.
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);

    const refresh = () => ScrollTrigger.refresh();
    void document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      instance.destroy();
      setLenis(null);
    };
    // Options are read once, when smooth scrolling starts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

/**
 * The page's Lenis instance, or null without smooth scrolling (reduced motion,
 * or outside `<SmoothScroll>`). Always null-check it:
 *
 *   const lenis = useLenis();
 *   lenis?.stop();                 // hold the page still, e.g. under a preloader
 *   lenis?.start();
 *   lenis?.scrollTo("#pricing");   // smooth-scroll to a section
 */
export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}
