import assert from "assert";
import sinon from "sinon";
import {timer} from "../timer";

describe("timer", () => {
  it("Timer test", () => {
    document.body.innerHTML = __html__["src/js/test/timer.html"];

    let clock = sinon.useFakeTimers();

    let container = document.querySelector(".timer");

    timer(container, "3sec timer", 3000);
    assert.equal(container.textContent, "3sec timer", "Show '3sec timer'");

    clock.tick(1000);
    assert.equal(container.textContent, "3sec timer", "Showing even after 1 second");

    clock.tick(2500);
    assert.equal(container.textContent, "", "Hide after 3.5 second");

    clock.restore();
  });
});