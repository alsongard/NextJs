To create your nextapp use the following:
```
npx create-next-app@13.1.6
//prompts
project Name: next01
use typescript: yes
use ESlint : Yes
use src/directory ? No
Use experimental directory : Yes
Use import alias ? : Yes
```


Directories:
README.md == information about the application
package.json === dependencies, scripts
package-lock.json ===
next-config.js ===
eslintrc.json === 
tsconfig.json ===

public/  ==== images,icons any static resources we want
pages/ === /api/hello.ts (when we request data)
app/ === basic pages
node_modules


Next tutorial:
Layout and Pages

To create pages for your website, create folder and within it create page.tsx
```
about/page.tsx
contact/page.tsx
services/page.tsx
```

One can also created a layout.tsx file for a specific page.
To do this we need to create a directory about and a file called layout.tsx. 

about/layout.tsx
```
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
        <h1>Hello there I'm About layout file</h1>
        <Link href="/">Home Page</Link>
    </main>
  )}
```


## using Links in nextjs
Links component is used to provide resource to another page.
```
import Link from next/link
export default function Home()
{
    return(
        <main>
            <h1>Home Page</h1>
            <Link href="/">Home Page</Link>
        </main>
    )
}
```

## css
One can create custom css for a specific page.
the global.css is used for the entire project and then we have a ``page.module.css`` file that contains the css for a specific module.

Example: In page.tsx in app directory it used the page.module.css file for it's styles
```
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <Link href="/about">About Page</Link>
    </main>
  )
}
```

To apply a specific style for a given page use the following:
In about/ directory do this:
create css file : *styles.module.css*
add the following styles to the file:
```
.main{
    background-color:#333;
    display:grid;
    place-content:center;
    min-height:100vh
}
```
**Any style applied to the layout.tsx file will be applied to the children of that page**

## SEO(search engine optimization and metadata)
In next13.1.6 we use the head.tsx file but in the future we do the following in app/page.tsx file:
```
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Next.js",
};

//other than that you can use:
export const metadata = {
  title: "Home",
  description: "Welcome to NextJS"
}
export default function Page()
{
    return "..."
}
``` 

## error handling
Go to nextjs documentation for error handling


## loading | preloader file
One can add a preloader for a specific page by:
add *loading.tsx* file in your pageName(about) directory
add the following:
```
export default function Loading()
{
    return (<h1>Loading...</h1>)
}
```

### **Fetching fundamentals
- fetch data on the server using server components
- fetch data in parallel to minimize waterfall and loading time: in this the dat ais fetched in parallel, the next data to be fetched does not have to wait for the first data to be completely fetched. 
- For layouts and pages, fetch data where it's used, this means NextJS will automatically dedupe  request in a tree(does not send duplicate request once the fetch has been already sent)
- Using Loading UI, streaming and Suspense to progressively render a page and show a result to the user while the rest of the content loads :
    loading UI refers to loading page

// requesting users data we do the following:
create a library directory / in the root folder of the webappName
To fetch data from the following [website](https://jsonplaceholder.typicode.com/users)
create an async function
```
export default async function GetAllUserData()
{
  const res = await fetch("");

  return (
    <div>
      <p>Let's all return</p>
    </div>
  )
}
```


### **Library**
The lib folder is used for creating functions that can be reused by multiple pages. This is similar to how we declare components in React that can be reused in multiple pages.
once you have already declared your function in a fileName.tsx in lib directory, you then import the function to your file(page.tsx) where you need it.
Example:
The function getAllUsers() in getAllUsers.tsx is used to fetch data from the following [link](https://jsonplaceholder.typicode.com/users)
User/page.tsx
```
import getAllUsers from "@lib/getAllUsers";

{
  const userData : Promise<enterType> = getAllUsers();
}
```

### **Type definition**
To create a typedefinition for the data note:
- the next-nev.d.ts is a type definition file(next-env.d.ts)
create a type.d.ts file and :
```
type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website":string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
}
```
### **Mapping over the data fetched**
```
async function UserPage()
{
  // get the data
  const userData : Promise<User[]> = getUsersData(); // User[] is a datatype definition *.d.ts

  const users = userData;

  const userContent = users.map((userItem)=>{
    return (
      <div>
        <p key={userItem.id}> <Link href={`/users/${userItem.id}`}> {userItem.name}</Link></p>
      </div>
    )
  })

  // map over data
  return (
    <div>
    {userContent}
    </div>
  )
}
```

### **Dynamic Pages**
Create a directory that has the same name as the parameter that will be used for the dynamic pages
[userId]  : parameter that will be  given *(my observation provided the folder has double brackets in it this should work)*
within the directory create a page.tsx with the following
```
// get parameters
type Params = {
  params :{
    userId: string
  }
}
// route parameters given are always of string datatype


// import the needed function from lib directory

import getUserEach from "@lib/getUserEach.tsx";
async function displayUserData({params}: Params)
{
  const userData : Promise<User> = getUserEach(params.userId);
  const userPostData : Promise<Post[]> = getUserPost(params.userPost);

  const [user, userPosts] = await promise.all([userData, userPostData]);

  return (
    <div>
      <h1>Users details for {user}</h1>
      <Suspense fallback={<h2>Loading....</h2>}>
        {/* we use a component*/}
      </Suspense>
    </div>
  )
}
```
Now to fetch the data based on the userId create a file in lib directory and :
getEachUser.tsx
```
async function getUserEach(userId: stirng)
{

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  // check response
  if(!res) throw New Error("failed to fetch data");
  return  res.json()

}
```
getUserPost.tsx
```
async function getUserEach(userId: string)
{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  // check response
  if(!res) throw New Error("failed to fetch data");
  return  res.json()

}
```

**NOTE: WHEN PASSING THE DATA TYPE to A PROMISE  IF YOU EXPECT A SINGLE OBJECT PASS IN THE VARIABLE FOR THE DATATYPE, IF YOU RECEIVE AN ARRAY PASS IN DATATYPE[].**


### **Generating dynmaic metadata**
Given you have multiple users and each user has some information to display dynamic metadata use, 
the following:
the description in the metadata is used for Search Engine Optimization and social media previews. 
search engine use the meta description which appears in search results right after the search title.
When you share your page to social platforms they use this description for creating links
```
<meta name="description" content="all users displayed">
```

To generate the metadata:
```
export async function generateMetadata({params}: Params)
{
  // getuserdata
  const userData = getUserEach(params.userId);
  const user = await userData;

  return {
    title: user.name,
    description: `user post for ${user.name}`
  }
  
}
```


# chapter 4 
Methods of rendering 
SSG-SSR-ISR
SSG: statis server side generation

SSR: server side rendering
ISR: incremental server side rendering

by default when fetching data, data is fetched using SSR(server side rendering). 
If the data fetched is fetched changes randomly set cache to no-store

lib/getUserEach.tsx
```
export default async function getUserEach()
{
  cost res = await fetch(url, {cache: 'no-store'})
  if (!res.ok) throw new Error("failed to fetch data");

  return res.json()
}
```

ISR(incremental server rendering)
for dynamic data. if the data being fetched changes often, it's better to use ISR.
lib/getUserEach.tsx
```
export default async function getUserEach()
{
  const res = fetch("url", {next: {revalidate: 60}})
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json()
}
```
Rather than setting the revalidate in your fetch() statement, we can use the ``export const revalidate = valueinSeconds`` : ``export const revalidate = 600`` in page.tsx or layout.tsx in the file that uses the data.

this is known as [Segment-level caching]()
