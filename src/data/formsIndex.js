/**
 * Every form and payment link, in one place. This drives the /forms hub page.
 *
 * HOW TO ADD A FORM
 *   Find the right group, add an entry:
 *     { title: 'Fall Rally Permission Form', href: 'https://...', note: 'Due Oct 10' }
 *
 *   href      external URL, an internal page, or a PDF in /public.
 *             Leave it null and the card shows "Coming soon" instead of a dead
 *             link. That is deliberate: never ship a link that goes nowhere.
 *   note      optional one-liner (deadline, who it's for, cost)
 *   external  set true for links that should open in a new tab
 */

const formGroups = [
  {
    id: 'membership',
    title: 'Membership',
    blurb: 'Start here if you are joining the chapter this year.',
    forms: [
      {
        title: 'Membership Form',
        href: '/forms/membership',
        note: 'Required for all members.'
      },
      {
        title: 'Early Bird Membership Payment',
        href: 'https://fultonschools.schoolcashonline.com/Fee/Details/1565/623/False/True',
        note: 'Paid through Fulton SchoolCash Online.',
        external: true
      },
      {
        title: 'Fall Leadership Conference Payment',
        href: 'https://fultonschools.schoolcashonline.com/Fee/Details/7078/623/False/True',
        note: '$220. Registration itself closed September 29.',
        external: true
      }
    ]
  },
  {
    id: 'permission',
    title: 'Permission Forms',
    blurb:
      'Required before you travel with the chapter. One per trip, signed by a parent or guardian.',
    forms: [
      // TODO(Myra Sitafalwalla): add links or PDFs as they are finalised.
      // Fall Rally was October 5 and is not listed; a permission form for an
      // event that already happened is clutter. Add trips back as they approach.
      { title: 'Fall Leadership Conference', href: null, note: 'Overnight trip to Athens, November 16-17.' },
      { title: 'Region Leadership Conference', href: null, note: 'January 2027.' },
      { title: 'State Leadership Conference', href: null, note: 'Overnight trip, March 2027.' }
    ]
  },
  {
    id: 'information',
    title: 'Information Forms',
    blurb: 'Sign-ups, interest forms, and anything we need to collect from members.',
    forms: [
      // TODO(Zelda Arthur): confirm which information forms belong here.
      { title: 'Member Information Form', href: null },
      { title: 'Competitive Event Sign-Up', href: null, note: 'Opens before each conference.' }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    blurb: 'Reference material, not something you fill out.',
    forms: [
      {
        title: 'Membership Point Tracker',
        href: 'https://docs.google.com/spreadsheets/d/1wgYYv7rZTWT5HiEl04sM6poQYGOa3oHZ5mUNeQBWgZE/edit?gid=0#gid=0',
        note: 'Check your points for the year.',
        external: true
      },
      {
        title: 'Georgia FBLA Competitive Events',
        href: 'https://georgiafbla.org/high-school-competitive-events/',
        note: 'Official event list and rules.',
        external: true
      }
    ]
  }
];

export default formGroups;
