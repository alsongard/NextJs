import styles from './styles.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Page',
  description: 'my about page',
}
 


export default  function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
        <main className={styles.main} >
            <h2> Hi there am a About layout</h2>
            {children}  {/**this is the page.tsx for the about page */}
            <Link href="/">Click to go to  home page</Link>
        </main>
        </div>
  )
}

