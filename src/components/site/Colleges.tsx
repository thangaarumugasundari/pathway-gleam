import { motion } from "framer-motion";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides: string[][][] = [
  [
    ["National Engineering College", "Government College of Engineering", "Kamaraj College of Engineering", "Sethu Institute of Technology"],
    ["DMI College of Engineering", "JP College of Engineering", "Kalaignar Karunanidhi Institute of Technology", "Velammal College of Engineering"],
  ],
  [
    ["KLN College of Engineering", "Dr. Sivanthi Aditanar College of Engineering", "Ponjesly Engineering College", "Rohini College of Engineering"],
    ["Stella Mary's College of Engineering", "Amrita Engineering College", "St. Xavier's Catholic College of Engineering", "Francis Xavier College of Engineering"],
  ],
  [
    ["Coimbatore Institute of Technology"],
    [],
  ],
];

export function Colleges() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  return (
    <section id="colleges" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-soft/50 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 px-2">
                <div className="bg-white/60 backdrop-blur-xl border border-white shadow-soft rounded-3xl py-12 px-6 min-h-[260px] flex flex-col justify-center gap-8">
                  {slide.map((line, lineIdx) => (
                    <div
                      key={lineIdx}
                      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
                    >
                      {line.map((name) => (
                        <span
                          key={name}
                          className="relative text-base sm:text-lg font-semibold text-foreground/85 cursor-default group"
                        >
                          {name}
                          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-yellow-deep to-yellow-glow group-hover:w-full transition-all duration-300" />
                        </span>
                      ))}
                    </div>
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
