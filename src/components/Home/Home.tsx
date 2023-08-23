import { useEffect, useState } from "react"
import { useAuth0 } from '@auth0/auth0-react';
import Modal from "../Modal/Modal"
import CardList from "../CardList/CardList"
import { postUser } from "../../api/request.service";
import Spinner from "../utils/Spinner/Spiner";



export type ContextProps = {
  children: React.ReactNode,
  handleShow: () => void
}

const Home = () => {

  const [show, setShow] = useState<boolean>(false);
  const { isLoading, getAccessTokenSilently, user } = useAuth0();



  useEffect(() => {
    if (user) {
      try {
        postUser(user, getAccessTokenSilently)
      } catch (error) {
        console.log(error);
      }
    }
  }, [getAccessTokenSilently, user])


  const handleShow = (): void => {
    setShow(!show);
  }


  return (
    <main className="w-100 h-full ">

      <button className="mt-2 ml-[10%] font-bold bg-violet-600/50 p-2 rounded-md md:w-[15%] transition-all duration-700 " onClick={handleShow}>{show ? 'Close Modal' : 'Create Movie'}</button>
      {
        show ? <Modal /> : isLoading ? <Spinner /> : <CardList />
      }



    </main>

  )
}

export default Home