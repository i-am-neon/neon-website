import store from "store2"
import { PrimaryColor } from "../enums/Colors";

export const COLORS = [
    PrimaryColor.cyan,
    PrimaryColor.fuchsia,
    PrimaryColor.red,
    PrimaryColor.green
]

export const getNextColor = (): number => {
    const themeStore = store.namespace('theme');
    let colorIndex = themeStore.get('primaryIndex');

    colorIndex ++;
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

export const getColorNameFromIndex =(index: number): string => {
    switch (index) {
        case 0:
            return 'cyan'
        case 1:
            return 'fuchsia'
        case 2:
            return 'red'
        case 3:
            return 'green'
        default:
            return 'cyan'
    }
}