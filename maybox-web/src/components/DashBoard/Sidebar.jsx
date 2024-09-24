import React from 'react'
import { FaRegUser } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div>
       <div className="logo">
        <FaRegUser className="logo-icon"/>
        <h2>Personal Details</h2>
      </div>
    </div>
  )
}

export default Sidebar
