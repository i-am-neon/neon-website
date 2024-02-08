import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import store from 'store2';
import { COLOR_NAMES, HEX_COLORS, updateDocumentColor } from "../utils/getNextColor"; // Ensure the import paths are correct
import { ColorName } from '../enums/ColorName';
import { HexColor } from '../enums/HexColor';

type ColorContextType = {
    currentColorIndex: number;
    currentHexColor: HexColor;
    currentColorName: ColorName;
    setNextColor: () => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = () => {
    const context = useContext(ColorContext);
    if (context === undefined) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
};

type ColorProviderProps = {
    children: ReactNode;
};

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [currentHexColor, setCurrentHexColor] = useState(HexColor.green);
    const [currentColorName, setCurrentColorName] = useState(ColorName.green);

    useEffect(() => {
        const themeStore = store.namespace('theme');
        let colorIndex = themeStore.get('primaryIndex') || 0;
        setCurrentColorIndex(colorIndex);
        setCurrentHexColor(HEX_COLORS[colorIndex]);
        setCurrentColorName(COLOR_NAMES[colorIndex]);
        updateDocumentColor(HEX_COLORS[colorIndex]);
    }, []);

    const setNextColor = (): void => {
        const themeStore = store.namespace('theme');
        let newColorIndex = (currentColorIndex + 1) % HEX_COLORS.length;
        setCurrentColorIndex(newColorIndex);
        setCurrentHexColor(HEX_COLORS[newColorIndex]);
        setCurrentColorName(COLOR_NAMES[newColorIndex]);
        themeStore.set('primaryIndex', newColorIndex);
        updateDocumentColor(HEX_COLORS[newColorIndex]);
    };

    return (
        <ColorContext.Provider value={{ currentColorIndex, currentHexColor, currentColorName, setNextColor }}>
            {children}
        </ColorContext.Provider>
    );
};
