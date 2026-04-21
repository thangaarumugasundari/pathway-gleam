import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const milestones = [
  { year: "2015", text: "Company Founded" },
  { year: "2017", text: "Expanded to multiple colleges" },
  { year: "2020", text: "2000+ students trained" },
  { year: "2023", text: "5000+ success stories" },
  { year: "2026", text: "Growing across Tamil Nadu" },
];

export function Journey() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause())),
      { threshold: 0.3 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="journey" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Our Story
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 bg-gradient-yellow blur-2xl opacity-40 rounded-3xl" />
            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-glow-strong border-4 border-white">
              <video
                ref={videoRef}
                src="/journey.mp4"
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-yellow-glow via-yellow-deep to-transparent" />
            <ul className="space-y-8">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-1 h-11 w-11 rounded-full bg-gradient-yellow shadow-glow flex items-center justify-center font-bold text-ink text-xs">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-white/70 backdrop-blur-xl border border-white shadow-card rounded-2xl p-5 hover:-translate-y-1 transition-transform">
                    <div className="text-yellow-deep font-bold text-lg">{m.year}</div>
                    <div className="text-foreground/80 mt-0.5">{m.text}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
