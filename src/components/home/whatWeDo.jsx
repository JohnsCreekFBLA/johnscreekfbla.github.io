import { useState } from 'react';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import '../css/whatWeDoStyle.css';

const WhatWeDo = () => {
    const slides = [
        <img src="../images/home-page-immersion.jpg" alt="Slide 1" className="slides"/>,
        <img src="../images/home-page-education.jpg" alt="Slide 2"className="slides" />,
        <img src="../images/wwd/comp1.JPG" alt="Slide 3" className="slides"/>,
        <img src="../images/home-page-community-service.jpg" alt="Slide 4"className="slides" />
    ];

    const slideTexts = [
        "Immersion: Our chapter offers immersive experiences to help members grow.",
        "Education: We provide educational resources and workshops.",
        "Competitions: Members compete in various business-related events.",
        "Community Service: We give back through service projects."
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (offset) => {
        let newIndex = activeIndex + offset;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;
        setActiveIndex(newIndex);
        <style>
            
        </style>
    };

    return (

        
        <div className="carousel-container">
            <div className="headers">
                <h2 className="titles">What Our Chapter Does</h2>
                <hr className="divider"></hr>
                <p className="description" >FBLA is the largest student business organization in the world. We prepare students for careers in business through leadership development, community service, and competitive events.</p>
            </div>
            <button class="prev" onClick={() => handleClick(-1)} ><RxCaretLeft size="28"/></button>
                {slides[activeIndex]}
                <div className="text">{slideTexts[activeIndex]}</div>
            <button class="next" onClick={() => handleClick(1)}><RxCaretRight size="28"/></button>
        </div>
    );
};

export default WhatWeDo;