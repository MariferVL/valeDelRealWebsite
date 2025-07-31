"use client";
import { usePathname } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";
import SimpleFooter from "@/components/SimpleFooter";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <Navigation />
      {children}
      {isHomePage ? <SimpleFooter /> : <Footer />}
    </>
  );
}
