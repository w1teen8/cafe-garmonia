import { cn } from "@/lib/utils";
import { Reveal, SplitWords } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <h2
        className={cn(
          "font-display text-4xl leading-[1.08] text-balance md:text-5xl lg:text-6xl",
          tone === "light" ? "text-bg" : "text-primary"
        )}
      >
        <SplitWords text={title} />
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed md:text-lg",
              tone === "light" ? "text-beige/85" : "text-secondary",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
