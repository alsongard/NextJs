import Link from "next/link"

export default function Events()
{
    return (
        <div>
            <h1>Events Page</h1>

            <div className=" my-[20px]">
                <Link href="/event/london">
                    <img />
                    <h2>Events in London</h2>
                </Link>
            </div>


            <div className="mb-[20px]">
                <Link href="/event/San-franscisco">
                <img />
                <h2>Events in Sans Franscisco</h2>
                </Link>
            </div>

            <div className="mb-[20px]">
                <Link href="/event/Barcelone">
                <img />
                <h2>Events in Barcelona</h2>
                </Link>
            </div>
        </div>
    )
}