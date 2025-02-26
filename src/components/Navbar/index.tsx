"use client";
import React, { useState } from "react";
import { Menu, X, Piano } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-earthy-parchment/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Piano className="h-6 w-6 text-earthy-liver" />
            <span className="text-lg font-semibold text-earthy-dark">
              Piano com Paixão
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-earthy-bistre hover:text-earthy-liver transition-colors"
            >
              Início
            </a>
            <a
              href="#cursos"
              className="text-earthy-bistre hover:text-earthy-liver transition-colors"
            >
              Cursos
            </a>
            <a
              href="#sobre"
              className="text-earthy-bistre hover:text-earthy-liver transition-colors"
            >
              Para Quem é
            </a>
            <Button
              asChild
              className="px-4 py-2 bg-earthy-liver text-earthy-parchment rounded-md hover:bg-earthy-copper transition-colors"
            >
              <a
                href="https://wa.me/5521985536417"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aula Grátis
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-earthy-bistre hover:text-earthy-liver"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-earthy-liver/20">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-earthy-bistre hover:text-earthy-liver transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#cursos"
                className="text-earthy-bistre hover:text-earthy-liver transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cursos
              </a>
              <a
                href="#sobre"
                className="text-earthy-bistre hover:text-earthy-liver transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Para Quem é
              </a>
              <Button
                asChild
                className="px-4 py-2 bg-earthy-liver text-earthy-parchment rounded-md hover:bg-earthy-copper transition-colors"
              >
                <a
                  href="https://wa.me/5521985536417"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aula Grátis
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
