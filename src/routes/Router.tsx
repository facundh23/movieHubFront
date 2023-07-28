import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home/HomePage";
import Profile from "../pages/Profile/Profile";
import GenrePage from "../pages/Genre/Genre";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path="/genre" element={<GenrePage />}/>
                    <Route path="/profile" element={<Profile />}/>
                </Route>
            </Routes>
        
        
        
        
        </BrowserRouter>
    )
} 

export default Router