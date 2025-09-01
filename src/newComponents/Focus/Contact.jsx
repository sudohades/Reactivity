import React from 'react';
import "./Contact.css";
import { useState} from 'react';
import { div } from 'framer-motion/client';

const profiles= [
    {id:1, title:"Twitter", url:"placeholderHere"},
    {id:2, title:"LinkedIn", url:"placeholderHere"},
    {id:3, title:"GitHub", url:"placeholderHere"},
    {id:4, title:"Instagram", url:"placeholderHere"},
    {id:5, title:"Facebook", url:"placeholderHere"},
    {id:6, title:"Snapchat", url:"placeholderHere"},
    {id:7, title:"TikTok", url:"placeholderHere"},
    {id:8, title:"YouTube", url:"placeholderHere"}
]
const Contact = () =>{
    const[currentIndex, setCurrentIndex]= useState(0);

    const nextProfile = () =>{
        setCurrentIndex((prev) => (prev === profiles.length -1 ? 0: prev + 1))
    };
    const prevProfile = () =>{
        setCurrentIndex((prev) => (prev === 0 ? profiles.length -1 : prev - 1))
    };
    
    return (
        <div className="contacts">

            <button onClick={prevProfile} className="contact-btn" id="altprev">
            </button>
            <div className="contact-card">
                <h3>{profiles[currentIndex].title}</h3>
                <a href={profiles[currentIndex].url} target="_blank" rel="noopener noreferrer">
                    {profiles[currentIndex].url}
                </a>
            </div>
            <button onClick={nextProfile} className="contact-btn" id="altnext">
            </button>
        </div>

    )
}

// to fill up the page, side project to have a live metrics dashboard for X
// main point is leading to X profile 
// This will involve creating a new component that fetches and displays data from an API.


export default Contact;