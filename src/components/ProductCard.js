
import { Rating } from 'react-simple-star-rating';
import { NavLink } from 'react-router-dom';
import React, {useEffect, useState} from 'react'

export default function ProductCard({product, addItem}) {
  
  
// function addItem(props) {
  
//     props.setCartItems(props.cartItems + 1)
    
// }



    return(
        <div className='product-card'>
        <NavLink to={'product/'+ product.id}>
         <img className='product-img' src={product.image}/>
            <p className='product-title'> {product.title}</p>
         <div className="product-info">
            <p className="price">{product.price} $</p>
            <div className="reviews">
               
                <div className='rating'
                  style={{
                    direction: 'ltr',
                    fontFamily: 'sans-serif',
                    touchAction: 'none'
                  }}>
                    
                  <Rating
                    initialValue={product.rating}
                    onClick={function noRefCheck(){}}
                    readonly
                    size={12}
                    />
                    
                </div>
            </div>
         </div>
         </NavLink>
         
        <div className='action-btns'>

         <button className='cardButton' onClick={()=>addItem(product)}>add to cart</button>
         
        </div>
       </div>
      )
                }