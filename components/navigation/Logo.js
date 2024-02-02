// Logo.js
"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Logo = ({ showButton, logoSrc }) => {
  return (
    <>
      <Link href="/" className={`block w-40 mx-auto ${showButton ? 'hidden' : 'block'}`}>
        <Image
          src={logoSrc}
          alt="Logo"
          width={974}
          height={429}
        />
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <Button />
      </div>
    </>
  );
};

export default Logo;
