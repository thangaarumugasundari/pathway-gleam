import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const socials = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/connect-training-solutions-private-limited/",
    label: "LinkedIn",
    color: "hover:bg-[#0A66C2]",
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/share/1CtoUR8y8e/?mibextid=wwXIfr",
    label: "Facebook",
    color: "hover:bg-[#1877F2]",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/connectmurali?igsh=M3k2Z2cwam96bTU3",
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-soft/40 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let's get{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              CONNECTed
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">Reach out to us through any platform</p>

          <div className="mt-8 flex justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`group h-14 w-14 rounded-2xl bg-white shadow-card flex items-center justify-center text-foreground hover:text-white hover:scale-110 hover:shadow-glow-strong transition-all duration-300 ${s.color}`}
              >
                <s.Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="tel:+919677964379"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white/80 backdrop-blur-xl border border-white shadow-card rounded-3xl p-7 hover:-translate-y-2 hover:shadow-glow transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-yellow shadow-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="h-5 w-5 text-ink" />
            </div>
            <h4 className="font-bold mb-1">Phone</h4>
            <p className="text-muted-foreground text-sm">+91 96779 64379</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-white/80 backdrop-blur-xl border border-white shadow-card rounded-3xl p-7 hover:-translate-y-2 hover:shadow-glow transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-yellow shadow-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="h-5 w-5 text-ink" />
            </div>
            <h4 className="font-bold mb-1">Email</h4>
            <a href="mailto:connectmurali@gmail.com" className="block text-muted-foreground text-sm hover:text-yellow-deep transition-colors">connectmurali@gmail.com</a>
            <a href="mailto:connectoperations@gmail.com" className="block text-muted-foreground text-sm hover:text-yellow-deep transition-colors">connectoperations@gmail.com</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-white/80 backdrop-blur-xl border border-white shadow-card rounded-3xl p-7 hover:-translate-y-2 hover:shadow-glow transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-yellow shadow-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="h-5 w-5 text-ink" />
            </div>
            <h4 className="font-bold mb-1">Office</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              110E 10/5, Xavier Street, Barani Nagar, Vannarpettai, Tirunelveli - 627003
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 bg-white/60 backdrop-blur-xl border border-white shadow-soft rounded-3xl p-6 text-center"
        >
          <div className="text-xs font-semibold tracking-wider text-yellow-deep uppercase mb-1">Registered Office</div>
          <p className="text-foreground/80 text-sm">
            18 A/2, 5th Street, Sivanthi Nagar, Tirunelveli - 627001
          </p>
        </motion.div>
      </div>
    </section>
  );
}
