
import ReactiveButton from "reactive-button";
import bannerImg from "../../../assets/output-onlinegiftools (1).gif"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCircleNotch, faThumbsUp, faBomb } from '@fortawesome/free-solid-svg-icons';



const Banner = () => {

    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    };


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-16">

            <div className="ml-10 md:ml-14 md:mt-16 ">
                <h2 className="font-medium mt-2">Hi, I am</h2>
                <h1 className="text-4xl font-extrabold mt-1">Bee Yamin</h1>
                <p className="mt-2">~ Passionate developer skilled in creating <br /> innovative solutions for diverse challenges ~</p>
                <div className="flex gap-3 mt-2">
                    {/* <Link to=""><ReactiveButton color="red" rounded idleText="Download CV" animation={true} /></Link> */}
                    <ReactiveButton
                        buttonState={state}
                        onClick={onClickHandler}
                        color={'red'}
                        idleText={'Download CV'}
                        loadingText={<><FontAwesomeIcon icon={faCircleNotch} spin /> Loading </> }
                        successText={ <><FontAwesomeIcon icon={faThumbsUp} /> Success </>}
                        errorText={<> <FontAwesomeIcon icon={faBomb} /> Error </> }
                        type={'button'}
                        className={'class1 class2'}
                        style={{  borderRadius: '5px',}}
                        rounded={true}
                        size={'normal'}
                        messageDuration={2000}
                        animation={true}/>

                    <Link to="/contact"><ReactiveButton color="red" rounded idleText="Contact Me" animation={true} /></Link>
                </div>
            </div>
            <div className="md:ml-20 ml-5">
                <img src={bannerImg} className="w-80 h-80" alt="" />
            </div>

        </div>
    );
};

export default Banner;