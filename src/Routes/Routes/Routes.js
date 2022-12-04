import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: ()=> fetch('https://dragon-news-server-theta-three.vercel.app/news'),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                loader: ({params})=> fetch(`https://dragon-news-server-theta-three.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({params})=>fetch(`https://dragon-news-server-theta-three.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/terms-and-conditions',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }
])
