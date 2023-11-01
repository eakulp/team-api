const fetch = require("node-fetch2");

it("gets the correct name", async () => {
    const response = await fetch('http://localhost:3000/adam');
    const getName = await response.text();
    expect(getName).toBe("Hello Adam");
})