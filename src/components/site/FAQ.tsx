import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Do you offer customized programs?",
    a: "Yes. We design every program around your college's batch size, branch, target companies and skill gaps — from a 30-hour aptitude bootcamp to a full year-long placement readiness track.",
  },
  {
    q: "Is online training available?",
    a: "Absolutely. We deliver live, instructor-led online sessions with mock tests, interactive doubt-clearing and recorded resources for revision.",
  },
  {
    q: "Can final year students join?",
    a: "Yes — final year students benefit the most from our intensive placement track covering aptitude, soft skills, mock interviews and resume building.",
  },
  {
    q: "Do you conduct mock interviews?",
    a: "Yes. We run technical, HR and panel-style mock interviews with detailed individual feedback so students walk into the real one with confidence.",
  },
  {
    q: "Do you train faculty too?",
    a: "Yes. We offer faculty development programs to help college teams sustain aptitude and soft-skill coaching internally.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-20 right-0 h-72 w-72 bg-yellow-glow/15 rounded-full blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-soft border border-yellow-glow/40 text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-4">
            <HelpCircle className="h-3.5 w-3.5" /> FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/75 backdrop-blur-xl border border-white shadow-card rounded-3xl p-4 sm:p-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-yellow-soft last:border-0">
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:text-yellow-deep py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
