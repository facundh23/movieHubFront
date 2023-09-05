
import { FC, useEffect, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import CardMovie from '../Card/CardMovie';
import { useUser } from '../../context/UserProvider';




type CardProps = {
  id: string
  title: string
  year: number,
  score: number,
  poster_image: string
  genres: genreType[]
}




type genreType = {
  id: string,
  name: string
  children: ReactNode
}


const CardList: FC<CardProps> = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { VITE_API_URL: url } = import.meta.env
  const { moviesUser, fetchUserMovies } = useUser()

  const emailUser: string | undefined = user?.email;

  useEffect(() => {
    fetchUserMovies(url, emailUser, getAccessTokenSilently);
  }, [url, getAccessTokenSilently, emailUser])


  return (
    <>
      <h1 className='font-bold text-2xl text-center'>List Of Movies</h1>
      <section className='h-[100%] grid w-4/5 mx-auto gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] z-0 sm:h-full '>

        {

          isAuthenticated ?
            (
              moviesUser?.map((movie: CardProps) => (
                (<CardMovie key={movie.id} {...movie} />)
              ))
            )

            :

            <Link className='bg-violet-400 text-center p-4 rounded-md' to="/">Log in</Link>

        }

      </section>
    </>
  )
}

export default CardList