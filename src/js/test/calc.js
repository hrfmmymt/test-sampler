import assert from "assert";
import {sumNumber} from "../calc";

describe("sumNumber", () => {
  it("Summation test", () => {
    assert.equal(sumNumber(1, 2), 3, "1 + 2 = 3");
    assert.equal(sumNumber(2, -1), 1, "2 + -1 = 1");
  });
});