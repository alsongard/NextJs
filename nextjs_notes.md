tsconfig.json : configuration file for typescript, defines what should be type checked, ignored and the rules to follow

postcss.config.mjs : used to process CSS with different plugins

next.config.ts : configure nextjs

public folder: static assets such as images 

app folder: file for source code 



Hot Module ReplaceMent (HMR):


Arch browser : check it out


architecture in NextJS
2 types of components:
- Server side components : default (any component you make will by default be a SSC(server side component)).  These are components that are rendered on the server. Thereforre they can access resources on the server such as database and fileSystem reducing the size of the javascript code sent to the browser 

- Client side components : components that require user interactions such as clicking forms, entering data. They're rendered on the client side(browser).  
To use them in nextjs one must add ``"use client";`` directive in your file. client side components are pre-rendered on the server side and create a static shell that is then sent to the client. 

```
"use client";

export default Hello()
{
    console.log("Client side component");
    return (
        <h1>Lets See</h1>
    )
}
```


## Routing
file based routing System
In nextjs routing is performed by creating a new folder and adding a page.tsx withing the folder. 

**nested routes**
In cases whereby you want to have nested routes: 
e.g :      ``domain.name/dashboard/users``  ||   ``domain.name/darshboard/analytics``

Create folder: 
dashboard
Add: 
./analystics/page.tsx
./users/page.tsx

One can also add a page.tsx file in the dashboard folder, for the route: ``domain.name/dashboard``



**Dynamic Routing**
Lets say we want to have a page where there are mutliple users in which each can be clicked
``domain.name/users/[user]`` : [user] === user-1 , user-2, user-3
In such a case we use dynamic routing by placing the changing url element.  
Create an dynamic route:
create ``id`` folder wrapped with ``[]``

```
[id]
    page.tsx
```

To provide links in nextjs we use the ``Link`` component
``<Link href="/route">Text</Link>``