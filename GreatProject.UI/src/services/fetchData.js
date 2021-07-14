import { useFetch } from "./hooks";
import * as Constants from '../variables'

export default function GetData() {

    const userData = useFetch(Constants.FetchUserData_URL, []);

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