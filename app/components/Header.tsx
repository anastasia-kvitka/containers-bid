"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/bid13.png"
            alt="Logo"
            width={64}
            height={64}
            className="invert brightness-0"
          />
          <span className="text-lg md:text-xl font-bold tracking-tight">
            Bid13AIBot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#how-it-works"
            className="hover:text-brand transition-colors"
          >
            How It Works
          </Link>
          <Link href="#features" className="hover:text-brand transition-colors">
            Features
          </Link>
          <Link href="#contact" className="hover:text-brand transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="#how-it-works"
              className="hover:text-brand transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="hover:text-brand transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#contact"
              className="hover:text-brand transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
