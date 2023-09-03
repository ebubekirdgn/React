import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from "./index";

describe('Counter Tests', () => {
    let increaseBtn, decreaseBtn, count;

    beforeEach(() => {
        render(<Counter />);  // render et 
        increaseBtn = screen.getByText("Increase");  // Increase yazan butonu bul seç
        decreaseBtn = screen.getByText("Decrease"); // Decrease yazan butonu bul seç 
        count = screen.getByText("0");
        console.log("beforeEach => Her testten önce çalışacağım.");

    })

    beforeAll(() => {
        console.log("beforeAll => İlk başta bir kere çalışacağım.");
    })

    afterAll(() => {
        console.log("afterAll => En son bir kere çalışacağım")
    })

    afterEach(() => {
        console.log("afterEach => Her testten sonra çalışacağım")
    })

    test("increase btn", () => {

        fireEvent.click(increaseBtn); // butona tıklattık 
        expect(count).toHaveTextContent("1");
    });


    test("decrease btn", () => {

        fireEvent.click(decreaseBtn); // butona tıklattık 
        expect(count).toHaveTextContent("-1");
    });
})



