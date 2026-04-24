import { motion } from "framer-motion";

const trainers: string[] = [
  "Lara Baskar", "Afreen", "Geetha", "Pavithra", "Muthamil", "Sethu",
  "Siva Suresh", "Gobi", "Ravi", "Vinoth", "Roshan", "Sripugal",
  "Akash", "Hari", "Mukilan", "Ishwerya", "Dhina", "Nelson",
  "Jasmine", "Mahesh", "Gopal", "Gnana Selvi", "Viskulesh", "Nandhini",
];

const row1 = trainers.slice(0, 12);
const row2 = trainers.slice(12);

function Pill({ name }: { name: string }) {
  return (
    <div className="group shrink-0 mx-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-soft hover:shadow-glow-strong hover:bg-gradient-to-br hover:from-yellow-glow/30 hover:to-yellow-soft transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-yellow flex items-center justify-center text-ink font-bold text-xs shadow-glow group-hover:scale-110 transition-transform">
          {name.charAt(0)}
        </div>
        <span className="font-semibold text-sm text-foreground/85 group-hover:text-yellow-deep whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
}

export function Trainers() {
  return (
    <section id="trainers" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
            Experienced mentors shaping future careers.
          </p>
        </motion.div>
      </div>

      <div className="space-y-5 marquee-pause mask-fade-x">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {[...row1, ...row1].map((n, i) => <Pill key={`r1-${i}`} name={n} />)}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-fast" style={{ animationDirection: "reverse" }}>
            {[...row2, ...row2, ...row2].map((n, i) => <Pill key={`r2-${i}`} name={n} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
