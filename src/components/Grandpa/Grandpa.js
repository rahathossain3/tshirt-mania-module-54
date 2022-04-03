import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

//context api
// 1
export const RingContext = createContext('ring');

const Grandpa = () => {

    const [house, setHouse] = useState(1);

    const ornament = 'Kadamati Ring';

    const handelBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        // 2
        // <RingContext.Provider value='alur ring'>
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h4>Grandpa</h4>

                <p>House : {house}
                    <button
                        onClick={handelBuyAHouse}
                    > Buy a House </button>
                </p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Aunty house={house}></Aunty>
                    <Uncle house={house}></Uncle>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;