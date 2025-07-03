import { useState } from "react";

import Navbar from "./components/Navbar";
import CardWrapper from "./components/cardWrapper/CardWrapper";
import MainContent from "./components/mainContent/MainContent";
import A11yButton from "./components/a11yButton/A11yButton";
import Drawer from "./components/Drawer";
import AccessibilityControls from "./components/a11yControls/A11yControls";

import { useAccessibility } from "./context/AccessibilityContext";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    // fontSize,
    highContrast,
    // reducedMotion,
    // dyslexicFont,
    cursorSize,
    // lineSpacing,
    // letterSpacing,
    focusHighlight,
  } = useAccessibility();

  const cursorSvg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 32 32'>
      <circle cx='16' cy='16' r='8' fill='${
        highContrast ? "#ffffff" : "#000000"
      }'/>
    </svg>
  `);

  return (
    <div
      className={`min-h-screen ${highContrast ? "bg-black" : "bg-gray-100"} ${
        focusHighlight
          ? "focus-visible:outline-4 focus-visible:outline-blue-500"
          : ""
      }`}
      style={{
        cursor:
          cursorSize === "large"
            ? `url("data:image/svg+xml,${cursorSvg}") 16 16, auto`
            : "default",
      }}
    >
      <Navbar />
      <CardWrapper>
        <MainContent />
      </CardWrapper>
      <A11yButton
        highContrast={highContrast}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Accessibility Options"
      >
        <AccessibilityControls />
      </Drawer>
    </div>
  );
}

export default App;
