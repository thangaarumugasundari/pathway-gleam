import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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

function Card({ name }: { name: string }) {
  return (
    <div className="shrink-0 mx-3 min-w-[280px] px-6 py-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white shadow-soft hover:shadow-glow transition-all duration-300 flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-yellow shadow-glow flex items-center justify-center shrink-0">
        <GraduationCap className="h-5 w-5 text-ink" />
      </div>
      <span className="font-semibold text-sm text-foreground/90">{name}</span>
    </div>
  );
}

export function Colleges() {
  const half1 = colleges.slice(0, Math.ceil(colleges.length / 2));
  const half2 = colleges.slice(Math.ceil(colleges.length / 2));

  return (
    <section id="colleges" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-soft/50 to-transparent" />
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-6xl mx-auto px-6"
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
            Trusted by leading institutions across Tamil Nadu.
          </p>
        </motion.div>

        <div className="space-y-5 marquee-pause mask-fade-x">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...half1, ...half1].map((n, i) => <Card key={`c1-${i}`} name={n} />)}
            </div>
          </div>
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee" style={{ animationDirection: "reverse", animationDuration: "45s" }}>
              {[...half2, ...half2].map((n, i) => <Card key={`c2-${i}`} name={n} />)}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 px-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur border border-yellow-glow/40 shadow-soft text-sm font-semibold text-foreground/85">
            <span className="h-2 w-2 rounded-full bg-yellow-deep animate-pulse" />
            Trusted by 50+ Engineering Colleges across Tamil Nadu
          </span>
        </div>
      </div>
    </section>
  );
}
