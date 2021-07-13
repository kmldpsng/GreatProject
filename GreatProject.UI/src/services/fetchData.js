export async function FetchUserData() {
    const data = await fetch("https://localhost:44398/getemployeefeeds");
    return await data.json();

           
}
