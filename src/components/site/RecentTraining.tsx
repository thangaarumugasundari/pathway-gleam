import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Training = {
  id: string;
  title: string;
  description: string;
  images: string[];
  conducted_date: string;
};

const TRAININGS: Training[] = [
  {
    id: "1",
    title: "Government College of Engineering - Tirunelveli",
    description: "Aptitude Training Program conducted at the Government College of Engineering (GCE) for 1st, 2nd, and 3rd year students from various departments. The training focused on quantitative aptitude, logical reasoning, verbal ability, and problem-solving skills. Students actively participated in practice sessions and learned useful techniques to improve confidence, speed, and accuracy for placements and competitive exams.",
    images: [
      "/images/gce-training.jpg",
      "/images/gce-training-2.png",
      "/images/gce-training-3.jpg"
    ],
    conducted_date: "2026-05-06"
  },
  {
    id: "2",
    title: "JP College of Engineering",
    description: "We successfully conducted a 4-day intensive aptitude training program for 2nd year students at JP College. The sessions covered key topics including Quantitative Aptitude, Logical Reasoning, and Problem-Solving techniques. The program helped students build a strong foundation for future campus placements and boosted their confidence in tackling aptitude challenges.",
    images: [
      "/images/jp-training-1.png",
      "/images/jp-training-2.png",
      "/images/jp-training-3.png"
    ],
    conducted_date: "2026-05-01"
  }
];

export function RecentTraining() {
  return (
    <section id="recent-training" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-3">
            Latest
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Recent{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Trainings
            </span>
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            A glimpse into our most recent training programs delivered across colleges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TRAININGS.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white/90 backdrop-blur-xl border border-white/50 shadow-card rounded-[2rem] overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all duration-500 flex flex-col"
            >
              <div className="relative group/carousel overflow-hidden bg-yellow-soft">
                <Carousel className="w-full">
                  <CarouselContent>
                    {b.images.map((img, index) => (
                      <CarouselItem key={index} className="pl-0">
                        <div className="aspect-[16/10] w-full">
                          <img
                            src={img}
                            alt={`${b.title} - ${index + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {b.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-4 h-9 w-9 opacity-0 group-hover/carousel:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 border-none text-white backdrop-blur-md" />
                      <CarouselNext className="right-4 h-9 w-9 opacity-0 group-hover/carousel:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 border-none text-white backdrop-blur-md" />
                    </>
                  )}
                </Carousel>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs font-medium text-yellow-deep/80 uppercase tracking-wider mb-3">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(b.conducted_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <h3 className="font-bold text-xl leading-tight mb-4 group-hover:text-yellow-deep transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
