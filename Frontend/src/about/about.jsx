import React from "react";
import Navbar from "../components/Navbar";
import Abouts from "../components/about";
import Footer from "../components/Footer";
function About() {
  return (
    <>
      <Navbar />
      
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Abouts />
      </main>
      <Footer />
    </>
  );
}

export default About;
