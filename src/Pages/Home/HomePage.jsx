import { Link } from "react-router-dom";
import UserBenefitsSection from "./UserBenifut";

const HomePage = () => {
    return (
        <>
            <div className="min-h-80 flex items-center justify-center bg-gray-100">
                <div  data-aos="fade-up" className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Dev Note</h1>
                    <p className="text-lg text-gray-700 mb-6">The Task Management Solution as You Want</p>
                    <Link to={"/dashboard/home"} className="btn bg-green-600">
                        <button data-aos="fade-left">Get Started</button>
                    </Link>
                </div>
            </div>

            <UserBenefitsSection />
        </>
    );
};

export default HomePage;