import { useEffect, useState } from 'react';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import '../css/conference.css';

const defaultCarousel = [
    { src: "/eventImgs/rallyOne.png", alt: "Fall rally general session" },
    { src: "/eventImgs/rallyTwo.png", alt: "Students at the fall rally" },
    { src: "/eventImgs/rallyThree.png", alt: "FBLA members at rally events" },
    { src: "/eventImgs/rallyFour.png", alt: "Group photo from rally" }
];

const imageSets = {
    rally: defaultCarousel,
    fall: defaultCarousel,
    region: [
        { src: "/eventImgs/RLC/RLC_2025/20250128_163422.jpg", alt: "RLC 2025 general session" },
        { src: "/eventImgs/RLC/RLC_2025/IMG_9383.jpeg", alt: "RLC 2025 competitors prepping" },
        { src: "/eventImgs/RLC/RLC_2025/IMG_9867.JPG", alt: "RLC 2025 awards ceremony" },
        { src: "/eventImgs/RLC/RLC_2025/IMG_9868.JPG", alt: "RLC 2025 chapter group photo" }
    ],
    state: [
        { src: "/eventImgs/SLC/SLC_2024-25/100_0313.JPG", alt: "SLC 2024-25 opening session" },
        { src: "/eventImgs/SLC/SLC_2024-25/100_0314.JPG", alt: "SLC 2024-25 team workshop" },
        { src: "/eventImgs/SLC/SLC_2024-25/100_0315.JPG", alt: "SLC 2024-25 keynote address" },
        { src: "/eventImgs/SLC/SLC_2024-25/100_0316.JPG", alt: "SLC 2024-25 chapter group photo" },
        { src: "/eventImgs/SLC/SLC_2024-25/100_0317.JPG", alt: "SLC 2024-25 award recognition" },
        { src: "/eventImgs/SLC/SLC_2024-25/100_0318.JPG", alt: "SLC 2024-25 networking event" }
    ],
    national: defaultCarousel
};

