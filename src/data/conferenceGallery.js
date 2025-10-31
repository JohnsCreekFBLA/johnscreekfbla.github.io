const sharedRallyImages = [
    { src: "/eventImgs/rallyOne.png", alt: "Fall rally general session", caption: "Fall Motivational Rally - General session" },
    { src: "/eventImgs/rallyTwo.png", alt: "Students at the fall rally", caption: "Fall Motivational Rally - Midway time" },
    { src: "/eventImgs/rallyThree.png", alt: "FBLA members at rally events", caption: "Fall Motivational Rally - Team activities" },
    { src: "/eventImgs/rallyFour.png", alt: "Group photo from rally", caption: "Fall Motivational Rally - Chapter group photo" }
];

const conferenceGallery = [
    {
        id: "rally",
        title: "Fall Motivational Rally",
        label: "Six Flags Over Georgia - September 29, 2025",
        images: sharedRallyImages
    },
    {
        id: "fall",
        title: "Fall Leadership Conference",
        label: "The Classic Center, Athens - November 18-19, 2025",
        images: sharedRallyImages
    },
    {
        id: "region",
        title: "Region Leadership Conference",
        label: "Region 3 - January 28, 2025",
        images: [
            { src: "/eventImgs/RLC/RLC_2025/20250128_163422.jpg", alt: "RLC 2025 general session", caption: "Region Leadership Conference 2025 - General session" },
            { src: "/eventImgs/RLC/RLC_2025/IMG_9383.jpeg", alt: "RLC 2025 competitors prepping", caption: "Region Leadership Conference 2025 - Competitors preparing" },
            { src: "/eventImgs/RLC/RLC_2025/IMG_9867.JPG", alt: "RLC 2025 awards ceremony", caption: "Region Leadership Conference 2025 - Awards ceremony" },
            { src: "/eventImgs/RLC/RLC_2025/IMG_9868.JPG", alt: "RLC 2025 chapter group photo", caption: "Region Leadership Conference 2025 - Chapter group photo" }
        ]
    },
    {
        id: "state",
        title: "State Leadership Conference",
        label: "SLC 2024-25 - March 14-17, 2025",
        images: [
            { src: "/eventImgs/SLC/SLC_2024-25/100_0313.JPG", alt: "SLC 2024-25 opening session", caption: "State Leadership Conference 2024-25 - Opening session" },
            { src: "/eventImgs/SLC/SLC_2024-25/100_0314.JPG", alt: "SLC 2024-25 team workshop", caption: "State Leadership Conference 2024-25 - Team workshop" },
            { src: "/eventImgs/SLC/SLC_2024-25/100_0315.JPG", alt: "SLC 2024-25 keynote address", caption: "State Leadership Conference 2024-25 - Keynote address" },
            { src: "/eventImgs/SLC/SLC_2024-25/100_0316.JPG", alt: "SLC 2024-25 chapter group photo", caption: "State Leadership Conference 2024-25 - Chapter group photo" },
            { src: "/eventImgs/SLC/SLC_2024-25/100_0317.JPG", alt: "SLC 2024-25 award recognition", caption: "State Leadership Conference 2024-25 - Award recognition" },
            { src: "/eventImgs/SLC/SLC_2024-25/100_0318.JPG", alt: "SLC 2024-25 networking event", caption: "State Leadership Conference 2024-25 - Networking event" }
        ]
    },
    {
        id: "national",
        title: "National Leadership Conference",
        label: "San Antonio, TX - June 20-July 2, 2026",
        images: sharedRallyImages
    }
];

export default conferenceGallery;
