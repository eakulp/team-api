const fetch = require("node-fetch2");

//testing testing
it("gets the correct name", async ()=>{
    const response = await fetch('http://localhost:3000/eymi');
    const getName = await response.text();
    expect(getName).toBe("Hello Eymi");
})