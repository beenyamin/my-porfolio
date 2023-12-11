import { FaNode,FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";




const Skills = () => {
    return (
        <div className="my-20">
            <h2 className="text-center text-2xl font-bold"> ~ My Skills ~ </h2>
            <div className="grid md:px-10 grid-cols-1 md:grid-cols-4 mt-5 md:ml-3 gap-5 ml-24">

{/* node */}
                <div>
                    <div className="card  w-48 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className="text-green-400"><FaNode size={70} /></div>
                            <h2 className="card-title">Node.Js </h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm px-5 w-36 ">70%</button>
                            </div>
                        </div>
                    </div>
                </div>
{/* react */}
                <div>
                    <div className="card w-48 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className="text-blue-500"><FaReact size={70} /></div>
                            <h2 className="card-title">React </h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm px-5 w-36 ">90%</button>
                            </div>
                        </div>
                    </div>
                </div>
{/* js */}
                <div>
                    <div className="card w-48 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className="text-yellow-400"><RiJavascriptFill size={70} /></div>
                            <h2 className="card-title"> JavaScript </h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm px-5 w-36 ">85%</button>
                            </div>
                        </div>
                    </div>
                </div>
{/*  express    */}
                <div>
                    <div className="card w-48 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <div className="text-yellow-400"><SiExpress size={70} /></div>
                            <h2 className="card-title"> Express.js </h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm px-5 w-36 ">85%</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Skills;