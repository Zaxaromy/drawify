import React, {
  createContext, useContext, useRef, useMemo,
} from 'react';

const ClearCanvasContext = createContext();

export function ClearCanvasProvider({ children }) {
  const canvasRef = useRef(null);

  const clearCanvas = useMemo(() => function () {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const value = useMemo(() => ({ canvasRef, clearCanvas }), [canvasRef, clearCanvas]);

  return (
    <ClearCanvasContext.Provider value={value}>
      {children}
    </ClearCanvasContext.Provider>
  );
}

export function useClearCanvas() {
  const context = useContext(ClearCanvasContext);
  if (!context) {
    throw new Error('useClearCanvas must be used within a ClearCanvasProvider');
  }
  return context;
}
