import React from 'react'
import {Link} from "react-router-dom";
import {Stack} from '@mui/material';
import logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <div>
      <Stack>
        <Link to="/">
          <img src={logo} alt="Logo" style={{width:'48px',height:'48px',margin:'0  20px'}}/>
        </Link>
      </Stack>
      
    </div>
  )
}

export default Navbar
