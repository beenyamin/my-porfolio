import { Link } from "react-router-dom";
import { FaLinkedin ,FaFacebookSquare,FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="">

            <footer className=" bg-base-200 py-10 text-base-content rounded">
                <h2 className="text-xl font-semibold text-center">Catch Me On</h2>
                <nav>
                    <div className="flex gap-2 item-center justify-center mt-3">
                       <Link to='https://www.linkedin.com/in/been-yamin-434976182/' className="text-blue-600"><FaLinkedin size={20} /></Link>
                       <Link to='https://github.com/beenyamin' className="text-black"><FaGithubSquare  size={20} /></Link>

                       <Link to='https://www.facebook.com/beenyamin20/' className="text-blue-600">< FaFacebookSquare size={20} /></Link>

                    </div>
                </nav>
                <aside>
                    <p className="text-center mt-4 text-opacity-50 ">Copyright © 2023 - Created By Been Yamin</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;