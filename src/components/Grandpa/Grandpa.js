import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

/*
* context api
* 1. Call CreateContext With a default Value
* 2. set a variable of the context with uppercase
* 3. Make sure You export the context to use it in other places
* 4. Wrap you child content using  RingContext.Provider 
* 5. Provide a value 
* 6. consume the context from child component 
* 7. useContext hook and you will you need to pass the contextName
* 8. make sure you take notes......

 */


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
        // <RingContext.Provider value={[ornament, house]}>
        <RingContext.Provider value={[house, setHouse]}>
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