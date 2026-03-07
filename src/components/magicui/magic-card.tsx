import { cn } from "@/lib/utils";

type MagicCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function MagicCard({ children, className }: MagicCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-colors",
        "border-black/8 bg-white shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
