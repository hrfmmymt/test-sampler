import assert from "assert";
import {appendList} from "../append-list";

describe("appendList", () => {
  it("Enabled add list to container", () => {
    document.body.innerHTML = __html__["src/js/test/append-list.html"];

    let container = document.querySelector(".list");

    assert.equal(container.children.length, 0, "fist is 0");

    appendList(container, "List1");
    assert.equal(container.children.length, 1, "next is 1");
    assert.equal(container.children[0].textContent, "List1", "List1 is what you specified.");

    appendList(container, "List2");
    assert.equal(container.children.length, 2, "next is 2");
    assert.equal(container.children[0].textContent, "List1", "List1 as it is");
    assert.equal(container.children[1].textContent, "List2", "List2 is what you specified.");
  });
});