import React, { useState } from "react";

import Navbar from "./components/Navbar";
import { Drawer } from "./components/Drawer";

import {
  AccessibilityProvider,
  useAccessibility,
} from "./context/AccessibilityContext";
import A11yButton from "./components/a11yButton/A11yButton";

function MainContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    fontSize,
    highContrast,
    // reducedMotion,
    dyslexicFont,
    cursorSize,
    lineSpacing,
    letterSpacing,
    focusHighlight,
  } = useAccessibility();

  const cursorSvg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
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
    >
      {/* Header */}
      <Navbar highContrast={highContrast} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={`rounded-lg p-6 ${
            highContrast ? "bg-black border-2 border-white" : "bg-white shadow"
          } ${dyslexicFont ? 'font-["OpenDyslexic"]' : ""}`}
          style={{
            fontSize: `${fontSize}%`,
            lineHeight: `${lineSpacing}`,
            letterSpacing: `${letterSpacing}px`,
            cursor:
              cursorSize === "large"
                ? `url("data:image/svg+xml,${cursorSvg}") 16 16, auto`
                : "default",
          }}
        >
          <h2
            className={`text-2xl font-bold mb-4 ${
              highContrast ? "text-white" : "text-gray-900"
            }`}
          >
            Welcome
          </h2>
          <p className={highContrast ? "text-white" : "text-gray-600"}>
            This is a demo of an accessible website with customizable viewing
            options. Open the menu by clicking the gear icon to access
            accessibility settings.
          </p>
          <div className="mt-8 space-y-4">
            <h3
              className={`text-xl font-semibold ${
                highContrast ? "text-white" : "text-gray-900"
              }`}
            >
              Sample Content
            </h3>
            <p className={highContrast ? "text-white" : "text-gray-600"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </main>

      {/* Accessibility Button */}
      <A11yButton
        highContrast={highContrast}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      {/* Drawer */}
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

function AccessibilityControls() {
  const {
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
  } = useAccessibility();

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Size</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setFontSize(Math.max(90, fontSize - 10))}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <span className="text-gray-600">{fontSize}%</span>
          <button
            onClick={() => setFontSize(Math.min(150, fontSize + 10))}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Increase font size"
          >
            A+
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Text Spacing</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Line Height ({lineSpacing}x)
            </label>
            <input
              type="range"
              min="1"
              max="2"
              step="0.1"
              value={lineSpacing}
              onChange={(e) => setLineSpacing(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Letter Spacing ({letterSpacing}px)
            </label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Display</h3>
        <div className="space-y-4">
          <button
            onClick={toggleHighContrast}
            className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {highContrast ? "Disable High Contrast" : "Enable High Contrast"}
          </button>
          <button
            onClick={toggleReducedMotion}
            className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {reducedMotion ? "Enable Animations" : "Reduce Motion"}
          </button>
          <button
            onClick={toggleDyslexicFont}
            className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {dyslexicFont ? "Use Standard Font" : "Use Dyslexic-Friendly Font"}
          </button>
          <button
            onClick={toggleFocusHighlight}
            className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {focusHighlight
              ? "Disable Focus Highlights"
              : "Enable Focus Highlights"}
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Cursor</h3>
        <select
          value={cursorSize}
          onChange={(e) => setCursorSize(e.target.value as "default" | "large")}
          className="w-full px-4 py-2 bg-gray-100 rounded-lg"
        >
          <option value="default">Default Cursor</option>
          <option value="large">Large Cursor</option>
        </select>
      </div>

      <nav className="pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
        <div className="space-y-2">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

function App() {
  return (
    <AccessibilityProvider>
      <MainContent />
    </AccessibilityProvider>
  );
}

export default App;
