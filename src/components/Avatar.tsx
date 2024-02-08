import { useCallback } from 'react';
import { useColor } from "../providers/ColorProvider";
import { getColorNameFromIndex } from "../utils/getNextColor";
import { ColorName } from '../enums/ColorName';

export default function Avatar() {
    const { setNextColor, currentColorIndex, currentColorName } = useColor();

    const src = "avatars/" + getColorNameFromIndex(currentColorIndex) + ".png";
    const alt = "Neon's " + getColorNameFromIndex(currentColorIndex) + " avatar";

    const handleClick = useCallback(() => {
        setNextColor();
    }, [setNextColor]);

    return (
        <button
            className="cursor-pointer overflow-hidden inline-block rounded-full p-2 w-72 h-72 border border-white/30"
            onClick={handleClick}
        >
            {/* Adjust the image size to be slightly larger than the button to ensure it's clipped */}
            <img
                className="w-full h-full object-cover rounded-full"
                src={src}
                alt={alt}
                style={{ transform: `scale(1.2) translateY(${currentColorName === ColorName.green ? '7.5' : currentColorName === ColorName.white ? '5' : '6'}%) translateX(-5%)` }} // Slightly scale up the image to ensure it fills the area and is clipped
            />
        </button>
    );
}
