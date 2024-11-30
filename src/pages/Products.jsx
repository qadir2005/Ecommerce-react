import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";

function Products() {
  const API_KEY = "https://dummyjson.com/products";
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const getApiData = async () => {
    try {
      const API_data = await axios(API_KEY);
      const Data = API_data?.data?.products;
      setProducts(Data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const searchProducts = () => {
    const result = products?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    return result || [];
  };

  const priceLowToHigh = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  const priceHighToLow = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  return (
    <div>
      <div
        className="bg-slate-500 w-48"
        onClick={priceLowToHigh}
      >
        Low to High
      </div>
      <div
        className="bg-slate-500 mt-4 w-48"
        onClick={priceHighToLow}
      >
        High to Low
      </div>

      <input
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearch(e.target.value)}
        className="bg-black h-10 w-[80%] my-auto pl-2 text-white"
      />

      <div className="flex flex-wrap justify-center">
        {loading ? (
          "Loading..."
        ) : (
          searchProducts().map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product-detail/${item.id}`)} // Navigate on click
              className="cursor-pointer"
            >
              <img src={item.thumbnail} alt="" />
              <div>{item.title}</div>
              <span>${item.price}</span>
              <ReactStars count={5} value={item.rating} size={20} color2={"#ffd700"} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
