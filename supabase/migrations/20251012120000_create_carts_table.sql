-- Add only missing columns to profiles table
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS email text,
ADD COLUMN IF NOT EXISTS address text,
ADD COLUMN IF NOT EXISTS restaurant_name text,
ADD COLUMN IF NOT EXISTS restaurant_contact text,
ADD COLUMN IF NOT EXISTS restaurant_address text,
ADD COLUMN IF NOT EXISTS opening_hours text,
ADD COLUMN IF NOT EXISTS whatsapp text,
ADD COLUMN IF NOT EXISTS vehicle_type text,
ADD COLUMN IF NOT EXISTS vehicle_number text,
ADD COLUMN IF NOT EXISTS license_number text;

-- Create carts table for user-specific carts
CREATE TABLE IF NOT EXISTS public.carts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    items jsonb DEFAULT '[]', -- Array of cart items
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);
