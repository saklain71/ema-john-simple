import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useNewCart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setData] = useState([]);
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    // add cart from local storage

    // useEffect(() => {
    //     const storedCard = getStoreCart();
    //     const saveCart = [];
    //     for (const id in storedCard) {
    //         const addededProducts = products.find(product => product._id === id);
    //         if (addededProducts) {
    //             const quantity = storedCard[id];
    //             addededProducts.quantity = quantity;
    //             saveCart.push(addededProducts);
    //         }
    //     }
    //     setCart(saveCart);
    //     // console.log('local storage finish')
    // }, [products]);



    const handleAddToCart = (products) => {
        // console.log(product);
        const exist = cart.find(product => product._id === products._id);
        let newCart = [];
        if (!exist) {
            products.quantity = 1;
            newCart = [...cart, products];
            setCart(newCart)
        }
        else {
            const rest = cart.filter(product => product._id !== products._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
            setCart(newCart);

        }
        // console.log(products);
        // do not do this: cart.push(product);
        setCart(newCart);
        addToDb(products._id);
    }
    return (

        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                        products={product}
                        handleAddToCart={handleAddToCart}
                        key={product._id}
                    ></Products>)
                }

            </div>

            <div className="card-container">
                <Cart cart={cart}> </Cart>
            </div>
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()].map(number => <button className={page === number ? 'selected' : ''} onClick={() => setPage(number)}>{number}</button>)
                }

                <select onChange={e => setSize(e.target.value)} >
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>

        </div>
    );
};

export default Shop;