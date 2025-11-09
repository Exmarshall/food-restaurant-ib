-- Add columns only if they don't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='address') THEN
        ALTER TABLE public.profiles ADD COLUMN address text;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='restaurant_name') THEN
        ALTER TABLE public.profiles ADD COLUMN restaurant_name text;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='restaurant_contact') THEN
        ALTER TABLE public.profiles ADD COLUMN restaurant_contact text;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='restaurant_address') THEN
        ALTER TABLE public.profiles ADD COLUMN restaurant_address text;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='opening_hours') THEN
        ALTER TABLE public.profiles ADD COLUMN opening_hours text;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='whatsapp') THEN
        ALTER TABLE public.profiles ADD COLUMN whatsapp text;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='vehicle_type') THEN
        ALTER TABLE public.profiles ADD COLUMN vehicle_type text;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='vehicle_number') THEN
        ALTER TABLE public.profiles ADD COLUMN vehicle_number text;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='license_number') THEN
        ALTER TABLE public.profiles ADD COLUMN license_number text;
    END IF;
END $$;
