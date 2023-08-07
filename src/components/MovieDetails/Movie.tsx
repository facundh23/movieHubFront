
import { Link } from 'react-router-dom'
import zapatilla from '../../assets/images/zapatilla3.jpg'


const Movie = () => {
 
  return (
      <main className="mx-auto w-[100%] mt-2 h-screen items-center justify-center md:flex-col">
   
        <section className="flex items-center justify-center mt-4 ml-2">
           <img
            id='imgMovie'
            src={zapatilla}
            className="w-1/3 h-full object-cover"
           />

            <div className='flex flex-col justify-center items-center px-2'>
                <h2 className='text-2xl font-bold underline'>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere, molestiae error quaerat officiis sed? Amet cum optio esse maxime!</p>
            </div>
        </section>
        <div className='flex'>
        <Link to="/" className='text-center p-3 self-center w-[90%] bg-violet-500 mt-3 mx-auto rounded-md'>Go Home</Link>
        </div>
       
    </main>
  )
}

export default Movie