"use client";

import React, { useState } from "react";
import { Menu, X, Piano } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Piano className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-semibold text-gray-800">
              Piano com Paixão
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Início
            </a>
            <a
              href="#cursos"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Cursos
            </a>
            <a
              href="#sobre"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Para Quem é
            </a>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              Aula Grátis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-purple-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#cursos"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </a>
              <a
                href="#sobre"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Quem é
              </a>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors w-full">
                Aula Grátis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
