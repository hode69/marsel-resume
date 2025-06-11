'use client'

import Navbar from "@/components/navbar/navbar"
import AboutSection from "@/components/sections/AboutSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"
import HeroSection from "@/components/sections/HeroSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import { Contact } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [heroOutOfView, setHeroOutOfView] = useState(false)

  return (
    <main className="relative bg-background ">
      <HeroSection onOutOfViewChange={setHeroOutOfView} />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer></Footer>
      <Navbar isVisible={heroOutOfView} />
    </main>
  )
}
