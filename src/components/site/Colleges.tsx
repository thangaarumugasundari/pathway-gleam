import { motion } from "framer-motion";

const colleges: string[] = [
  "National Engineering College",
  "Government College of Engineering",
  "Kamaraj College of Engineering",
  "Sethu Institute of Technology",
  "DMI College of Engineering",
  "JP College of Engineering",
  "Kalaignar Karunanidhi Institute of Technology",
  "Velammal College of Engineering",
  "KLN College of Engineering",
  "Dr. Sivanthi Aditanar College of Engineering",
  "Ponjesly Engineering College",
  "Rohini College of Engineering",
  "Stella Mary's College of Engineering",
  "Amrita Engineering College",
  "St. Xavier's Catholic College of Engineering",
  "Francis Xavier College of Engineering",
  "Coimbatore Institute of Technology",
];

export function Colleges() {
  return (
    <section id="colleges" className="relative py-24 lg:py-32 overflow-hidden">
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
            Partnerships
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            College{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by 50+ Engineering Colleges across Tamil Nadu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {colleges.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white shadow-soft rounded-2xl px-5 py-5 flex items-center justify-center text-center min-h-[88px] hover:shadow-glow hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
            >
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-deep to-yellow-glow" />
              <span className="text-sm sm:text-base font-semibold text-foreground/90 group-hover:text-yellow-deep transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
