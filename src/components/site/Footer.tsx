import logo from "@/assets/connect-logo-full.png";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-96 w-96 bg-yellow-glow/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 h-96 w-96 bg-yellow-deep/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-4 inline-block">
              <img src={logo} alt="CONNECT Training Solutions" className="h-14 w-auto block" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Empowering students with industry-ready skills since 2015.
            </p>
            <div className="mt-5 space-y-2">
              <a href="tel:+919677964379" className="flex items-center gap-2 text-sm text-white/80 hover:text-yellow-glow transition-colors">
                <Phone className="h-4 w-4" /> +91 96779 64379
              </a>
              <a href="tel:+918870879359" className="flex items-center gap-2 text-sm text-white/80 hover:text-yellow-glow transition-colors">
                <Phone className="h-4 w-4" /> +91 88708 79359
              </a>
              <a href="mailto:murali@connectplacement.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-yellow-glow transition-colors">
                <Mail className="h-4 w-4" /> murali@connectplacement.com
              </a>
            </div>
          </div>

          <FooterCol title="Company" links={[
            { label: "About", href: "#about" },
            { label: "Trainers", href: "#trainers" },
            { label: "Contact", href: "#contact" },
          ]} />

          <FooterCol title="Services" links={[
            { label: "Aptitude", href: "#services" },
            { label: "Soft Skills", href: "#services" },
            { label: "Technical Training", href: "#services" },
            { label: "Placement Guidance", href: "#services" },
          ]} />

          <FooterCol title="Resources" links={[
            { label: "Testimonials", href: "#testimonials" },
            { label: "College Partners", href: "#colleges" },
            { label: "Blog", href: "#blog" },
          ]} />
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2026 CONNECT Training Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-glow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-glow transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-bold mb-4 text-yellow-glow">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-white/70 hover:text-yellow-glow hover:translate-x-1 inline-block transition-all">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
