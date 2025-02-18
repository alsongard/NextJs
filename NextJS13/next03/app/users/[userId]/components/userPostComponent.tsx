type Props = {
    promise : Promise<Post[]>;
};

export default async function UserPostComponent({promise}: Props)
{
    const posts = await promise;
    const content = posts.map((post)=>{
        return (
            <div>
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>

                    <br/>
                </article>
            </div>
        )
    })

    return content
};