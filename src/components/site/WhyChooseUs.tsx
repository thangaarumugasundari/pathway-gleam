import { motion } from "framer-motion";
import { Award, Users, Building2, Settings2, GraduationCap, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Award, title: "10+ Years Industry Experience", desc: "Proven track record since 2015 across Tamil Nadu." },
  { icon: Users, title: "5000+ Student Success Stories", desc: "Real placements, real careers, real impact." },
  { icon: Building2, title: "50+ College Partnerships", desc: "Trusted by leading engineering institutions." },
  { icon: Settings2, title: "Customized Training Programs", desc: "Tailored to each college's batch and goals." },
  { icon: GraduationCap, title: "Expert Senior Trainers", desc: "Mentors with deep aptitude & soft-skill expertise." },
  { icon: Target, title: "Placement-Oriented Methodology", desc: "Every session designed for outcome, not just theory." },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-20 left-1/4 h-72 w-72 bg-yellow-glow/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 h-72 w-72 bg-yellow-deep/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Why Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Why Colleges Trust{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              CONNECT
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A decade of measurable outcomes, proudly built on trust and transformation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-white/75 backdrop-blur-xl border border-white rounded-3xl p-7 shadow-card hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-glow/0 to-yellow-glow/0 group-hover:from-yellow-glow/15 group-hover:to-transparent transition-all" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-yellow shadow-glow items-center justify-center mb-5 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                  <it.icon className="h-7 w-7 text-ink" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-bold mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
