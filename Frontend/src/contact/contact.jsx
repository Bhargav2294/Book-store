import React from "react";
import Navbar from "../components/Navbar";
import Contacts from "../components/Contact";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
