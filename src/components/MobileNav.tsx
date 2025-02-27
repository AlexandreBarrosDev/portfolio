'use client';
import { menuItems } from "@/constants";
import MenuItems from "./MenuItems";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((isOpen) =>!isOpen);
  return (
    <div className="flex lg:hidden">
      <button onClick={toggle} className="flex flex-col w-8 h-6 justify-center items-center fixed top-0 right-0 m-4">
        <span
          className={`w-full h-0.5 rounded-sm bg-neutral-100 left-0 top-0 absolute
          transition-all duration-300 ease-out
          ${isOpen ? 'top-3 rotate-45' : 'rotate-0'}`}
        >
        </span>
        <span className={`w-full h-0.5 rounded-sm bg-neutral-100
        transition-all duration-300 ease-out
        ${isOpen ? 'opacity-0' : 'w-full'}`}>
        </span>
        <span className={`w-full h-0.5 rounded-sm bg-neutral-100 bottom-0 absolute
          transition-all duration-300 ease-out
          ${isOpen ? 'bottom-2.5 -rotate-45' : 'rotate-0'}`}>
        </span>
      </button>
      <ul
        onClick={toggle}
        className={`transition-all ease-in-out duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-28 invisible'} z-50 bg-neutral-900
        p-4 fixed h-screen top-0 right-0 mt-12`}
      >
        {
          menuItems.map((item, index) => (
            <MenuItems
              key={index}
              url={item.url}
              label={item.label}
            />
          ))
        }
      </ul>
    </div>
  )
}
