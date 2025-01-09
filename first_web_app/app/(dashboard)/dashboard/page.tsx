import Link from "next/link"
const DashboardPage = () => {
  return (
    <div>
        <h1>Dashboard  Page</h1>
        <ul className="mt-[20px]">
            <li><Link href="/dashboard/users">Users Page </Link></li>
            <li><Link href="/dashboard/analytics">Analytics Page</Link></li>
        </ul>
    </div>

  )
}

export default DashboardPage;