import { Outlet } from "react-router-dom";
import NavBar from "../Components/Nav/NavBar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
    return (
        <div>
            <NavBar />

            <Outlet />

            <Footer />
        </div>
    );
};

export default RootLayout;