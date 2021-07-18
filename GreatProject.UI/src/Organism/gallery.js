import React, { useEffect, useState } from 'react';
import PICTURES from '../data/pictures';

export default function Gallery() {

    const [delay, setDelay] = useState(3000);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(storedIndex => {
                return (storedIndex + 1) % PICTURES.length;
            })
        }, 1000);

        return (() =>{ 
            clearInterval(interval) 
        })
    }, []);

    return (
        <div className='Gallery'>
            <img src={PICTURES[index].image} alt="displaying"></img>
        </div>

    )
}