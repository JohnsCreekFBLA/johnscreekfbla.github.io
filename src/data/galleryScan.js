import fs from 'node:fs';
import path from 'node:path';

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
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
    .slice(0, limit)
    .map((name) => ({
      src: `/${folder}/${name}`,
      alt: alt || 'Johns Creek FBLA chapter photo'
    }));
}

/**
 * Curated images first (they have real captions), then everything else found in
 * the folder, skipping anything already curated.
 */
export function withFolder(curated, folder, opts = {}) {
  if (!folder) return curated;
  const already = curated.map((img) => img.src);
  const limit = (opts.limit ?? DEFAULT_LIMIT) - curated.length;
  if (limit <= 0) return curated;
  return [...curated, ...scanFolder(folder, { ...opts, limit, exclude: already })];
}
