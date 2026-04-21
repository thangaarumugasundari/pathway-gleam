import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Journey } from "@/components/site/Journey";
import { Colleges } from "@/components/site/Colleges";
import { Trainers } from "@/components/site/Trainers";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CONNECT Training Solutions — Transforming Students into Professionals" },
      {
        name: "description",
        content:
          "CONNECT Training Solutions (P) Ltd. offers premium aptitude, soft skills, technical training and placement guidance to engineering students across Tamil Nadu. 5000+ success stories since 2015.",
      },
      { property: "og:title", content: "CONNECT Training Solutions — Transforming Students into Professionals" },
      {
        property: "og:description",
        content: "Premium training & placement programs for engineering students. 50+ college partners, 5000+ success stories.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Journey />
      <Colleges />
      <Trainers />
      <Testimonials />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
