import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from "../index";

//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

//'describe' function to declare the component we're testing
describe('About component', () => {
    // First Test = verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });
    // Second Test = compare snapshots of the DOM with a fragment of ht 'About' component
    it('matches snapshot DOM node structure', () => {
        // 'asFragment' function returns a snapshot of the 'About' component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})




