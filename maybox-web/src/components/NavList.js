<<<<<<< HEAD
// src/components/NavList.js
=======
// src/components/Navbar.js
>>>>>>> fork/update-James
import React from 'react';

const NavList = () => {
  const navItems = [
<<<<<<< HEAD
    { href: "/", label: "Home", ariaCurrent: "page" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/subscription-plans", label: "Subscription Plans" },
    { href: "/contact", label: "Contact Us" },
=======
    { href: "#", label: "Home", ariaCurrent: "page" },
    { href: "#", label: "About" },
    { href: "#", label: "Shop" },
    { href: "#", label: "Subscription Plans" },
    { href: "#", label: "Contact Us" },
>>>>>>> fork/update-James
  ];

  return (
    <ul className="flex flex-col text-[15px] p-4 md:p-0 mt-4 font-medium md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      {navItems.map((item, index) => (
        <li key={index}>
<<<<<<< HEAD
          <Link
            to={item.href}
            className="block py-2 px-3 text-customOrangeDark hover:text-customRed rounded md:bg-transparent"
            aria-current={item.ariaCurrent || undefined}
=======
          <a
            href={item.href}
            className="block py-2 px-3 text-customRed rounded md:bg-transparent"
            aria-current={item.ariaCurrent || undefined }
>>>>>>> fork/update-James
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

<<<<<<< HEAD
export default NavList;
=======
export default Navbar;
>>>>>>> fork/update-James
