import { useContext, createContext, FC, ReactNode, useEffect, useState } from 'react';
import { getAllUsers } from '../api/request.service';


type UserProps = {
    user?: string | undefined;
    name?: string | undefined,
    email?: string | undefined,
    movies: string[] | undefined
}

export type UserItemsProps = {
    user: UserProps,
    children: ReactNode
}


export const UserContext = createContext<UserItemsProps>({} as UserItemsProps);


export const UserProvider: FC<UserItemsProps> = ({ children }) => {
    const [user, setUser] = useState<UserProps>();

    const { VITE_API_URL: url } = import.meta.env
    useEffect(() => {
        const fetchUserId = async () => {
            const responseUsers = getAllUsers(`${url}/users`);
            const data = await responseUsers;

            setUser(data)
        }
        fetchUserId()
    }, [url])


    return (
        <UserContext.Provider value={{ user, setUser }}>
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