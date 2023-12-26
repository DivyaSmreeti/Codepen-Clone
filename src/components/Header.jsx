import React from 'react'
import { Toolbar , AppBar , styled } from '@mui/material'
import codepenlogo from "../images/codepenlogo.png"

const Conatiner = styled(AppBar)`
  background:#060606;
  height:9vh;
`

const Header = () => {
  return (
    <>
    <Conatiner position='static'>
      <Toolbar>
        <img src={codepenlogo} alt="codepen-logo" style={{height:"9vh"}}/>
        </Toolbar>
    </Conatiner>
    </>
  )
}

export default Header