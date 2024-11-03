import React from "react";
import './banner.css';
import TypewriterEffect from './TypewriterEffect';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const strings = [
  "Drive Traffic",
  "Engage!",
  "Monetize!",
  "Soar!"
];

const Banner = () => {
  return (
    <div className="banner text-center">
      <h1>
        SuperCharge your Website <br />
        <span style={{ color: '#25b48c' }}>Engagement</span>.
        <span>
          <TypewriterEffect 
            strings={strings}
            typingSpeed={80}
            deletingSpeed={40}
            pauseTime={2000}
          />
        </span>
        <FontAwesomeIcon icon={faRocket} />
      </h1>
      <p>
        Seamless Web Push Notifications Software Tailored for You!
      </p>

      <div className="row justify-content-center mb-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <button className="car1 ">Get Early Access</button>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <button className="car2 ">Get In Touch</button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card-container">
              <div className="c1"></div>
              <div className="c2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
