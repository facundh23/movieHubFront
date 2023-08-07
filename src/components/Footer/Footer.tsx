import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-24 text-center">
         <div>
            <section>
                <h2 className='font-bold text-3xl'>Movie Hub</h2>
                <p className="text-2xl text-gray-color">&copy; Assembler Ait 2023</p>
            </section>

            <section>
                <div className='flex justify-center gap-2 text-violet-600 text-xl'>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </div>
                <div className='flex justify-center gap-3 text-violet-600 text-2xl'>
                <Link to="/">
                    <i className='bx bxl-twitter'></i>
                </Link>
                <Link to="/">
                <i className='bx bxl-facebook-circle' ></i>
                </Link>
                <Link to="/">
                <i className='bx bxl-linkedin' ></i>
                </Link>
                </div>
            </section>
         </div>
    </footer>
  )
}

export default Footer