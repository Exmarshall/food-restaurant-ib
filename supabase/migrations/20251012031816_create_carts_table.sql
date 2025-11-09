CREATE TABLE carts (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id),
    items jsonb DEFAULT '[]', -- Array of cart items
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);
