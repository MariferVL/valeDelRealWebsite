"use client";
import { usePathname } from "next/navigation";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/Footer";
import SimpleFooter from "@/components/layout/SimpleFooter";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <Navigation variant={isHomePage ? 'transparent' : 'default'} />
      {children}
      {isHomePage ? <SimpleFooter /> : <Footer />}
    </>
  );
}
