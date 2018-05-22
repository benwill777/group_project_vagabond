import React, { Component } from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
background-color: #20b0e5;
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100vw;
font-size: 35px;
box-shadow: 0px 6px 6px rgba(0,0,0,0.5);
`
class Navbar extends Component {
    render() {
        return (
            <div>
                <NavBar>Vagabond</NavBar>
            </div>
        );
    }
}

export default Navbar;