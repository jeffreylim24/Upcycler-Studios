import { get } from 'http';
import { RefObject } from 'react';

export const useDropdownPosition = (
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement> // Ensure Ref is a RefObject
) => {
    const getDropdownPosition = () => {
        if (!ref.current) {
            return { top: 0, left: 0 }; // Default position if ref is not set
        } // Ensure Ref.current is not null

        const rect = ref.current.getBoundingClientRect();
        const dropdownWidth = 240; // Width of dropdwon (w-60) 
        
        //calculate the initial position of the dropdown
        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        //check if the dropdown overflows the right edge of the viewport
        if (left + dropdownWidth > window.innerWidth) {
            // Aligh to right edge of button instead
            left = rect.right + window.scrollX - dropdownWidth;

            //if still off-screen, alight to the right of the viewport with some padding 
            if (left < 0) {
                left = window.innerWidth - dropdownWidth - 16; // 16px padding from the right edge
            }
        }

            //Ensure the dropdown does not overflow the left edge of the viewport
        if (left < 0) {
            left = 16; // Reset to 16 (padding) if it overflows
        }
        return { top, left };
    };

    return { getDropdownPosition };

};