import React, { Children } from "react"
import Link from "next/link";
const Layout = ({children}: {children : React.ReactNode})=>{
    return (
        <div>
            <ul>
                <li>Logo Navbar</li>
                <li><Link href="#">Home</Link></li>
            </ul>
            {children}
        </div>
    )
}
export default Layout;