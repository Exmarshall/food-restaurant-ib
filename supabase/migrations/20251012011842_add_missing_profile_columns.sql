-- Add missing columns individually
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS address text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS restaurant_name text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS restaurant_contact text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS restaurant_address text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS opening_hours text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS whatsapp text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS vehicle_type text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS vehicle_number text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS license_number text;
