import React from 'react';
import Navbar from './Navbar';
import NavbarAuth from './NavbarAuth';
import styled from 'styled-components'
import { useEffect, useState } from "react";

export default function Header(){
  const  [token, setToken] = useState("")
  useEffect(() => {
    setToken(localStorage.getItem('session')||"")
  }, [])
    return (
      <><header>
        {token === "" ? <Navbar/> : <NavbarAuth/>}
      </header>
      </>
    )
  }