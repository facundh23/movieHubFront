import { useAuth0 } from "@auth0/auth0-react";



const Login = () => {


  const { loginWithRedirect } = useAuth0();

  return (

    <div className="flex flex-col items-center justify-around gap-5 h-[50%] bg-gradient-to-r from-blue-200 to-transparent w-[50%]">
      <h1 className="text-center text-black font-bold text-3xl">Movie Hub Page</h1>
      <button className="p-3 mb-2 w-[50%] rounded-lg  bg-violet-500 hover:bg-violet-700 transition-all duration-200" onClick={(): Promise<void> => loginWithRedirect()}>Login</button>
    </div>

  )
}

export default Login