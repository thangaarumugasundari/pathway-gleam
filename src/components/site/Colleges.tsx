import { motion } from "framer-motion";
import { WordCloud } from "./WordCloud";

const colleges = [
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
          className="text-center mb-12"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Partnerships
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            College <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by 50+ Engineering Colleges across Tamil Nadu
          </p>
        </motion.div>

        <div className="bg-white/50 backdrop-blur-xl border border-white shadow-card rounded-3xl py-12 px-4 sm:px-8">
          <WordCloud items={colleges} />
        </div>
      </div>
    </section>
  );
}
