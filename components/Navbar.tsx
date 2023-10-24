"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./multiple_elements/Button";
import { useState } from "react";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 gap-4">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-8 xl:gap-14 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {!navMenu && (
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => {
            setNavMenu(!navMenu);
          }}
        />
      )}
      {navMenu && (
        <div className="lg:hidden">
          <Image
            src="close.svg"
            alt="close"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            onClick={() => {
              setNavMenu(!navMenu);
            }}
          />
          <ul className="flex flex-col items-end gap-2 absolute top-14 right-0 px-4 py-3 regular-16 text-gray-50 transition-all ">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="hover:font-bold cursor-pointer transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
