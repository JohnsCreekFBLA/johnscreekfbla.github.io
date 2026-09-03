import '../css/conference.css';
import conferenceGallery from '../../data/conferenceGallery.js';

const Conferences = ({ conferences }) => {
    const info = {
        rally: {
            title: "Fall Motivational Rally",
            about: "Students get to spend the day at Six Flags Over Georgia",
            Competitions: "None",
            Events: "None",
            date: "October 5, 2026",
            location: "Six Flags Over Georgia, Austell, GA",
            price: "$95 per person (includes meals, and ticket)",
            registration: "https://docs.google.com/forms/d/e/1FAIpQLSeEo_hRIq1eHH0ChhlIUepTRRT5mQzc1BfIofxYWbU52j79aQ/viewform"
            
        },
        fall: {
            title: "Fall Leadership Conference",
            note: "View Meeting Slides in Meetings Tab",
            about: "The 2026 overnight two-day Fall Leadership Conference for high school chapters will be held November 16-17 in Athens at the beautiful Classic Center. You can expect a dynamic general session, informative leadership training workshops, the always thrilling Battle of the Chapters, the opportunity to participate in one of the world's largest MONOPOLY tournaments, and many other activities.",
            Competitions: "Competitions at the Fall Leadership Conference include the Annual Business Plan Competition, the Elevator Pitch Competition, and the MONOPOLY tournament.",
            Events: "Career Portfolio, Future Business Educator, Impromptu Speaking, Job Interview, and Sales Presentation.",
            date: "November 16-17, 2026",
            location: "The Classic Center, Athens, GA",
            price: "TBA"
        },
        region: {
            title: "Region Leadership Conference",
            about: "FBLA members can compete at a variety of competitive events at the Region Leadership Conference each year to qualify for the State Leadership Conference (SLC). For more information about the competitive events offered at RLC, see the competition events guideline.",
            Competitions: "Competitions at the Region Leadership Conference include the Annual Business Plan Competition, the Elevator Pitch Competition, and the MONOPOLY tournament.",
            Events: "Broadcast Journalism, Business Ethics, Client Service, Impromptu Speaking, Introduction to Social Media Strategy, Job Interview and Social Media Strategies",
            date: "January 15, 2026",
            location: "Alpharetta High School",
            price: "$35 per person (includes meals and materials)",
            registration: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUNTFXV1lUQUpSUENBMDZaOExTTFJNRVlRTi4u",
            link: "https://osp.osmsinc.com/FultonGA/BVModules/ProductTemplates/Bvc2013/Product.aspx?productid=EN713-1585"
        },
        state: {
            title: "State Leadership Conference",
            about: "At the State Leadership Conference, FBLA members can compete at a variety of competitive events, attend leadership workshops, and see the state officer elections. In addition to the events offered at the RLC, the SLC also includes straight-to-state events (see the list of competitive events below). Members who place in the top 4 for their event qualify for the National Leadership Conference. If members qualify for nationals in multiple events, they can only choose one to compete in at nationals.",
            Competitions: "Competitions at the State Leadership Conference include the Annual Business Plan Competition, the Elevator Pitch Competition, and the MONOPOLY tournament.",
            Events: "All events offered at RLC, plus App Development, Coding, Cyber Security, Digital Video Production, E-Business, Emerging Business Issues, Graphic Design, Mobile Application Development, Network Design, Public Speaking, Sales Presentation, Website Design",
            date: "March 13-14, 2026",
            location: "TBA",
            price: "$100 per person (includes meals, lodging, and materials)",
            registration: "Registration will open in February 2026.",
            link: "placeholder"

        },
        national: {
            title: "National Leadership Conference",
            about: "At the National Leadership Conference, members can compete in many events, attend general sessions and keynotes, watch the national officer campaigns, and see national recognitions and competitive event winners. Members who placed in the top 4 for their event at the SLC qualify for the NLC. If members qualify for nationals in multiple events, they can only choose one event to compete in at nationals.",
            Competitions: "Competitions at the National Leadership Conference include the Annual Business Plan Competition, the Elevator Pitch Competition, and the MONOPOLY tournament.",
            Events: "All events offered at SLC, plus Business Financial Plan, Client Service, Coding, Community Service Project, Cyber Security, Digital Video Production, E-Business, Emerging Business Issues, Graphic Design, Mobile Application Development, Network Design, Public Speaking, Sales Presentation, Website Design",
            date: "June 29 - July 3, 2026",
            location: "San Antonio, TX",
            price: "TBA",
            registration: "Registration will open in March 2026.",
            link: "placeholder"
        }
    };

    const selected = info[conferences];
    const gallerySection = conferenceGallery.find(
        (section) => section.id === conferences && section.images.length > 0
    );

    if (!selected) {
        return <div className="conference-container">Conference not found.</div>;
    }

    return (
        <div className="conference-container">
            <div className="conference-title">
                <h1 className="title-text">{selected.title}</h1>
            </div>
            <hr className="divider"></hr>
            <div className="conference-details">
                {gallerySection && (
                    <p className="gallery-link">
                        <a href={`/gallery#${gallerySection.id}`}>View {gallerySection.title} photos</a>
                    </p>
                )}
                {conferences === "fall" && selected.note && (
                    <p><strong>{selected.note}</strong></p>
                )}
                <p><strong>About:</strong> {selected.about}</p>
                <p><strong>Date:</strong> {selected.date}</p>
                <p><strong>Location:</strong> {selected.location}</p>
                <p><strong>Price:</strong> {selected.price}</p>
                {selected.registration && (
                    <a href={selected.registration} target="_blank">Registration Form<br /></a>
                )}

                {selected.link && (
                    <a href={selected.link} target="_blank" rel="noopener noreferrer">OSP Link</a>
                )}
            </div>
        </div>
    );
};

export default Conferences;
