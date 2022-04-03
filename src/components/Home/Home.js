import React from 'react';
import "./Home.css";
import Cart from '../Cart/Cart';
import useTShirts from '../../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    // custom hook call
    const [tShirts, setTShirts] = useTShirts();


    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                    ></TShirt>)
                }
            </div>

            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;