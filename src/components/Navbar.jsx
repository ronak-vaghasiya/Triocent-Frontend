import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo-white.png";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(null);

  const navLinks = [
    { title: "Home", path: "/", end: true },
    { title: "About", path: "/about" },
    { title: "Products", path: "/products" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="flex justify-between items-center w-full text-sm">
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <img
            className="w-[250px] min-w-[250px]"
            src={Logo}
            alt="Triocent Healthcare"
          />
        </Link>
      </div>

      {/* navlinks */}
      <div className="hidden lg:flex lg:gap-[45px] md:gap-[25px] text-white uppercase font-semibold">
        {navLinks.map((link, index) => (
          <NavLink
            key={link.title}
            to={link.path}
            onMouseEnter={() => setOpen(index)}
            onMouseLeave={() => setOpen(null)}
            className="relative group h-fit w-fit"
          >
            {link.title}
            <span
              style={{ transform: open === index ? "scaleX(1)" : "scaleX(0)" }}
              className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left rounded-full bg-dark-blue transition-transform duration-500 ease-out"
            />
          </NavLink>
        ))}
      </div>

      {/* Button */}
      <div className="hidden lg:flex">
        <Link to={"/feedback"}>
          <Button title={"Feedback"} color={"blue"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
