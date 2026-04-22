import { motion } from "framer-motion";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides: string[][][] = [
  [
    ["Lara Baskar", "Afreen", "Geetha", "Pavithra", "Muthamil", "Sethu", "Siva Suresh"],
    ["Gobi", "Ravi", "Vinoth", "Roshan", "Sripugal", "Akash", "Hari"],
  ],
  [
    ["Mukilan", "Ishwerya", "Dhina", "Nelson", "Jasmine", "Mahesh", "Gopal"],
    ["Gnana Selvi", "Viskulesh", "Nandhini"],
  ],
];

export function Trainers() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  return (
    <section id="trainers" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Training{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Powerhouse
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Senior aptitude trainers driving every success story.
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 px-2">
                <div className="bg-white/60 backdrop-blur-xl border border-white shadow-soft rounded-3xl py-12 px-6 min-h-[240px] flex flex-col justify-center gap-7">
                  {slide.map((line, lineIdx) => (
                    <div
                      key={lineIdx}
                      className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
                    >
                      {line.map((name) => (
                        <span
                          key={name}
                          className="text-base sm:text-lg font-semibold text-foreground/85 cursor-default transition-all duration-300 hover:text-yellow-deep hover:[text-shadow:_0_0_18px_rgb(234_179_8_/_0.7)]"
                        >
                          {name}
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
