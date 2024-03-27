/* eslint-disable @typescript-eslint/no-explicit-any */
import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch } from "../redux/hooks";
import { removeCart, updateQuantity } from "../redux/features/cart/cartSlice";

const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const handleUpdateQuantity = (type: string, id: string) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };
  const handleCartRemove = (e, id: string) => {
    e.stopPropagation();
    dispatch(removeCart({ id }));
  };
  return (
    <div className="flex justify-center items-center space-x-10 border border-gray-300 lg:w-fit w-full px-3 py-1  rounded-sm h-24 ">
      <div>
        <img src={product.img} alt="" className="size-20" />
      </div>
      <div>
        <h3 className="text-lg font-bold truncate  mb-2">{product.name}</h3>

        <p className="text-lg font-bold">${product.price}</p>
      </div>
      <div className="flex justify-center items-center space-x-3">
        <button onClick={() => handleUpdateQuantity("increment", product.id)}>
          <Plus />
        </button>
        <span>{product.quantity}</span>
        <button onClick={() => handleUpdateQuantity("decrement", product.id)}>
          <Minus />
        </button>
      </div>
      <div>
        <button
          onClick={(e) => {
            handleCartRemove(e, product.id);
          }}
          className="bg-red-200 text-white p-2 rounded-full w-full"
        >
          <Trash2 className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
