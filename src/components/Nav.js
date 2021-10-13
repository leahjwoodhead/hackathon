import React, { Component } from "react";
import history from "../history"
import styled from 'styled-components'
import logo from '../images/logo.png'
import '../components/styles/LandingPage.css'
import { Link } from "react-router-dom"

const NavBar = styled.nav`
    margin: 0 auto;
    width: 22%;
    display: flex;
    justify-content: space-evenly;
    grid-area: nav;
    padding-top: 20px;
    margin-right: 800px;

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
    color: "white",
    "text-decoration": "none",
    "margin-top": "20px"
}

class Nav extends Component {
    state = {
        
    }

    render() {
        return (
            <div>
                <NavBar>

                        <Link to="/Dashboard/Story" style={linkStyle}>DISCOVER</Link>
                        <img className="Logo-container" src={logo} alt="Logo" height={75}/>
                        <Link to="/About" style={linkStyle}> ABOUT</Link>
                </NavBar>
            </div>
        )
    }
}

export default Nav