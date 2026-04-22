import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { GraduationCap } from "lucide-react";

const colleges = [
  "National Engineering College",
  "Government College of Engineering",
  "Kamaraj College of Engineering",
  "Sethu Institute of Technology",
  "DMI College of Engineering",
  "JP College of Engineering",
  "Kalaignar Karunanidhi Institute of Technology",
  "Velammal College of Engineering",
  "KLN College of Engineering",
  "Dr. Sivanthi Aditanar College of Engineering",
  "Ponjesly Engineering College",
  "Rohini College of Engineering",
  "Stella Mary's College of Engineering",
  "Amrita Engineering College",
  "St. Xavier's Catholic College of Engineering",
  "Francis Xavier College of Engineering",
  "Coimbatore Institute of Technology",
];

// Group colleges into slides of 4
function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function Colleges() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  const slides = chunk(colleges, 4);

  return (
    <section id="colleges" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-soft/50 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Partnerships
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            College{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by 50+ Engineering Colleges across Tamil Nadu
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((group, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 px-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {group.map((name) => (
                    <motion.div
                      key={name}
                      whileHover={{ y: -6, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative bg-card rounded-2xl p-6 shadow-soft border-b-4 border-yellow-deep hover:shadow-glow transition-shadow duration-300 min-h-[160px] flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-yellow flex items-center justify-center mb-3 shadow-glow group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-6 h-6 text-ink" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground leading-snug">
                        {name}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
