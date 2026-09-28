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
    date: '2026-08-27',
    title: 'Membership is open for 2026-27',
    body: 'Our interest meeting kicked off the year. Fill out the membership form and pay the early bird dues to lock in your spot for this year\'s conferences and competitions.',
    link: '/forms/membership',
    linkText: 'Membership form'
  }
];

export default news;
