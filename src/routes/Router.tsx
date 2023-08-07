import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home/HomePage";
import Profile from "../pages/Profile/Profile";

import MovieDetailsPage from "../pages/Movie/MovieDetailsPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path="/genre" element={<MovieDetailsPage />}/>
                    <Route path="/profile" element={<Profile />}/>
                </Route>
            </Routes>
        
        
        
        
        </BrowserRouter>
    )
} 

export default Router