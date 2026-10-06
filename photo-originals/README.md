# Original photos

Full-resolution originals that a browser cannot display: HEIC from iPhones, and
a couple of MOV clips.

**These are kept, not deleted.** They are the highest-quality copy we have. They
just do not belong in `public/`, because everything in `public/` is copied into
the built site on every deploy, and 158 MB of files no browser can open was most
of the build time.

The web-ready versions live alongside the other photos in
`public/eventImgs/<same path>/<same name>.jpg`, converted at 1600px with the
EXIF rotation baked in.

## If you need a full-resolution copy

Take it from here, not from `public/`.

## Converting more HEIC

iPhones shoot HEIC by default and browsers cannot render it, so any HEIC dropped
into `public/` is invisible on the site. Two options:

1. **Stop it at the source.** On iPhone: Settings, Camera, Formats, Most
   Compatible. Photos then come out as JPEG and need no conversion at all. This
   is the one worth telling whoever is taking photos at an event.
2. **Convert after the fact.** `pip install pillow-heif`, then open each file
   with Pillow, apply `ImageOps.exif_transpose` so the rotation is baked into the
   pixels, resize the long edge to 1600px, and save as JPEG at quality 82 into
   the matching folder under `public/eventImgs/`.
