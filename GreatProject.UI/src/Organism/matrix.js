import React, { useEffect, useState } from 'react';
import MATRIX_FRAMES from '../data/matrix';
import './homepage.css';


const minimumDelay = 1;
const minimumIncrement = 1;
export default function Matrix() {

    const [index, setIndex] = useState(1);
    const [delay, setDelay] = useState(minimumDelay * 500);
    const [increment, setIncrement] = useState(minimumIncrement);

    const updateMatrixFrames = event => {
        var userDefinedDelay = Number(event.target.value);
        setDelay((userDefinedDelay < minimumDelay) ? (minimumDelay * 1000) : (userDefinedDelay * 1000));
    }
    const updateIncrement = event => {
        var userDefinedIncrement = Number(event.target.value);
        setIncrement((userDefinedIncrement < minimumIncrement) ? minimumIncrement : userDefinedIncrement);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((storedIndex) => {
                return (storedIndex + increment) % MATRIX_FRAMES.length
            })
        }, delay);

        return (() => { clearInterval(interval) })
    }, [delay, increment, index]);

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
