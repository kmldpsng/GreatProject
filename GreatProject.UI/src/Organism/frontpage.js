import GetData  from '../services/fetchData';

export function Frontpage() {
    return (
        <div>
            <h1>User Details are below: </h1>
            <GetData />
        </div>
    )
}
