import type {Metadata} from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link  from "next/link";
export const metadata : Metadata = {
    title : "Users",
    description: "users page"
}


export default async function UserPage(){
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData;
  console.log(`Type of users is : ${typeof(users)}`);

  const userContent = users.map((userItem)=>{
    return (
      <>
        <p key={userItem.id}> <Link href={`/users/${userItem.id}`}> {userItem.name}</Link></p>
      </>
    )
  })
  const myElement = (
      <div>

        <br/>
        {users.map(user => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
            </>
          )
        })}
      </div>
    )
  return (
    <section>
      <h2><Link href="/">Back home</Link></h2>
      {userContent}
    </section>
  )
}
