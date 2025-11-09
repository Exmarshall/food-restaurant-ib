-- Alter profiles table to add new fields
ALTER TABLE public.profiles
ADD COLUMN email text,
ADD COLUMN address text,
ADD COLUMN restaurant_name text,
ADD COLUMN restaurant_contact text,
ADD COLUMN restaurant_address text,
ADD COLUMN opening_hours text,
ADD COLUMN whatsapp text,
ADD COLUMN vehicle_type text,
ADD COLUMN vehicle_number text,
ADD COLUMN license_number text;
