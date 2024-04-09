"use client"
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Home() {

  
  const [formData, setFormData] = useState({
    title:'',
    stocks:'',
    price:''
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
            price: ''
          });

      }
     
    } catch (error) {
      console.error("Error sending product data:", error);
    }
  }

  console.log(formData)
  

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
            className="w-full md:w-[30%] py-2 px-4 border border-gray-300 rounded-l mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <input
            type="number"
            name="stocks"
            placeholder="Quantity"
            onChange={handleInputChange}
            value={formData.stocks}
            className="w-full md:w-[30%] py-2 px-4 border border-gray-300 mb-2 md:mb-0 md:mr-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleInputChange}
            value={formData.price}
            className="w-full md:w-[30%] py-2 px-4 border border-gray-300 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
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
                <th className="text-left py-3 px-4">Product Name</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">Price</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {/* Sample Stock Items */}
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6">Product 1</td>
                <td className="py-4 px-6">Category 1</td>
                <td className="py-4 px-6">10</td>
                <td className="py-4 px-6">$20</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6">Product 2</td>
                <td className="py-4 px-6">Category 2</td>
                <td className="py-4 px-6">20</td>
                <td className="py-4 px-6">$30</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6">Product 3</td>
                <td className="py-4 px-6">Category 3</td>
                <td className="py-4 px-6">15</td>
                <td className="py-4 px-6">$25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
