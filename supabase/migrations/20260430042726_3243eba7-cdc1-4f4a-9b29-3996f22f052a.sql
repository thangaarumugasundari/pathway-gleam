-- Repurpose existing 'blogs' table for Recent Trainings, and create a new 'blogs' table for actual blog posts

-- 1. Create recent_trainings table (mirrors existing blogs structure)
CREATE TABLE public.recent_trainings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  conducted_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.recent_trainings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Recent trainings are publicly readable"
ON public.recent_trainings
FOR SELECT
USING (true);

-- 2. Migrate any existing rows from 'blogs' (which were really trainings) into recent_trainings
INSERT INTO public.recent_trainings (id, title, description, image_url, conducted_date, created_at)
SELECT id, title, description, image_url, published_date, created_at FROM public.blogs;

-- 3. Clear the blogs table so it can be used for actual blog posts going forward
DELETE FROM public.blogs;

-- 4. Add author/category fields to blogs to differentiate it from trainings
ALTER TABLE public.blogs
  ADD COLUMN IF NOT EXISTS author TEXT,
  ADD COLUMN IF NOT EXISTS category TEXT,
  ADD COLUMN IF NOT EXISTS read_time TEXT;
