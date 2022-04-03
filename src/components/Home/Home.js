import React, { useState } from 'react';
import "./Home.css";
import Cart from '../Cart/Cart';
import useTShirts from '../../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    // custom hook call
    const [tShirts, setTShirts] = useTShirts();


    const [cart, setCart] = useState([]);


    //click handler add ------------
    const handleAddToCart = (selectedItem) => {
        // jodi item cart a thake  (for duplicate reduce )
        const exists = cart.find(tShirts => tShirts._id === selectedItem._id);

        if (!exists) {

            // get old cart data & add new data
            const newCart = [...cart, selectedItem];
            //set cart data
            setCart(newCart);
        }
        else {
            alert('Item already added');
        }
    };

    // item remove-------------------------
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirts => tShirts._id !== selectedItem._id);

        setCart(rest);
    };



    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>

            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}
                ></Cart>
            </div >
        </div >
    );
};

export default Home;