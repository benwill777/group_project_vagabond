import React, { Component } from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
background-color: #FF4747;
display: flex;
justify-content: space-around; 
flex-direction: column;
width: 100vw;
font-size: 35px;
box-shadow: 0px 6px 6px rgba(0,0,0,0.5);
margin-bottom: 8px;

h2 {
   color: whitesmoke;
   font-family:gay;
}
`
class Navbar extends Component {
    render() {
        return (
            <NavBar> <div>
                <h2>Vagabond</h2>
            </div></NavBar>
        );
    }
}

export default Navbar;