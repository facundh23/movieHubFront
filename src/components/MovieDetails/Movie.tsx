
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginPage from '../../pages/Login/LoginPage'
import { useMovies } from '../../context/MovieProvider';
import { deleteMovie } from '../../api/request.service';
import Swal from 'sweetalert2'


const Movie = () => {

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const { movies } = useMovies();
  const { movieId } = useParams();
  const { VITE_API_URL: url } = import.meta.env

  const selectedMovie = movieId ? movies?.find((movie: { id: string; }) => movie.id === movieId) : undefined;

  if (!selectedMovie) return

  const deleteMovieById = async () => {
    await deleteMovie(`${url}/home/movies/${movieId}`, getAccessTokenSilently)
    navigate("/home")
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Delete Movie',
    })
  }

  if (!movieId) return null

  return (

    <main className="mx-auto w-[100%] h-screen mt-2 items-center justify-center md:flex-col" >
      {

        isAuthenticated ?
          <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto h-[95%]">
              <img className="mx-auto mt-2 p-5 object-scale-down " src={selectedMovie.poster_image} alt="Movie Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{selectedMovie.title}</div>

              </div>
              <div className="px-6 pt-4 pb-2 flex justify-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{selectedMovie.year}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{selectedMovie.score}</span>
              </div>
            </div><div className='flex'>
              <button className='text-center p-3 self-center w-[30%] bg-red-500 mt-3 mx-auto rounded-md md:w-[30%] ' onClick={deleteMovieById}>Delete</button>
              <Link to="/home" className='text-center p-3 self-center w-[30%] bg-violet-500 mt-3 mx-auto rounded-md'>Go Home</Link>
            </div></> : <LoginPage />
      }

    </main>
  )
}

export default Movie