const response = await fetch('http://localhost:3000/ryan');
const getName = await response.text();

//Ryan testing
it("gets the correct name", ()=>{
    expect(getName).toBe("Hello Ryan");
})