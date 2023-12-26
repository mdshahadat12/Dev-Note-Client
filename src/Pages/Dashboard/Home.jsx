import { useContext } from "react";
import { AllContextProvider } from "../../AllContext/AllContext";
import dayjs from "dayjs";

const Home = () => {
    const { user } = useContext(AllContextProvider);

    const dateAndTime = dayjs().format("DD MMM, YYYY, dddd | hh:mm:ss A").toUpperCase();

    return (
        <div>
            <h2 className="text-2xl font-bold uppercase text-center">Profile</h2>

            <div className="info w-fit mx-auto mt-8">
                <div className="img w-fit mx-auto">
                    <img height="150" width="150" className="aspect-square rounded-full" src={user.photoURL} alt="dp" />
                </div>
                <div className="text mt-5">
                    <h2 className="text-center text-2xl font-medium">{user.displayName}</h2>
                </div>

                <div className="time mt-5 font-medium mb-8">
                    <h2 className="text-lg text-center text-green-500">Add Tasks Now.</h2>
                    <p className="mt-4 text-center text-slate-600 font-bold">{dateAndTime}</p>
                </div>
            </div>
        </div >
    );
};

export default Home;