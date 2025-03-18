import Header from './components/header'
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
        <Header/>
        {children}</body>
    </html>
  )
}
