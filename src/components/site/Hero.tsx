import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-hero animate-gradient" />
      <div className="absolute top-20 -left-20 w-96 h-96 bg-yellow-glow/40 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 -right-20 w-[28rem] h-[28rem] bg-yellow-deep/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: "10s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass shadow-soft mb-6"
        >
          <Sparkles className="h-4 w-4 text-yellow-deep" />
          <span className="text-sm font-medium tracking-wide">Learn. Explore. Succeed.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Transforming Students into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Professionals
            </span>
            <span className="absolute inset-0 bg-yellow-glow/30 blur-2xl" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          We train engineering students to get placed in top companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919677964379"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-yellow text-ink font-semibold shadow-glow hover:shadow-glow-strong"
          >
            Request Proposal
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="btn-press inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-glass text-foreground font-semibold shadow-soft hover:bg-white"
          >
            View Programs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-foreground/70"
        >
          {["Since 2015", "Trusted by 50+ Colleges", "5000+ Success Stories", "Tamil Nadu Based"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-yellow-deep" />
              <span className="font-medium">{t}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: 10, suffix: "+", label: "Years Experience" },
            { value: 5000, suffix: "+", label: "Students Trained" },
            { value: 50, suffix: "+", label: "Colleges" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-glass shadow-card rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform"
            >
              <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
                <Counter to={stat.value} />{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
