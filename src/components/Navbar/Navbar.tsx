import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='bg-violet-600 text-white flex justify-between items-center h-10 px-2'>

        <h1>Logo</h1>

        <div className='flex gap-2'>
            <Link to="/" className='font-bold'>Home</Link>
            <Link to="/genre" className='font-bold'>Genre</Link>
            <Link to="/profile" className='font-bold'>Profile</Link>
        </div>
    </nav>
  )
}

export default Navbar