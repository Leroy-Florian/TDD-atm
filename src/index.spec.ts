import { GetbillsFromAtm } from ".";

describe("should return one bill ", function() {
  it("... 10 $", function() {
    expect(GetbillsFromAtm(10)).toEqual([0, 0, 0, 0, 1]);
  });

  it("... 20 $", function() {
    expect(GetbillsFromAtm(20)).toEqual([0, 0, 0, 1, 0]);
  });
});

describe("should return Two bill ", function() {
  it("... 20$ & 10$", function() {
    expect(GetbillsFromAtm(30)).toEqual([0, 0, 0, 1, 1]);
  });

  it("... 200$ & 10$", function() {
    expect(GetbillsFromAtm(210)).toEqual([0, 1, 0, 0, 1]);
  });

});

describe("should return multiple bill ", function() {
  it("should return an array", function() {
    expect(GetbillsFromAtm(980)).toEqual([1, 2, 0, 4, 0]);
  });

  it("should return an array", function() {
    expect(GetbillsFromAtm(790)).toEqual([1, 1, 0, 4, 1]);
  });
});