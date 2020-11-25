import React, {Component,useState} from 'react';
import styled from 'styled-components';

import Header from '../Header/Header'
const Contact = () => {
    return (
        <div>
            <Header/>
        <HeaderContainer>
            <h2 className="Header">Contact</h2>
        </HeaderContainer>
        </div>
        
        
    )
}

const HeaderContainer = styled.div`
text-align: center
`

export default Contact;