import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import LoginPage from "../pages/Login/LoginPage";
import MovieDetailsPage from "../pages/Movie/MovieDetailsPage";
import HomeSkeleton from '../assets/skeleton/homeSkeleton.tsx';


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
                    <Route path="/home/:movieId" element={


                        <MovieDetailsPage />
                    }
                    />

                </Route>
            </Routes>




        </BrowserRouter >
    )
}

export default Router