import { Link } from "react-router-dom";
import { FaLinkedin ,FaFacebookSquare,FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="">

            <footer className=" bg-base-200 dark:bg-zinc-700  py-10 text-base-content rounded">
                <h2 className="text-xl font-semibold text-gray-600 dark:text-white text-center mr-3">Catch Me On</h2>
                <nav>
                    <div className="flex gap-2 item-center justify-center mt-3">
                       <Link to='https://www.linkedin.com/in/been-yamin-434976182/' className="text-blue-600"><button className="btn btn-error btn-outline btn-sm"><FaLinkedin size={20} /></button></Link>
                       <Link to='https://github.com/beenyamin' className="text-black"><button className="btn btn-error btn-outline btn-sm"><FaGithubSquare  size={20} /></button></Link>
                       <Link to='https://www.facebook.com/beenyamin20/' className="text-blue-600"><button className="btn btn-error btn-outline btn-sm">< FaFacebookSquare size={20} /></button></Link>


                       <Link to='https://github.com/beenyamin' className="text-black"></Link>
                       <Link to='https://www.facebook.com/beenyamin20/' className="text-blue-600"></Link>

                    </div>
                </nav>
                <aside>
                    <p className="text-center text-sm mt-4 text-opacity-50 dark:text-white text-gray-900 ">Copyright © 2023 - Created By Been Yamin</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;