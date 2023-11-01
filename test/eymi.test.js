const response = await fetch('http://localhost:3000/eymi');
const getName = await response.text();

//testing testing
it("gets the correct name", ()=>{
    expect(getName).toBe("Hello Eymi");
})