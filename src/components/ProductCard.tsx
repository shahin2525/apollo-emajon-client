/* eslint-disable @typescript-eslint/no-explicit-any */

import { ShoppingCart, Trash2 } from "lucide-react";
import Rating from "./Ratings";
import { useState } from "react";
import Modal from "./Modal";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDeleteProductsMutation } from "../redux/features/product/productApi";

const ProductCard = ({ product }: any) => {
  const [deleteProduct] = useDeleteProductsMutation();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {showModal && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          handleAddToCart={() => {}}
        />
      )}
      <div onClick={() => handleShowModal(product)}>
        <div key={product.id} className="border p-4">
          <img src={product.img} alt="" className="w-full" />
          <h3 className="text-lg font-bold truncate mt-4 mb-2">
            {product.name}
          </h3>
          <div className="mb-2">
            <Rating value={product.ratings} />
          </div>
          <p className="text-lg font-bold">${product.price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className="bg-primary text-white px-4 py-2 mt-2 rounded-md w-full"
          >
            Add To Cart
            <ShoppingCart className="inline ml-2" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteProduct(product._id);
            }}
            className="bg-primary text-white px-4 py-2 mt-2 rounded-md w-full"
          >
            Remove
            <Trash2 className="inline ml-1"></Trash2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
