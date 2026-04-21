import { motion } from "framer-motion";
import { WordCloud } from "./WordCloud";

const trainers = [
  "Lara Baskar", "Afreen", "Geetha", "Pavithra", "Muthamil", "Sethu",
  "Siva Suresh", "Gobi", "Ravi", "Vinoth", "Roshan", "Sripugal",
  "Akash", "Hari", "Mukilan", "Ishwerya", "Dhina", "Nelson",
  "Jasmine", "Mahesh", "Gopal", "Gnana Selvi", "Viskulesh", "Nandhini",
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
          className="text-center mb-12"
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
          <p className="mt-4 text-muted-foreground">Senior aptitude trainers driving every success story.</p>
        </motion.div>

        <div className="bg-white/50 backdrop-blur-xl border border-white shadow-card rounded-3xl py-12 px-4 sm:px-8">
          <WordCloud items={trainers} palette="mixed" />
        </div>
      </div>
    </section>
  );
}
