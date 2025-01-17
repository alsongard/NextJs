import Link from "next/link";
import {auth} from "auth";

const NavBar =  async ()=>
{
    const sessoin = await auth();

    return (
        <header className="flex flex-row items-center justify-between bg-white text-black">

            <Link className="pl-[30px]" href="/">
                <p>Logo</p>
            </Link>
            <ul className="flex flex-row justify-between w-[400px] pr-[50px]">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </header>
    )
};
export default NavBar;