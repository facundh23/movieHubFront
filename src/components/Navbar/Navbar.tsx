import { useState } from 'react';
import {Link} from 'react-router-dom'
import IconBxMenuAltRight from '../utils/IconMenu'
import IconCloseOutline from '../utils/CloseIcon'

const Navbar = () => {
   
    const [open, setOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setOpen(!open)
    }
    
  return (

    <>
    <header>
        <nav className='bg-violet-600 text-white flex justify-between items-center h-10 px-2'>
            
            <h2 className='w-1/2 max-w-[200px] text-center'>Movie Hub Project</h2>
            <input type="checkbox" id='menu' className='peer/menu hidden transition-all' onClick={handleToggle} />
            <label htmlFor="menu" className='w-8 h-8 bg-open-menu bg-center rounded-lg transition-all z-20 md:hidden'>{!open ? <IconBxMenuAltRight /> : <IconCloseOutline/>}</label>
            <ul className='fixed grid auto-rows-max gap-6 inset-0 bg-violet-500 px-[5%] content-center justify-center clip-circle-0 peer-checked/menu:clip-circle-full transition-all duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent'>
                <li><Link to="/" className='font-bold'>Home</Link></li> 
                <li><Link to="/genre" className='font-bold'>Genre</Link></li>
                <li><Link to="/profile" className='font-bold'>Profile</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar