import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function ProductCard() {
  return (
    <Card sx={{ width: 300, cursor:"pointer",m:1 }} className="hover:shadow-xl" >
      <CardMedia
        component="img"
        height="300"
        image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Shoe"
        onClick={()=>{console.log("card click")}}
      />
      <CardContent sx={{width:"100%", textAlign:"center", marginBottom:"0px"}}>
        <Typography gutterBottom variant="h7" component="div">
          NIKE SPORT / runner shoe / sport shoe  
        </Typography>
        <Typography gutterBottom variant="h6" sx={{color:"green"}} component="div">
          $ 1200.00
        </Typography>
        <Button sx={{m:"0px auto",zIndex:1000}} variant="contained" onClick={()=>{console.log("button click")}}>Add to cart</Button>
      </CardContent>
    </Card>
  )
}
