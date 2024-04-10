"use client"
import axios from "axios";
import { useState, useEffect } from "react";

function StocksPage() {
  const [listData, setList] = useState([]);

  const fetchAllData = async () => {
    try {
      const fetchedData = await axios.get("/api/product");
      if (fetchedData.status === 200) {
        setList(fetchedData.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stocks</h1>
      <div className="grid grid-cols-3 gap-6">
        {listData.map((product, index) => (
        <div key={index} className={`border rounded-lg p-4 shadow-md transition-colors duration-300 hover:bg-gray-700 hover:text-white group`}>
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 group-hover:text-white">Stocks: {product.stocks}</p>
        <p className="text-gray-600 group-hover:text-white">Price: ${product.price}</p>
      </div>
      
       
        ))}
      </div>
    </div>
  );
}

export default StocksPage;
