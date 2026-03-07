import { cn } from "@/lib/utils";

type AnimatedGradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient-pan_5s_linear_infinite]",
        "bg-[linear-gradient(90deg,#1a1a1a_0%,#cc0000_35%,#cc5500_70%,#1a1a1a_100%)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
