import React, { createContext, useContext, useState } from 'react';
import { products } from 'data/products';

const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State for managing cart items

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Increment the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to the cart with a quantity of 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

// Function to remove a product from the cart (decrease quantity by 1)
const removeFromCart = (productId) => {
  setCart((prevCart) => {
    const productInCart = prevCart.find((item) => item.id === productId);

    // If the product quantity is more than 1, decrease the quantity by 1
    if (productInCart && productInCart.quantity > 1) {
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 } // Decrease quantity by 1
          : item
      );
    } else {
      // If the quantity is 1, remove the product from the cart
      return prevCart.filter((item) => item.id !== productId);
    }
  });
};


  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductContext.Provider
      value={{ products, cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProducts = () => useContext(ProductContext);