import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book");
        const data = res.data; // Access the data directly from res.data
        const freeBooks = data.filter((book) => book.price === 0); // Filter free books
        setBooks(freeBooks); // Set state with free books
      } catch (error) {
        console.log("Fetch error: ", error);
      }
    };
    getBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <Slider {...settings}>
          {books.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
