import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { to: "/", label: "Home", ariaCurrent: "page" },
    { to: "/about", label: "About" },
    { to: "/shop", label: "Shop" },
    { to: "/subscription-plans", label: "Subscription Plans" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.to}
            className="block py-2 px-3 text-customRed rounded md:bg-transparent"
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
