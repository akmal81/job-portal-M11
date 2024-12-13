import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import Jobdetails from "../pages/JobDetails/Jobdetails";
import { param } from "motion/react-client";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import Myapplications from "../pages/MyApplications/Myapplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MypostedJobs from "../pages/MyPostedJobs/MypostedJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute> <Jobdetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply /></PrivateRoute>,

            },
            {
                path:'/addJobs',
                element: <PrivateRoute><AddJobs/></PrivateRoute>
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><Myapplications></Myapplications></PrivateRoute>
            },
            {
                path:'/myPostedJobs',
                element: <PrivateRoute><MypostedJobs/></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/signIn',
                element: <SignIn />
            }
        ]
    },
]);

export default router;