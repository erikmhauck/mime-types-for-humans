const mimesForHumans = require("..");
const mime = require("mime-types");

jest.mock("mime-types");

const mockMimeLookupResult = (desiredResult) => {
  mime.lookup.mockReturnValue(desiredResult);
};

describe("mime-types-for-humans", () => {
  test("returns human friendly mapping if it exists", () => {
    mockMimeLookupResult("application/json");
    const result = mimesForHumans.lookup("test.json");
    expect(result).toBe("JavaScript Object Notation (JSON)");
  });
  test("if the mimetype exists but we don't have a human-readable mapping for it then return the mimetype", () => {
    mockMimeLookupResult("bar");
    const result = mimesForHumans.lookup("foo");
    expect(result).toBe("bar");
  });
  test("returns false if a mapping doesn't exist", () => {
    mockMimeLookupResult(false);
    const result = mimesForHumans.lookup("test.foobar");
    expect(result).toBeFalsey;
  });
});
