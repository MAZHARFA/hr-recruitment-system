"use client";

import { Features } from "@/components/Features";

import { Navbar } from "@/components/Navbar";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Metrics } from "@/components/Metrics";
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { CTA } from "@/components/CTA";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = useCallback((): void => {
    // Replace with your sign-up flow / router.push("/signup")
    router.push("/yz/signup");
  }, []);
  return (
    <>
      <Navbar />
      <Hero
        onGetStarted={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <LogoBar />

      <Features />
      <HowItWorks
        activeStep={0}
        onStepChange={function (index: number): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Metrics />
      <Testimonials />
      <CTA
        onGetStarted={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </>
  );
}
