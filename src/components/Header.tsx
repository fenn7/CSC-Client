"use client"

import { useState } from "react"
import { Menu, X, User } from "lucide-react"

interface HeaderProps {
  onOpenAuth: (mode: "login" | "signup") => void
}

export default function Header({ onOpenAuth }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Menu", href: "#menu" },
    { name: "Book a Table", href: "#booking" },
    { name: "Delivery", href: "#delivery" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-content">
            <img src="/cornerstone-cafe-logo.png" alt="Cornerstone Cafe Logo" className="logo-image" />
            <div className="coffee-icon">☕</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <div className="auth-buttons">
            <button onClick={() => onOpenAuth("login")} className="auth-btn login-btn">
              <User size={16} />
              Login
            </button>
            <button onClick={() => onOpenAuth("signup")} className="auth-btn signup-btn">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <div className="mobile-auth-buttons">
            <button
              onClick={() => {
                onOpenAuth("login")
                setIsMobileMenuOpen(false)
              }}
              className="mobile-auth-btn login-btn"
            >
              <User size={16} />
              Login
            </button>
            <button
              onClick={() => {
                onOpenAuth("signup")
                setIsMobileMenuOpen(false)
              }}
              className="mobile-auth-btn signup-btn"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
