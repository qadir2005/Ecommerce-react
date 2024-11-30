// imagelider.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const imagelider = () => {
    const [image,setImage] = useState([])
    const API_KEY = "https://dummyjson.com/products"

    const ApiData = async ()=>{
        try{

            const Data = await axios(API_KEY)
            setImage(Data.data.products)
            
            
        }catch(err){
            console.log(err);
            
        }
    }
    useEffect(()=>{
        ApiData()
    },[])
    

        

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index or reset to 0 if at the last image
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < image.length ? prevIndex + 1 : 0
      );
    }, 2000); // Change slide every 2 seconds
    

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, image.length]);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        {image.length>0 && image.map((image, index) => (
          <div
            key={index}
            style={{
              minWidth: "33.33%", // Show 3 image at a time
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
            
          ><Link to={`product-detail/${image.id}`}>
            
            <img
              src={image.thumbnail}
              alt={`Slide ${index + 1}`}
              style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                />
                </Link>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div style={{ marginTop: "10px" }}>
        {image.map((_, index) => (
          <span
            key={index}
            onClick={() => handlePaginationClick(index)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              margin: "5px",
              backgroundColor: currentIndex === index ? "black" : "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default imagelider;
