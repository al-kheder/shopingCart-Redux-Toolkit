import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slice/cartSlice";
import CartCount from "./CartCount";

export default function CardProduct({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveItem() {
    dispatch(removeFromCart(cartItem));
    toast.success("Item Removed");
  }
  function handleDecrementProduct() {
    dispatch(decrementQty(cartItem));
  }
  function handleIcrementProduct() {
    dispatch(incrementQty(cartItem));
  }
  return (
    <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm mb-4">
      <div className="flex items-center gap-3">
        <Image
          src={cartItem.image}
          width={249}
          height={249}
          alt={cartItem.title}
          className="rounded-xl w-20 h-20"
        />
        <div className="flex flex-col">
          <h2>{cartItem.title}</h2>
        </div>
      </div>
      <div className=" rounded-xl border border-gray-400 flex gap-3 items-center ">
        <button
          className="border-r border-gray-400 py-2 px-4"
          onClick={handleDecrementProduct}
        >
          <Minus />
        </button>
        <p className="flex-grow py-2 px-4">{cartItem.qty}</p>
        <button
          className="border-l border-gray-400 py-2 px-4"
          onClick={handleIcrementProduct}
        >
          <Plus />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <h4>{cartItem.price}$</h4>
        <button onClick={handleRemoveItem}>
          <Trash2 className="text-red-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
