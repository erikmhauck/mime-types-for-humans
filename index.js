const mime = require("mime-types");
const mapping = require("./mapping.json");

const lookup = (lookUpString) => {
  const mimeType = mime.lookup(lookUpString);
  if (!mimeType) {
    return false;
  }

  const friendlyName = mapping[mimeType];
  if (!friendlyName) {
    return mimeType;
  }
  return friendlyName;
};

exports.lookup = lookup;
