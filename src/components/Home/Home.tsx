import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from '../../context/UserProvider';
import { Link } from "react-router-dom";
import { postUser } from '../../api';
import CardList from "../CardList/CardList"
import Spinner from "../utils/Spinner/Spiner";


const Home = () => {

  const { isLoading, getAccessTokenSilently, user } = useAuth0();
  const { userId } = useUser();


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


  return (
    <main className="w-[100%] h-full p-6">

      <Link className="mt-4 ml-[10%] font-bold bg-violet-600/50 p-2 rounded-md md:w-[15%] transition-all duration-700 " to={`/home/movies/${userId}`} >Create a Movie</Link>
      {isLoading ? <Spinner /> : <CardList id={''} title={''} year={0} score={0} poster_image={''} genres={[]} />}

    </main>

  )
}

export default Home