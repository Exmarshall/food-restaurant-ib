'use client';

import { createContext, useContext, useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const supabase = createClientComponentClient();
    const [cart, setCart] = useState<any[]>([]);

    // Fetch user cart from DB
    useEffect(() => {
        const fetchCart = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (!user) return;

            // Use maybeSingle() instead of single()
            const { data, error } = await supabase
                .from('carts')
                .select('items')
                .eq('user_id', user.id)
                .maybeSingle();

            if (error) {
                console.error('Error fetching cart:', error.message);
            } else {
                // If user has no cart yet, default to empty array
                setCart(data?.items || []);
            }
        };

        fetchCart();
    }, [supabase]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
