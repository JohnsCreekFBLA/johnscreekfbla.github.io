/**
 * Shared date helpers. Dates in the data files are plain 'YYYY-MM-DD' strings
 * so nobody has to think about timezones when editing them.
 */

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

/** '2026-09-29' -> 'September 29, 2026'. Returns '' for null/empty. */
export function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/** Midnight-local Date for an ISO day string, so comparisons don't drift. */
export function toDate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/**
 * True when the entry is today or later. Entries with no date are treated as
 * upcoming, since "date not announced yet" always means a future thing.
 */
export function isUpcoming(iso, now = new Date()) {
  const when = toDate(iso);
  if (!when) return true;
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return when >= today;
}
