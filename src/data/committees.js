/**
 * Committees: who to contact, and what each one puts on this website.
 *
 * Keep `owns` honest. It is the contract for what that committee is expected
 * to send the web team each week.
 */

const committees = [
  {
    id: 'membership',
    name: 'Membership',
    lead: 'Zelda Arthur',
    role: 'EVP of Membership',
    blurb:
      'Runs recruitment and retention: membership campaigns, socials and incentives, and all membership communication for students and parents.',
    owns: [
      'Membership and information forms',
      'Membership point tracker',
      'New member onboarding info'
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    lead: 'Vicky Szczesny',
    role: 'EVP of Marketing',
    blurb:
      'Handles chapter communications and public relations. Photographs chapter activities and posts content to the website and social media.',
    owns: [
      'Event photos for the gallery',
      'News posts and announcements',
      'Flyers and social media cross-posting'
    ]
  },
  {
    id: 'competitions',
    name: 'Competitions',
    lead: 'Alex Gentin',
    role: 'EVP of Competitions',
    blurb:
      'The chapter expert on event categories, rules, and preparation. Manages testing logistics and coordinates competition at FLC, RLC, SLC, and NLC.',
    owns: [
      'Competition results and winners',
      'Conference pages and dates',
      'Competitive event guidelines'
    ]
  }
];

export default committees;
