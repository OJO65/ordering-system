import React, { useState } from 'react';
import { useProducts } from '../../context/Context';
import nocart from '../../assets/images/no-cart.svg';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useProducts();
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total price of all items in the cart
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (formData.name && formData.email && formData.address) {
      setOrderPlaced(true);
      setTimeout(() => {
        setModalOpen(false);
        setOrderPlaced(false);
        clearCart(); // Clear cart after order is placed
      }, 2000);
    }
  };

  return (
    <div className="p-4 lg:mx-20 mx-auto">
      <div className="m-5">
        <h2 className="text-3xl font-semibold text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center">
            <img src={nocart} alt="nocart.jpg" className="w-[500px] mx-auto" />
            <p className="text-lg mt-4">Your cart is empty!</p>
          </div>
        ) : (
          <table className="w-full mt-4 table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Item</th>
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
                <th className="p-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 flex justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="p-2 text-center">{item.name}</td>
                  <td className="p-2 text-center">
                    Kshs. {item.price.toFixed(0)}
                  </td>
                  <td className="p-2 text-center">{item.quantity}</td>
                  <td className="p-2 text-center">
                    Kshs. {(item.price * item.quantity).toFixed(0)}
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Conditionally render Cart Total */}
        {cart.length > 0 && (
          <div className="mt-4 text-right">
            <p className="text-xl font-semibold">
              Total: Kshs. {calculateTotal().toFixed(0)}
            </p>
          </div>
        )}

        {/* Conditionally render buttons */}
        <div className="mt-6 text-center flex justify-center gap-4">
          {cart.length === 0 ? (
            <Link to="/shop">
              <button className="bg-[rgba(95,88,50,0.8)] text-white px-4 py-2 rounded-lg hover:bg-[rgba(160,146,67,0.8)]">
                Back to Shop
              </button>
            </Link>
          ) : (
            <>
              <button
                className="bg-[rgba(95,88,50,0.8)] text-white px-4 py-2 rounded-lg hover:bg-[rgba(160,146,67,0.8)]"
                onClick={() => setModalOpen(true)}
              >
                Checkout
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-[400px]">
            {orderPlaced ? (
              <div className="text-center">
                <div className="text-green-500 text-4xl">✔</div>
                <p className="text-lg mt-4">Order Placed Successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    rows="3"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[rgba(95,88,50,0.8)] text-white px-4 py-2 rounded-lg hover:bg-[rgba(112,103,48,0.8)] w-full"
                >
                  Place Order
                </button>
                <button
                  type="button"
                  className="mt-3 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 w-full"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
