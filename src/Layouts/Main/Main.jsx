import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Home/Navbar/Navbar";
import Footer from "../../Pages/Home/Footer/Footer";

const Main = () => {
    return (
        <div className="font-Poppins max-w-5xl  rounded-2xl mx-auto bg-[#eae4e6]  ">
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            
            <div className="mt-64 md:mt-0">
            <Footer></Footer>

            </div>
        </div>
    );
};

export default Main;