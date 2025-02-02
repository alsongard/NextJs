import Link from 'next/link'
export default  function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <main>
        <h2> Hi there am a About layout</h2>
        {children}  {/**this is the page.tsx for the about page */}
        <Link href="/">Click to go to  home page</Link>
    </main>
  )
}
