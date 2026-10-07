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
 * Chapter meetings run about once a month, usually the last Tuesday, in
 * Commander Schenk's room. The exact date is often not locked until about a week
 * ahead, so the monthly entries below are marked tentative. When one firms up,
 * correct the date and remove the `tentative` flag.
 *
 * Conference dates come from georgiafbla.org/calendar.
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
    tentative: true
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
    date: '2026-11-24',
    title: 'November Chapter Meeting',
    kind: 'meeting',
    location: "Commander Schenk's room",
    tentative: true
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
