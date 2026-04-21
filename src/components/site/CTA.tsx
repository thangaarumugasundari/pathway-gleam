import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-yellow rounded-[2.5rem] p-10 sm:p-14 text-center overflow-hidden animate-pulse-glow"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-white/20 rounded-full blur-3xl" />
          <div className="relative">
            <Sparkles className="h-10 w-10 text-ink mx-auto mb-4" />
            <h3 className="text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Need a customized training program for your college?
            </h3>
            <p className="mt-3 text-ink/80 text-lg">
              Let's design a program that fits your students' goals.
            </p>
            <a
              href="https://wa.me/919677964379"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-white font-semibold shadow-card hover:scale-105 transition-transform"
            >
              Request Proposal
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
