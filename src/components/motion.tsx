import {
  motion,
  stagger as staggerChildren,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

import {
  distance,
  duration as durations,
  revealTransition,
  revealVariants,
  revealViewport,
  stagger,
  type RevealFrom,
} from "@/lib/motion";

/** The elements these wrappers can render as. */
type MotionTag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "ul"
  | "ol"
  | "li"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "figure";

const motionTag = (tag: MotionTag) => motion[tag] as typeof motion.div;

/** A duration from `@/lib/motion` by name, or seconds. */
type EntranceDuration = keyof typeof durations | number;

const seconds = (d: EntranceDuration) =>
  typeof d === "number" ? d : durations[d];

type WrapperProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "variants" | "transition"
> & {
  /** The element to render. Defaults to `div`. */
  as?: MotionTag;
};

export type RevealProps = WrapperProps &
  RevealFrom & {
    /** Seconds to wait once the element is in view. */
    delay?: number;
    /** The hero's longer timing and travel (`duration.hero`, `distance.hero`). */
    hero?: boolean;
    /** How long the entrance runs: `"fade"`, `"reveal"`, `"hero"`, or seconds. */
    duration?: EntranceDuration;
  };

/**
 * One element that eases in as it scrolls into view, with the site's shared
 * timing. Rises by default; pass `x`, `y` or `scale` to enter from elsewhere.
 * Entering from the right (`x` > 0) sits past the screen edge until it
 * arrives, so give its section `overflow-x-clip`. Under reduced motion it
 * renders in place.
 *
 *   <Reveal as="h2" className="text-4xl md:text-6xl">Our work</Reveal>
 *   <Reveal x={-32} delay={0.1}>…</Reveal>
 *   <Reveal hero duration={1.4}>…</Reveal>
 */
export function Reveal({
  as = "div",
  x,
  y,
  scale,
  delay = 0,
  hero = false,
  duration,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motionTag(as);
  const variants = revealVariants(
    x == null && y == null && scale == null
      ? { y: hero ? distance.hero : distance.reveal }
      : { x, y, scale },
    revealTransition(delay, seconds(duration ?? (hero ? "hero" : "reveal"))),
  );
  return (
    <Tag
      variants={variants}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={revealViewport}
      {...props}
    />
  );
}

export type StaggerProps = WrapperProps & {
  /** Seconds between children. Defaults to the shared `stagger`. */
  interval?: number;
  /** Seconds before the first child starts. */
  delay?: number;
};

/**
 * A group whose `<StaggerItem>` children enter one after another when the
 * group scrolls into view. The group owns the timing, so a grid's items never
 * wait on their own scroll triggers.
 *
 *   <Stagger as="ul" className="grid gap-6 md:grid-cols-3">
 *     {items.map((item) => <StaggerItem as="li" key={item.id}>…</StaggerItem>)}
 *   </Stagger>
 */
export function Stagger({
  as = "div",
  interval = stagger,
  delay = 0,
  ...props
}: StaggerProps) {
  const reduce = useReducedMotion();
  const Tag = motionTag(as);
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: staggerChildren(interval, { startDelay: delay }),
      },
    },
  };
  return (
    <Tag
      variants={variants}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={revealViewport}
      {...props}
    />
  );
}

export type StaggerItemProps = WrapperProps &
  RevealFrom & {
    /** How long its entrance runs: `"fade"`, `"reveal"`, `"hero"`, or seconds. */
    duration?: EntranceDuration;
  };

/** One child of a `<Stagger>` group. Rises by default; pass `x`, `y` or `scale` to change that. */
export function StaggerItem({
  as = "div",
  x,
  y,
  scale,
  duration = "reveal",
  ...props
}: StaggerItemProps) {
  const Tag = motionTag(as);
  const variants = revealVariants(
    x == null && y == null && scale == null ? undefined : { x, y, scale },
    revealTransition(undefined, seconds(duration)),
  );
  return <Tag variants={variants} {...props} />;
}
