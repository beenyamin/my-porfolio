import ReactiveButton from "reactive-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCircleNotch, faThumbsUp, faBomb } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    };

    return (
        <div className="px-20">
            <div className="shadow-xl bg-white lg:ml-9  lg:h-96 rounded-xl mt-20 lg:px-20 pt-12">
                <form onSubmit="">
                    <h2 className="font-bold text-2xl mb-4 ml-9 text-gray-600">Get In Touch</h2>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 ml-9 " >
                        <input type="text" placeholder="Your Name" required className="input input-bordered input-error w-9/12 lg:w-11/12 max-w-xs" />
                        <input type="Email" placeholder="Your Email" required  className="input input-bordered input-error w-9/12 lg:w-11/12 max-w-xs" />
                        <input type="text" placeholder="Your Number"  required className="input input-bordered input-error w-9/12 lg:w-11/12 max-w-xs" />
                    </div>
                    <textarea placeholder="Message" className="textarea mt-10 textarea-bordered textarea-error textarea-lg w-8/12 lg:w-11/12 ml-9  " ></textarea>

                   <div className="pb-12 pl-12 pt-2  ">
                   <ReactiveButton
                        buttonState={state}
                        onClick={onClickHandler}
                        color={'red'}
                        idleText={'Send Message'}
                        loadingText={<><FontAwesomeIcon icon={faCircleNotch} spin /> Loading </>}
                        successText={<><FontAwesomeIcon icon={faThumbsUp} /> Message Send </>}
                        errorText={<> <FontAwesomeIcon icon={faBomb} /> Error </>}
                        type={'button'}
                        className={'class1 class2 '}
                        style={{ borderRadius: '5px', }}
                        rounded={true}
                        size={'normal'}
                        messageDuration={2000}
                        animation={true} />
                   </div>

                    {/* <input className="btn text-white btn-error mt-3" type="submit" value='Send Message' /> */}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;