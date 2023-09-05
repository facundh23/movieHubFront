import { useContext, createContext, FC, ReactNode, useState } from 'react';
import { getMoviesById, getAllUsers } from '../api';
import { GetTokenSilentlyVerboseResponse } from '@auth0/auth0-spa-js';


type UserProps = {
    user?: string | undefined;
    name?: string | undefined,
    email?: string | undefined,
    movies: string[] | undefined
}

export type UserItemsProps = {
    user: UserProps | undefined,
    children: ReactNode
    userId: string | undefined
    moviesUser: ReactNode
    fetchUserMovies: (url: string, email: string, getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>) => Promise<void>
    fetchUsers: () => Promise<void>
}


export const UserContext = createContext<UserItemsProps>({} as UserItemsProps);


export const UserProvider: FC<UserItemsProps> = ({ children }) => {
    const [user, setUser] = useState<UserProps>();
    const [userId, setUserId] = useState()
    const [moviesUser, setMoviesUser] = useState();

    const { VITE_API_URL: url } = import.meta.env

    const fetchUsers = async () => {
        try {
            const responseUsers = getAllUsers(`${url}/users`);
            const data = await responseUsers;

            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }



    const fetchUserMovies = async (url: string, id: string, getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>) => {
        try {
            const response = getMoviesById(`${url}/users/${id}`, getToken);
            const data = await response;
            console.log(data)
            setUserId(data.id)
            setMoviesUser(data.movies)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <UserContext.Provider value={{ user, userId, moviesUser, fetchUserMovies, fetchUsers, children }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
    const userContext = useContext(UserContext);
    if (!userContext) {
        throw new Error('userContext has to be used within UserContext')
    }
    return userContext
}