import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // 3 get context
    const ring = useContext(RingContext);

    return (
        <div>
            <h5> Special</h5>
            <p>Gift: {ring}</p>
        </div>
    );
};

export default Special;