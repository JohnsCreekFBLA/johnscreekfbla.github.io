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
    curated: [
      { src: '/eventImgs/SLC/SLC_2024-25/20250314_085921.jpg', alt: 'State Leadership Conference opening session' },
      { src: '/eventImgs/SLC/SLC_2024-25/20250315_090023.jpg', alt: 'State Leadership Conference competitive events' },
      { src: '/eventImgs/SLC/SLC_2024-25/20250315_183414.jpg', alt: 'State Leadership Conference awards ceremony' },
      { src: '/eventImgs/SLC/SLC_2024-25/133_0180.JPG', alt: 'Chapter team photo at the State Leadership Conference' },
      { src: '/eventImgs/SLC/SLC_2024-25/IMG_0302.JPG', alt: 'Workshop breakout at the State Leadership Conference' },
      { src: '/eventImgs/SLC/SLC_2024-25/IMG_3143.JPG', alt: 'Leadership session at the State Leadership Conference' }
    ]
  },
  {
    id: 'region',
    title: 'Region Leadership Conference',
    label: 'Region 3, January 2025',
    folder: 'eventImgs/RLC/RLC_2025',
    alt: 'Johns Creek FBLA at the Region Leadership Conference',
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
