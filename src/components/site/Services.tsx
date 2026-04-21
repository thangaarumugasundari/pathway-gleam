import { motion } from "framer-motion";
import { Brain, MessageSquare, Sparkles, Briefcase, Code2, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Brain, title: "Aptitude Training", desc: "Master quantitative, logical and reasoning skills with proven methodologies." },
  { icon: MessageSquare, title: "Verbal Ability", desc: "Sharpen English communication, grammar and comprehension." },
  { icon: Sparkles, title: "Soft Skills Development", desc: "Build confidence, teamwork and leadership for the workplace." },
  { icon: Briefcase, title: "Placement Guidance", desc: "End-to-end guidance from resume to final selection." },
  { icon: Cpu, title: "Technical Training", desc: "Hands-on coding, DSA and core technical fundamentals." },
  { icon: Code2, title: "Vibe Coding", desc: "Modern AI-assisted development workflows for the new era." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-soft/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            What We Offer
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Comprehensive training designed to make every student industry-ready.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-7 shadow-card hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-glow/0 to-yellow-glow/0 group-hover:from-yellow-glow/20 group-hover:to-transparent rounded-3xl transition-all" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-yellow shadow-glow mb-5 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                  <s.icon className="h-7 w-7 text-ink" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
