import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";
import Summary from "./Summary/Summary";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Yamin | Home </title>
            </Helmet>


            <div className=" text-lg pt-24">
                
                <Banner></Banner>
                <Skills></Skills>
                <Summary></Summary>
           
            </div>

        </div>
    );
};

export default Home;