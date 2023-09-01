import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CardList from "../CardList/CardList"
import { postUser, getUserId } from '../../api/request.service';
import Spinner from "../utils/Spinner/Spiner";
import { Link } from "react-router-dom";

import { useUser } from '../../context/UserProvider';


const Home = () => {
  const { user: userContext } = useUser();

  const [userId, setUserId] = useState(userContext);
  const { isLoading, getAccessTokenSilently, user } = useAuth0();

  const currentUser = user?.email;

  const { VITE_API_URL: url } = import.meta.env

  useEffect(() => {
    if (user) {
      try {
        postUser(user, getAccessTokenSilently)
      } catch (error) {
        console.log(error);
      }
    }
  }, [getAccessTokenSilently, user, url])


  useEffect(() => {
    const fetchUserId = async () => {
      const response = await getUserId(userContext, currentUser);
      setUserId(response)
    }
    fetchUserId()
  }, [url, currentUser])




  return (
    <main className="w-[100%] h-full p-6">

      <Link className="mt-4 ml-[10%] font-bold bg-violet-600/50 p-2 rounded-md md:w-[15%] transition-all duration-700 " to={`/home/movies/${userId}`} >Create a Movie</Link>
      {isLoading ? <Spinner /> : <CardList id={''} title={''} year={0} score={0} poster_image={''} genres={[]} />}

    </main>

  )
}

export default Home