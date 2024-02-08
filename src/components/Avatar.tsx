import { useColor } from "../providers/ColorProvider";
import { getColorNameFromIndex } from "../utils/getNextColor";

export default function Avatar() {
    const { setNextColor, currentColorIndex } = useColor();

    const src = "avatars/" + getColorNameFromIndex(currentColorIndex) + ".png";
    const alt = "Neon's " + getColorNameFromIndex(currentColorIndex) + " avatar"
    return (
        <button
            className="cursor-pointer"
            onClick={setNextColor}
        >
            <img
                className="inline-block h-28 w-28"
                src={src}
                alt={alt}
            />
        </button>
    )
}