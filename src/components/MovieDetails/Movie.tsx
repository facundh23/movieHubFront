
import { Link } from 'react-router-dom'
import zapatilla from '../../assets/images/zapatilla3.jpg'
import { useAuth0 } from '@auth0/auth0-react'
import LoginPage from '../../pages/Login/LoginPage'



const Movie = () => {

  const { isAuthenticated } = useAuth0()

  return (


    <main className="mx-auto w-[100%] mt-2 h-screen items-center justify-center md:flex-col" >
      {
        isAuthenticated ?
          <><section className="flex items-center justify-center mt-4 ml-2">
            <img
              id='imgMovie'
              src={zapatilla}
              className="w-1/3 h-full object-cover rounded-xl border-r-2 border-l-4" />

            <div className='flex flex-col justify-center items-center px-2'>
              <h2 className='text-2xl font-bold underline'>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere, molestiae error quaerat officiis sed? Amet cum optio esse maxime!</p>
            </div>
          </section><div className='flex'>
              <Link to="/home" className='text-center p-3 self-center w-[90%] bg-violet-500 mt-3 mx-auto rounded-md'>Go Home</Link>
            </div></> : <LoginPage />
      }

    </main>
  )
}

export default Movie