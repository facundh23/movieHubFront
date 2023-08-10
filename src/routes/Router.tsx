import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home/HomePage";


import MovieDetailsPage from "../pages/Movie/MovieDetailsPage";
import LoginPage from "../pages/Login/LoginPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/home" element={<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path="/home/:movieId" element={<MovieDetailsPage />}/>
                </Route>
            </Routes>
        
        
        
        
        </BrowserRouter>
    )
} 

export default Router