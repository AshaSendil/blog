import { Footer } from "@/components/footer/footer";
import MainHeader from "@/components/mainheader/mainheader";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}