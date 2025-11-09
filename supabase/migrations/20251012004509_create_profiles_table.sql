create table public.profiles (
  id uuid references auth.users(id) on delete cascade not null primary key,
  full_name text,
  phone_number text,
  role text check (role in ('customer', 'rider', 'restaurant')),
  image_url text,
  created_at timestamp with time zone default now()
);
