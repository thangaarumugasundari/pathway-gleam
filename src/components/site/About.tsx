import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-yellow-glow/20 rounded-full blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            About Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Building <span className="text-glow text-yellow-deep">Tomorrow's</span> Talent
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl leading-relaxed text-foreground/85 font-light"
        >
          We train engineering college students to get placed in{" "}
          <span className="font-semibold text-glow text-yellow-deep">top companies</span>.
          With over <span className="font-semibold text-glow text-yellow-deep">10+ years</span> of experience since
          2015, we have trained across <span className="font-semibold text-glow text-yellow-deep">Tamil Nadu</span> and
          created <span className="font-semibold text-glow text-yellow-deep">5000+ success stories</span>.
        </motion.p>
      </div>
    </section>
  );
}
