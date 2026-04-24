import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ashmi Fathima S",
    text: "CONNECT Training Solutions provided excellent graduate and placement training. The trainers were patient and clear in every session.",
    rotate: -2,
  },
  {
    name: "Muthukumar S",
    role: "AI/DS — 2022",
    text: "Excellent aptitude and placement training. The mock tests boosted my confidence and helped me crack interviews easily.",
    rotate: 1.5,
  },
  {
    name: "Smega M",
    role: "IT",
    text: "Great place for aptitude and soft skills. The sessions were practical and full of useful tips for the real interview.",
    rotate: -1,
  },
  {
    name: "Vaishnavi R",
    text: "Very helpful training. The trainers explained every concept patiently until I understood completely.",
    rotate: 2,
  },
  {
    name: "Bhuvaneswari S",
    text: "Mock interviews helped me overcome fear. I walked into my real interview with so much more confidence.",
    rotate: -1.5,
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const go = (n: number) => {
    setIdx((n + testimonials.length) % testimonials.length);
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-soft/50 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Voice of Our{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Success
            </span>
          </h2>
        </motion.div>

        <div className="relative h-[26rem] sm:h-80 max-w-3xl mx-auto">
          {testimonials.map((t, i) => {
            const offset = i - idx;
            const isActive = i === idx;
            return (
              <motion.div
                key={t.name}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.9,
                  rotate: isActive ? t.rotate : t.rotate + offset * 4,
                  y: isActive ? 0 : 20,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ pointerEvents: isActive ? "auto" : "none" }}
              >
                <div className="bg-yellow-soft/90 backdrop-blur-xl border-2 border-yellow-glow/40 shadow-card rounded-3xl p-8 sm:p-12 max-w-2xl mx-4 relative">
                  <Quote className="absolute -top-4 -left-2 h-12 w-12 text-yellow-deep/40" fill="currentColor" />
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 text-yellow-deep" fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-hand text-2xl sm:text-3xl leading-snug text-foreground/90">
                    "{t.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-yellow flex items-center justify-center font-bold text-ink shadow-glow">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{t.name}</div>
                      {t.role && <div className="text-sm text-muted-foreground">{t.role}</div>}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(idx - 1)}
            aria-label="Previous"
            className="h-10 w-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-yellow-glow transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-yellow-deep" : "w-2 bg-yellow-deep/30"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(idx + 1)}
            aria-label="Next"
            className="h-10 w-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-yellow-glow transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
