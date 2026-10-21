import type { Transition, Variants } from "framer-motion";

/**
 * The site's motion settings, shared by framer-motion, GSAP and CSS so every
 * entrance moves with the same feel. Import these instead of typing numbers
 * into each component: one place to retune the whole site.
 */

/** Cubic-bezier curves, as framer-motion `ease` arrays. */
export const ease = {
  /** Expo-out: a quick start that settles slowly. The default for entrances. */
  out: [0.16, 1, 0.3, 1],
  /** For things moving between two on-screen states (panels, curtains). */
  inOut: [0.65, 0, 0.35, 1],
} as const;

/** The same curves under GSAP's names. */
export const gsapEase = {
  out: "expo.out",
  inOut: "power3.inOut",
  /** Scroll-scrubbed tweens: the scroll position is the easing. */
  scrub: "none",
} as const;

/** The same curves for CSS `transition-timing-function` / `animation-timing-function`. */
export const cssEase = {
  out: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
} as const;

/** Durations in seconds (GSAP and framer-motion both take seconds). */
export const duration = {
  /** Hover, press and focus feedback. */
  micro: 0.2,
  /** Opacity, which should finish before the movement does. */
  fade: 0.6,
  /** A block or card entering on scroll. */
  reveal: 0.9,
  /** The hero's entrance and other large, single moments. */
  hero: 1.1,
} as const;

/** How far an entrance travels, in px. Short travel over a longer time reads as fluid. */
export const distance = {
  reveal: 28,
  hero: 40,
} as const;

/** Delay between siblings in a staggered group, in seconds. */
export const stagger = 0.07;

/** When a scroll reveal fires: once, a little after the element enters the viewport. */
export const revealViewport = {
  once: true,
  margin: "0px 0px -12% 0px",
} as const;

/**
 * An entrance transition: the movement on `duration.reveal` (or `seconds`),
 * the opacity on the shorter fade, both on expo-out.
 *
 * Leave `delay` out inside a `<Stagger>` (or any parent that staggers its
 * children): a child's own `delay`, even 0, replaces the one its parent gives it.
 */
export function revealTransition(
  delay?: number,
  seconds: number = duration.reveal,
): Transition {
  const wait = delay ? { delay } : {};
  return {
    duration: seconds,
    ease: ease.out,
    ...wait,
    opacity: {
      duration: Math.min(duration.fade, seconds),
      ease: ease.out,
      ...wait,
    },
  };
}

/** Where an entrance starts from, relative to its resting place. */
export interface RevealFrom {
  x?: number;
  y?: number;
  scale?: number;
}

/** `hidden` / `visible` variants for one entering element. */
export function revealVariants(
  from: RevealFrom = { y: distance.reveal },
  transition: Transition = revealTransition(),
): Variants {
  return {
    hidden: {
      opacity: 0,
      x: from.x ?? 0,
      y: from.y ?? 0,
      scale: from.scale ?? 1,
    },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, transition },
  };
}
