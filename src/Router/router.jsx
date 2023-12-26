import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Layouts/RootLayout';
import HomePage from '../Pages/Home/HomePage';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import DashLayout from '../Layouts/DashLayout';
import Home from '../Pages/Dashboard/Home';
import AboutUs from '../Pages/AboutUs/AboutUs';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ToDo from '../Pages/Dashboard/ToDo/ToDo';
import Ongoing from '../Pages/Dashboard/Ongoing/Ongoing';
import Completed from '../Pages/Dashboard/Completed/Completed';
import AllTasks from '../Pages/Dashboard/AllTasks/AllTasks';
import ImportantTasks from '../Pages/Dashboard/ImportantTasks/ImportantTasks';
import NotFoundPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            }
        ]
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashLayout /></PrivateRoute>,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "to-do",
                element: <ToDo />
            },
            {
                path: "ongoing",
                element: <Ongoing />
            },
            {
                path: "completed",
                element: <Completed />
            },
            {
                path: "all-tasks",
                element: <AllTasks />
            },
            {
                path: "important",
                element: <ImportantTasks />
            }
        ]
    }
]);

export default router;