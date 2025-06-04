import Link from "next/link"

export default function BottomFooter() {
  return (
    <footer className="w-full bg-zinc-900 text-white py-8 relative z-50 block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left - Logo and Legal */}
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <span
                className="text-amber-500 font-bold text-2xl logo-text logo-glow italic"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FAIR
              </span>
              <span
                className="text-white font-bold text-2xl logo-text italic"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                RP
              </span>
            </div>
            <div className="text-sm text-zinc-300 space-y-1">
              <p>ООО «Фаир Девелопмент»</p>
              <p>ИНН 7712345678</p>
            </div>
          </div>

          {/* Center - Links */}
          <div className="flex-1 flex flex-col gap-3">
            <Link href="/terms" className="text-zinc-300 hover:text-amber-500 text-sm transition-colors">
              Политика защиты персональной информации
            </Link>
            <Link href="/agreement" className="text-zinc-300 hover:text-amber-500 text-sm transition-colors">
              Пользовательское соглашение
            </Link>
          </div>

          {/* Right - Payment Methods */}
          <div className="flex-1 flex justify-start md:justify-end">
            <div className="flex gap-3">
              <div className="bg-zinc-700 text-white px-3 py-2 rounded text-sm font-medium">МИР</div>
              <div className="bg-zinc-700 text-white px-3 py-2 rounded text-sm font-medium">VISA</div>
              <div className="bg-zinc-700 text-white px-3 py-2 rounded text-sm font-medium">MC</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-zinc-700 text-center">
          <p className="text-zinc-400 text-sm">© 2025 FAIR RP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
