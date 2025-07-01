type NavbarProps = {
  highContrast: boolean;
};

function Navbar({ highContrast }: NavbarProps) {
  return (
    <nav
      className={`${
        highContrast ? "bg-black border-white border-b" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1
            className={`text-xl font-semibold ${
              highContrast ? "text-white" : "text-gray-900"
            }`}
          >
            Accessibility Drawer
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
