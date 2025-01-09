import React from 'react'

const Layout = ({children}: {children: React.ReactNode})=>{
  return (
    <div>
        <h1>This is a dashboard layout</h1>
        
        {children}
    </div>
  )
}

export default Layout;