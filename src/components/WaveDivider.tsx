import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveDividerProps {
  position?: "top" | "bottom";
  flip?: boolean;
  className?: string;
  color?: string;
}

const WaveDivider = ({ 
  position = "bottom", 
  flip = false, 
  className,
  color = "fill-background"
}: WaveDividerProps) => {
  return (
    <div 
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden leading-[0] z-10",
        position === "top" ? "top-0" : "bottom-0",
        flip && "scale-x-[-1]",
        position === "top" && "rotate-180",
        className
      )}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn("relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] grayscale contrast-125 opacity-20 mix-blend-multiply", color)}
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,1.42,1200,0H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
