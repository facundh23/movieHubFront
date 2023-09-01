import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import LoginPage from "../pages/Login/LoginPage";
import MovieDetailsPage from "../pages/Movie/MovieDetailsPage";
import HomeSkeleton from '../assets/skeleton/homeSkeleton.tsx';
import Modal from '../components/Modal/Modal.tsx';
import EditMoviePage from '../pages/Movie/EditMoviePage.tsx';



const LazyHomePage = lazy(() => import("../pages/Home/HomePage.tsx"))

const Router = () => {


    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={

                    <Layout />
                }
                >
                    <Route index element={
                        <Suspense fallback={<HomeSkeleton />}><LazyHomePage /></Suspense>

                    }
                    />
                    <Route path="/home/movies/movie/:movieId" element={
                        <MovieDetailsPage />
                    } />
                    <Route path="/home/movies/edit/:movieId" element={
                        <EditMoviePage />
                    } />

                    <Route path="/home/movies/:userId" element={
                        <Modal genres={[]} title={''} year={0} score={0} children={undefined} />
                    }
                    />

                </Route>
            </Routes>




        </BrowserRouter >
    )
}

export default Router