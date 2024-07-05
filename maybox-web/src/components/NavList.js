// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  const navItems = [
    { href: "#", label: "Home", ariaCurrent: "page" },
    { href: "#", label: "About" },
    { href: "#", label: "Shop" },
    { href: "#", label: "Subscription Plans" },
    { href: "#", label: "Contact Us" },
  ];

  return (
    <ul className="flex flex-col text-[15px] p-4 md:p-0 mt-4 font-medium md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="block py-2 px-3 text-customRed rounded md:bg-transparent"
            aria-current={item.ariaCurrent || undefined }
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;