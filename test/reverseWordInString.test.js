// import reverseWordInString from "../code/string/reverseWordInString";

const reverseWordInString = require("../code/string/reverseWordInString")

test("abcd efgh ijkl",()=>{
    expect(reverseWordInString("abcd efgh ijkl")).toBe("dcba hgfe lkji")
})