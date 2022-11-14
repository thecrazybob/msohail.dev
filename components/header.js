import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import FaviconLogo from "../public/favicon/favicon-96x96.png";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "@fisch0920/use-dark-mode";

export default function Header() {
  const [active, setActive] = useState(false);

  const menuItems = [
    {
      route: "/",
      label: "Home",
      active: true,
    },
    {
      route: "/about",
      label: "About",
      active: true,
    },
    {
      route: "/work",
      label: "Work",
      active: true,
    },
    {
      route: "/uses",
      label: "Uses",
      active: true,
    },
    {
      route: "/articles",
      label: "Articles",
      active: false,
    },
    {
      route: "/contact",
      label: "Contact",
      active: true,
    },
  ];

  const handleClick = () => {
    setActive(!active);
  };

  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
  });

  return (
    <header className="mt-10 mb-32 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="hidden dark:invert md:block">
          <Link href="/">
            <a>
              <Image src={Logo} alt="Mohammed Sohail" />
            </a>
          </Link>
        </div>
        <div className="dark:invert md:hidden">
          <Link href="/">
            <a>
              <Image src={FaviconLogo} alt="Mohammed Sohail" />
            </a>
          </Link>
        </div>
      </div>
      {/* end of Logo */}

      {/* Desktop Menu */}
      <div className="hidden items-center space-x-6 dark:text-gray-200 md:flex">
        {menuItems
          .filter(({ active }) => active)
          .map(({ route, label }, index) => (
            <div
              key={index}
              className="transition-all duration-75 ease-in-out hover:border-b-2 hover:border-black dark:hover:border-white"
            >
              <Link href={route}>
                <a>{label}</a>
              </Link>
            </div>
          ))}

        {/* Dark mode switcher */}
        <div className="flex rounded-full border p-1 dark:border-white">
          <DarkModeToggle
            onChange={darkMode.toggle}
            checked={darkMode.value}
            size={80}
          />
        </div>
        {/* end of Dark mode switcher */}
      </div>
      {/* End of Desktop Menu */}

      {/* Mobile Menu */}
      <div className="flex items-center space-x-4 md:hidden">
        <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={90}
        />

        {/* Toggle */}
        <button
          className={active ? "z-50 rotate-45" : ""}
          onClick={handleClick}
          aria-label="Mobile menu toggle"
        >
          {active ? (
            <span
              aria-label="Close menu"
              className="relative text-7xl text-white"
            >
              +
            </span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${
          active
            ? "fixed left-0 top-0 z-40 h-full w-full overflow-hidden bg-black/80 transition duration-150"
            : "hidden"
        }`}
      >
        <div
          onClick={handleClick}
          className="flex h-full flex-col items-center justify-center space-y-6 text-5xl text-gray-200"
        >
          {menuItems
            .filter(({ active }) => active)
            .map(({ route, label }, index) => (
              <Link key={index} href={route}>
                <div className="cursor-pointer transition-all duration-300 ease-in-out hover:border-b">
                  <a>{label}</a>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* End of Mobile Menu */}
    </header>
  );
}
