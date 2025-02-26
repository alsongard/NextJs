
export default async function getUserDetails(userId: string) {

  console.log(`this is userId : ${userId}`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  // if (!res.ok) throw new Error("Error while fetching the data");

    
  return res.json()
}
