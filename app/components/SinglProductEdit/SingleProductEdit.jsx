import axios from 'axios';
import React from "react";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';


function SingleProductEdit({popup, id}) {
const [loader, setLoader] = useState(true);
  const [formData, setFormData] = useState({
    title:'',
    stocks:'',
    price:''
  });

  const fetchSingleData = async () => {
    try {
      const response = await axios.get(`/api/singleproduct/?id=${id}`);
      setFormData({
        title:response.data.title,
        stocks:response.data.stocks,
        price:response.data.price
      });

      
     
    } catch (error) {
      console.error("Error Fetching Data:", error);
      // You can handle errors here, like showing an error message
    }
    finally{
      setLoader(false);
    }
  }

  useEffect(() => {
    fetchSingleData();
  }, [])
  
  
  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  }

  const closePopup = () => {
    popup(false);
  }

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/product/?id=${id}`, formData);
      
      if (response.status === 200) {
        toast.success("Inventory Updated Successfully");
        // You can add any success handling here, like showing a success message
        closePopup();
      }
    } catch (error) {
      console.error("Error updating inventory:", error);
      // You can handle errors here, like showing an error message
    }
  }

  
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Product</h2>
        {
          loader ? (<div><Loader/></div>) :
        (
<form className="space-y-4" onSubmit={submitData}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              type="text"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
              placeholder="Product Title"
            />
          </div>
          <div>
            <label htmlFor="stocks" className="block text-sm font-medium text-gray-700">
              Stocks
            </label>
            <input
              id="stocks"
              name="stocks"
              value={formData.stocks}
              type="number"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
              placeholder="Number of Stocks"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              id="price"
              name="price"
              value={formData.price}
              type="number"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
              placeholder="Product Price"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
            <button
              onClick={()=>closePopup()}
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </form>
        )}
        
      </div>
    </div>
  );
}

export default SingleProductEdit;
