export default async function getAllUsers()
{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Failed to fetch data");
    console.log(`Type of response is : ${typeof(res)}`)
    return res.json(); 
}

//  jsonplaceholder.typicode.com