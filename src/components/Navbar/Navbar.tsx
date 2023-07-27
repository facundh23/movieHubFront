import {Link} from 'react-router-dom'

import IconBxMenuAltRight from '../utils/IconMenu'
import { useState } from 'react'
import IconCloseOutline from '../utils/CloseIcon'

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setOpen(!open)
    }

  return (

    <header>
        <nav className='bg-violet-600 text-white flex justify-between items-center h-10 px-2'>
            <h1 className=' w-1/2max-w-[200px]'>Logo</h1>
            <input type="checkbox" id='menu' className='peer/menu hidden transition-all' onClick={handleToggle} />
            <label htmlFor="menu" className='w-10 h-10 bg-open-menu bg-center bg-green-200 rounded-lg transition-all z-20 md:hidden'>{!open ? <IconBxMenuAltRight /> : <IconCloseOutline/>}</label>
            <ul className='fixed grid auto-rows-max gap-6 inset-0 bg-blue-500 px-[5%] content-center justify-center clip-circle-0 peer-checked/menu:clip-circle-full transition-all duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent'>
                <li><Link to="/" className='font-bold'>Home</Link></li> 
                <li><Link to="/genre" className='font-bold'>Genre</Link></li>
                <li><Link to="/profile" className='font-bold'>Profile</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar