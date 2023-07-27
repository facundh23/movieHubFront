import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Genre from "../pages/Genre/Genre";
import Profile from "../pages/Profile/Profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/genre" element={<Genre />}/>
                    <Route path="/profile" element={<Profile />}/>
                </Route>
            </Routes>
        
        
        
        
        </BrowserRouter>
    )
} 

export default Router