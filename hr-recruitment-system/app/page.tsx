"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header
        onEnterApp={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </>
  );
}
