import React from 'react';
import { useProducts } from '../../../context/Context';

const Itemcard = ({ product, onClick }) => {
  const { addToCart, removeFromCart } = useProducts();

  const handleRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');

    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${Math.max(
      rect.width,
      rect.height
    )}px`;
    ripple.style.left = `${e.clientX - rect.left - rect.width / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - rect.height / 2}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600); // Match animation duration
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    handleRipple(e);
    addToCart(product);
  };

  const handleRemoveFromCartClick = (e) => {
    e.stopPropagation();
    handleRipple(e);
    removeFromCart(product.id);
  };

  return (
    <div
      className="border rounded-lg flex items-center flex-col shadow p-2 h-[330px]"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.description}
        className="w-[250px] h-[200px] object-cover"
      />
      <div className="w-full flex gap-5 justify-around">
        <p>{product.name}</p>
        <p>Kshs. {product.price}</p>
      </div>

      <div className="flex justify-between gap-5 w-64 lg:w-72 sm:w-52 ">
        <button
          onClick={handleAddToCartClick}
          className="relative shadow-lg bg-[rgba(95,88,50,0.8)] overflow-hidden mt-2 text-white px-4 py-2 rounded w-full"
        >
          +
        </button>

        <button
          onClick={handleRemoveFromCartClick}
          className="relative shadow-lg bg-[rgba(95,88,50,0.8)] text-white overflow-hidden mt-2 px-4 py-2 rounded w-full"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Itemcard;
