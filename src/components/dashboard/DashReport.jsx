import React from "react";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


export default function DashReport() {
  return (
    <div>
      <h1 className="flex justify-center items-center text-2xl font-bold	m-4">Dashboard</h1>
      <div className="flex flex-wrap justify-center items-center m-1">
        {/* order */}
        <div className="bg-slate-200 h-[80px] min-w-[300px] shadow-md rounded-md flex m-1">
          <div className="h-[100%] w-[40%] bg-red-400 rounded-l-md flex justify-center items-center">
          <InventoryIcon sx={{color:"white", fontSize:"40px"}}/>
          </div>
          <div className="my-auto mx-auto">
            <h1 className="font-medium text-xl">Total Orders</h1>
            <p className="text-xl">400</p>
          </div>
        </div>
        {/* sales */}
        <div className="bg-slate-200 h-[80px] min-w-[300px] shadow-md rounded-md flex m-1">
          <div className="h-[100%] w-[40%] bg-lime-400 rounded-l-md flex justify-center items-center">
          <MonetizationOnIcon sx={{color:"white", fontSize:"46px"}}/>
          </div>
          <div className="my-auto mx-auto">
            <h1 className="font-medium text-xl">Total Sales</h1>
            <p className="text-xl">$ 20,000 </p>
          </div>
        </div>
        {/* products */}
        <div className="bg-slate-200 h-[80px] min-w-[300px] shadow-md rounded-md flex m-1">
          <div className="h-[100%] w-[40%] bg-blue-400 rounded-l-md flex justify-center items-center">
          <AddBusinessIcon sx={{color:"white", fontSize:"46px"}}/>
          </div>
          <div className="my-auto mx-auto">
            <h1 className="font-medium text-xl">Total Products</h1>
            <p className="text-xl"> 20 </p>
          </div>
        </div>
        {/* customers */}
        <div className="bg-slate-200 h-[80px] min-w-[300px] shadow-md rounded-md flex m-1">
          <div className="h-[100%] w-[40%] bg-pink-400 rounded-l-md flex justify-center items-center">
          <PeopleAltIcon sx={{color:"white", fontSize:"46px"}}/>
          </div>
          <div className="my-auto mx-auto">
            <h1 className="font-medium text-xl">Total Customers</h1>
            <p className="text-xl">560</p>
          </div>
        </div>
      </div>
    </div>
  );
}
