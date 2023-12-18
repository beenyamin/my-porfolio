import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Home/Navbar/Navbar";
import Footer from "../../Pages/Home/Footer/Footer";


const Main = () => {
    return (
        <div className="font-Poppins max-w-5xl rounded-2xl mx-auto dark:bg-zinc-600 bg-[#eae4e6]  ">
            <Navbar></Navbar>
        
                <Outlet></Outlet>       

            <div className=" mt-20 lg:mt-20">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;