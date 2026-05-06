import { motion } from "framer-motion";
import { Calendar, User, Clock, BookOpen, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Blog = {
  id: string;
  title: string;
  description: string;
  content: string;
  image_url: string | null;
  published_date: string;
  author: string | null;
  category: string | null;
  read_time: string | null;
};

const BLOGS: Blog[] = [
  {
    id: "1",
    title: "Top 10 Skills for Campus Placement",
    description: "Placement success = skills + preparation + confidence. Master these 10 essential skills to get placement ready.",
    content: `
*Introduction*

Placement success = *skills + preparation + confidence*

🧩 *Aptitude*
Practice quant, reasoning, verbal
👉 Speed + accuracy

🗣️ *Communication*
Speak clearly, improve vocabulary
👉 Strong expression

📄 *Resume Building*
Simple, clean, skill-focused
👉 First impression

🎤 *Interview Skills*
Prepare answers, stay confident
👉 Be natural

💻 *Technical Knowledge*
Know the basics of your domain
👉 Strong foundation

👔 *Etiquette*
Dress well, be polite
👉 Professional image

👥 *GD Skills*
Speak smart, listen well
👉 Quality > quantity

⏱️ *Time Management*
Manage exam time
👉 Avoid delays

💡 *Confidence*
Stay positive
👉 Believe in yourself

📈 *Learning*
Keep upgrading skills
👉 Stay relevant

🚀 *Get Placement Ready*
👉 Join CONNECT Training Solutions
📲 Start your career today
    `,
    image_url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    published_date: "2026-05-06",
    author: "CONNECT Team",
    category: "Career Guidance",
    read_time: "3 Mins"
  },
  {
    id: "2",
    title: "How to Crack Aptitude Tests in 30 Days",
    description: "Aptitude tests are the first step in most campus placements. Master them in just 30 days with our proven strategy.",
    content: `
📘 *Introduction*

Aptitude tests are the first step in most campus placements. With the right strategy and daily practice, you can crack them in just 30 days.

📅 1. Follow a Daily Plan
Spend at least 1–2 hours daily on aptitude.
👉 Consistency is more important than studying for long hours.

🧩 2. Learn Basic Concepts
Start with fundamentals:
Percentages
Profit & Loss
Time & Work
👉 Strong basics help solve any problem easily.

⚡ 3. Use Shortcut Techniques
Learn tricks to solve faster.
👉 Saves time during exams.

⏱️ 4. Practice with Timer
Always solve questions with a timer.
👉 Improves speed + accuracy.

📊 5. Take Mock Tests
Attempt weekly mock tests.
👉 Helps you understand exam pattern.

❌ 6. Analyze Mistakes
Check where you go wrong.
👉 Don’t repeat same mistakes.

📈 7. Revise Regularly
Revise formulas and concepts daily.
👉 Keeps everything fresh.

🚀 Conclusion
With daily practice + smart strategy, cracking aptitude becomes easy.

👉 Join CONNECT Training Solutions to get expert guidance.
    `,
    image_url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    published_date: "2026-05-05",
    author: "CONNECT Team",
    category: "Aptitude",
    read_time: "5 Mins"
  }
];

export function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((b, i) => (
            <Dialog key={b.id}>
              <DialogTrigger asChild>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group cursor-pointer bg-white/85 backdrop-blur-xl border border-white shadow-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
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
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-0 border-none bg-white/95 backdrop-blur-xl">
                <div className="relative aspect-[21/9] overflow-hidden">
                  {b.image_url && (
                    <img
                      src={b.image_url}
                      alt={b.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-yellow-deep text-white text-xs font-bold tracking-wider uppercase mb-3 inline-block">
                        {b.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {b.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-gray-100">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-yellow-deep" />
                      {new Date(b.published_date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4 text-yellow-deep" />
                      {b.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-deep" />
                      {b.read_time}
                    </span>
                  </div>
                  <div className="prose prose-yellow max-w-none">
                    {b.content.split('\n').map((line, index) => {
                      if (line.trim() === '') return <br key={index} />;
                      
                      // Handle headings or bold text
                      if (line.includes('*')) {
                        const parts = line.split('*');
                        return (
                          <p key={index} className="mb-4 text-foreground/80 leading-relaxed">
                            {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-yellow-deep font-bold">{part}</strong> : part)}
                          </p>
                        );
                      }
                      
                      return (
                        <p key={index} className="mb-4 text-foreground/80 leading-relaxed">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                  <div className="mt-12 p-6 rounded-2xl bg-yellow-soft/50 border border-yellow-glow/20 text-center">
                    <h4 className="font-bold text-yellow-deep mb-2">Ready to kickstart your career?</h4>
                    <p className="text-sm text-foreground/70 mb-4">Join CONNECT Training Solutions for expert placement guidance.</p>
                    <a 
                      href="#contact" 
                      onClick={() => document.getElementById('blog')?.click()} // Close dialog hack via trigger click? No, better use standard link
                      className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-yellow-deep text-white font-semibold hover:bg-yellow-deep/90 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
