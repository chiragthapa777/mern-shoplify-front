import { Typography, Stack, Pagination } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div>
      <div className="flex justify-center items-center h-20 my-2 bg-gray-100">
        <h1 className="text-xl font-semibold	uppercase sm:text-2xl">Products</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> 
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center items-center my-5">
        <Pagination count={10} variant="outlined" onChange={(e,page)=>console.log(page)}/>
      </div>
    </div>
  );
}
