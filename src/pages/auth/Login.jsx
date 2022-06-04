import { Button, TextField } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <div className="h-screen w-[100%]">
      <div className="grid place-items-center h-[100%] bg-slate-100">
        <div>
          <div className="flex justify-between my-2">
          <h1 className="font-bold text-2xl">Login</h1>
          <p className="underline cursor-pointer hover:text-blue-600 my-auto">New to shoplify?</p>
          </div>
          <div className="bg-white rounded p-2 sm:w-[500px] w-[90vw] sm:mr-3">
            <div className="flex flex-col w-[100%] mb-3">
              <TextField  fullWidth label="Email" variant="standard"  sx={{margin:"5px 0px"}}/>
              <TextField  type="password" fullWidth label="Password" variant="standard" sx={{margin:"5px 0px"}}/>
            </div>
            <Button fullWidth variant="contained">Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
