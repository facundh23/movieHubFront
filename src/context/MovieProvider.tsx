import { useContext, createContext, FC, ReactNode, useState } from 'react';
import Swal from 'sweetalert2';
import { deleteMovie, getAllMovies, getMoviesByEmail, getMoviesById, updateMovie } from '../api';
import { GetTokenSilentlyVerboseResponse } from '@auth0/auth0-spa-js';




export type MovieItemsProps = {

    title: string,
    poster_image: string,
    score: string,
    genres: string;
    year: string
    updatedAt: string
    moviesId: string
}



type MovieProps = {
    movies?: MovieItemsProps[] | undefined,
    setMovies?: React.Dispatch<React.SetStateAction<MovieItemsProps[] | undefined>>
    children?: ReactNode
    moviesById: MovieItemsProps[] | undefined
    setMoviesById: React.Dispatch<React.SetStateAction<MovieItemsProps[] | undefined>>
    fetchMovies: () => Promise<void>
    handleGetMoviesById: (url: string, getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>) => Promise<void>
    handleUpdateMovie: (url: string, data: MovieItemsProps, getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>) => Promise<void>
    handleDeleteMovieById: (url: string, getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>) => Promise<void>;

}
const MovieContext = createContext<MovieProps>({} as MovieProps);

export const MoviesProvider: FC<MovieProps> = ({ children }) => {
    const [movies, setMovies] = useState<MovieItemsProps[] | undefined>([]);
    const [moviesById, setMoviesById] = useState<MovieItemsProps[] | undefined>([]);

    const { VITE_API_URL: url } = import.meta.env


    const fetchMovies = async () => {
        try {

            const responseMovies = await getAllMovies(`${url}/home`);
            const data = await responseMovies;
            setMovies(data)
        } catch (error) {
            console.log(error)
        }
    }



    const handleDeleteMovieById = async (url: string, getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>) => {
        await deleteMovie(url, getToken)

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

    const handleUpdateMovie = async (url: string, data: MovieItemsProps, getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>) => {
        await updateMovie(url, data, getToken);
    }


    const handleGetMoviesById = async (url: string, getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>) => {
        const response = await getMoviesById(url, getToken);
        const data = await response;
        setMoviesById(data)
    }


    return (
        <MovieContext.Provider value={{
            movies, fetchMovies, handleDeleteMovieById, handleGetMoviesById, moviesById, handleUpdateMovie,
            setMoviesById
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MoviesProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useMovies = () => {
    const movieContext = useContext(MovieContext);
    if (!movieContext) {
        throw new Error('movieContext has to be used within MovieContext')
    }
    return movieContext
}