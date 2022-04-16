import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setData] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setData(data))
        
    },[]);

    // add cart from local storage

    // useEffect(()=>{
    //     const storedCart = getStoreCart()
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         const addededProducts = products.find (product => product.id === id)
    //         if(addededProducts){
    //             const quantity = storedCart[id];
    //             addededProducts.quantity = quantity;
    //             savedCart.push(addededProducts);
    //         }
    //     }
    //     setCart(savedCart)
        
    // },[products])

    useEffect(()=>{
     const storedCard = getStoreCart();
     const saveCart = [];
     for(const id in storedCard){
         const addededProducts = products.find(product => product.id === id);
         if(addededProducts){
             const quantity = storedCard[id];
             addededProducts.quantity = quantity;
             saveCart.push(addededProducts);
             //console.log(addededProducts);
             //  console.log(addededProducts);    
         }
     }
     setCart(saveCart);
    // console.log('local storage finish')
    },[products]);
 


     const handleAddToCart = (products) =>{
        // console.log(product);
         const exist = cart.find(product => product.id === products.id);
         let newCart = [];
         if(!exist){
             products.quantity = 1;
             newCart = [...cart, products];
             setCart(newCart)
         }
         else{
             const rest = cart.filter(product => product.id !== products.id);
             exist.quantity = exist.quantity + 1;
             newCart = [...rest, exist];
             setCart(newCart);

         }

        // console.log(products);
        // do not do this: cart.push(product);
        setCart(newCart);
        addToDb(products.id);
    }
    return (
       
        <div className='shop-container'>
            <div className='products-container'>
              {
                  products.map(product=> <Products
                  products={product}
                  handleAddToCart={handleAddToCart}
                  key={products.id}
                  ></Products>)
              }
            </div>
            <div className="card-container">
              <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;