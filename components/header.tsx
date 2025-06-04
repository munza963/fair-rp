"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Branding */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-wider">
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "italic",
                fontWeight: "800",
                letterSpacing: "-0.05em",
                textShadow: "0 0 5px rgba(251, 191, 36, 0.3)",
              }}
              className="text-amber-500"
            >
              FAIR
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "italic",
                fontWeight: "800",
                letterSpacing: "-0.05em",
              }}
              className="text-white"
            >
              RP
            </span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/play" className="hover:text-amber-500 transition-colors">
                Начать играть
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-amber-500 transition-colors">
                Скачать
              </Link>
            </li>
            <li>
              <Link href="/#showcase" className="hover:text-amber-500 transition-colors">
                О проекте
              </Link>
            </li>
            <li>
              <Link href="/forum" className="hover:text-amber-500 transition-colors">
                ФОРУМ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div>
          <Link
            href="/donate"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = "/donate"
            }}
            className="px-4 py-2 border border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-colors rounded"
          >
            Пополнить счёт
          </Link>
        </div>
      </div>
    </header>
  )
}
