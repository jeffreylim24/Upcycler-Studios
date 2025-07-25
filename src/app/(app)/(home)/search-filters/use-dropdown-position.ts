import { get } from 'http';
import { RefObject } from 'react';

export const useDropdownPosition = (
    Ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
    const getDropdownPosition = () => {
        if (!Ref.current) {
            return { top: 0, left: 0 }; // Default position if ref is not set
        }

        const rect = Ref.current.getBoundingClientRect();
        const dropdownWidth = 240; // Width of dropdwon (w-60)  
    };

    return { getDropdownPosition };
};