import React, { useState } from 'react';
import MATRIX_FRAMES from '../data/matrix';
import './homepage.css';
import { UseDynamicTransitions } from '../services/hooks';

const minimumDelay = 1;
const minimumIncrement = 1;

export default function Matrix() {

    const [delay, setDelay] = useState(minimumDelay * 500);
    const [increment, setIncrement] = useState(minimumIncrement);
    const index = UseDynamicTransitions({ delay, increment, length: MATRIX_FRAMES.length })


    const updateMatrixFrames = event => {
        var userDefinedDelay = Number(event.target.value);
        setDelay((userDefinedDelay < minimumDelay) ? (minimumDelay * 500) : (userDefinedDelay * 1000));
    }
    const updateIncrement = event => {
        var userDefinedIncrement = Number(event.target.value);
        setIncrement((userDefinedIncrement < minimumIncrement) ? minimumIncrement : userDefinedIncrement);
    }

    return (
        <div className="Matrix">
            <img src={MATRIX_FRAMES[index]} alt='matrix-animation' />

            <div className='multiform'>
                <div>Set the frames per second :
                    <input type='Number' onChange={updateMatrixFrames} />
                </div>
                <div>Increase the interval :
                    <input type='Number' onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}
