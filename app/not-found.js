"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function NotFound() {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
      <Image
        src={windowWidth >= 1024 ? '/images/404-lg.png' : '/images/404-sm.png'}
        alt="404 Not Found"
        width={windowWidth < 700 ? 800 : 1366}
        height={windowWidth < 700 ? 800 : 768}
        layout="responsive"
      />
  );
};

