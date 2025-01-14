import { getURL } from 'next/dist/shared/lib/utils';
import React, { useState } from 'react';

export default function AddProductForm({ transporter }) {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: productName,
      image: productImage,
      price: productPrice,
    };
    transporter(newProduct);

    setProductName('');
    setProductImage('');
    setProductDescription('');
    setProductPrice('');
  };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   const file = e.dataTransfer.files[0];
  //   if (file) {
  //     setProductImage(URL.createObjectURL(file));
  //   }
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setProductImage(URL.createObjectURL(file));
  //   }
  // };

  return (
    <div className="h-screen flex items-center justify-center bg-transparent backdrop-blur-sm py-12 w-full gap-2">
      <button className="text-4xl text-white bg-red-500 px-3 py-1">X</button>
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg max-h-[80vh] overflow-y-auto hide-scrollbar">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Submit a Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
              required
              className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="productName">
              Product Image
            </label>
            <input
              type="text"
              id="productImage"
              name="productImage"
              value={productImage}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter Image Url"
              required
              className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="productImage">
              Image of Product
            </label>
            <div
              className="flex items-center justify-center w-full h-[100px]"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16l-4-4m0 0l4-4m-4 4h14m4 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">Drag and drop files here</p>
                </div>
                <input
                  id="productImage"
                  type="url"
                  // className="hidden"
                  // onChange={handleFileChange}
                />
              </label>
            </div>
            {productImage && (
              <div className="mt-4">
                <img
                  src={productImage}
                  alt="Product Preview"
                  className="max-w-full max-h-48 object-cover rounded-md"
                />
              </div>
            )}
          </div> */}
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="productDescription">
              Additional Description
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              rows="4"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter additional description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="productPrice">
              Product Price
            </label>
            <input
              type="text"
              id="productPrice"
              name="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="ex: $5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-1 px-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
