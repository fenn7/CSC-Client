"use client"

import { useState } from "react"
import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import AuthModal from "../src/components/AuthModal"
import "../src/App.css"

export default function Page() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  return (
    <div className="App">
      <Header onOpenAuth={openAuthModal} />
      <Hero />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={setAuthMode}
      />
    </div>
  )
}
