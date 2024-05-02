import { ColorName } from "../enums/ColorName";
import { HexColor } from "../enums/HexColor";

export const HEX_COLORS: HexColor[] = Object.values(HexColor);
export const COLOR_NAMES: ColorName[] = Object.values(ColorName);

export const getNextColorIndex = (currentColorIndex: number): number => {
    return (currentColorIndex + 1) % HEX_COLORS.length;
};

export const updateDocumentColor = (colorHex: string): void => {
    document.documentElement.style.setProperty('--link-color', colorHex);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', colorHex);
    }
};

export const getColorNameFromIndex = (index: number): ColorName => {
    const colorValues = Object.values(ColorName);
    return colorValues[index] ?? colorValues[0];
};