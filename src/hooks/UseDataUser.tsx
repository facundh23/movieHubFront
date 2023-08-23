import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
useAuth0

export const UsegetToken = () => {
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const getAccessToken = async () => {
            const token = await getAccessTokenSilently();
            return token;
        }
        getAccessToken();
    }, [getAccessTokenSilently])

    return
}