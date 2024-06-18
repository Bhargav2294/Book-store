import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import photo from "../../public/location.jpg";

export default function About() {
  return (
    <div className="contact-container max-w-screen-2xl mx-auto px-4 md:px-20 flex flex-col md:flex-row my-10">
      <div className="contact-info w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-15 md:ml-0">
        <div className="container mx-auto p-6 max-w-lg text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-4xl mb-4 text-customBlue">About Us</h1>
          
          <div className="mb-6">
            <h2 className="text-2xl mb-2 text-gray-800 dark:text-gray-100">Contact Information:</h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 mt-5"><strong>Phone Number:</strong>+91 99xxx 0xx08</p>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 mt-3">
              <strong>Email:</strong> <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">contact@thebookhaven.in</a>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200 mt-3">
              <strong>Address:</strong> 
              <div>
                The Book Haven
                5678, Hill Road
                Opposite Bandra Talao,
                Bandra West,
                Mumbai, Maharashtra 400050
                India.
              </div>
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl mb-2 text-gray-800 dark:text-gray-100">Follow Us on Social Media:</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              <FontAwesomeIcon icon={faFacebook} /> 
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline"> Facebook</a>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              <FontAwesomeIcon icon={faTwitter} /> 
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline"> Twitter</a>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              <FontAwesomeIcon icon={faInstagram} /> 
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline"> Instagram</a>
            </p>
          </div>
        </div>
      </div>
      <div className="image-container order-1 w-full mt-20 md:w-1/2">
        <img
          src={photo}
          className="contact-image w-full max-w-[550px] h-auto max-h-[900px] ml-12 rounded-[5px] shadow-md mt-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          alt="Book Haven Contact"
        />
      </div>
    </div>
  );
}
