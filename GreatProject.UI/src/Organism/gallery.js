import React, { useState } from 'react';
import PICTURES from '../data/pictures';
import './homepage.css';
import { UseDynamicTransitions } from '../services/hooks';

const minimumDelay = 1;
const minimumIncrement = 1;

export default function Gallery() {

    const [delay, setDelay] = useState(minimumDelay * 1000);
    const [increment, setIncrement] = useState(minimumIncrement);

    const updateDelayTimer = (event => {
        var userDefinedDelay = Number(event.target.value);
        setDelay((userDefinedDelay < minimumDelay) ? (minimumDelay * 1000) : (userDefinedDelay * 1000));
    });

    const updateIncrements = (event => {
        var userDefinedIncrement = Number(event.target.value);
        setIncrement((userDefinedIncrement < minimumIncrement) ? minimumIncrement : userDefinedIncrement);
    });

    const index = UseDynamicTransitions({ delay, increment, length: PICTURES.length })


    return (

        <div className='Gallery'>
            <img src={PICTURES[index].image} alt="displaying"></img>

            <div className='multiform'>
                <div>
                    Gallery Delay Transition (seconds) :
                    <input type='Number' onChange={updateDelayTimer} />
                </div>
                <div>
                    Increment :
                    <input type='Number' onChange={updateIncrements} />
                </div>
            </div>
        </div>
    )
}