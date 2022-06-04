import React from "react";
import Navbar from "../../components/navbar/Navbar";
import OrderList from "../../components/orderList/OrderList";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from '@mui/icons-material/Mail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Button } from "@mui/material";
export default function Profile() {
  const name = "Chirag";
  return (
    <div>
      {/* user detail */}
      <div>
        <div className="w-[100%]">

        <div className="w-auto h-[500px] bg-slate-100 rounded-xl h-auto flex justify-center items-center p-5 mt-[270px] pt-16 mx-auto">
        <div className="absolute top-24">
          <img className="h-[300px] w-[300px] object-cover rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
        </div>
          <List>
            <ListItem sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
              <h1 className="text-2xl font-semibold">Chirag Thapa</h1>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={"Lalitpur, thasikhel"} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                < MailIcon/>
              </ListItemIcon>
              <ListItemText primary={"chiragthapa777@gmail.com"} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText primary={"+977 9810338573"} />
            </ListItem>
            <ListItem sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
            <Button variant="contained">Edit profile</Button>
            </ListItem>
          </List>
        </div>
      </div>
        </div>
      {/* user detail end */}
      <div className="my-5">
        <h1 className="text-center font-semibold text-2xl">Your orders</h1>
        <OrderList />
      </div>
    </div>
  );
}
