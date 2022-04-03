import React, { useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {

    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring'

    const handelBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <div className='grandpa'>
            <h4>Grandpa</h4>

            <p>House : {house}
                <button
                    onClick={handelBuyAHouse}
                > Buy a House </button>
            </p>
            <section style={{ display: 'flex' }}>
                <Father house={house} ornament={ornament}></Father>
                <Aunty house={house}></Aunty>
                <Uncle house={house}></Uncle>
            </section>

        </div>
    );
};

export default Grandpa;