import React, { Component } from "react";
import "../App.css";
import logo from '../logo.png';
import history from "../history"

function LandingPage() {
    return (
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
    );
}

export default LandingPage;