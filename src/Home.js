import React, { Component } from "react";
import "./App.css";
import logo from './logo.png';
import history from "./history"

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Logo-container">
                    <img src={logo} alt="Logo" /></div>
                <h1>1 DAY = 1 STORY</h1>
                <div className="Button-Group">
                    <form>
                        <button onClick={() => history.push('/Dashboard')}>DISCOVER</button>
                    </form>
                    <form>
                    <button onClick={() => history.push('/About')}>ABOUT</button></form> </div>
            </header>
        </div>
    );
}

export default Home;