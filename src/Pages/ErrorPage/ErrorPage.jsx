import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex items-center flex-col">
                <div className="flex justify-center">
                    <img className="w-[150%] mt-16" src="https://i.ibb.co/d7KY06r/oppos-removebg-preview.png" alt="" />
                </div>
            <h1 className="text-center text-xl -mt-5 mb-5 font-bold">404 -NOT FOUND THE PAGE</h1>
            <p className="text-center">This is not right way or could not found the page. <br></br> You can go home now.</p>
            <Link to={"/"}><button className="py-2 px-3 bg-blue-800 rounded-lg text-white font-semibold mt-5">Go To Home</button></Link>
            </div>
    );
};

export default NotFoundPage;
