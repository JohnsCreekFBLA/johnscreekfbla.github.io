import '../css/forms.css';

const Forms = ({ form }) => {
    const links = {
        calendar: {
            href: "https://calendar.google.com/calendar/embed?src=fba7q5aluemop4g7pnvmjcs67s%40group.calendar.google.com&ctz=America%2FNew_York",
            text: "Calendar",
            target: "_self"
        },
        membership: {
            href: "https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUME5JNUpUMVYzNkxVRVVFTUlNWE5TUDc2WS4u&route=shorturl",
            text: "Membership Form",
            target: "_blank"
        }
        // Add more forms as needed
    };

    const selected = links[form];

    if (!selected) {
        return <div className="forms-container">Form not found.</div>;
    }

    return (
        <div className="forms-container">
            <div className="form-title">
                <h1 className="form-title-text">{selected.text}</h1>
            </div>
            <hr className="divider"></hr>
            <iframe
                width="640"
                height="500"
                src={selected.href}
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                msallowfullscreen="true"
                title={selected.text}
            ></iframe>
        </div>
    );
};

export default Forms;