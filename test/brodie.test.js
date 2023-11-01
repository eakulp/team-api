const fetch = require("node-fetch2");

//Brodie testing
it("gets the correct name", async ()=>{  
    const response = await fetch('http://localhost:3000/brodie');
    const getName = await response.text();
    expect(getName).toBe("Hello Brodie");
})
