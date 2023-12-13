import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton,faEnvelopeCircleCheck,faHouseChimneyCrack } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="h-screen pt-36">
            <Helmet>
                <title> Yamin | Contact </title>
            </Helmet>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-20">
                {/* 1 */}
                <div>
                    <div className="card w-60 lg:ml-12 h-24 bg-white  shadow-lg">
                        <div className="flex flex-row pl-6 pt-8">
                       <div className="text-start  text-4xl text-red-500">
                         <FontAwesomeIcon icon={faMobileButton} />
                         </div>
                         <div className="pl-6">
                            <p className=" text-gray-500 font-normal">Phone</p>
                            <p className="text-mono  text-gray-500 font-normal">+8801704303620</p>
                         </div>

                        </div>
                    </div>
                </div>
                {/* 2 */}

                <div className="">
                    <div className="card w-72 h-24 bg-white shadow-lg">
                        <div className="flex flex-row pl-6 pt-8">
                       <div className="text-start text-4xl text-red-500">
                       <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                         </div>
                         <div className="pl-2">
                            <p className="pl-1 text-gray-500 font-normal">Email</p>
                            <p className="text-mono text-gray-500 font-normal">beenyamin115@gmail.com</p>
                         </div>

                        </div>
                    </div>
                </div>
                {/* 3 */}

                <div>
                    <div className="card w-60 h-24 bg-white shadow-lg">
                        <div className="flex flex-row pl-6 pt-8">
                       <div className="text-start text-4xl text-red-500">
                       <FontAwesomeIcon icon={faHouseChimneyCrack} />
                         </div>
                         <div className="pl-2">
                            <p className="pl-1 text-gray-500 font-normal">Address</p>
                            <p className="text-mono text-gray-500 font-normal">Bogura,Bangladesh</p>
                         </div>

                        </div>
                    </div>
                </div>
            </div>

            <ContactForm/>



           
        </div>
    );
};

export default Contact;