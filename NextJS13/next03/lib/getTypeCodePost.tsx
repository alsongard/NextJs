export default async function getTypeCodePost(userId: string) {
    const postData = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    if (!postData.ok) throw new Error("Failed to fetch data.") 
  return postData.json()
}
