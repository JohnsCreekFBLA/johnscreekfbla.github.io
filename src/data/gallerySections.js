/**
 * Gallery section definitions. Plain data, safe to import anywhere including
 * client-side React components.
 *
 * The actual photo list is built from these at BUILD TIME by
 * conferenceGallery.js, which reads the folders on disk. Keep this file free of
 * node imports or the browser bundle breaks.
 *
 * HOW TO ADD PHOTOS
 *   Drop files into the section's `folder` under public/ and they appear on the
 *   site. Nothing to edit here. Use .jpg or .png; HEIC is skipped because
 *   browsers cannot display it, so export iPhone photos to JPEG first.
 *
 * HOW TO ADD A SECTION
 *   Copy a block, point `folder` at a new directory, drop photos in.
 *   Newest event first so the top of the page is the most recent thing we did.
 *
 * `curated` is optional: those appear first with a real caption, then the rest
 * of the folder follows with the section's generic `alt`.
 *
 * `autoInclude: true` turns on the automatic folder sweep for a section. Leave
 * it off for a folder nobody has sorted yet. When it is on, photos that display
 * as portrait are skipped automatically, because the strip crops everything to a
 * wide card and a portrait photo cropped that way is usually somebody's chin.
 * A portrait shot worth showing can still be listed by hand in `curated`.
 */

const gallerySections = [
  {
    id: 'rally',
    title: 'Fall Motivational Rally',
    label: 'Six Flags Over Georgia',
    folder: 'eventImgs',
    alt: 'Johns Creek FBLA members at the Fall Motivational Rally',
    curated: [
      { src: '/eventImgs/rallyOne.png', alt: 'Fall Motivational Rally general session' },
      { src: '/eventImgs/rallyTwo.png', alt: 'Students enjoying rides at the Fall Motivational Rally' },
      { src: '/eventImgs/rallyThree.png', alt: 'FBLA members at the Fall Motivational Rally' },
      { src: '/eventImgs/rallyFour.png', alt: 'Chapter group photo at the Fall Motivational Rally' }
    ]
  },
  {
    id: 'state',
    title: 'State Leadership Conference',
    label: 'March 2025',
    folder: 'eventImgs/SLC/SLC_2024-25',
    alt: 'Johns Creek FBLA at the State Leadership Conference',
    autoInclude: true,
    // Captions below describe what is actually in each photo. The previous list
    // had four portrait phone shots labelled "opening session", "competitive
    // events" and so on, which were close-ups of one or two people and got
    // cropped to a chin in the wide card.
    curated: [
      { src: '/eventImgs/SLC/SLC_2024-25/133_0180.JPG', alt: 'Chapter members at the State Leadership Conference' },
      { src: '/eventImgs/SLC/SLC_2024-25/100_0464.JPG', alt: 'Members on stage receiving awards at the State Leadership Conference' },
      { src: '/eventImgs/SLC/SLC_2024-25/100_0313.JPG', alt: 'Members in blazers at the State Leadership Conference' },
      { src: '/eventImgs/SLC/SLC_2024-25/IMG_3143.JPG', alt: 'Members together at the State Leadership Conference' }
    ]
  },
  {
    id: 'region',
    title: 'Region Leadership Conference',
    label: 'Region 3, January 2025',
    folder: 'eventImgs/RLC/RLC_2025',
    alt: 'Johns Creek FBLA at the Region Leadership Conference',
    autoInclude: true,
    curated: [
      { src: '/eventImgs/RLC/RLC_2025/20250128_163422.jpg', alt: 'Region Leadership Conference general session' },
      { src: '/eventImgs/RLC/RLC_2025/IMG_9383.jpeg', alt: 'Competitors preparing at the Region Leadership Conference' },
      { src: '/eventImgs/RLC/RLC_2025/IMG_9867.JPG', alt: 'Region Leadership Conference awards ceremony' },
      { src: '/eventImgs/RLC/RLC_2025/IMG_9868.JPG', alt: 'Chapter group photo from the Region Leadership Conference' }
    ]
  }

  // TODO(Marketing): a National Leadership Conference section.
  // The old one pointed at files inside eventImgs/SLC/SLC_2024-25/ captioned as
  // NLC. Those are State Leadership Conference photos, so it was removed rather
  // than publish wrong captions. Create public/eventImgs/NLC/ and add a block.
];

export default gallerySections;
