import { useAuth0 } from "@auth0/auth0-react";
import { publicRequest } from "../../api/request.service";


const Login = () => {


  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <h1>Login</h1>
      <button className="bg-red-400" onClick={(): Promise<void> => loginWithRedirect()}>Login</button>
      <button onClick={() => publicRequest()}></button>
    </>
  )
}

export default Login