import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import IconBxMenuAltRight from '../utils/IconMenu'
import IconCloseOutline from '../utils/CloseIcon'
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [open, setOpen] = useState<boolean>(false);
    const { logout, user, isAuthenticated } = useAuth0();

    const handleToggle = () => {
        setOpen(!open)
    }

    return (

        <>
            <header>
                <nav className='bg-violet-600 text-white flex justify-between items-center h-10 px-2'>

                    <h2 className='w-1/2 max-w-[200px] text-center'>Movie Hub Project</h2>
                    <input type="checkbox" id='menu' className='peer/menu hidden transition-all' onClick={handleToggle} />
                    <label htmlFor="menu" className='w-8 h-8 bg-open-menu bg-center rounded-lg transition-all z-20 md:hidden'>{!open ? <IconBxMenuAltRight /> : <IconCloseOutline />}</label>
                    <ul className='fixed grid auto-rows-max gap-6 inset-0 bg-violet-500 px-[5%] content-center justify-center clip-circle-0 peer-checked/menu:clip-circle-full transition-all duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent'>
                        {user ? <p>{user.name ? user.name : user.email}</p> : ''}
                        <li>{isAuthenticated ? <button className='font-bold' onClick={() => logout()}>Logout</button> : <Link className='font-bold' to="/">Login</Link>}</li>

                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar