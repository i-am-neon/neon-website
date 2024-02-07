import { getColorNameFromIndex } from "../utils/getNextColor";

type AvatarProps = {
    colorIndex: number
    setNextColor: () => void
}

export default function Avatar({ colorIndex, setNextColor }: AvatarProps) {
    const src = "avatars/" + getColorNameFromIndex(colorIndex) + ".png";
    const alt = "Neon's " + getColorNameFromIndex(colorIndex) + " avatar"
    return (
        <a
            className="cursor-pointer"
            onClick={setNextColor}
        >
            <img
                className="inline-block h-28 w-28"
                src={src}
                alt={alt}
            />
        </a>
    )
}