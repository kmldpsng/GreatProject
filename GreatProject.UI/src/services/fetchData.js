import { useFetch } from "./hooks";

export default function GetData() {

    const userData = useFetch("https://localhost:5001/getemployeefeeds", []);

    return (
        <div>
            <h2>User Data </h2>
            {
                userData.map(user => {
                    const {name, birthDate, weight, gender, votes} = user;

                    return (
                            <div>
                               {"Name: " + name}
                               {"BirthDate: " + birthDate.toLocaleString()}
                               {"Weight: " + weight}
                               {"Gender: " + gender.toUpperCase()}
                               {"Votes: " + votes}
                          </div>
                    )
                })
            }
        </div>
    )
}