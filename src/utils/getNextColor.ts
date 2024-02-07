import store from "store2"
import { ColorNames, HexColors } from "../enums/Colors";

export const COLORS = [
    HexColors.green,
    HexColors.cyan,
    HexColors.amber,
    HexColors.fuchsia,
    HexColors.white
]

export const getNextColor = (): number => {
    const themeStore = store.namespace('theme');
    let colorIndex = themeStore.get('primaryIndex');

    colorIndex++;
    if (colorIndex >= COLORS.length || !colorIndex) {
        colorIndex = 0;
    }

    themeStore.set('primaryIndex', colorIndex);
    updateColorFromIndex(colorIndex);
    return colorIndex;
}

export const updateColorFromIndex = (colorIndex: any): void => {
    document.documentElement.style
        .setProperty('--link-color', COLORS[colorIndex]);
}

export const getColorNameFromIndex = (index: number): string => {
    switch (index) {
        case 0:
            return ColorNames.green
        case 1:
            return ColorNames.cyan
        case 2:
            return ColorNames.amber
        case 3:
            return ColorNames.fuchsia
        case 4:
            return ColorNames.white
        default:
            return ColorNames.green
    }
}