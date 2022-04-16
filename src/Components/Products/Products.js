import React from 'react';
import './Products.css'

const Products = (props) => {
   // console.log(props.products);
    const {name, price, ratings, seller, img} = props.products;
    const {handleAddToCart} = props;
    return (
        <div className='products-card'>
            <img className='product-image' src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className='product-info'>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p><small> Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.products)} className='button-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Products;