import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'
import GenresProvider from './context/GenresProvider.tsx'
import MoviesProvider from './context/MovieProvider.tsx'
import UserProvider from './context/UserProvider.tsx'



const { VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID: clientId, VITE_AUTH0_AUDIENCE: audience } = import.meta.env
const redirectUri: string = window.location.origin + "/home"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience
      }}
    >
      <UserProvider users={{
        name: undefined,
        email: undefined
      }}>
        <MoviesProvider>
          <GenresProvider genres={undefined} >
            <App />
          </GenresProvider>
        </MoviesProvider>
      </UserProvider>

    </Auth0Provider>
  </React.StrictMode>,
)
