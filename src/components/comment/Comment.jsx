import { Avatar, Divider, Rating } from "@mui/material";
import React, { useState } from "react";

export default function Comment() {
    const [value, setvalue] = useState(5)
  return (
    <div className="bg-slate-100 rounded-md  m-1 p-1">
      <div className="flex justify-between ">
        <div className="flex">
          <div className="my-auto mx-2">
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/11612904/pexels-photo-11612904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
          <div>
            <div>
                By Chirag
            </div>
            <div>
                <Rating name="read-only" value={value} readOnly />
            </div>
          </div>
        </div>
        <div className="my-auto">
            Date: 13 Apr 2022
        </div>
      </div>
      <Divider />
      <div>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto neque dolore distinctio commodi explicabo. Magnam.
          </p>
      </div>
    </div>
  );
}
