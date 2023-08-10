import { useState } from "react"
import { useAuth0 } from '@auth0/auth0-react';

import Modal from "../Modal/Modal"
import CardList from "../CardList/CardList"


export type ContextProps = {
  children: React.ReactNode,
  handleShow: () => void
} 

const Home = () => {

    const [show, setShow] = useState<boolean>(false);
    const {user, isLoading} = useAuth0();
    
    const handleShow = ():void => {
        setShow(!show);
    }

  return (
      <main className="w-100 h-full ">
        {
          user ? <h2 className="font-bold text-center w-full">Welcome {user.name ? user.name : user.email}!</h2> : ''
        }
      <button className="mt-2 ml-[10%] font-bold bg-violet-600/50 p-2 rounded-md md:w-[15%] transition-all duration-700 " onClick={handleShow}>{show ? 'Close Modal' : 'Show Modal'}</button>
        
        {
            show ? <Modal /> :  isLoading ? 'Loading...' : <CardList /> 
        }
      
        
     
    </main>
    
  )
}

export default Home