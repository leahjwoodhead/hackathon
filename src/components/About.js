import React, { Component } from 'react';
import Nav from './Nav';
import './styles/About.css'
import logo from '../logo.png'

function About() {
        return (
            <div className="AboutPage">
                <Nav/>
                    <div className="AboutContent">
                        
                        <h2 className="WelcomeWord">  Welcome!</h2>
                        <p>Hello! Thanks for joining us @ LGBTQ+ Daily - we are super happy to have you here.

                        We created this space for people to have a platform to share their stories & interests and hopefully connect with likeminded individuals. In the world which can sometimes be unkind, our aim is to create a safe space, where everyone will be able to share their story and hear many more others.Hello! Thanks for joining us @ LGBTQ+ Daily - we are super happy to have you here.

We created this space for people to have a platform to share their stories & interests and hopefully connect with likeminded individuals. In the world which can sometimes be unkind, our aim is to create a safe space, where everyone will be able to share their story and hear many more others.  
                        </p>
                        <p>The idea behind the platform is very simple: each day we will be sharing a story of LGBTQ+ community members together with their favourite movies, songs, books & podcasts. Get inspired!</p>
                </div>
       </div>
        );
    }    


export default About;