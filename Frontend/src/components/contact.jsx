import React from 'react';

import photo from "../../public/thanks.jpg";

const ContactPage = () => {
  return (
    <div className="contact-container max-w-screen-2xl mx-auto px-4 md:px-20 flex flex-col md:flex-row my-10 ">
      <div className="contact-info w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-15 md:ml-0">
        <div className="text-content ">
          <h3 className="contact-title text-2xl md:text-4xl font-bold">
            Contact us
            <span className="title-highlight text-customBlue">{" "}</span>
          </h3>
          
        </div>
        <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
                <br />
        </div>
        
        <div className="mt-4 space-y-2">
        <span>Email</span>
        <br />
        <input
            type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
        />
        </div>
        {/* textfiels */}
        <div className="mt-4 ml-0 space-y-2">
        <span>Message</span>
        <br />
        <textarea
            type="text"
            placeholder="Enter your message"
            className="w-80 px-3 py-1 border rounded-md outline-none roe-3"
            rows="4"
        />

        <br />
        </div>
        
          <div className="button-container">
  <button className="get-started-btn mt-6 bg-[#22d3ee] text-white px-4 py-2 rounded-md hover:bg-blue-600 border-none">
    Submit
  </button>
</div>

        
        <div className="mt-4">
            <h1 className="contact-title text-sm md:text-xl font-bold text-customBlue mt-10">Thanks for contacting us</h1>
        </div>
        
        
      </div>
      <div className="image-container order-1 w-full mt-20 md:w-1/2">
        <img
          src={photo}

          className="contact-image w-full max-w-[550px] h-auto max-h-[460px] ml-12 rounded-[15px] shadow-md mt-10 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          alt="Book Haven Contact"
        />
      </div>
    </div>
  );
};

export default ContactPage;
