import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../Hooks/useTheme';

const Checking = () => {
    const { changeTheme, mode } = useTheme();

    return (
        <div>
            <div className="navbar items-center justify-center dark:bg-zinc-700 bg-base-100 max-w-3xl fixed bg-opacity-50 mt-5 z-10 lg:ml-32 rounded-full ">
                {/* phone */}
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className={({ isActive }) => `${isActive ? 'btn btn-sm btn-error text-white dark:text-white rounded-full' : 'btn  btn-ghost dark:text-black btn-sm rounded-full'}`} > Home </NavLink>

                            <NavLink to="/project" className={({ isActive }) => `${isActive ? 'btn btn-sm btn-error text-white dark:text-white rounded-full' : 'btn  btn-ghost dark:text-black btn-sm rounded-full'}`} > Projects</NavLink>

                            <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'btn btn-sm btn-error text-white dark:text-white rounded-full' : 'btn  btn-ghost dark:text-black btn-sm rounded-full'}`} > Contact Me</NavLink>
                        </ul>
                    </div>


                    <div className="avatar ml-3 mt-0 md:mt-2 placeholder">
                        <div className="bg-red-500 text-neutral-content rounded-full w-8">
                            <span className="text-sm font-medium text-white pt-1">BY</span>
                        </div>
                        {/* <h1 className="">Yamin</h1> */}
                    </div>


                </div>

                {/* pc*/}
                <div className="navbar-center pl-80 hidden lg:flex">
                    <ul className="menu menu-horizontal ">

                        <NavLink to="/" className={({ isActive }) => isActive ? 'btn btn-sm btn-ghost rounded-full  text-red-400 dark:text-red-400' : 'btn rounded-full btn-ghost dark:text-white btn-sm'} > Home  </NavLink>

                        <NavLink to="/project" className={({ isActive }) => isActive ? 'btn  btn-sm btn-ghost rounded-full dark:text-red-400 text-red-400' : 'btn dark:text-white btn-ghost btn-sm rounded-full'
                        } > Projects</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'btn  btn-sm btn-ghost rounded-full dark:text-red-400 text-red-400' : 'btn dark:text-white btn-ghost btn-sm rounded-full'
                        } > Contact Me</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="">
                        <button onClick={changeTheme} className="rounded-full ">
                            {mode === "dark" ? <h2 className=" text-white mt-1  pr-10 lg:ml-0 ml-14 text-2xl"> <FontAwesomeIcon icon={faToggleOn} />
                            </h2> :

                                <h2 className="mt-1 pr-10 lg:ml-0 ml-14 text-2xl"> <FontAwesomeIcon icon={faToggleOff} />
                                </h2>}
                        </button>




                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checking;