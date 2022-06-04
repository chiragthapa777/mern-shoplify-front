import { Button, Rating, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import Comment from "./Comment";
import { useState } from "react";

export default function Comments() {
  const [value, setValue] = useState(null);
  return (
    <div className="w-[95%] sm:w-[80%] mx-auto my-5">
      {/* add comments */}
      <div className="flex  flex-col mb-5">
        <TextField
          fullWidth
          label="Add a comment"
          id="fullWidth"
          variant="standard"
        />
        <div className="flex  justify-between mx-auto  w-[100%] ">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ margin: "auto 3px " }}
          />
          <Button variant="text" endIcon={<SendIcon />}>
              <p className="text-lg">
            Post
              </p>
          </Button>
        </div>
      </div>
      {/* show comments */}
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
