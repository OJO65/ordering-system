import React, { useState } from 'react';
import Itemcard from '../../../protected/shop/components/Itemcard';  
import { useProducts } from '../../../../context/Context';  

const Product = () => {
  const { products, addToCart } = useProducts();  // Access addToCart from context
  const [selectedProduct, setSelectedProduct] = useState(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const handleProductClick = (product) => {
    setSelectedProduct(product);  
    setIsModalOpen(true);  
  };

  const closeModal = () => {
    setSelectedProduct(null);  
    setIsModalOpen(false);  
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Itemcard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}  
            addToCart={addToCart}  // Pass addToCart to Itemcard
          />
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg w-[90%] max-w-lg flex flex-col items-center">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.description}
              className="w-[250px] h-[200px] object-cover"
            />
            <p className="text-lg font-semibold">{selectedProduct.description}</p>
            <button
              onClick={closeModal} 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
