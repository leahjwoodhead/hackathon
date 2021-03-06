import React, { Component } from "react";
import styled from 'styled-components'
import logo from '../images/logo.png'
import '../components/styles/LandingPage.css'
import { Link } from "react-router-dom"
import './styles/Nav.css'

const NavBar = styled.nav`
    margin: 0 auto;
    width: 22%;
    display: flex;
    justify-content: space-evenly;
    grid-area: nav;
    padding-top: 20px;
    margin: auto;
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

const linkStyle = {
    "color": "white",
    "text-decoration": "none",
    "margin-top": "20px",
    "font-size": "20px"
}

class Nav extends Component {
    state = {
        
    }

    render() {
        return (
            <div>
                <NavBar>

                        <Link to="/Dashboard/Story" className="NavStyle" style={linkStyle}>DISCOVER</Link>
                       <Link to="/"> <img className="Logo-container" src={logo} alt="Logo" height={75}/> </Link>
                        <Link to="/About" className="NavStyle" style={linkStyle}> ABOUT</Link>
                </NavBar>
            </div>
        )
    }
}

export default Nav