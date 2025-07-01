import { PersonSimpleCircleIcon } from "@phosphor-icons/react";

import styles from "./A11yButton.module.css";

type A11yButtonProps = {
  highContrast: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
};

function A11yButton({ highContrast, setIsDrawerOpen }: A11yButtonProps) {
  const buttonStyles = [
    styles.button,
    highContrast ? styles.highContrast : styles.default,
  ].join(" ");

  return (
    <button
      onClick={() => setIsDrawerOpen(true)}
      className={buttonStyles}
      aria-label="Open accessibility settings"
      aria-haspopup="menu"
    >
      <PersonSimpleCircleIcon size={32} />
    </button>
  );
}

export default A11yButton;
