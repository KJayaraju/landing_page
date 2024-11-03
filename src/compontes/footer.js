import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin,faGithub,faDiscord} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import log from './log.png';

const Footer = () => {
  return (
    <div>
        <div className='footertop text-center'>
            <div className='mar'>
            <h1>Ready to Join Qwik Notify</h1>
            <p>signup to receive our best resources on <br />push Notification,engagement strategies,and products updates</p>
            <div className='spa'><input type='email' placeholder="What's your Email" className='input'></input><button className='but'>Subcribe</button></div></div>
        </div>
         <div>
            {/* Water Background Section */}
            <div className="water-background">
                <h1 style={{ color: '#fff' }}><img 
            src={log} 
            alt="Qwik Notify logo" 
            width="50" 
            height="50" 
            className="d-inline-block align-top"
            style={{ marginRight: '8px' }}
          />Qwik Notify</h1>
                <div>
                    <h1 className="water-text">Qwik Notify</h1>
                </div>
            </div>

            {/* Follow Section */}
            <div className='follow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4 col-lg-4'>
                            <p>Follow us</p>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginLeft: '10px', color: '#fff', borderRadius: '50%' }} />
                            <FontAwesomeIcon icon={faXTwitter} size="2x" style={{ marginLeft: '10px', color: '#fff', borderRadius: '50%' }} />
                            <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginLeft: '10px', color: '#fff', borderRadius: '50%' }} />
                        </div>
                        <div className='col-sm-4 col-lg-4'>
                            <p>Our Community</p>
                            <FontAwesomeIcon icon={faDiscord} size="2x" style={{ marginLeft: '10px', marginRight: '10px', color: '#fff', borderRadius: '50%' }} />
                        </div>
                        <div className='col-sm-4 col-lg-4'>
                            <p>Contact us</p>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ marginLeft: '10px', marginRight: '10px', color: '#fff', borderRadius: '50%' }} />
                            support@letsnotify.co.in
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <div className="footer">
            <p> © {new Date().getFullYear()} Copyright Qwik Notify. All rights reserved. Various trademarks held by their respective owners.Term&conditions </p>
            </div>
        </div>
      );
    };

export default Footer;
