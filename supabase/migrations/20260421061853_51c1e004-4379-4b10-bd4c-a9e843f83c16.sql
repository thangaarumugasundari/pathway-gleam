CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blogs are publicly readable"
  ON public.blogs FOR SELECT
  USING (true);

INSERT INTO public.blogs (title, description, image_url, published_date) VALUES
('Aptitude Bootcamp at National Engineering College', 'A 5-day intensive aptitude training program covering quantitative, logical and verbal reasoning for final year students.', 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80', '2026-03-15'),
('Soft Skills Workshop at Velammal College', 'Empowering students with communication, teamwork and leadership skills through interactive sessions and role-plays.', 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80', '2026-02-22'),
('Mock Interview Drive at Sethu Institute', 'Conducted 200+ mock interviews preparing students for top company recruitment drives with personalized feedback.', 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', '2026-01-18'),
('Technical Training at Kamaraj College', 'Hands-on coding sessions covering DSA, problem solving and core CS fundamentals for placement preparation.', 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80', '2025-12-10'),
('Placement Guidance Seminar at JP College', 'Career roadmap session helping students identify the right opportunities and craft winning resumes.', 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80', '2025-11-05'),
('Vibe Coding Workshop at KLN College', 'Modern coding practices including AI-assisted development, clean code and real-world project building.', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', '2025-10-12');