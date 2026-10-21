import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBoazProps {
  className?: string;
  size?: number;
  variant?: "logo" | "sketch";
}

const FloatingBoaz = ({ className, size = 100, variant = "logo" }: FloatingBoazProps) => {
  const imageSrc = variant === "logo" ? "/assets/boaz-logo.png" : "/assets/boaz-sketch.png";

  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 1, -1, 1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn("relative z-20 pointer-events-none", className)}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{
          scaleY: [1, 0.95, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full"
      >
        <img 
          src={imageSrc} 
          alt="Boaz Owl" 
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingBoaz;
