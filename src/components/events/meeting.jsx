import '../css/conference.css';

const Meetings = ({ meetings }) => {

    const meetingInfo = {
        august: {
            title: "August Meeting Slides",
            about: "Kickoff Meeting",
            date: "August 28, 2025",
            link: "/meetings/FBLA_Aug_Meeting.pdf"
        },
        flc: {
            title: "FLC Interest Meeting Slides",
            about: "FLC Interest Meeting",
            date: "September 2, 2025",
            link: "/meetings/FBLA_FLC_Interest_Meeting.pdf"
        },
        october: {
            title: "October Chapter Meeting Slides",
            about: "October Chapter Meeting",
            date: "October 21, 2025",
            link: "/meetings/FBLA_Oct_Meeting.pdf"
        }
    };
    
    const selected = meetingInfo[meetings];

    if (!selected) {
        return <div className="meetingContainer">Meeting not found.</div>;
    }

    return(
        <div class="meetingContainer">
            <div class="meetingTitle">
                <h1>Click<a href={selected.link} target="_blank"> here </a>to open PDF</h1>
                <h1 id="title">{selected.title}</h1>
            </div>
            <div class="meetingBody">
                <iframe
                width="640"
                height="500"
                src={selected.link}
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                msallowfullscreen="true"
                title={selected.title}
            ></iframe>
            </div>
        </div>
    );

}

export default Meetings;