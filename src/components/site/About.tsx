import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-yellow-glow/20 rounded-full blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            About Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Building <span className="text-glow text-yellow-deep">Tomorrow's</span> Talent
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/75 leading-relaxed">
            We train engineering college students to get placed in top companies. With over{" "}
            <span className="font-semibold text-yellow-deep">10+ years</span> of experience since 2015, we've
            created <span className="font-semibold text-yellow-deep">5000+ success stories</span> across Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-card border-l-[6px] border-yellow-deep hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-yellow-glow/30 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-yellow shadow-glow items-center justify-center mb-5">
                <Target className="h-7 w-7 text-ink" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-foreground/75 leading-relaxed">
                To empower every engineering student with industry-ready skills, sharp aptitude, and confident
                communication — bridging the gap between college and career through structured, mentor-led training.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-glow border border-yellow-glow/60 hover:-translate-y-2 hover:shadow-glow-strong transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-yellow-glow/30 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex h-14 w-14 rounded-2xl bg-white border-2 border-yellow-deep shadow-glow items-center justify-center mb-5">
                <Eye className="h-7 w-7 text-yellow-deep" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-foreground/75 leading-relaxed">
                To be Tamil Nadu's most trusted training partner — recognized for transforming students into
                placement-ready professionals who lead with skill, integrity, and confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
