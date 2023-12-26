/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AllContextProvider } from "../../AllContext/AllContext";
import Continue from "../../Components/Continue";


const Login = () => {
    const { login, path } = useContext(AllContextProvider)
    const [name, setName] = useState(null)

    const handleLogIn = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password)
            .then(response => {
                const name = response?.user?.displayName;
                setName(name)

                toast.success("Login success")
            })

            .catch((err) => {
                toast.error(err.message)
            })
    }

    return (
        <div className="relative flex w-96 mx-auto my-20 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <form onSubmit={handleLogIn}>
                <div >
                    <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-green-600 to-green-400 bg-clip-border text-white shadow-lg shadow-green-500/40">
                        <h3 className="block   text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                            Login
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="email" name="email" id="email" required
                                className="peer h-full w-full rounded-md border border-green-gray-200 border-t-transparent bg-transparent px-3 py-3   text-sm font-normal text-green-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-green-gray-50"
                                placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-green-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="password" name="password" id="password" required
                                className="peer h-full w-full rounded-md border border-green-gray-200 border-t-transparent bg-transparent px-3 py-3   text-sm font-normal text-green-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-green-gray-50"
                                placeholder=" "
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-green-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500">
                                Password
                            </label>
                        </div>
                        <div className="-ml-2.5">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-green-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-green-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                                <label
                                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                                    htmlFor="checkbox"
                                >
                                    Remember Me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="px-6">
                        <button
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 text-center align-middle   text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Login
                        </button>
                        <p className="mt-6 flex justify-center   text-sm font-light leading-normal text-inherit antialiased">
                            Don't have an account?

                            <Link to="/register">
                                <button className="ml-1 block  text-sm font-bold leading-normal text-green-500 antialiased hover:text-green-700">
                                    Register
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </form>

            <div className="p-6 pt-0">
                <Continue></Continue>
            </div>

            {
                name && <Navigate to={path || "/"} />
            }

        </div>
    );
};

export default Login;