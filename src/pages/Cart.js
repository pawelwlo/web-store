import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Cart({ product, cartItems, removeItem, cartCounter }) {
  function deleteFromCart() {
    if (product.cartItems !== 0) {
      product.setCartItems(product.cartItems - 1);
    }
  }

 
   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  
  return (
    <div className='cart'>
      <div className='cart-top'>
        <h2>Cart</h2>
        <span>{cartCounter}</span>
        <img className='img-cart' src='./cart.png' alt='cart icon' />
      </div>

      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li className='product-card-cart' key={index}>
              <img className='product-img-cart' src={item.image} alt={item.title} />
              <p className='product-title'>{item.title}</p>
              <div className='cart-remove'><p className='price'>{item.price.toFixed(2)} $</p>
              <div></div>
              <button className='removeButton' onClick={() => removeItem(item)}>
                remove
              </button></div>
              
            </li>
          ))}
          <p className='total-price'>
            Total price: {totalPrice.toFixed(2)} $
          </p>
        </ul>
      ) : (
        <div className='cart-bottom'>
          <p>no items in your cart</p>
          <p className='cart-link'>
            <NavLink to={'/'}>back to shopping</NavLink>
          </p>
        </div>
      )}
    </div>
  );
}

