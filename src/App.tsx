import Router from './routes/Router'
import { Auth0Provider } from '@auth0/auth0-react'

import './App.css'


const { VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID:clientId} = import.meta.env
const redirectUri:string = window.location.origin + "/home"
function App() {


  return (
    <>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: redirectUri
          }}
          // audience={process.env.REACT_APP_AUTH0_AUDIENCE}
        >
          <Router />
          </Auth0Provider>
    </>
  )
}

export default App
