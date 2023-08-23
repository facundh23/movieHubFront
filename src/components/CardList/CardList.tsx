
import { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import CardMovie from '../Card/CardMovie';



const CardList: FC = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <h1 className='font-bold text-2xl text-center'>List Of Movies</h1>
      <section className='h-full grid w-4/5 mx-auto gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] z-0 sm:h-full '>

        {

          isAuthenticated ? <CardMovie /> : <Link className='bg-violet-400 text-center p-4 rounded-md' to="/">Log in</Link>

        }

      </section>
    </>
  )
}

export default CardList