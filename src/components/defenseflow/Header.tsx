"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Home", "About", "Blog", "Pricing", "Contact"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Shield className="size-6 text-blue-500" />
          <span className="text-lg font-semibold text-white">
            Defenseflow
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Login
          </a>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Pricing
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-zinc-800 bg-black px-4 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Login
              </a>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Pricing
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
