import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await fetch(`http://localhost:8000/book/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Fetch error: ", error); // Improved error logging
        setError(error.message);
      }
    };
    getBook();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4 mt-20">
      <div className="book-detail flex flex-col md:flex-row">
        <img src={book.image} alt={book.name} className="w-full md:w-1/2 object-cover" />
        <div className="book-info p-4 md:pl-8">
          <h1 className="text-2xl font-bold text-#22d3ee">{book.name}</h1>
          <p className="text-lg mt-4"><h1 className="text-xl font-bold text-red-600">Description: </h1> <br/> {book.title}</p>
          <p className="text-lg mt-4">Price: ${book.price}</p>
          <p className="text-lg mt-4">Category: {book.category}</p>
          <p className="text-lg mt-4">Author: {book.author}</p>
          <button className="mt-6 mb-5 bg-[#22d3ee] text-white px-4 py-2 rounded-md hover:bg-[#22d3ee] duration-300">
              add to cart
            </button>
          <div>
            <Link to="/course">
            <button className="mt-6 mb-5 bg-[#22d3ee] text-white px-4 py-2 rounded-md hover:bg-[#22d3ee] duration-300">
              Back to cource
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Book;
