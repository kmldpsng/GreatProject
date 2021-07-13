import React, { useEffect, useState } from 'react';
import { FetchUserData } from '../services/fetchData';

export function Frontpage(props) {

    var [userId, setUserId] = useState([{}]);

    useEffect(() => {
        async function fetchData() {
        const data = await FetchUserData();
       // console.log("data object in here.... ",data);
        setUserId(data)
        }
        fetchData();
    }, []);

    const User = ({ name, birthDate, weight, gender }) => (
        <div>
            <li>{name}</li>
            <li>{birthDate}</li>
            <li>{weight}</li>
            <li style={{ textTransform: "uppercase" }}>{gender}</li>
            <br />
        </div>
    );

    return (

        <div>
            <h1>User Details are below: </h1>
            <ul>
                {userId.map((user) => (
                    <User
                        name={user.name}
                        birthDate={user.birthDate}
                        weight={user.weight}
                        gender = { user.gender }
                        key={user.name}
                    />
                ))}
            </ul>
        </div>
    )
}
