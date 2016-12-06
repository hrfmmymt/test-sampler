import assert from "assert";
import {loadXhr} from "../xhr";
import sinon from "sinon";

describe("loadXhr", () => {
  it("Loading HTML on server test", () => {
    document.body.innerHTML = __html__["src/js/test/xhr.html"];

    let server = sinon.fakeServer.create();
    let container = document.querySelector(".container");

    assert.equal(container.innerHTML, "", "init");

    loadXhr(container, "/path/to/server_html");
    assert.equal(container.innerHTML, "loading", "loading state after request");

    server.respondWith([
      200, {"Content-Type": "text/html"}, "<p>HTML from server</p>"
    ]);
    server.respond();
    assert.equal(container.innerHTML, "<p>HTML from server</p>", "loading returned HTML");

    server.restore();
  });
});