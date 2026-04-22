import { motion } from "framer-motion";

const trainers: string[] = [
  "Lara Baskar",
  "Afreen",
  "Geetha",
  "Pavithra",
  "Muthamil",
  "Sethu",
  "Siva Suresh",
  "Gobi",
  "Ravi",
  "Vinoth",
  "Roshan",
  "Sripugal",
  "Akash",
  "Hari",
  "Mukilan",
  "Ishwerya",
  "Dhina",
  "Nelson",
  "Jasmine",
  "Mahesh",
  "Gopal",
  "Gnana Selvi",
  "Viskulesh",
  "Nandhini",
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Training{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Powerhouse
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Senior aptitude trainers driving every success story.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {trainers.map((name, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white shadow-soft rounded-2xl px-3 py-4 flex items-center justify-center text-center min-h-[68px] hover:bg-gradient-to-br hover:from-yellow-glow/30 hover:to-yellow-soft hover:shadow-glow-strong hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-sm sm:text-base font-semibold text-foreground/85 group-hover:text-yellow-deep transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
