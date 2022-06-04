import React from 'react'
import { Button, TextField } from "@mui/material";

export default function Register() {
  return (
    <div className="h-screen w-[100%]">
    <div className="grid place-items-center h-[100%] bg-slate-100">
      <div>
        <div className="flex justify-between my-2">
        <h1 className="font-bold text-2xl">Register</h1>
        <p className="underline cursor-pointer hover:text-blue-600 my-auto">Already have an account?</p>
        </div>
        <div className="bg-white rounded p-2 sm:w-[500px] w-[90vw] sm:mr-3">
          <div className="flex flex-col w-[100%] mb-3">
            <TextField  fullWidth label="Full name" variant="standard"  sx={{margin:"5px 0px"}}/>
            <TextField  fullWidth label="Email" type="email" variant="standard"  sx={{margin:"5px 0px"}}/>
            <TextField  type="password" fullWidth label="Password" variant="standard" sx={{margin:"5px 0px"}}/>
            <TextField  fullWidth label="Address" variant="standard"  sx={{margin:"5px 0px"}}/>
            <TextField fullWidth label="Contact" type="number" variant="standard"  sx={{margin:"5px 0px"}}/>
            <TextField  fullWidth label="Profile picture" type="file" variant="standard"  sx={{margin:"5px 0px"}}/>
          </div>
          <Button fullWidth variant="contained">Register</Button>
        </div>
      </div>
    </div>
  </div>
  )
}
