import { useEffect, useRef } from 'react';
import {useSearchParams} from 'react-router-dom'


const Genre = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("q") ?? "";
   
    const handleInput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setSearchParams({q:value})
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[])
  return (
      <main className="mx-auto w-[90%] mt-2 h-screen">
   
        <section className="flex items-center justify-center mt-2">
            <input ref={inputRef} type="text" className="bg-red-400/50 w-1/2 p-2 rounded-md text-black" placeholder="Search By Gender" value={query} onChange={handleInput} />
        </section>
        <section className="h-screen border-4 mt-2 flex flex-wrap">
                {
                    // Logica para pintar las peliculas cargadas
                }
        </section>
    </main>
  )
}

export default Genre