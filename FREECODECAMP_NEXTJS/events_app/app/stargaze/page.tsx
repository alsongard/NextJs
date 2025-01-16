type Post = {
    id: string;
    title:string;
    category:string;
}
// we declare this Post array with the data and it's data type we will use
export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts: Post[] = await data.json();
    console.log(posts);
    return (
      <ul>
        {posts.map((post : Post) => (
          <li key={post.id}>{post.title} : {post.category} </li>
        ))}
      </ul>
    )
  }