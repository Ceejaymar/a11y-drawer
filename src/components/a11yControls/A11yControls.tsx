import { useAccessibility } from "../../context/AccessibilityContext";

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
    </div>
  );
}

export default AccessibilityControls;
