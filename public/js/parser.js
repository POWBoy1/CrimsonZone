/**
 * CrimsonZone — Custom JSON Format Parser
 * Parses entries like:
 *   [name]="Game Name", [icon]="path.png", [thumbnail]="thumb.png", [file]="url"
 */
function parseEntry(str) {
  const result = {};
  const regex = /\[(\w+)\]="([^"]*)"/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    result[match[1]] = match[2];
  }
  return result;
}

function parseDataArray(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(entry => parseEntry(entry)).filter(e => e.name);
}

window.CZParser = { parseEntry, parseDataArray };
