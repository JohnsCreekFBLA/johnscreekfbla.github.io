import '../css/forms.css';

const Forms = ({ form }) => {
    const links = {
        /**
         * PUBLIC calendar: the chapter calendar only.
         *
         * The two other calendars (jchsfbla@gmail.com and the exec calendar)
         * are private. Google still renders the embed when a private source is
         * listed, but it puts a yellow bar across the top of it reading
         * "Events from one or more calendars could not be shown here because
         * you do not have the permission to view them", which every parent and
         * member saw. Verified by loading the embed URLs logged out: with
         * either private source the bar appears, with the chapter calendar
         * alone it does not.
         *
         * The exec calendar is not lost, it moved to `calendarOfficers` below.
         * Keeping Raseen's orange.
         */
        calendar: {
            href: "https://calendar.google.com/calendar/embed?src=fba7q5aluemop4g7pnvmjcs67s%40group.calendar.google.com&color=%23F57C00&ctz=America%2FNew_York",
            text: "Calendar",
            target: "_self",
            note: "officers"
        },

        /**
         * OFFICER view: chapter + jchsfbla + exec calendars, the three Raseen
         * put together. Linked from the calendar page rather than embedded,
         * because it only resolves for someone signed in to a Google account
         * with access. Everyone else gets the permission bar, which is fine on
         * a link somebody chose to click and not fine on the public page.
         */
        calendarOfficers: {
            href: "https://calendar.google.com/calendar/embed?src=fba7q5aluemop4g7pnvmjcs67s%40group.calendar.google.com&color=%23F57C00&src=jchsfbla%40gmail.com&color=%238E24AA&src=1e048d0e158d9e3bafc50c9ad63409fad36de239bbabc07b31f7ea330236f88b%40group.calendar.google.com&color=%23DB4437&ctz=America%2FNew_York",
            text: "Officer Calendar",
            target: "_self"
        },
        membership: {
            href: "https://docs.google.com/forms/d/e/1FAIpQLSft0tl6OlDZCisSScjiNTqFeWrXdj_Pqh0aOGXsTP5Hk_5JrA/viewform",
            text: "Membership Form",
            target: "_blank"
        },
        rlc: {
            href: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUNTFXV1lUQUpSUENBMDZaOExTTFJNRVlRTi4u",
            text: "RLC Sign Up Form",
            target: "_blank"
        },
        slcadvance: {
            href: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUNEdJTTBLRTBLWEVPSFRYODgyNEtFTVExVC4u",
            text: "SLC Advancing from RLC/FLC Only Form",
            target: "_blank"
        },
        slcteam: {
            href: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUOVFPVUhIVjQ2M0Y1R1VCMjc3NFpYVDMwSy4u",
            text: "SLC Straight-to-State Presentation Only Form",
            target: "_blank"
        },
        slcindividual: {
            href: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWIq2VxUNEc5Q0wxQ0g3WjZHN0JXTThWVDRLMUxXMi4u",
            text: "SLC Straight-to-State Individual Testing Form",
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
            {selected.note === "officers" && (
                <p className="form-note">
                    Officers:{' '}
                    <a
                        href={links.calendarOfficers.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        open the calendar with the exec events
                    </a>
                    . You need to be signed in to a Google account with access.
                </p>
            )}
        </div>
    );
};

export default Forms;
