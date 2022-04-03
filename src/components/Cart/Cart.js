import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    // conditional rendering options
    // 1. Element variable
    // 2. ternary operator: condition? true: false;
    // 3. && operator (shorthand) (jodi true hoy taile kaj kore)
    // 4. || operator 

    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>ohh kipta, Khoroc kor</h5>
            <p>kinos na kn</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p> Please add more....</p>
    }
    else {
        command = <p><small>Thanks for Adding Item</small></p>
    }



    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)} >X</button>
                </p>)
            }

            {/* 4 */}
            {cart.length === 0 || <p className='orange'> Yay ! you are buying</p>}

            {/* 3 */}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
            </div>}

            {/* 1 */}
            {command}

            {/* 2 */}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove ALL</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}

        </div>
    );
};

export default Cart;