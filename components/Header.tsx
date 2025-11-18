"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full h-16 z-50 
        backdrop-blur-md transition-all duration-300
        ${scrolled ? "bg-white/70 dark:bg-black/40 shadow" : "bg-white/40 dark:bg-black/20"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="font-extrabold text-xl tracking-wide">
          AI HR Recruit
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
          <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a>
          <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</a>
          <a href="#login" className="hover:text-blue-600 dark:hover:text-blue-400">Login</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg animate-fadeDown">
          <nav className="flex flex-col p-6 gap-4 text-base">
            <a onClick={() => setOpen(false)} href="#home">Home</a>
            <a onClick={() => setOpen(false)} href="#features">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing">Pricing</a>
            <a onClick={() => setOpen(false)} href="#login">Login</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
