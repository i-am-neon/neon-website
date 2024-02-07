import { ColorNames, HexColors } from "../enums/Colors";
export const COLORS: string[] = Object.values(HexColors);

export const getNextColorIndex = (currentColorIndex: number): number => {
    return (currentColorIndex + 1) % COLORS.length;
};

export const updateDocumentColor = (colorHex: string): void => {
    document.documentElement.style.setProperty('--link-color', colorHex);
};

export const getColorNameFromIndex = (index: number): ColorNames => {
    const colorValues = Object.values(ColorNames);
    return colorValues[index] ?? colorValues[0];
};