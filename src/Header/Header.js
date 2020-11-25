import React, {Component,useState} from 'react';

import './Header.css';

import styled, {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";



const Header = () => {
    const [theme, setTheme] = useState('light');
  const [oldTheme, setOldTheme] = useState('Dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    oldTheme === 'dark' ? setOldTheme('light') : setOldTheme('dark')
  }

    return (
        
        <HeaderContainer>
            
            <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
    <ButtonSwitchContainer onClick={themeToggler}>{oldTheme}</ButtonSwitchContainer>
    </>
    </ThemeProvider>
            </ul>
            <h1 className="Header">To Do List</h1>

        </HeaderContainer>
        
    )

}

const ButtonSwitchContainer = styled.button`
background-color: #e7e7e7; 
color: black; 
`

const HeaderContainer = styled.div`
text-align: center;
margin-bottom: 25px
`


export default Header;