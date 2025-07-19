import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"


describe("Contact Us Page Test Case", () => {
// it ("Should load contact US component",() => {}) ;
test("Should load button inside Contact component", ()=>{ render (<ContactUs/>);
    const heading = screen.getByRole ("heading");
// Assertion
   expect (heading).toBeInTheDocument();
});

test ("Should load input name inside Contact component", ()=>{
    render (<ContactUs/>)
    const inputName=screen.getByPlaceholderText("name");
    //assertion
    expect(inputName).toBeInTheDocument();
})


// multiple itmes  getAllByRole
test ("Should load inputBoxes inside Contact component", ()=>{
render (<ContactUs/>);
// Querying
const inputBoxes = screen.getAllByRole("textbox");
// console. log(inputBoxes.Length);
//
//Assertion
expect (inputBoxes.length).toBe(2);
// expect (inputBoxes.length).notto.toBe(2);
})

})


