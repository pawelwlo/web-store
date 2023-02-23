import { useParams } from 'react-router-dom'
import React, {useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import ProductCard from '../components/ProductCard';
import { NavLink } from 'react-router-dom';

export default function Categories({cartItems, addItem, removeItem }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(json=> {
          setProducts(json)
          setFilteredProducts(json)
        })
    },[])
  
    const handleCategorySelect = (event) => {
      const category = event.target.value;
      setSelectedCategory(category);
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  
    return (<main>
      <select value={selectedCategory} onChange={handleCategorySelect}>
      <option value="">All Categories</option>
      <option value="jewelery">Jewelery</option>
      <option value="electronics">Electronics</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>

        {filteredProducts.map((product) =>
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
        )} 
      </main> 
    )
  }