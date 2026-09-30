import fs from 'node:fs';
import path from 'node:path';
import { isPortrait } from './imageShape.js';

/**
 * Reads a folder under public/ at BUILD TIME and returns every image a browser
 * can actually display.
 *
 * Why this exists: photos used to be listed by hand, so the gallery showed 14 of
 * the ~140 photos sitting in the repo. Now you drop files into
 * public/eventImgs/<folder>/ and they appear on the site. Nothing else to edit.
 *
 * HEIC and MOV files are skipped automatically. Browsers cannot render HEIC, so
 * listing one would produce a broken image. Export those to JPEG first.
 */

const WEB_SAFE = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);
const PUBLIC_DIR = path.join(process.cwd(), 'public');

/** Photos shown per section. A strip, not an archive dump. */
export const DEFAULT_LIMIT = 40;

/**
 * @param {string} folder  path under public/, forward slashes, e.g. "eventImgs/SLC/SLC_2024-25"
 * @param {{limit?: number, alt?: string, exclude?: string[]}} opts
 * @returns {{src: string, alt: string}[]}
 */
export function scanFolder(folder, opts = {}) {
  const { limit = DEFAULT_LIMIT, alt = '', exclude = [] } = opts;

  let entries;
  try {
    entries = fs.readdirSync(path.join(PUBLIC_DIR, folder), { withFileTypes: true });
  } catch {
    // Folder does not exist yet. That is fine: the section just renders empty.
    return [];
  }

  const skip = new Set(exclude);

  return entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => WEB_SAFE.has(path.extname(name).toLowerCase()))
    .filter((name) => !skip.has(`/${folder}/${name}`))
    // The strip crops every photo to a wide card. A portrait photo cropped that
    // way is usually a chin, so leave those out of the automatic sweep. A
    // portrait shot worth showing can still be listed by hand in `curated`.
    .filter((name) => !isPortrait(path.join(PUBLIC_DIR, folder, name)))
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
    .slice(0, limit)
    .map((name) => ({
      src: `/${folder}/${name}`,
      alt: alt || 'Johns Creek FBLA chapter photo'
    }));
}

/**
 * Curated images first (they have real captions), then everything else in the
 * folder if the section opted in.
 *
 * Auto-include is OFF by default and that is deliberate. A folder of raw phone
 * dumps contains sideways selfies and blurry close-ups, and publishing those
 * under a generic caption looks worse than publishing six good photos. Turn
 * `autoInclude` on for folders someone has actually sorted.
 */
export function withFolder(curated, folder, opts = {}) {
  const { autoInclude = false } = opts;
  if (!folder || !autoInclude) return curated;
  const already = curated.map((img) => img.src);
  const limit = (opts.limit ?? DEFAULT_LIMIT) - curated.length;
  if (limit <= 0) return curated;
  return [...curated, ...scanFolder(folder, { ...opts, limit, exclude: already })];
}
