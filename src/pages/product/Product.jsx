import { Button, Chip, Divider, Rating } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Comments from "../../components/comment/Comments";
export default function Product() {
  return (
    <div>
      {/* products photo and short detail */}
      <div className="flex flex-col sm:flex-row  justify-around sm:m-5">
        <img
          className="sm:h-96 h-[60vh] w-full sm:w-64 object-cover sm:mr-20 sm:m-5 "
          src="https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="jeans"
        />
        <div className="sm:ml-20 m-5 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <h1 className="whitespace-nowrap font-semibold sm:mr-20 text-xl my-2 sm:my-5">
              Men Jeans pant
            </h1>
            <Rating value={3.5} precision={0.5} readOnly className="my-auto" />
          </div>
          <Divider />

          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            repellat maiores beatae amet asperiores, dignissimos necessitatibus
            facere, libero omnis architecto autem consectetur tempora velit.
            Officia quos iure magnam earum expedita.
          </div>
          <Divider />
          <div className="my-2">
            <h2>Categories</h2>
            <div className="my-2">
              <Chip label="Pant" size="small" />
              <Chip label="Jeans" size="small" />
            </div>
          </div>
          <Divider />
          <div className="my-2">
            <Button variant="contained" startIcon={<ShoppingCartIcon />}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      {/* products description */}
      <div className="mx-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse officia
        exercitationem, animi illum facere aliquam sit nesciunt totam commodi
        amet quo consequatur error tempore omnis ipsum veniam asperiores.
        Accusamus tempore illum eius ipsum aspernatur unde! Nobis dolore
        repellat similique. Obcaecati molestias earum veniam esse similique
        impedit, quaerat laborum enim praesentium!
      </div>
      {/* comments */}
      <div>
        <Comments />
      </div>
    </div>
  );
}
