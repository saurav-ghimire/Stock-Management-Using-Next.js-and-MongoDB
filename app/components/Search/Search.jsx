"use client"
import axios from "axios";
import { useState,useRef } from "react";

function Search() {

  const title = useRef("");
  const category = useRef("");
  const [products, setProducts] = useState([]);


  const handleOnChange = async () => {
    
    const searchTitle = title.current.value;
    const searchCategory = category.current.value;
    
    if (!searchTitle.trim()) { // If searchTitle is empty or contains only whitespace
      setProducts([]); // Clear products array
      return; // Exit early
    }


    try {
      const response = await axios.get(`/api/search/?title=${searchTitle}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error)
    }
    
  };

  
  
  return (
    <div className="container py-10 px-7 bg-slate-100">
      {/* Search Stocks by Category */}
      <div>
        <h2 className="text-xl font-bold mb-2">Search Stocks by Category</h2>
        <div className="flex items-center">
          <input
            type="text"
            onChange={handleOnChange}
            ref={title}
            placeholder="Search by category"
            className="w-full md:w-2/2 py-2 px-4 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <select
          onChange = {handleOnChange}
          ref={category}
            className="py-2 px-4 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Sports & Outdoors">Sports & Outdoors</option>
              <option value="Toys & Games">Toys & Games</option>
              <option value="Automotive">Automotive</option>
              <option value="Tools & Home Improvement">Tools & Home Improvement</option>
              <option value="Baby & Kids">Baby & Kids</option>
              <option value="Office Supplies">Office Supplies</option>
              <option value="Pet Supplies">Pet Supplies</option>
              <option value="Jewelry & Watches">Jewelry & Watches</option>
              <option value="Food & Beverages">Food & Beverages</option>
              <option value="Furniture">Furniture</option>
              <option value="Garden & Outdoor">Garden & Outdoor</option>
              <option value="Music & Movies">Music & Movies</option>
              <option value="Art & Crafts">Art & Crafts</option>
              <option value="Electronics Accessories">Electronics Accessories</option>
              <option value="Stationery">Stationery</option>
              <option value="Party Supplies">Party Supplies</option>
              <option value="Travel & Luggage">Travel & Luggage</option>
              <option value="Fitness & Exercise">Fitness & Exercise</option>
              <option value="Video Games & Consoles">Video Games & Consoles</option>
              <option value="Collectibles">Collectibles</option>
              <option value="Musical Instruments">Musical Instruments</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Cleaning Supplies">Cleaning Supplies</option>
              <option value="Industrial & Scientific">Industrial & Scientific</option>
          </select>
        </div>
      </div>
      <div className="product-found">
      {products.map((product, index) => (
          <div key={index} className="my-4 p-4 border rounded-lg shadow-lg bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
          
            <p className="text-gray-600">Stocks: {product.stocks}</p>
            <p className="text-gray-600">Price: ${product.price}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
