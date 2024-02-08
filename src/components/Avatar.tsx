import { Transition } from '@headlessui/react';
import { useCallback, useEffect, useState } from 'react';
import { useColor } from "../providers/ColorProvider";
import { getColorNameFromIndex } from "../utils/getNextColor";

export default function Avatar() {
    const { setNextColor, currentColorIndex } = useColor();
    const [currentSrc, setCurrentSrc] = useState("");
    const [nextSrc, setNextSrc] = useState("");
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const newSrc = `avatars/${getColorNameFromIndex(currentColorIndex)}.png`;
        setNextSrc(newSrc);
        if (!animating) {
            setCurrentSrc(newSrc);
        }
    }, [currentColorIndex, animating, setNextColor]);

    const handleClick = useCallback(() => {
        setAnimating(!animating); // Toggle animation state to trigger Transition
        setNextColor();
    }, [setNextColor, animating]);

    const baseTransform = `scale(1.2) translateY(6%) translateX(-5%)`;

    return (
        <div
            className="cursor-pointer overflow-hidden inline-block rounded-full p-2 w-72 h-72 border border-white/30 relative"
            onClick={handleClick}
        >
            <Transition
                show={!animating}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute w-full h-full"
            >
                <img
                    className="object-cover rounded-full"
                    src={currentSrc}
                    alt="Current Avatar"
                    style={{ transform: baseTransform }}
                />
            </Transition>
            <Transition
                show={animating}
                enter="transition-opacity transform duration-500"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition-opacity transform duration-500"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
                className="absolute w-full h-full"
            >
                <img
                    className="object-cover rounded-full"
                    src={nextSrc}
                    alt="Next Avatar"
                    style={{ transform: baseTransform }}
                />
            </Transition>
        </div>
    );
}
