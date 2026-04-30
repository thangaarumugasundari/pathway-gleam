import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, User, Clock, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Blog = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  published_date: string;
  author: string | null;
  category: string | null;
  read_time: string | null;
};

export function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("id,title,description,image_url,published_date,author,category,read_time")
        .order("published_date", { ascending: false })
        .limit(6);
      if (!active) return;
      if (!error && data) setBlogs(data as Blog[]);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-gradient-to-b from-yellow-soft/30 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-soft border border-yellow-glow/40 text-xs font-semibold tracking-[0.2em] text-yellow-deep uppercase mb-4">
            <BookOpen className="h-3.5 w-3.5" /> Insights
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            From Our{" "}
            <span className="bg-gradient-to-br from-yellow-deep to-yellow-glow bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Tips, insights and stories on aptitude training, placements and career growth.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white/60 rounded-3xl h-96 animate-pulse" />
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-foreground/60">No blog posts yet. Add some from your backend.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <motion.article
                key={b.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white/85 backdrop-blur-xl border border-white shadow-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden bg-yellow-soft relative">
                  {b.image_url && (
                    <img
                      src={b.image_url}
                      alt={b.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  {b.category && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-yellow-deep text-white text-[10px] font-bold tracking-wider uppercase">
                      {b.category}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(b.published_date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    {b.author && (
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {b.author}
                      </span>
                    )}
                    {b.read_time && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {b.read_time}
                      </span>
                    )}
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
