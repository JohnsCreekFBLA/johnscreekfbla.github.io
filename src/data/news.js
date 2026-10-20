/**
 * Chapter news and announcements.
 *
 * HOW TO ADD A POST
 *   Add an object to the TOP of this array:
 *     { date: '2026-10-15', title: 'Short headline', body: 'One or two sentences.' }
 *   `date` must be YYYY-MM-DD. Newest first.
 *   Optional: `link` (a URL) and `linkText` add a button under the post.
 *
 * The home page shows the newest 3. The News page shows all of them.
 */

const news = [
  {
    date: '2026-10-19',
    title: 'Snap! Raise fundraiser kicks off October 27',
    body: 'We are raising $10,000 for the chapter, and the incentives are worth reading. Raise $100 as a non-member and your membership fees are covered. $250 covers RLC registration, $500 covers RLC and SLC, $1,000 adds the SLC hotel and transportation, and $3,000 adds NLC registration. The top three fundraisers get AirPods 5, a LEGO set, or a JBL speaker. Enter 20 contacts by the October 27 meeting and get a free donut.',
    link: '/fundraiser',
    linkText: 'How to join'
  },
  {
    date: '2026-10-09',
    title: 'Fall Leadership Conference is November 16-17',
    body: 'FLC is an overnight trip to the Classic Center in Athens. Two days of general sessions, leadership workshops, the Battle of the Chapters and the MONOPOLY tournament. Cost is $220 and registration closed on September 29. If you are registered, your payment goes through Fulton SchoolCash Online.',
    link: '/conferences/FLC',
    linkText: 'Conference details'
  },
  {
    date: '2026-10-05',
    title: 'Fall Motivational Rally at Six Flags',
    body: 'Members spent the day at Six Flags Over Georgia for the Fall Motivational Rally, the first chapter trip of the year.',
    link: '/conferences/FMR',
    linkText: 'About the rally'
  },
  {
    date: '2026-08-27',
    title: 'Membership is open for 2026-27',
    body: 'Our interest meeting kicked off the year. Fill out the membership form and pay the early bird dues to lock in your spot for this year\'s conferences and competitions.',
    link: '/forms/membership',
    linkText: 'Membership form'
  }
];

export default news;
