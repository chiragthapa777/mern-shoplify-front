import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function Item() {
  return (
    <tr className="border ">
      <td className="min-h-[70px] min-w-[70px]">
        <img
          className="h-[70px] w-[70px] object-cover"
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="shoe"
        />
      </td>
      <td>
        <p className="flex-wrap">Canvas sneaker</p>
      </td>
      <td>
        <ToggleButtonGroup color="primary" exclusive>
          <ToggleButton value="add">+</ToggleButton>
          <ToggleButton value="null">
            <p className="mx-2">50</p>
          </ToggleButton>
          <ToggleButton value="sub">-</ToggleButton>
        </ToggleButtonGroup>
      </td>
      <td align="center">12000</td>
    </tr>
  );
}
