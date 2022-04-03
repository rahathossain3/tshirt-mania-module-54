import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h4>Grandpa</h4>
            <section style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Aunty house={house}></Aunty>
                <Uncle house={house}></Uncle>
            </section>

        </div>
    );
};

export default Grandpa;