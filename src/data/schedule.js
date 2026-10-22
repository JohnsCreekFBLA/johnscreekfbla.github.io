/**
 * Chapter schedule: meetings and conferences, one list.
 *
 * HOW TO ADD AN ENTRY
 *   { date: '2026-10-27', title: 'October Chapter Meeting', kind: 'meeting',
 *     location: "Commander Schenk's room", note: '', link: '/meetings/october' }
 *
 *   date       YYYY-MM-DD. Use null only if the date genuinely is not set; the
 *              entry then shows under Upcoming with whatever `dateLabel` says.
 *   sortDate   optional. When the month is known but the day is not, put an
 *              approximate date here so the timeline orders correctly. It is
 *              never displayed, so the page still only shows `dateLabel`.
 *   kind       'meeting' | 'conference' | 'service' | 'deadline'
 *   tentative  true adds a "tentative" marker next to the date
 *   link       optional, internal page or external URL
 *
 * The site splits this into Upcoming and Past automatically by comparing the
 * date at build time. Nothing to toggle by hand.
 *
 * Chapter meetings run about once a month on a Tuesday in Commander Schenk's
 * room. Not always the last one: the calendar has November on the 10th and
 * December on the 8th. The exact date is often not locked until about a week
 * ahead, so the monthly entries below are marked tentative. When one firms up,
 * correct the date and remove the `tentative` flag.
 *
 * Conference dates come from georgiafbla.org/calendar.
 *
 * The chapter's own Google Calendar, the one embedded at /calendar, is the
 * other source and it is better maintained than this file was. Its public
 * feed is readable without a login:
 *   calendar.google.com/calendar/ical/
 *     fba7q5aluemop4g7pnvmjcs67s%40group.calendar.google.com/public/basic.ics
 * Check it before trusting a `tentative` date here. In October 2026 it was
 * carrying the whole RLC deadline chain and two chapter meetings this file
 * did not have.
 */

const schedule = [
  {
    date: '2026-08-27',
    title: 'Interest Meeting',
    kind: 'meeting',
    location: 'JCHS',
    link: '/meetings/august'
  },
  {
    date: '2026-09-29',
    title: 'September Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room"
  },
  {
    date: '2026-10-05',
    title: 'Fall Motivational Rally',
    kind: 'conference',
    location: 'Six Flags Over Georgia, Austell, GA',
    note: '9:30 am to 5:00 pm. $80 per person.',
    link: '/conferences/FMR'
  },
  {
    date: '2026-10-27',
    title: 'October Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room",
    note: 'Snap! Raise fundraiser kickoff. Enter 20 contacts beforehand for a free donut.',
    link: '/fundraiser'
  },
  {
    date: '2026-10-28',
    title: 'Snap! Raise fundraiser opens',
    kind: 'deadline',
    note: 'Chapter goal is $10,000. Incentives cover membership dues and conference registration.',
    link: '/fundraiser'
  },
  {
    date: '2026-10-29',
    title: 'Trunk or Treat',
    kind: 'service'
  },
  {
    date: '2026-11-04',
    title: 'RLC registration deadline',
    kind: 'deadline'
  },
  {
    date: '2026-11-05',
    title: 'FLC afterschool workshop',
    kind: 'meeting'
  },
  {
    date: '2026-11-06',
    title: 'RLC payment deadline',
    kind: 'deadline'
  },
  {
    date: '2026-11-06',
    title: 'Lifesmarts Challenge ends',
    kind: 'deadline'
  },
  {
    date: '2026-11-06',
    title: 'Virtual Business Challenge ends',
    kind: 'deadline'
  },
  {
    date: '2026-11-09',
    title: 'RLC runoffs',
    kind: 'deadline',
    link: '/events/runoffs'
  },
  {
    date: '2026-11-12',
    title: 'FLC afterschool workshop',
    kind: 'meeting'
  },
  {
    date: '2026-11-16',
    title: 'Fall Leadership Conference',
    kind: 'conference',
    location: 'The Classic Center, Athens, GA',
    note: 'One day on November 16, or two days November 16 to 17. $75 or $85.',
    link: '/conferences/FLC'
  },
  {
    date: '2026-11-25',
    title: 'Snap! Raise fundraiser closes',
    kind: 'deadline',
    note: 'Results and prize winners announced around December 1.',
    link: '/fundraiser'
  },
  {
    date: '2026-11-10',
    title: 'November Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room",
    note: 'Doubles as the FLC meeting, one week before the trip.'
  },
  {
    date: '2026-12-08',
    title: 'December Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room"
  },
  {
    date: '2026-11-18',
    title: 'RLC prejudged materials due',
    kind: 'deadline'
  },
  {
    date: '2026-12-04',
    title: 'RLC testing',
    kind: 'deadline'
  },
  {
    date: '2026-12-13',
    title: 'Stock Market Game ends',
    kind: 'deadline'
  },
  {
    date: '2027-01-26',
    title: 'January Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room",
    tentative: true
  },
  {
    date: null,
    sortDate: '2027-01-15',
    dateLabel: 'January 2027',
    title: 'Region Leadership Conference',
    kind: 'conference',
    location: 'TBA',
    note: 'Georgia FBLA has not posted the 2027 date yet.'
  },
  {
    date: '2027-02-23',
    title: 'February Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room",
    tentative: true
  },
  {
    date: null,
    sortDate: '2027-03-15',
    dateLabel: 'March 2027',
    title: 'State Leadership Conference',
    kind: 'conference',
    location: 'TBA',
    note: 'Georgia FBLA has not posted the 2027 date yet.'
  },
  {
    date: '2027-03-30',
    title: 'March Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room",
    tentative: true
  },
  {
    date: '2027-04-27',
    title: 'April Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room",
    tentative: true
  },
  {
    date: null,
    sortDate: '2027-06-29',
    dateLabel: 'Summer 2027',
    title: 'National Leadership Conference',
    kind: 'conference',
    location: 'TBA',
    note: 'For members who qualify at the State Leadership Conference.'
  }
];

export default schedule;
