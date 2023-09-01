
import { FC, useEffect, useState, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import CardMovie from '../Card/CardMovie';
import { getMoviesByEmail } from '../../api/request.service';


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
  const [movies, setMovies] = useState();
  const { VITE_API_URL: url } = import.meta.env

  const emailUser = user?.email;

  useEffect(() => {
    const fetchUserMovies = async () => {
      const response = getMoviesByEmail(`${url}/users/${emailUser}`, getAccessTokenSilently);
      const data = await response;
      setMovies(data.movies)
    }
    fetchUserMovies()
  }, [url, getAccessTokenSilently, emailUser, movies])



  return (
    <>
      <h1 className='font-bold text-2xl text-center'>List Of Movies</h1>
      <section className='h-[100%] grid w-4/5 mx-auto gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] z-0 sm:h-full '>

        {

          isAuthenticated ?
            (
              movies?.map((movie: CardProps) => (
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