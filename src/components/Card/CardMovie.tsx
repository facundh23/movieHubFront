

import { useAuth0 } from '@auth0/auth0-react';

import zapatilla from '../../assets/images/zapatilla3.jpg'
import { FC } from 'react';
import { Link } from 'react-router-dom';

const CardMovie: FC = () => {
  // const {movieId} = useParams();

  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <section className="w-65 h-70 mt-5 flex flex-col gap-2 items-center border-2 border-r-violet-400 border-y-black p-2">

        <h4 className='font-bold'>Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus </p>
        <p> Released: 2000 </p>
        <span className='text-red-400 font-bold'>Genre</span>
        <img id="img"
          className="w-full h-full object-cover" src={zapatilla} />
        ⭐⭐⭐⭐
        {isAuthenticated ? <Link to="/home/movies" className='bg-violet-400 p-2'>Go to details</Link> : <Link to="/" className='bg-violet-400 p-2'>Please Log in</Link>}
      </section>
    </div>
  )
}

export default CardMovie