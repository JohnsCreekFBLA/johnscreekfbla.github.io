/**
 * Chapter schedule: meetings and conferences, one list.
 *
 * HOW TO ADD AN ENTRY
 *   { date: '2026-10-21', title: 'October Chapter Meeting', kind: 'meeting',
 *     location: "Commander Schenk's room", note: '', link: '/meetings/october' }
 *
 *   date     YYYY-MM-DD. Use null if the date genuinely is not set yet; the
 *            entry then shows under Upcoming with whatever `dateLabel` says.
 *   kind     'meeting' | 'conference' | 'service' | 'deadline'
 *   link     optional, internal page or external URL
 *
 * The site splits this into Upcoming and Past automatically by comparing the
 * date at build time. Nothing to toggle by hand.
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
    dateLabel: 'September 29, 2026',
    title: 'September Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room",
    note: 'Slides posted after the meeting.'
  },
  {
    date: null,
    dateLabel: 'TBA',
    title: 'Fall Motivational Rally',
    kind: 'conference',
    location: 'Six Flags Over Georgia',
    note: 'Date and price for 2026-27 to be confirmed.',
    link: '/conferences/FMR'
  },
  {
    date: null,
    dateLabel: 'TBA',
    title: 'Fall Leadership Conference',
    kind: 'conference',
    location: 'The Classic Center, Athens, GA',
    note: 'Date and price for 2026-27 to be confirmed.',
    link: '/conferences/FLC'
  },
  {
    date: null,
    dateLabel: 'TBA',
    title: 'Region Leadership Conference',
    kind: 'conference',
    location: 'TBA',
    note: '2026-27 date to be confirmed.'
  },
  {
    date: null,
    dateLabel: 'TBA',
    title: 'State Leadership Conference',
    kind: 'conference',
    location: 'TBA',
    note: '2026-27 date to be confirmed.'
  },
  {
    date: null,
    dateLabel: 'TBA',
    title: 'National Leadership Conference',
    kind: 'conference',
    location: 'TBA',
    note: 'For members who qualify at SLC.'
  }
];

export default schedule;