const Conferences = ({ conferences }) => {
    const info = {
        rally: {
            title: "Fall Motivational Rally",
            about: "Students get to spend the day at Six Flags Over Georgia",
            Competitions: "None",
            Events: "None",
            date: "September 29, 2025",
            location: "Six Flags Over Georgia, Austell, GA",
            price: "$95 per person (includes meals, and ticket)",
            registration: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUMUpHMlI2UzY1NTdEUUxTUExaRERSVVI3Sy4u",
            link: "https://osp.osmsinc.com/FultonGA/BVModules/ProductTemplates/Bvc2013/Product.aspx?productid=EN713-1505"
        },
        fall: {
            title: "Fall Leadership Conference",
            note: "View Meeting Slides in Meetings Tab",
            about: "The 2025 overnight Two-Day Fall Leadership Conference for high school chapters will be held November 18-19 in Athens at the beautiful Classic Center. You can expect a dynamic general session, informative leadership training workshops, the always thrilling Battle of the Chapters, the opportunity to participate in one of the world’s largest MONOPOLY® Tournaments, and many other activities.",
            Competitions: "Competitions at the Fall Leadership Conference include the Annual Business Plan Competition, the Elevator Pitch Competition, and the MONOPOLY® Tournament.",
            Events: "Broadcast Journalism, Business Ethics, Client Service, Impromptu Speaking, Introduction to Social Media Strategy, Job Interview and Social Media Strategies",
            date: "November 18-19, 2025",
            location: "The Classic Center, Athens, GA",
            price: "TBA",
            registration: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUOVdHVkxWNkZZTzdJT1lSQU5QQVo2MjQyNC4u",
            link: "placeholder"
        },
        region: {
            title: "Region Leadership Conference",
            about: "FBLA members can compete at a variety of competitive events at the Region Leadership Conference each year to qualify for the State Leadership Conference (SLC). For more information about the competitive events offered at RLC, see the competition events guideline.",
            Competitions: "Competitions at the Region Leadership Conference include the Annual Business Plan Competition, the Elevator Pitch Competition, and the MONOPOLY® Tournament.",
            Events: "Broadcast Journalism, Business Ethics, Client Service, Impromptu Speaking, Introduction to Social Media Strategy, Job Interview and Social Media Strategies",
            date: "January 15, 2026",
            location: "Alpharetta High School",
            price: "$35 per person (includes meals and materials)",
            registration: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUNTFXV1lUQUpSUENBMDZaOExTTFJNRVlRTi4u",
            link: "https://osp.osmsinc.com/FultonGA/BVModules/ProductTemplates/Bvc2013/Product.aspx?productid=EN713-1585"
        },
        state: {
            title: "State Leadership Conference",
            about: "At the State Leadership Conference, FBLA members can compete at a variety of competitive events, attend leadership workshops, and see the state officer elections. In addition to the events offered at the RLC, the SLC also includes straight-to-state events (see the list of competitive events below). Members who place in the top 4 for their event qualify for the National Leadership Conference. If members qualify for nationals in multiply events, they can only choose one to compete in at nationals.",
            Competitions: "Competitions at the State Leadership Conference include the Annual Business Plan Competition, the Elevator Pitch Competition, and the MONOPOLY® Tournament.",
            Events: "All events offered at RLC, plus App Development, Coding, Cyber Security, Digital Video Production, E-Business, Emerging Business Issues, Graphic Design, Mobile Application Development, Network Design, Public Speaking, Sales Presentation, Website Design",
            date: "March 13-14, 2026",
            location: "TBA",
            price: "$100 per person (includes meals, lodging, and materials)",
            registration: "Registration will open in February 2026.",
            link: "placeholder"

        },
        national: {
            title: "National Leadership Conference",
            about: "At the National Leadership Conference, members can compete in many events, attend general sessions and keynotes, watch the national officer campaigns, and see national recognitions and competitive event winners. Members who placed in the top 4 for their event at the SLC qualify for the NLC. If members qualify for nationals in multiply events, they can only choose one event to compete in at nationals.",
            Competitions: "Competitions at the National Leadership Conference include the Annual Business Plan Competition, the Elevator Pitch Competition, and the MONOPOLY® Tournament.",
            Events: "All events offered at SLC, plus Business Financial Plan, Client Service, Coding, Community Service Project, Cyber Security, Digital Video Production, E-Business, Emerging Business Issues, Graphic Design, Mobile Application Development, Network Design, Public Speaking, Sales Presentation, Website Design",
            date: "June 20-July 2, 2026",
            location: "San Antonio, TX",
            price: "TBA",
            registration: "Registration will open in March 2026.",
            date: "June 20-July 2, 2026",
            location: "San Antonio, TX",
            price: "TBA",
            registration: "Registration will open in March 2026.",
            link: "placeholder"
        }
    };

    const selected = info[conferences];
    const activeImages = imageSets[conferences] ?? defaultCarousel;
    const hasImages = activeImages.length > 0;
    const disableNav = activeImages.length <= 1;

    if (!selected) {
        return <div className="conference-container">Conference not found.</div>;
    }

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [conferences]);

    useEffect(() => {
        if (activeIndex >= activeImages.length) {
            setActiveIndex(0);
        }
    }, [activeImages.length, activeIndex]);

    const handleClick = (offset) => {
        if (!hasImages) return;
        let newIndex = activeIndex + offset;
        const total = activeImages.length;
        if (newIndex < 0) newIndex = total - 1;
        if (newIndex >= total) newIndex = 0;
        setActiveIndex(newIndex);
    };

    const currentImage = hasImages ? activeImages[activeIndex] : null;

    return (
        <div className="conference-container">
            <div className="conference-title">
                <h1 className="title-text">{selected.title}</h1>
            </div>
            <hr className="divider"></hr>
            <div className="conference-details">
                {hasImages && (
                    <div className="imageCarousel">
                        <button className="prev" onClick={() => handleClick(-1)} disabled={disableNav}><RxCaretLeft size="28"/></button>
                        {currentImage && <img src={currentImage.src} alt={currentImage.alt} className="slides" />}
                        <button className="next" onClick={() => handleClick(1)} disabled={disableNav}><RxCaretRight size="28"/></button>
                    </div>
                )}
                {conferences === "fall" && selected.note && (
                    <p><strong>{selected.note}</strong></p>
                )}
                <p><strong>About:</strong> {selected.about}</p>
               <p><strong>Date:</strong> {selected.date}</p>
                <p><strong>Location:</strong> {selected.location}</p>
                <p><strong>Price:</strong> {selected.price}</p>
                <a href={selected.registration} target="_blank">Registration Form<br /></a>
                <a href={selected.link} target="_blank" rel="noopener noreferrer">OSP Link</a>
            </div>
        </div>
    );
};

export default Conferences;
