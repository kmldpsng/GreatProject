function User(({ name, birthDate, weight, gender }) => (
    <div>
        <li>{name}</li>
        <li>{birthDate}</li>
        <li>{weight}</li>
        <li style={{ textTransform: "uppercase" }}>{gender}</li>
        <br />
    </div>
);

export default User;