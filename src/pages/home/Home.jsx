import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Crousel from "../../components/corousel/Crousel"
import Products from '../../components/product/Products'

export default function Home() {
  return (
    <div>
      <Crousel />
      <Products />
    </div>
  )
}
