import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Appointment from "../Pages/AppointmenPage/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Homepage/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Signup/Singup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
            }
            ,
            {
                path:'/register',
                element:<Singup></Singup>
            }
            ,
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            
        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])

export default router;