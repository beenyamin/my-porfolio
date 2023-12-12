<div className="pt-5 ml-8 lg:ml-24  ">
            <div className="flex shadow-2xl lg:w-8/12 z-10  m-auto fixed bg-opacity-80 rounded-full bg-white">

                {/* mobile */}
                <div className="navbar-start">
                    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <BsList size={20}></BsList>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className={({ isActive }) => `${isActive ? 'btn btn-sm btn-error text-white dark:text-white rounded-full' : 'btn  btn-ghost dark:text-black btn-sm rounded-full'}`} onClick={closeDropdown}> Home </NavLink>

                            <NavLink to="/project" className={({ isActive }) => `${isActive ? 'btn btn-sm btn-error text-white dark:text-black  rounded-full' : 'btn dark:text-black btn-ghost btn-sm rounded-full'}`} onClick={closeDropdown}> Projects</NavLink>

                            <NavLink to="/contact" className={({ isActive }) => `${isActive ? 'btn btn-sm btn-error text-white dark:text-black  ' : 'btn dark:text-black btn-ghost btn-sm rounded-full'}`} onClick={closeDropdown}> Contact Me</NavLink>
                        </ul>
                    </div>


                    <div className="avatar ml-3 mt-0 md:mt-2 placeholder">
                        <div className="bg-red-500 text-neutral-content rounded-full w-8">
                            <span className="text-sm font-medium text-white pt-1">BY</span>
                        </div>
                        {/* <h1 className="">Yamin</h1> */}
                    </div>


                </div>

                {/* pc */}
                <div className="navbar-center mr-20  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <NavLink to="/" className={({ isActive }) => isActive ? 'btn btn-sm btn-ghost rounded-full  text-red-400 dark:text-white' : 'btn rounded-full btn-ghost dark:text-black btn-sm'} > Home  </NavLink>

                        <NavLink to="/project" className={({ isActive }) => isActive ? 'btn  btn-sm btn-ghost rounded-full dark:text-black text-red-400' : 'btn dark:text-black btn-ghost btn-sm rounded-full'
                        } > Projects</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'btn  btn-sm btn-ghost rounded-full dark:text-black text-red-400' : 'btn dark:text-black btn-ghost btn-sm rounded-full'
                        } > Contact Me</NavLink>

                    </ul>
                </div>
                <div className="">
                    <h2 className="mt-2 ml-32 pr-16 lg:pl-6 md:ml-0 text-2xl"> <FontAwesomeIcon icon={faToggleOff} />
                    </h2>
                    {/* <h2 className="mt-3 text-xl"> <FontAwesomeIcon icon={faToggleOn} />
                    </h2> */}


                </div>
            </div>
        </div>