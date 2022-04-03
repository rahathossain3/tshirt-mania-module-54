import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // 3 get context
    // const [ornament, house] = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext);

    return (
        <div>
            <h5> Special</h5>
            <p><small>Gift: {house}</small></p>
            {/* <p><small>House: {house}</small></p> */}
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>
        </div>
    );
};

export default Special;