import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from "./index";

describe('Counter Tests',() => {
    test("increase btn", () => {

        render(<Counter />);   // render et 
    
        const count = screen.getByText("0");
        const increaseBtn = screen.getByText("Increase");  // increase yazan butonu bul seç
    
        fireEvent.click(increaseBtn); // butona tıklattık 
        expect(count).toHaveTextContent("1");
    });
    
    
    test("decrease btn", () => {
    
        render(<Counter />);   // render et 
    
        const count = screen.getByText("0");
        const decreaseBtn = screen.getByText("Decrease");  // increase yazan butonu bul seç
    
        fireEvent.click(decreaseBtn); // butona tıklattık 
    
        expect(count).toHaveTextContent("-1");
    });
})



  