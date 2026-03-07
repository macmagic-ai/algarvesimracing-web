import { cn } from "@/lib/utils";

type BorderBeamProps = {
  className?: string;
};

export function BorderBeam({ className }: BorderBeamProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] p-px",
        "[background:linear-gradient(120deg,transparent_0%,rgba(180,0,0,0.35)_50%,transparent_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] animate-[beam-move_3s_linear_infinite]",
        className,
      )}
    />
  );
}
