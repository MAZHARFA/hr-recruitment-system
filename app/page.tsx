"use client";

import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Navbar } from "@/components/Navbar";
import { useCallback } from "react";

export default function Home() {

  const handleGetStarted = useCallback((): void => {
    // Replace with your sign-up flow / router.push("/signup")
    window.location.href = "/yz/signup";
  }, []);
  return <>
  
  
<Navbar/>
{/* <Hero         onGetStarted={handleGetStarted} /> */}
{/* <LogoBar /> */}
<Features />
  </>;
}
