const mime = require("mime-types");
const mapping = require("./mapping.json");

function lookup(lookUpString) {
  const mimeType = mime.lookup(lookUpString);
  if (!mimeType) {
    return false;
  }

  const friendlyName = mapping[mimeType];
  if (!friendlyName) {
    return mimeType;
  }
  return friendlyName;
}

module.exports = { lookup };
