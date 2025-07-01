import React, { createContext, useContext, useState } from "react";

interface AccessibilityContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  dyslexicFont: boolean;
  toggleDyslexicFont: () => void;
  cursorSize: "default" | "large";
  setCursorSize: (size: "default" | "large") => void;
  lineSpacing: number;
  setLineSpacing: (spacing: number) => void;
  letterSpacing: number;
  setLetterSpacing: (spacing: number) => void;
  focusHighlight: boolean;
  toggleFocusHighlight: () => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [cursorSize, setCursorSize] = useState<"default" | "large">("default");
  const [lineSpacing, setLineSpacing] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [focusHighlight, setFocusHighlight] = useState(false);

  const toggleHighContrast = () => setHighContrast((prev) => !prev);
  const toggleReducedMotion = () => setReducedMotion((prev) => !prev);
  const toggleDyslexicFont = () => setDyslexicFont((prev) => !prev);
  const toggleFocusHighlight = () => setFocusHighlight((prev) => !prev);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        highContrast,
        toggleHighContrast,
        reducedMotion,
        toggleReducedMotion,
        dyslexicFont,
        toggleDyslexicFont,
        cursorSize,
        setCursorSize,
        lineSpacing,
        setLineSpacing,
        letterSpacing,
        setLetterSpacing,
        focusHighlight,
        toggleFocusHighlight,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
}
