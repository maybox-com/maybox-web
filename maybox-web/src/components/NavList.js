// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { href: "/", label: "Home", ariaCurrent: "page" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/subscription-plans", label: "Subscription Plans" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <ul className="flex flex-col text-[15px] p-4 md:p-0 mt-4 font-medium md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.href}
            className="block py-2 px-3 text-customOrangeDark hover:text-customRed rounded md:bg-transparent"
            aria-current={item.ariaCurrent || undefined}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
