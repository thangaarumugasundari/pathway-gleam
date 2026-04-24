import { motion } from "framer-motion";
import { Counter } from "./Counter";

const metrics = [
  { value: 5000, suffix: "+", label: "Students Trained" },
  { value: 50, suffix: "+", label: "College Partners" },
  { value: 100, suffix: "+", label: "Expert Trainers" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

export function Metrics() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-ink rounded-[2.5rem] overflow-hidden shadow-card"
        >
          <div className="absolute -top-32 -left-20 h-96 w-96 bg-yellow-glow/25 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 bg-yellow-deep/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          <div className="relative px-6 sm:px-12 py-16 lg:py-20">
            <div className="text-center mb-12">
              <div className="inline-block text-xs font-semibold tracking-[0.25em] text-yellow-glow uppercase mb-3">
                Success Metrics
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Proven impact, measured in{" "}
                <span className="bg-gradient-to-br from-yellow-glow to-yellow-deep bg-clip-text text-transparent">
                  outcomes
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-yellow-glow to-yellow-deep bg-clip-text text-transparent">
                    <Counter to={m.value} />
                    {m.suffix}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-medium text-white/70 tracking-wide uppercase">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
