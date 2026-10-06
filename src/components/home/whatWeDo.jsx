import { useState } from 'react';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import '../css/whatWeDoStyle.css';

const WhatWeDo = () => {
    const slides = [
        <img src="/images/home-slc-2025.jpg" alt="Chapter members together at the 2025 State Leadership Conference" className="slides" />,
        <img src="/images/home-awards-2025.jpg" alt="Members holding first and fourth place plaques won at the State Leadership Conference" className="slides" />,
        <img src="/images/wwd/comp1.JPG" alt="A member competing at the State Leadership Conference" className="slides" />
    ];

    const slideTexts = [
        "Conferences: Members travel to region, state, and national conferences each year.",
        "Recognition: Our members bring home awards, including first place finishes at state.",
        "Competitions: Members compete in a wide range of business events."
    ];

    // TODO(Marketing): a community service slide. The only service photo in the
    // repo is from the masked era, so the slide was pulled rather than run a
    // four-year-old picture. Drop a recent one in public/images/ and add it back
    // with the caption "Community Service: We give back through chapter service
    // projects."

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (offset) => {
        let newIndex = activeIndex + offset;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;
        setActiveIndex(newIndex);
    };

    return (

        
        <div className="carousel-container">
            <div className="headers">
                <h2 className="titles">What Our Chapter Does</h2>
                <hr className="divider"></hr>
                <p className="description" >FBLA is the largest student business organization in the world. We prepare students for careers in business through leadership development, community service, and competitive events.</p>
            </div>
            <button className="prev" aria-label="Previous slide" onClick={() => handleClick(-1)} ><RxCaretLeft size="28"/></button>
                {slides[activeIndex]}
                <div className="text">{slideTexts[activeIndex]}</div>
            <button className="next" aria-label="Next slide" onClick={() => handleClick(1)}><RxCaretRight size="28"/></button>
        </div>
    );
};

export default WhatWeDo;