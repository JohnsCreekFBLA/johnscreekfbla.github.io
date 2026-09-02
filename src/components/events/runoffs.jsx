import '../css/conference.css';

const Runoffs = () => (
    <div className="conference-container runoff-container">
        <div className="conference-title">
            <h1 className="title-text">Runoff Competitions</h1>
        </div>
        <hr className="divider" />
        <div className="conference-details">
            <p>
                When more teams sign up for a conference than we can send, Johns Creek FBLA hosts in-school runoffs to
                determine who represents the chapter on the official delegation. Competing teams present their event
                deliverables to advisors and alumni judges so scoring aligns with conference expectations.
            </p>
            <h2 className="runoff-section-title">Fall Leadership Conference Runoffs</h2>
            <div className="runoff-item">
                <h3 className="runoff-date">September 14-18</h3>
                <p className="runoff-detail">
                    Runoff competitions will take place as needed during this week. Watch for emails from the chapter for specific dates and times. If you are unable to attend, please contact the chapter advisors.
                </p>
            </div>
        </div>
    </div>
);

export default Runoffs;
