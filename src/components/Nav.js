import React, { Component } from "react";
import history from "../history"
import styled from 'styled-components'
import logo from '../images/logo.png'
import '../components/styles/LandingPage.css'

const NavBar = styled.nav`
    margin: 0 auto;
    width: 22%;
    display: flex;
    justify-content: left;
    grid-area: nav;
    padding-top: 20px;

`

const NavButton = styled.button`
    width: 100%;
    height: 100%;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
    }
`

class Nav extends Component {
    state = {
        
    }

    render() {
        return (
            <div>
                <NavBar>
                <img className="Logo-container" src={logo} alt="Logo" height={75}/>
                        <NavButton key="Story" onClick={() => history.push('/Dashboard/Story')}>DISCOVER</NavButton>
                        <NavButton onClick={() => history.push('/About')}>ABOUT</NavButton>
                </NavBar>
            </div>
        )
    }
}

export default Nav