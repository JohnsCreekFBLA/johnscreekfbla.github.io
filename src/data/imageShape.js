import fs from 'node:fs';

/**
 * Works out whether an image will read as landscape or portrait in a browser,
 * without pulling in an image library.
 *
 * Why this is needed: phones store a portrait photo as a landscape frame plus an
 * EXIF "rotate 90" tag. Browsers honour that tag, so a file that looks 4608x2592
 * on disk actually displays 2592x4608. The gallery strip crops every photo to a
 * wide card, and a portrait photo cropped that way is usually somebody's chin.
 * So we read the real shape and skip the portrait ones.
 *
 * Only reads the file header, not the pixels.
 */

/** JPEG frame markers that carry the real dimensions. */
const SOF_MARKERS = new Set([
  0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7,
  0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf
]);

function readJpeg(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;

  let width = 0;
  let height = 0;
  let orientation = 1;
  let i = 2;

  while (i < buf.length - 3) {
    if (buf[i] !== 0xff) { i += 1; continue; }
    const marker = buf[i + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    if (marker === 0xd9 || marker === 0xda) break; // end of header / start of scan

    const len = buf.readUInt16BE(i + 2);
    if (len < 2) break;
    const start = i + 4;

    if (SOF_MARKERS.has(marker) && start + 5 <= buf.length) {
      height = buf.readUInt16BE(start + 1);
      width = buf.readUInt16BE(start + 3);
    } else if (marker === 0xe1 && buf.toString('ascii', start, start + 4) === 'Exif') {
      orientation = readExifOrientation(buf, start + 6) ?? 1;
    }

    i += 2 + len;
    if (width && height && orientation !== 1) break;
  }

  if (!width || !height) return null;
  return { width, height, orientation };
}

/** Minimal TIFF/IFD0 walk looking only for tag 0x0112 (Orientation). */
function readExifOrientation(buf, tiffStart) {
  if (tiffStart + 8 > buf.length) return null;
  const le = buf.toString('ascii', tiffStart, tiffStart + 2) === 'II';
  const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
  const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));

  if (u16(tiffStart + 2) !== 0x002a) return null;
  const ifd = tiffStart + u32(tiffStart + 4);
  if (ifd + 2 > buf.length) return null;

  const count = u16(ifd);
  for (let e = 0; e < count; e += 1) {
    const entry = ifd + 2 + e * 12;
    if (entry + 12 > buf.length) break;
    if (u16(entry) === 0x0112) return u16(entry + 8);
  }
  return null;
}

function readPng(buf) {
  if (buf.length < 24) return null;
  if (buf.toString('ascii', 1, 4) !== 'PNG') return null;
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
    orientation: 1
  };
}

/**
 * True when the image displays taller than it is wide, EXIF rotation included.
 * Returns false when the shape cannot be determined, so an unreadable header
 * never silently hides a photo.
 */
export function isPortrait(absPath) {
  let buf;
  try {
    const fd = fs.openSync(absPath, 'r');
    buf = Buffer.alloc(Math.min(131072, fs.fstatSync(fd).size));
    fs.readSync(fd, buf, 0, buf.length, 0);
    fs.closeSync(fd);
  } catch {
    return false;
  }

  const info = readJpeg(buf) || readPng(buf);
  if (!info) return false;

  // Orientation 5-8 mean the image is rotated a quarter turn on display,
  // so the stored width and height swap.
  const rotated = info.orientation >= 5 && info.orientation <= 8;
  const w = rotated ? info.height : info.width;
  const h = rotated ? info.width : info.height;
  return h > w;
}
