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
