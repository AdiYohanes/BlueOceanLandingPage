
import React from "react";
import Logo from "./Logo";
import { NavigationMenuBar } from "./NavigationMenuBar";
import ActionButton from "./ActionButton";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 flex justify-between items-center px-10 h-20 z-50">
  <Logo />
  <NavigationMenuBar />
  <ActionButton />
</div>

  );
};

export default Navbar;
