import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {

    // 3 get context
    // const ring = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <div>
            <h4>Aunty</h4>
            <p>House = {house}</p>
            {/* <p><small>Ring: {ring}</small></p> */}
            <button onClick={handleHouseIncrease}>Aunty Magic</button>
        </div>
    );
};

export default Aunty;