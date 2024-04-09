"use client"
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Home() {

  const [listData, setList] = useState([]);
  const fetchAllData = async () => {
    try{
      const fetchedData = await axios.get("/api/product");
      if(fetchedData.status === 200){
        setList(fetchedData.data);
      }
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAllData()
  },[])

  
  const [formData, setFormData] = useState({
    title:'',
    stocks:'',
    price:'',
    category:'',
  })

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
    
  }

  const handleData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/product", formData);
      
      if(response.status === 200){
        
        toast.success('Inventory Added', {
          position: "top-right",
          autoClose: 3000
          });

          setFormData({
            title: '',
            stocks: '',
            price: '',
            category: ''
          });

            fetchAllData()
          

      }
     
    } catch (error) {
      console.error("Error sending product data:", error);
    }
  }

  const handleDelete =  async (id) => {
    try{
      const response = await axios.delete("/api/product", {
        params: {
          id: id
        }
      });
      fetchAllData();
      if (response.status === 200) {
        toast.success('Item is Deleted', {
          autoClose: 3000,
        });
      }
    }catch(error){
      console.log('error')
    }
  }

  
  

  return (
    <div className="container mx-auto p-4">
      {/* Add Stock Form */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Add a Stock</h1>
        <form className="flex flex-col md:flex-row md:items-center" onSubmit={handleData}>
          <input
            type="text"
            name="title"
            placeholder="Product Name"
            onChange={handleInputChange}
            value={formData.title}
            className="w-full md:w-[22%] py-2 px-4 border border-gray-300 rounded-l mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <input
            type="number"
            name="stocks"
            placeholder="Quantity"
            onChange={handleInputChange}
            value={formData.stocks}
            className="w-full md:w-[22%] py-2 px-4 border border-gray-300 mb-2 md:mb-0 md:mr-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
            value={formData.price}
            className="w-full md:w-[22%] py-2 px-4 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full md:w-[22%] ml-2 py-2 px-4 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
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
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 mt-2 md:mt-0 md:ml-2 rounded focus:outline-none"
          >
            Add Stock
          </button>
        </form>
      </div>

      {/* Display Current Stock */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Current Stock</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4">Index</th>
                <th className="text-left py-3 px-4">Product Name</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {/* Sample Stock Items */}
              {
                listData.map((data, index) => (
                  <tr key={index + 1} className="border-b border-gray-200">
                    
                  <td className="py-4 px-6">{index + 1}</td>
                  <td className="py-4 px-6">{data.title}</td>
                  <td className="py-4 px-6">{data.category}</td>
                  <td className="py-4 px-6">{data.stocks}</td>
                  <td className="py-4 px-6">{data.price}</td>
                  <td className="py-4 px-6">
                  <button
                  onClick={() => handleDelete(data._id)}
                   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                      Delete
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded">
                      Edit
                  </button>
              </td>
                </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
