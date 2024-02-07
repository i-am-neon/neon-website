import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import store from 'store2';
import { COLORS, updateDocumentColor } from "../utils/getNextColor"; // Ensure the import paths are correct

type ColorContextType = {
    currentColorIndex: number;
    currentColor: string;
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
    const [currentColor, setCurrentColor] = useState('');

    useEffect(() => {
        const themeStore = store.namespace('theme');
        let colorIndex = themeStore.get('primaryIndex') || 0;
        setCurrentColorIndex(colorIndex);
        setCurrentColor(COLORS[colorIndex]);
        updateDocumentColor(COLORS[colorIndex]);
    }, []);

    const setNextColor = (): void => {
        const themeStore = store.namespace('theme');
        let newColorIndex = (currentColorIndex + 1) % COLORS.length;
        setCurrentColorIndex(newColorIndex);
        setCurrentColor(COLORS[newColorIndex]);
        themeStore.set('primaryIndex', newColorIndex);
        updateDocumentColor(COLORS[newColorIndex]);
    };

    return (
        <ColorContext.Provider value={{ currentColorIndex, currentColor, setNextColor }}>
            {children}
        </ColorContext.Provider>
    );
};
