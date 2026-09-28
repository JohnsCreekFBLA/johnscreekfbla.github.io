/**
 * Chapter competition results.
 *
 * HOW TO ADD A RESULT
 *   1. Find the right conference block below (or add one, newest first).
 *   2. Add a line: { name: "...", event: "...", place: "1st" }
 *   3. Save, commit. The Winners page updates itself.
 *
 * `place` is free text so "1st", "2nd", "Top 10", "National Qualifier" all work.
 * Leave a conference's `results` array empty and it shows a "results coming"
 * note instead of an empty table.
 */

const winners = [
  {
    id: 'nlc-2026',
    conference: 'National Leadership Conference',
    location: 'San Antonio, TX',
    dateLabel: 'June 29 - July 2, 2026',
    results: [
      // TODO(Alex Gentin): full 2026 NLC placement list.
      { name: 'Phoebe', event: 'Introduction to Supply Chain Management', place: '1st' }
    ]
  },
  {
    id: 'slc-2026',
    conference: 'State Leadership Conference',
    location: 'Georgia',
    dateLabel: 'March 2026',
    results: [
      // TODO(Alex Gentin): 2026 SLC placements.
    ]
  },
  {
    id: 'nlc-2024',
    conference: 'National Leadership Conference',
    location: '',
    dateLabel: '2024',
    results: [
      { name: 'Dennis Xu', event: 'Introduction to Information Technology', place: '1st' }
    ]
  },
  {
    id: 'slc-2025',
    conference: 'State Leadership Conference',
    location: 'Georgia',
    dateLabel: 'March 14-17, 2025',
    results: [
      { name: 'Dennis Xu', event: 'Website Coding & Development', place: '4th' },
      { name: 'Dennis Xu', event: 'Network Infrastructures', place: '4th' }
      // TODO(Alex Gentin): rest of the 24-25 placements.
    ]
  }
];

export default winners;
