import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { AllContextProvider } from "../AllContext/AllContext";


const Continue = () => {
    const { googleSignIn, socialUser, path } = useContext(AllContextProvider)

    const handleSocialLogin = (loginType) => {

        return loginType()
    }

    return (
        <div className="mt-4">
            <hr />
            <h4 className="text-normal text-center my-2">Or Continue</h4>
            <hr />
            <div className="flex justify-evenly items-center mt-4">
                <div className="ggl">
                    <button onClick={() => handleSocialLogin(googleSignIn)} className="bg-green-600 text-white hover:bg-black py-4 px-8 rounded-lg">
                        <FaGoogle></FaGoogle>
                    </button>
                </div>

              
            </div>

            {
                socialUser &&
                <Navigate to={path || "/"} />
            }
        </div>
    );
};

export default Continue;