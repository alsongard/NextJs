import React from 'react';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';


export const metadata = {
  title: "Users",
  description: "display all users"
}

export default async function User() {

  const userData : Promise<User[]> = getAllUsers();

  const users = await userData;
  const userContent = users.map((dataItem)=>{
    return (
      <div >
        <Link key={dataItem.id} href={`/users/${dataItem.id}`}>{dataItem.name}</Link>
      </div>
    )
  })
  return (
    <div>
      <h1>Users Page</h1>
      {userContent}  
    </div>  
  )
}
