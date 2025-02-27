import './globals.css'
import Link from 'next/link'
export const metadata = {
  title: 'Next Practise',
  description: 'Welcome to NextJS practise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
        <div>
          <h2>Users</h2>
        </div>

        <div>
          <ul className="navbar">
            <li><h2><Link href="/">Home</Link></h2> </li>
            <li><h2><Link href="/users">Users</Link> </h2></li>
          </ul>
        </div>
          
        </header>
        {children}</body>
    </html>
  )
}
