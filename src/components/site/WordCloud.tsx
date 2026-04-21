import { motion } from "framer-motion";
import { useMemo } from "react";

export function WordCloud({ items, palette = "yellow" }: { items: string[]; palette?: "yellow" | "mixed" }) {
  const styled = useMemo(() => {
    return items.map((name, i) => {
      const sizes = ["text-base", "text-lg", "text-xl", "text-2xl", "text-3xl"];
      const seed = (name.length * 7 + i * 13) % sizes.length;
      const size = sizes[seed];
      const delay = (i % 7) * 0.4;
      const dur = 6 + ((i * 3) % 5);
      const tones =
        palette === "mixed"
          ? ["text-yellow-deep", "text-foreground/80", "text-yellow-deep/90", "text-foreground"]
          : ["text-yellow-deep", "text-yellow-deep/80", "text-foreground/80", "text-foreground"];
      const tone = tones[(i + name.length) % tones.length];
      const weight = i % 3 === 0 ? "font-bold" : i % 3 === 1 ? "font-semibold" : "font-medium";
      return { name, size, delay, dur, tone, weight };
    });
  }, [items, palette]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-4 max-w-5xl mx-auto px-2">
      {styled.map((s, i) => (
        <motion.span
          key={s.name + i}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.03 }}
          whileHover={{ scale: 1.15, color: "oklch(0.78 0.19 88)" }}
          style={{
            animation: `float-slow ${s.dur}s ease-in-out ${s.delay}s infinite`,
            textShadow: "0 4px 20px oklch(0.85 0.18 90 / 0.25)",
          }}
          className={`${s.size} ${s.tone} ${s.weight} cursor-default tracking-tight transition-colors`}
        >
          {s.name}
        </motion.span>
      ))}
    </div>
  );
}
