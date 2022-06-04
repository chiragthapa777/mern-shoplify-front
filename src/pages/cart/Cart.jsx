import { Button } from "@mui/material";
import React from "react";
import ItemList from "../../components/itemList/ItemList";

export default function Cart() {
  return (
    <div className="w-[99%] sm:w-[90%] mx-auto my-5">
      {/* text */}
      <div>
        <h1 className="text-2xl font-bold uppercase">Cart</h1>
      </div>
      <div className="flex flex-col lg:justify-end lg:flex-row m-1">
        {/* items */}
        <div className="flex-auto ">
          <ItemList />
        </div>
        {/* check out option */}
        <div className="">
          <h1 className="lg:w-[200px] font-bold text-xl uppercase">checkout</h1>
          <p>
            <span className="font-bold	text-xl">Total : </span> 
             Rs
            <span className="text-xl">12,000</span>
          </p>
          <p>
            <span className="font-bold	text-xl">Discount : </span> 
             Rs
            <span className="text-xl text-rose-700"> - 2,000</span>
          </p>
          <p>
            <span className="font-bold	text-xl">Grand Total : </span> 
             Rs
            <span className="text-xl font-bold">10,000</span>
          </p>
          <Button variant="contained" color="success" sx={{margin:"0.30rem"}}>checkout</Button>
        </div>
      </div>
    </div>
  );
}
