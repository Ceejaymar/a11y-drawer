import { useAccessibility } from "../../context/AccessibilityContext";

function MainContent() {
  const { highContrast, dyslexicFont, fontSize, lineSpacing, letterSpacing } =
    useAccessibility();

  return (
    <div
      className={`rounded-lg p-6 ${
        highContrast ? "bg-black border-2 border-white" : "bg-white shadow"
      } ${dyslexicFont ? 'font-["OpenDyslexic"]' : ""}`}
      style={{
        fontSize: `${fontSize}%`,
        lineHeight: `${lineSpacing}`,
        letterSpacing: `${letterSpacing}px`,
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
        options. Open the menu by clicking the gear icon to access accessibility
        settings.
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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default MainContent;
