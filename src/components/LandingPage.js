import React, { Component, Link } from "react";
import logo from '../images/logo.png';
import history from "../history"
import './styles/LandingPage.css'

function LandingPage() {
    return (
        <body>
        <div className="App">
            <header className="App-header">
                <div className="Logo-container">
                    <img src={logo} alt="Logo" />
                </div>

                <h1>LGBTQ+ Daily</h1>

                <div className="Button-Group">
                    <form>
                        <button onClick={() => history.push('/Dashboard/Story')}>DISCOVER</button>
                    </form>
                    <form>
                        <button onClick={() => history.push('/About')}>ABOUT</button>
                    </form> 
                </div>
            </header>
        </div>
        </body>
    );
}


export default LandingPage;