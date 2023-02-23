import { useParams } from 'react-router-dom'
import React, {useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Product({addItem}) {
    
    let {id} = useParams();

    const [product, setProduct] = useState(
      {
        id: 0,
        title: "",
        price:0,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0
        },
    }
    );
 
    useEffect(() => { 
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((json)=> setProduct(json))}
        ,[id]);

           
return (
    <div className="product-page" key={product.id}>
    <img className="product-page-img" src={product.image || 'placeholder.png'} />
    <p className="product-title">{product.title}</p>
    <div className="product-info">
        <p className='product-description'>{product.description}</p>
      <p className="product-price">{product.price} $</p>
      <div
        className="rating"
        style={{
          direction: 'ltr',
          fontFamily: 'sans-serif',
          touchAction: 'none',
        }}
      >
        <Rating
          initialValue={product.rating.rate}
          onClick={() => {}}
          readonly
          size={20}
        />
      </div>
    </div>
    <div className='action-btns'>

<button className='cardButton ' onClick={() => addItem(product)}>add to cart</button>

</div>
  </div>
);
}






            
 