import { getColorNameFromIndex, getNextColor } from "../utils/getNextColor";

type AvatarProps = {
    colorIndex: number
    setNextColor: () => void
}

export default function Avatar(props: AvatarProps) {
    const src = "avatars/" + getColorNameFromIndex(props.colorIndex) + ".png";
    const alt = "Neon's " + getColorNameFromIndex(props.colorIndex) + " colored Noun"
    return (
        <a
            className="cursor-pointer"
            onClick={props.setNextColor}
        >
            <img
                className="inline-block h-28 w-28"
                src={src}
                alt={alt}
            />
        </a>
    )
}