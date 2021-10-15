import React, { Component } from 'react';
import Nav from './Nav';
import './styles/About.css'

function About() {
    return (
        <div className="AboutPage">
            <Nav />
            <h2>  Welcome!</h2>
            <h3>Hello! Thanks for joining us @ LGBTQ+ Daily - we are super happy to have you here.
                We created this space for people to have a platform to share their stories & interests and hopefully connect with likeminded individuals. In the world which can sometimes be unkind, our aim is to create a safe space, where everyone will be able to share their story and hear many more others. This plstform is a daily information hub wherein people can read inspirational stories from the community and receive suggestions for LGBTQ+ inclusive content such as events, books, podcasts and even a daily song suggestion.
            </h3>
            <h4>The idea behind the platform is very simple: each day, a new set of information will be displayed on the website, so there is always something new to learn. Get inspired!</h4>
        </div>
    );
}

export default About;