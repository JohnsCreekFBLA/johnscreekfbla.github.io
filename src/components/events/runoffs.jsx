import '../css/conference.css';

const fallRunoffs = [
    {
        name: "FLC Runoff #1",
        date: "October 23",
        detail: "Preliminary in-school presentations to evaluate all registered teams before submitting the final roster."
    },
    {
        name: "FLC Runoff #2",
        date: "October 30",
        detail: "Final runoff round to confirm competitors advancing to the Fall Leadership Conference."
    }
];

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
            <ul className="runoff-list">
                {fallRunoffs.map((item) => (
                    <li className="runoff-item" key={item.name}>
                        <div className="runoff-item-header">
                            <span className="runoff-date">{item.date}</span>
                            <span className="runoff-name">{item.name}</span>
                        </div>
                        <p className="runoff-detail">{item.detail}</p>
                    </li>
                ))}
            </ul>
            <p className="runoff-note">
                Arrive 15 minutes early to check in, bring printed copies of your presentation materials, and make sure
                your team is dressed in business professional attire. Updated schedules will be shared at meetings and
                through the Remind.
            </p>
        </div>
    </div>
);

export default Runoffs;
