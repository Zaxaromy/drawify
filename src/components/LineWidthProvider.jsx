import React, {
  createContext, useState, useContext, useMemo,
} from 'react';

const LineWidthContext = createContext({});

function LineWidthProvider({ children }) {
  const [lineWidth, setLineWidth] = useState(4);

  const contextValue = useMemo(() => ({
    lineWidth,
    setLineWidth,
  }), [lineWidth]);

  return (
    <LineWidthContext.Provider value={contextValue}>
      {children}
    </LineWidthContext.Provider>
  );
}

export const useLineWidthContext = () => useContext(LineWidthContext);
export default LineWidthProvider;
