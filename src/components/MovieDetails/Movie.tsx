import { Link, useNavigate, useParams } from 'react-router-dom'
import { Auth0ContextInterface, GetTokenSilentlyOptions, useAuth0 } from '@auth0/auth0-react'
import Spinner from '../utils/Spinner/Spiner';
import { useMovies } from '../../context/MovieProvider';
import { useEffect } from 'react';
import { GetTokenSilentlyVerboseResponse } from '@auth0/auth0-spa-js';

interface Movie {
  title: string;
  year: string;
  score: string;
  genres: string;
  poster_image: string;
}

interface Tuser {
  getAccessTokenSilently: () => Promise<GetTokenSilentlyVerboseResponse | undefined>
  context?: React.Context<Auth0ContextInterface<Movie>> | undefined
}


const Movie = () => {

  const { getAccessTokenSilently } = useAuth0<Tuser>();
  const navigate = useNavigate();
  const { movies, handleDeleteMovieById, handleGetMoviesById, fetchMovies } = useMovies();
  const { movieId } = useParams();
  const { VITE_API_URL: url } = import.meta.env



  useEffect(() => {
    fetchMovies()
  }, [movieId])


  const selectedMovie = movies ? movies?.find((movie: { id: string; }) => movie?.id === movieId) : movies;

  const handleDeleteMovie = () => {
    handleDeleteMovieById(`${url}/home/movies/${movieId}`, getAccessTokenSilently)
    console.log(typeof getAccessTokenSilently)
    setTimeout(() => {
      navigate('/home')

    }, 3000)
  }

  useEffect(() => {
    handleGetMoviesById(`${url}/home/movies/movie/${movieId}`, getAccessTokenSilently)
  }, [])


  return (

    <main className="mx-auto w-[100%] h-screen mt-2 items-center justify-center md:flex-col" >

      <>
        {
          (selectedMovie === undefined)
            ?
            <Spinner />
            :
            <>
              <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto h-[95%]">
                <img className="mx-auto mt-2 p-5 object-scale-down " src={selectedMovie?.poster_image} alt="Movie Image" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-center">{selectedMovie?.title}</div>

                </div>
                <div className="px-6 pt-4 pb-2 flex justify-center">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{selectedMovie?.year}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{selectedMovie?.score}</span>
                </div>
              </div><div className='flex'>
                <button className='text-center p-3 self-center w-[30%] bg-red-500 mt-3 mx-auto rounded-md md:w-[30%] ' onClick={handleDeleteMovie}>Delete</button>
                <Link to="/home" className='text-center p-3 self-center w-[30%] bg-violet-500 mt-3 mx-auto rounded-md'>Go Home</Link>
              </div></>
        }
      </>

    </main>
  )
}

export default Movie