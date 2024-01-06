import Contact from "../AppLayout/Components/Contact/Contact"
import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom"

test('Whether the component is rendered or not' , () => {
    render(<Contact/>);
    const heading = screen.getByRole('heading');
    //Assertion
    expect(heading).toBeInTheDocument();
})

test("Should load button in contact component",() => {
    render(<Contact/>);

    // write query
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
})

test("should load input in contact component",() => {
    render(<Contact/>);
    const input = screen.getAllByRole('textbox');
    expect(input.length).toBe(2);
})

test('should load button in contact component' , () => {
    render(<Contact/>);
    const buttonByText = screen.getByText('Submit');
    console.log(buttonByText);
    expect(buttonByText).toBeInTheDocument();
})