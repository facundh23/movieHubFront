import { useContext, createContext, FC, ReactNode, useEffect, useState } from 'react';
import { getAllMovies } from '../api/request.service';

export type MovieItemsProps = {
    title?: string | undefined,
    poster_image?: string | undefined,
    score?: number | undefined,
    genres?: object[] | undefined;
    year?: number | undefined
    updatedAt?: string | undefined,
    moviesId?: string | undefined,
}

type MovieProps = {
    movies?: MovieItemsProps | void,
    setMovies?: React.Dispatch<React.SetStateAction<MovieItemsProps | undefined>>
    children?: ReactNode

}
export const MovieContext = createContext<MovieProps>({} as MovieProps);

export const MoviesProvider: FC<MovieProps> = ({ children }) => {
    const [movies, setMovies] = useState<MovieProps[] | undefined>([]);

    const { VITE_API_URL: url } = import.meta.env

    useEffect(() => {
        fetchMovies()
    }, []);

    const fetchMovies = async () => {
        const responseMovies = await getAllMovies(`${url}/home`);
        const data = await responseMovies;

        setMovies(data)
    }




    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MoviesProvider

export const useMovies = () => {
    const movieContext = useContext(MovieContext);
    if (!movieContext) {
        throw new Error('movieContext has to be used within MovieContext')
    }
    return movieContext
}