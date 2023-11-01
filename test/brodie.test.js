const response = await fetch('http://localhost:3000/brodie');
const getName = await response.text();

//Brodie testing
it("gets the correct name", ()=>{
    expect(getName).toBe("Hello Brodie");
})