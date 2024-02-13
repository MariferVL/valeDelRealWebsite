"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Logo({ showButton, logoSrc, closeSidebarOnClick }) {
  const handleClick = () => {
    closeSidebarOnClick && closeSidebarOnClick();
  };

  return (
    <>
      <Link
        href="/"
        className={`block w-40 mx-auto ${showButton ? 'hidden' : 'block'}`}
        onClick={handleClick}
      >
        <Image
          src={logoSrc}
          alt="Logo"
          width={974}
          height={429}
          priority={true} 
          loading="eager" 
           
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
