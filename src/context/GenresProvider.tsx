import { useContext, createContext, FC, useState, ReactNode, useEffect } from 'react';
import { getGenres } from '../api/request.service';


type GenreItemsProps = {
    map(arg0: ({ id, name }: { id: string | undefined; name: string | undefined; createdAt: string | undefined; updatedAt: string | undefined; moviesId: string | undefined; }) => import("react/jsx-runtime").JSX.Element): ReactNode;
    id?: string | undefined,
    name?: string | undefined,
    createdAt?: string | undefined,
    updatedAt?: string | undefined,
    moviesId?: string | undefined,
}


type GenreProps = {
    genres?: GenreItemsProps | undefined,
    setGenres?: React.Dispatch<React.SetStateAction<GenreProps[] | undefined>>
    children?: ReactNode
}
export const GenreContext = createContext<GenreProps>({} as GenreProps);

export const GenresProvider: FC<GenreProps> = ({ children }) => {
    const [genres, setGenres] = useState<GenreProps[] | undefined>([] || undefined);
    const { VITE_API_URL: url } = import.meta.env
    useEffect(() => {
        const fetchGenres = async () => {
            const responseGenres = getGenres(`${url}/genres`);
            const data = await responseGenres;
            setGenres(data);
        }
        fetchGenres()
    }, [setGenres, url])

    return (
        <GenreContext.Provider value={{ genres, setGenres }}>
            {children}
        </GenreContext.Provider>
    )
}

export default GenresProvider

export const useGenres = () => {
    const genreContext = useContext(GenreContext);
    if (!genreContext) {
        throw new Error('genreContext has to be used within GenreContext')
    }
    return genreContext
}