import { useState } from "react"
import Modal from "../Modal/Modal"
import CardList from "../CardList/CardList"



const Home = () => {

    const [show, setShow] = useState<boolean>(false)
    
    const handleShow = () => {
        setShow(!show);
    }

  return (
      <main className="w-100 h-full ">
      <button className="mt-2 ml-[10%] font-bold bg-violet-600/50 p-2 rounded-md md:w-[15%] " onClick={handleShow}>{show ? 'Close Modal' : 'Show Modal'}</button>
        
        {
            show ? <Modal /> : <CardList />
        }
      
        
     
    </main>
    
  )
}

export default Home