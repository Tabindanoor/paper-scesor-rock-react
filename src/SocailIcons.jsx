import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div>
      <ul className="flex transform -rotate-25 skew-25 transform-preserve-3d">
        <li className="relative">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-white text-lg transition duration-300">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
          </a>
        </li>
        <li className="relative">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-white text-lg transition duration-300">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
        </li>
        <li className="relative">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-white text-lg transition duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
        </li>
        <li className="relative">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-white text-lg transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
