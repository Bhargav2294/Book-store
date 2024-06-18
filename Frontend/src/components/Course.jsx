import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch("http://localhost:8000/book"); // Ensure the port matches your backend
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Fetch error: ", error); // Improved error logging
        setError(error.message);
      }
    };
    getBooks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-[#22d3ee]">Here!</span>
            <br />
            explore our huge book collection
          </h1>
          <p className="mt-12">
            Welcome to our diverse collection of books, where every reader can find their next adventure! Dive into our extensive range of genres, from gripping thrillers to heartwarming romances, thought-provoking non-fiction to captivating fantasy worlds. Whether you're seeking inspiration, knowledge, or pure entertainment, our carefully curated selection caters to every taste and interest. Explore new authors and timeless classics, discover hidden gems and bestsellers, and embark on literary journeys that will ignite your imagination and enrich your life. With something for everyone, we invite you to lose yourself in the pages of possibility and embark on a reading adventure like no other.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {books.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button className="mt-6 mb-5 bg-[#22d3ee] text-white px-4 py-2 rounded-md hover:bg-[#22d3ee] duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Course;
