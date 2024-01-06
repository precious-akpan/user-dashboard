import React, { useState } from "react";

function EditProductModal({ product, onSave, onClose }) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [isAvailable, setIsAvailable] = useState(true);
  const handleNameChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSave = () => {
    const updatedProduct = { ...product, title, price, isAvailable };
    onSave(updatedProduct);
    onClose();
  };

  const handleIsAvailableChange = (event) => {
    if (event.target.checked) {
      setIsAvailable(false);
    } else setIsAvailable(true);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Product</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-25 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent text-black h-6 w- text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-20">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                value={title}
                onChange={handleNameChange}
              />
              <br />
              <label htmlFor="price">Price: </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={handlePriceChange}
              />
              <br />
              <label htmlFor="isAvailable">Not Available: </label>
              <input
                type="checkbox"
                id="isAvailable"
                value={isAvailable}
                onChange={handleIsAvailableChange}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default EditProductModal;
