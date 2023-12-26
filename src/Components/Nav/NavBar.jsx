/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AllContextProvider } from "../../AllContext/AllContext";

const menu = <>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/about-us'>About Us</NavLink></li>
<li><NavLink to='/register'>Register</NavLink></li>
<li><NavLink to='/login'>Login</NavLink></li>
</>

const NavBar = () => {
    const { user, logout } = useContext(AllContextProvider)

    return (
        <nav className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu font-medium  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>

                <Link to={"/"} className="btn text-green-500 text-2xl font-bold md:text-4xl"
                >Dev Note</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <Link><button onClick={logout} className="btn btn-outline bg-green-600 mr-5">Logout</button></Link>

                }

                <Link to={"/dashboard/home"} className="btn bg-green-600">
                    Let's Explore
                </Link>
            </div>

        </nav>
    );
};

export default NavBar;