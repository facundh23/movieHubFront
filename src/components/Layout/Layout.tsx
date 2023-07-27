import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <main className="h-screen bg-slate-400">
        <Navbar />
        <Outlet />
    </main>
  )
}

export default Layout