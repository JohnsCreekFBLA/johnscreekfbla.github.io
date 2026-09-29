import gallerySections from './gallerySections.js';
import { withFolder } from './galleryScan.js';

/**
 * The gallery, with photo lists filled in from the folders on disk at build time.
 *
 * SERVER ONLY. This reads the filesystem, so it must not be imported by a
 * client-side React component. Client components should import
 * ./gallerySections.js instead, which is plain data.
 *
 * To add photos, drop them in the section's folder under public/. See
 * gallerySections.js for the section definitions.
 */

const conferenceGallery = gallerySections.map((section) => ({
  ...section,
  images: withFolder(section.curated || [], section.folder, { alt: section.alt })
}));

export default conferenceGallery;
