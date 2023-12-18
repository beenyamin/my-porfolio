import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faEnvelopeCircleCheck, faHouseChimneyCrack } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="pt-36">
            <Helmet>
                <title> Yamin | Contact </title>
            </Helmet>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-24 lg:px-40">
                {/* 1 */}
                <div>
                    <div className="card w-56  6 h-24 bg-white  shadow-lg">
                        <div className="flex flex-row pl-6 pt-8">
                            <div className="text-start  text-4xl text-red-500">
                                <FontAwesomeIcon icon={faMobileButton} />
                            </div>
                            <div className="pl-6">
                                <p className=" text-gray-500 font-normal">Phone</p>
                                <p className="text-sm text-gray-500">+8801704303620</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* 2 */}

                <div className="">
                    <div className="card w-56  h-24  bg-white shadow-lg">
                        <div className="flex flex-row pl-6 pt-8">
                            <div className="text-start text-4xl text-red-500">
                                <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                            </div>
                            <div className="pl-2">
                                <p className="pl-1 text-gray-500 ">Email</p>

                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-xs ml-1 text-xs text-gray-500 " onClick={() => document.getElementById('my_modal_2').showModal()}>Tap To Watch</button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box w-80 h-30">
                                        <h3 className="font-bold text-lg">beenyamin115@gmail.com</h3>
                                        
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                                <p className=" text-base text-gray-500"></p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* 3 */}

                <div>
                    <div className="card w-56 h-24  bg-white shadow-lg">
                        <div className="flex flex-row pl-6 pt-8">
                            <div className="text-start text-4xl text-red-500">
                                <FontAwesomeIcon icon={faHouseChimneyCrack} />
                            </div>
                            <div className="pl-2">
                                <p className=" text-gray-500 font-normal">Address</p>
                                <p className="text-sm text-gray-500 ">Bogura,Bangladesh</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <ContactForm></ContactForm>
            </div>


        </div>
    );
};

export default Contact;