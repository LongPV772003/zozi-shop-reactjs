import React from 'react';
import { useCart } from '../context/CartContext';
import { BsBagX } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, isOpen, toggleCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40">
      <div 
        className="absolute inset-0 bg-black/30 z-40" 
        onClick={toggleCart}
      ></div>

      <div 
        className="absolute top-0 right-0 h-full w-full sm:w-1/3 bg-white shadow-lg z-50 px-2 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={toggleCart}>
            <BsBagX size={18} className="text-[#9F9F9F]" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-30%)]">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Cart is empty</p>
          ) : (
            cartItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between mb-4">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded mr-2" />
                <div className="flex-1 ml-3">
                  <h4 className="text-sm ">{item.name}</h4>
                  <p className="flex text-[12px]">
                    <span className="mr-3">{item.quantity}</span> x 
                    <span className="text-[#DA1F27] ml-3">{item.price}</span>
                  </p>
                </div>
                <IoIosCloseCircle onClick={() => removeFromCart(item.name)} className="cursor-pointer" />
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t">
          <p className="flex justify-between mb-4">
            <span>Subtotal:</span> 
            <span className="text-[#DA1F27]">${total.toFixed(2)}</span>
          </p>
          <div className="flex justify-between gap-2 text-sm">
            <button  onClick={() => navigate('/cartdetail')} className="w-1/2 rounded-xl border border-[#FAA74F] py-2 hover:bg-[#FAA74F] hover:text-white text-[#FAA74F]">My Cart</button>
            <button className="w-1/2 rounded-xl py-2 bg-[#FAA74F] text-white hover:bg-orange-500">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
