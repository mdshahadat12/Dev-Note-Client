import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AllContextProvider } from "../../AllContext/AllContext";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../Config/firebase.config";
import Continue from "../../Components/Continue";


const Register = () => {
    const { register } = useContext(AllContextProvider)
    const [passError, setPassError] = useState(null)
    const [regUser, setRegUser] = useState(null)

    const handleRegister = (event) => {
        event.preventDefault()

        const passwordPattern = /^.{6,}$/;
        const capitalLetterPattern = /[A-Z]/;
        const specialCharacterPattern = /[^A-Za-z0-9]/;

        const name = event.target.name.value;
        const photoUrl = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        setPassError("")

        if (!passwordPattern.test(password)) {
            setPassError("Password must be 6 character or greater!")

            return;
        } else if (!capitalLetterPattern.test(password)) {
            setPassError("Password must have one Capital letter!")

            return;
        } else if (!specialCharacterPattern.test(password)) {
            setPassError("Password must have a special character!")

            return;
        }

        register(email, password)
            .then(response => {
                const user = response?.user;

                setRegUser(user)

                // Update user profile information
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrl,
                });
            })

            .then(() => {
                toast.success("Registration success! Please Login");
            })

            .catch(err => {
                toast.error(err.message)
            })

        updateProfile(auth.currentUser, {
            displayName: { name }
        })

    }

    return (
        <div>
            <div className="relative w-fit mx-auto my-20 shadow-md flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 p-4">
                <div className="bg-green-600 text-white p-4 rounded-md text-center">
                    <h4 className="block  text-2xl font-semibold leading-snug tracking-normal text-green-gray-900 antialiased">
                        Register
                    </h4>
                  
                </div>
                <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="text" name="name" id="name" required
                                className="peer h-full w-full rounded-md border border-green-gray-200 border-t-transparent bg-transparent px-3 py-3    text-sm font-normal text-green-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-green-gray-50"
                                placeholder=""
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-green-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500">
                                Name
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="text" name="photo" id="photo" required
                                className="peer h-full w-full rounded-md border border-green-gray-200 border-t-transparent bg-transparent px-3 py-3    text-sm font-normal text-green-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-green-gray-50"
                                placeholder=""
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-green-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500">
                                Photo URL
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="email" name="email" id="email" required
                                className="peer h-full w-full rounded-md border border-green-gray-200 border-t-transparent bg-transparent px-3 py-3    text-sm font-normal text-green-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-green-gray-50"
                                placeholder=""
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-green-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500">
                                Email
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input required
                                type="password" name="password" id="password"
                                className="peer h-full w-full rounded-md border border-green-gray-200 border-t-transparent bg-transparent px-3 py-3    text-sm font-normal text-green-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-gray-200 placeholder-shown:border-t-green-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-green-gray-50"
                                placeholder=""
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-green-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-green-gray-500">
                                Password
                            </label>
                        </div>
                    </div>
              
                    <button
                        className="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle    text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                        type="submit"

                        data-ripple-light="true"
                    >
                        Register
                    </button>

                    {
                        passError && <p className="text-red-600 mt-2">{passError}</p>
                    }

                    <p className="mt-4 block text-center    text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Already have an account? &nbsp;
                        <Link to="/login">
                            <button className="font-medium text-green-500 transition-colors hover:text-green-700">
                                Login
                            </button>
                        </Link>
                    </p>
                </form>
                <Continue />
            </div>

            {
                regUser && <Navigate to="/login" />
            }
        </div>
    );
};

export default Register;