
import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Cart({product, cartItems, removeItem}) {

    function deleteFromCart() {
    
    if(product.cartItems !== 0) {
    product.setCartItems(product.cartItems - 1)
    }
}
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {(cartItems.length > 0) ? 

                    cartItems.map((item,index) => 
                    
                        <li className="product-card-cart" key={index} >
                            
                         <img className='product-img-cart' src={item.image}/>
                        <p className='product-title'> {item.title}</p>
                        <p className="price">{item.price} $</p> 
                        <div></div>  
                        <button className='removeButton' onClick={() => removeItem(item)}>remove</button>
                        </li>
                        
                        ):

                    <div>
                no items in your cart
                    </div>
            }
            
            </ul>
            
        </div>
        
    )
}