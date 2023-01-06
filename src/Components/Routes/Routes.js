import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Appointment from "../Pages/AppointmenPage/Appointment/Appointment";
import Home from "../Pages/Homepage/Home/Home";
import Login from "../Pages/Login/Login";

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
                path:'/appointment',
                element:<Appointment></Appointment>
            }
        ]
    }
])

export default router;