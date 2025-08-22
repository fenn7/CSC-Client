import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="carousel-indicator">1 / 7</div>

        <div className="hero-image-container">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0ge9UyoHGirAOshLSwiUE0lOMQ9c7a.png"
            alt="Cornerstone Cafe storefront with large windows and brick walls"
            className="hero-image"
          />

          <button className="carousel-btn prev-btn">
            <ChevronLeft size={24} />
          </button>

          <button className="carousel-btn next-btn">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
