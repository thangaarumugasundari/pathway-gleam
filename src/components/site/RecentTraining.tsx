import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Training = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  conducted_date: string;
};

export function RecentTraining() {
  const [items, setItems] = useState<Training[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from("recent_trainings")
        .select("id,title,description,image_url,conducted_date")
        .order("conducted_date", { ascending: false })
        .limit(6);
      if (!active) return;
      if (!error && data) setItems(data as Training[]);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

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

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white/60 rounded-3xl h-80 animate-pulse" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="text-center text-foreground/60">No recent trainings yet. Add some from your backend.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((b, i) => (
              <motion.article
                key={b.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white/80 backdrop-blur-xl border border-white shadow-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden bg-yellow-soft">
                  {b.image_url && (
                    <img
                      src={b.image_url}
                      alt={b.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(b.conducted_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-yellow-deep transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {b.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
