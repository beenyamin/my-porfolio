import { Helmet } from "react-helmet-async";
import ReactiveButton from "reactive-button";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCircleNotch, faThumbsUp, faBomb } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    };

    return (
        <div className="pt-28">
            <Helmet>
                <title> Yamin | Projects </title>
            </Helmet>



         

            <div className="card lg:w-10/12 lg:ml-24  bg-base-100 shadow-xl" style={{ backgroundImage: 'url(https://i.ibb.co/FH3jZwD/job-1.jpg)', backgroundSize: 'cover', borderRadius: '5px' }}>
      <figure className="">
       
      </figure>
      <div className="card-body items-center text-center ">
        <div className="card-actions pt-80">
          <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
            color={'teal'}
            idleText={'Give Like'}
            loadingText={<><FontAwesomeIcon icon={faCircleNotch} spin /> Processing </>}
            successText={<><FontAwesomeIcon icon={faThumbsUp} /> Liked </>}
            errorText={<> <FontAwesomeIcon icon={faBomb} /> Error </>}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px' }}
            rounded={true}
            size={'normal'}
            messageDuration={2000}
            animation={true}
          />

          {/* Use the Link component to create a link */}
          <Link to="https://assignment-11-e300a.web.app/">
            <ReactiveButton color="teal" rounded idleText="View Project" animation={true} />
          </Link>
        </div>
      </div>
               </div>

            <div className="card lg:w-10/12 lg:ml-24  mt-10 bg-base-100 shadow-xl" style={{ backgroundImage: 'url(https://i.ibb.co/m8P88kC/pets.png)', backgroundSize: 'cover', borderRadius: '5px' }}>
      <figure className="">
       
      </figure>
      <div className="card-body items-center text-center  ">
        <div className="card-actions pt-80  ">
          <ReactiveButton
            buttonState={state}
            onClick={onClickHandler}
            color={'teal'}
            idleText={'Give Like'}
            loadingText={<><FontAwesomeIcon icon={faCircleNotch} spin /> Processing </>}
            successText={<><FontAwesomeIcon icon={faThumbsUp} /> Liked </>}
            errorText={<> <FontAwesomeIcon icon={faBomb} /> Error </>}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px' }}
            rounded={true}
            size={'normal'}
            messageDuration={2000}
            animation={true}
          />

          {/* Use the Link component to create a link */}
          <Link to="https://assignment-12-981d3.web.app/">
            <ReactiveButton color="teal" rounded idleText="View Project" animation={true} />
          </Link>
        </div>
      </div>
               </div>


        </div>
    );
};

export default Project;