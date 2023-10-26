import React, {
  createContext, useContext, useState, useMemo,
} from 'react';

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const contextValue = useMemo(
    () => ({ selectedColor, setSelectedColor }),
    [selectedColor, setSelectedColor],
  );

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
}

export const useColorContext = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColorContext must be used within a ColorProvider');
  }
  return context;
};
