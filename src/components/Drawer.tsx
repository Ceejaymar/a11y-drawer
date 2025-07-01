import React, { useEffect, useRef } from "react";
import { XCircleIcon } from "@phosphor-icons/react";
import { useAccessibility } from "../context/AccessibilityContext";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export function Drawer({ isOpen, onClose, children, title }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const { highContrast, reducedMotion } = useAccessibility();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${
          reducedMotion ? "transition-none" : "transition-opacity duration-300"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className={`fixed top-0 right-0 h-full w-80 max-w-[90%] transform ${
          reducedMotion
            ? "transition-none"
            : "transition-transform duration-300 ease-in-out"
        } z-50 ${isOpen ? "translate-x-0" : "translate-x-full"} ${
          highContrast
            ? "bg-black border-l-2 border-white"
            : "bg-white shadow-xl"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div
            className={`flex items-center justify-between p-4 ${
              highContrast
                ? "border-b-2 border-white"
                : "border-b border-gray-200"
            }`}
          >
            <h2
              id="drawer-title"
              className={`text-lg font-semibold ${
                highContrast ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                highContrast
                  ? "hover:bg-white/20 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
              aria-label="Close drawer"
            >
              <XCircleIcon size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </div>
      </div>
    </>
  );
}
