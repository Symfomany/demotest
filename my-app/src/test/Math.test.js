import Math from "../Math";

describe("Test Math Class", () => {
  it("when test financial", () => {
    const lib = new Math();

    expect(lib.financial(12.76257653)).toEqual("12.76");
  });
});
