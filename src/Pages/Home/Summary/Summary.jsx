
const Summary = () => {
    return (
        <div className="mt-10 bg-white px-10 ml-14 mr-14 pt-8  pb-11 rounded-2xl">
            <h2 className="text-center text-2xl font-bold">~ Summary Of My Resume ~ </h2>
          
            <div className="flex flex-col w-full h-11/12 pb-24 lg:pb-4 lg:mt-7 lg:flex-row">

                <div className="grid flex-grow lg:h-64 card  rounded-box place-items-center">
                    <div className="">
                        <h2 className=" text-2xl font-bold pt-4 lg:pt-0">My Education</h2>
                        <h3>Higher Secondary</h3>
                        <p className="text-mono text-gray-400"> Govt: Azizul Haque <br />College / 2016 - 2018</p>
                        <p></p>
                        <div className="mt-4">
                        <h3>BA in History</h3>
                        <p className="text-mono text-gray-400"> Govt: Azizul Haque <br />College / 2019 - Present</p>
                        <p></p>

                    </div>

                    </div>

               
                </div>
                
                <div className="divider lg:divider-horizontal  "></div>

                <div className="grid flex-grow h-36 card   rounded-box place-items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 ">My Experience</h2>
                        <h3> Jr. Font End Developer</h3>
                        <p className="text-mono text-gray-400"> I can build responsive <br /> websites with React  </p>
                        <h3 className="mt-8"> Expert In TailWind Css</h3>
                        <p className="text-mono text-gray-400 ">I can easily design a <br /> website using Tailwind  </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Summary;