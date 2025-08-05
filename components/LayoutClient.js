"use client";

import { usePathname } from 'next/navigation';
import Navigation from "@/components/layout/navigation"; 
import Footer from "@/components/layout/Footer";        
import SimpleFooter from "@/components/layout/SimpleFooter"; 

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const containerClasses = isHomePage
    ? "h-screen flex flex-col" 
    : "min-h-screen flex flex-col"; 

  return (
    <div className={containerClasses}>
      <Navigation variant={isHomePage ? 'transparent' : 'default'} />
      
      <main className="flex-grow">
        {children}
      </main>

      {isHomePage ? <SimpleFooter /> : <Footer />}
    </div>
  );
}