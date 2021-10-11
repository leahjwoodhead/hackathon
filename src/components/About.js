import React, { Component } from 'react';
import Nav from './Nav';

class About extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="About" style={{ display: 'flex', justifyContent: 'center', padding: 30, color: 'white' }}>
                    <div>
                        <h2>About Page</h2>
                    </div>
                </div>
            </div>
    
        );
    }
}

export default About;