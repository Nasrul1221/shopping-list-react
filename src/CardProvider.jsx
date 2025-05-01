import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState([]);

    return (
        <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
            {children}
        </CartContext.Provider>
    );
};