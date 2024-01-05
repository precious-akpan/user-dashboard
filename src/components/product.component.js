import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Switch from "react-input-switch";
import EditProductModal from "./edit-product-modal";
import { useState } from "react";

export default function Product({ product, deleteProductHandler }) {
  const [showModal, setShowModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  const handleEditProduct = () => {
    setShowModal(true);
  };

  const handleSaveProduct = (updatedProduct) => {
    setEditedProduct(updatedProduct);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const {
    image: imageUrl,
    title,
    price,
    category,
    rating,
    isAvailable = true,
  } = editedProduct;

  return (
    <>
      <div>
        {showModal && (
          <EditProductModal
            product={editedProduct}
            onSave={handleSaveProduct}
            onClose={handleCloseModal}
          />
        )}
      </div>
      <div
        className={"grid grid-cols-2 md:grid-cols-7 p-2 hover:bg-gray-50 hover:cursor-auto"}
      >
        <span className={"flex items-center grid-cols-1 md:col-span-2"}>
          <img alt={"product"} src={imageUrl} className={"w-8 mx-2"} />
          <span className={"p-3"}>{title}</span>
        </span>
        <span className={"flex items-center"}>
          &#8358; {Number(price).toLocaleString()}
        </span>
        <span className={"hidden md:flex items-center"}>{category}</span>
        <span className={"hidden md:flex items-center"}>{rating.count}</span>
        <span className={"hidden md:flex items-center"}>
          <FiEdit
            className={"me-3 hover:cursor-pointer"}
            size={"1.5em"}
            onClick={handleEditProduct}
          />

          <RiDeleteBin6Fill
            className={"ms-3 hover:cursor-pointer"}
            size={"1.5em"}
            onClick={deleteProductHandler}
          />
        </span>
        <div className={"hidden md:flex items-center"}>
          <Switch
            className={"hover:cursor-auto"}
            on={true}
            off={false}
            value={isAvailable}
            styles={{
              trackChecked: { backgroundColor: "green" },
            }}
          />
        </div>
      </div>
    </>
  );
}
