import React from 'react';
import { useCart } from '../context/CartContext';
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CartDetail = () => {
    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const shippingFee = 2;
    const discount = 0.12;

    const subtotal = cartItems.reduce(
        (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
        0
    );
  const total = (subtotal + shippingFee) - subtotal*discount;

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.name, item.quantity - 1);
    }
  };

  const handleIncrease = (item) => {
    updateQuantity(item.name, item.quantity + 1);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-6 md:px-24 p-4">
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
        <h2 className="flex items-center gap-1"><FaChevronLeft className="cursor-pointer" onClick={() => navigate('/category/handmade-crafts')}/> Shopping Continue</h2>
        <h2 className="text-xl mb-4 mt-4 border-t border-[#D0CFCF] pt-4">Shopping cart</h2>
        <p className="mb-6 text-sm text-gray-500">
          You have {cartItems.length} item{cartItems.length !== 1 && 's'} in your cart
        </p>
        <div className="space-y-4">
          {cartItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between border rounded-lg p-4 shadow-sm gap-4">
                <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                    <h3 className="font-medium px-5">{item.name}</h3>
                </div>
                <div className="flex items-center gap-2 mt-1 text-[#FAA74F] border-[#FAA74F]">
                    <button
                      onClick={() => handleDecrease(item)}
                      className="border border-[#FAA74F] rounded-full hover:bg-gray-100"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="px-3 py-1 border border-[#FAA74F] rounded">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="border border-[#FAA74F] rounded-full hover:bg-gray-100"
                    >
                      <FiPlus size={14} />
                    </button>
              </div>

              <div className="flex items-center gap-8">
                <p className="text-[#DA1F27]">
                  ${parseFloat(item.price.replace('$', '')) * item.quantity}
                </p>
                <RiDeleteBinLine
                  size={24}
                  className="cursor-pointer"
                  onClick={() => removeFromCart(item.name)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-[#232354] text-white rounded-lg shadow-md p-6">
        <h3 className="text-lg mb-4">Card Details</h3>
        <p className="text-sm mb-6">Select a payment method</p>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shippingFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>{discount * 100} %</span>
          </div>
          <div className="flex justify-between mt-4 border-t border-white pt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="mt-6 w-full bg-[#FAA74F] hover:bg-orange-500 transition-colors text-white font-semibold py-3 rounded-lg shadow-md">
          ${total.toFixed(2)} – Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
