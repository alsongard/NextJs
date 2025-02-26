import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Link href="/users">Users</Link>
    </main>
  )
}
