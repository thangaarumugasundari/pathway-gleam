import { motion } from "framer-motion";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const trainers = [
  "Lara Baskar", "Afreen", "Geetha", "Pavithra", "Muthamil", "Sethu",
  "Siva Suresh", "Gobi", "Ravi", "Vinoth", "Roshan", "Sripugal",
  "Akash", "Hari", "Mukilan", "Ishwerya", "Dhina", "Nelson",
  "Jasmine", "Mahesh", "Gopal", "Gnana Selvi", "Viskulesh", "Nandhini",
];

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Trainers() {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  const slides = chunk(trainers, 6);

  return (
    <section id="trainers" className="relative py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            {slides.map((group, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 px-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {group.map((name) => (
                    <motion.div
                      key={name}
                      whileHover={{ y: -6, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative bg-card rounded-2xl p-5 shadow-soft hover:shadow-glow-strong transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[150px] border border-border hover:border-yellow-deep"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-yellow flex items-center justify-center mb-3 shadow-glow group-hover:animate-pulse-glow">
                        <span className="text-base font-bold text-ink">
                          {getInitials(name)}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground leading-tight">
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
