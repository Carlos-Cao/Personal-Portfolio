import React from "react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#main" },
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-turquoise">
      <nav
        className="flex items-center justify-between p-6 px-8"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow">
          <div className={`${isOpen ? "block" : "hidden"} lg:hidden mx-auto`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm font-semibold leading-6 text-white hover:text-gray-100 hover:underline my-3"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:block mx-auto">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-gray-100 mr-12 hover:underline"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            className="text-white focus:outline-none lg:hidden ml-auto"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                className={`${isOpen ? "hidden" : "block"}`}
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={`${isOpen ? "block" : "hidden"}`}
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
