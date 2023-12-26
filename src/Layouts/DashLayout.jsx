import { Link, NavLink, Outlet } from "react-router-dom";
import InputField from "../Pages/Dashboard/InputTask/InputField";

const DashLayout = () => {

    return (
        <div className="flex flex-col md:flex-row p-4 gap-5">
            <div className="menus w-96 p-2 bg-gray-100 rounded-lg flex flex-col gap-4">
                <div className="bg-white px-2 py-5 rounded-lg flex flex-col items-center">
                    <div className="text-green-600">
                        <Link to={"/dashboard/home"}>
                            <h2 className="font-bold text-4xl uppercase text-center">Dev Note</h2>
                        </Link>
                    </div>

                    
                </div>

                <div className="menu flex flex-col gap-2 bg-white p-2 rounded-lg font-medium">
                    <NavLink to={"/dashboard/to-do"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2 items-center" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }>To-Do</NavLink>

                    <NavLink to={"/dashboard/ongoing"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active items-center px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }>Ongoing</NavLink>

                    <NavLink to={"/dashboard/completed"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active items-center px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }>Completed</NavLink>


                    <NavLink to={"/dashboard/all-tasks"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active items-center px-4 py-2 bg-blue-600 rounded-md text-white flex gap-2" : "px-4 py-2 bg-gray-100 rounded-md flex gap-2 items-center"
                    }>All Tasks</NavLink>


                </div>
            </div>

            <div className="p-4 bg-gray-100 w-full rounded-lg flex flex-col justify-between">
                <div className="">
                    <Outlet />
                </div>

                <div className="box">
                    <InputField />
                </div>
            </div>
        </div>
    );
};

export default DashLayout;