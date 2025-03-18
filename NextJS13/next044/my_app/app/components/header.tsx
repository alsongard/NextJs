import Link from "next/link"
export default function Header()
{
    return (
        <header>
            <div>
                <ul className="navbar">
                    <li><h2><Link href="/">Home</Link></h2> </li>
                    <li><h2><Link href="/users">Users</Link> </h2></li>
                </ul>
            </div>
        </header>
    )
}