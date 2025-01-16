export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}


/*

import Link from "next/link";
import  type { GetServerSideProps } from "next";

export async function GetServerSideProps(){
  const {events_categories} = await import("./data.json");
  console.log(events_categories);
  return  {
    props:{
      data: events_categories
    }
  }
}

export default function Home() {
  return (
    <div>
      <main className="mt-[150px]">
        <div className="mb-[50px]">
          <Link href="/event/london">
          <img />
          <h2>Events in London</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Link>
        </div>


        <div className="mb-[50px]">
          <Link href="/event/San-franscisco">
          <img />
          <h2>Events in Sans Franscisco</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Link>
        </div>

        <div className="mb-[50px]">
          <Link href="/event/Barcelone">
          <img />
          <h2>Events in Barcelona</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Link>
        </div>

      </main>
      <footer className="">

      </footer>
    </div>
  )
};


*/