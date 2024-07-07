import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="cart-top">
        <h1 className="h1">Shopping Cart</h1>
        <div className="line"></div>
        <div className="shopping-cart">
          <div className="product">
            <ItemLists items={cartItems} />
          </div>
          <div className="btn-container">
            {cartItems.length === 0 && (
              <h2>Cart is Empty Add items to your cart</h2>
            )}
            <div className="btn-grp">
              <button className="checkout" onClick={handleClearCart}>
                Clear Cart
              </button>
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
