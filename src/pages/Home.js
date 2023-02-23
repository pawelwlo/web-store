import React, {useEffect, useState} from 'react'
import { json, NavLink } from 'react-router-dom';
import Cart from './Cart';
import ProductCard from '../components/ProductCard'


export default function Home({cartItems, addItem, removeItem }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res=>res.json())
      .then(json=> {
        setProducts(json)
        
      })
  },[])


  return (
    <body>
      <div className='search'>
          <input className='input' type='text' placeholder='Search...' onChange={event=>{setSearchTerm(event.target.value)}}></input>
          {/* <button className='searchBtn' type='submit' ><img className='searchImg' src='./search_icon.png'/>
          </button> */}

        </div>

    
    
  <main>

    
      
        
        {products.filter((product)=> {
          if (searchTerm == "") {
            return ProductCard
          } else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return ProductCard
          }
        }).map((product) => { 
          return (
            
              <ProductCard 
          key={product.id}
          image={product.image}
          title={product.title}
          rating={product.rating.rate}
          price={product.price}
          category={product.category}
          product={product}
          cartItems={cartItems}
          addItem={addItem}
          removeItem={removeItem}
        /> 
       
              );
        })}

       

     
    </main> 
    </body>
  )
}