// The whole entry: one travel poster, delivered to the output
// directory as entry.png. The poster shows NIMBARA, a stone village
// with a tall campanile that rises out of a sea of clouds at golden
// sunrise — terracotta roofs, lit windows, an amber sky — with the
// place's name set into the sky in large cream serif capitals and
// no other copy anywhere, exactly as the brief asks: one landmark,
// one promise of a stay, the eye led from the name to the village
// to the horizon. The image ships in this repository as entry.png
// (JPEG bytes under a .png name, which the gate accepts); this
// program copies it byte for byte and then reads it back to check
// the gates itself, so a swapped or oversized file fails here
// instead of at grading time. The copy is the whole job: no
// resizing, no recompression, nothing that could soften the
// painting's edges or shift its colours on the way out.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, 'entry.png');
copyFileSync(source, target);

// Read both files back and hold the copy against the gates: byte
// for byte the shipped poster, at most 1,048,576 bytes, and at
// most 1024x1024 pixels. Dimensions come from the file itself —
// the PNG IHDR when it is a PNG, the first JPEG SOF segment when
// it is a JPEG — never from a sidecar note that could drift.
const shipped = readFileSync(source);
const written = readFileSync(target);
if (!written.equals(shipped)) {
  throw new Error('entry.png in the output differs from the shipped poster');
}
if (written.length > 1_048_576) {
  throw new Error(`entry.png is ${written.length} bytes, over the 1048576 cap`);
}
function dimensions(buf: Buffer): { width: number; height: number } {
  if (buf.length > 24 && buf[0] === 0x89 && buf[1] === 0x50) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  let i = 2;
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) { i += 1; continue; }
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xc3) {
      return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  throw new Error('could not read image dimensions');
}
const { width, height } = dimensions(written);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}
