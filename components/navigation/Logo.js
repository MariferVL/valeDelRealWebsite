"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Logo = ({ showButton, showImage, width }) => {
  return (
    <>
      <Link href="/"  className={`block w-32 mx-auto ${showButton ? 'hidden' : 'block'}`}>
        <Image
          src={showImage ? "/images/logos/mainLogo2.png" : "/images/logos/mainLogo1.png"}
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