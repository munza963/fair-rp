import Link from "next/link"

export default function SimpleFooter() {
  return (
    <footer className="w-full bg-zinc-900 py-10 border-t-2 border-amber-500 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Левая колонка - Логотип и информация */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-amber-500 font-bold text-3xl mr-1">FAIR</span>
              <span className="text-white font-bold text-3xl">RP</span>
            </div>
            <div className="text-sm text-zinc-400 space-y-2">
              <p>ООО «Фаир Девелопмент»</p>
              <p>ИНН 7712345678</p>
              <p>ОГРН 1234567890123</p>
              <p className="mt-3">Товар представлен Professional Gaming Solutions Limited</p>
              <p>13565439</p>
            </div>
          </div>

          {/* Центральная колонка - Ссылки */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Игрокам */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-base">Игрокам</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/play" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Начать играть
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Пополнение счёта
                  </Link>
                </li>
                <li>
                  <Link href="/forum" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Форум
                  </Link>
                </li>
              </ul>
            </div>

            {/* Важная информация */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-base">Важная информация</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Условия использования
                  </Link>
                </li>
                <li>
                  <Link href="/agreement" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Пользовательское соглашение
                  </Link>
                </li>
                <li>
                  <Link href="/payment" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    Правила оплаты
                  </Link>
                </li>
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-base">Контакты</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://discord.gg/fairrp"
                    className="text-zinc-400 hover:text-amber-500 transition-colors"
                  >
                    Канал поддержки в Discord
                  </Link>
                </li>
                <li>
                  <Link href="mailto:help@fairrp.ru" className="text-zinc-400 hover:text-amber-500 transition-colors">
                    help@fairrp.ru
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Правая колонка - Платежные системы и статус */}
          <div className="flex flex-col items-end">
            <div className="flex space-x-4 mb-6">
              <div className="bg-zinc-800 text-white px-4 py-2 rounded text-sm font-medium">МИР</div>
              <div className="bg-zinc-800 text-white px-4 py-2 rounded text-sm font-medium">VISA</div>
              <div className="bg-zinc-800 text-white px-4 py-2 rounded text-sm font-medium">MC</div>
              <div className="bg-zinc-800 text-white px-4 py-2 rounded text-sm font-medium">СБП</div>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-zinc-400">Все системы в порядке</span>
            </div>
          </div>
        </div>

        {/* Дисклеймер */}
        <div className="mt-10 pt-6 border-t border-zinc-800 text-right">
          <p className="text-zinc-500 text-xs">
            FAIRRP.COM is not approved, sponsored, or endorsed by Rockstar Games. All used trademarks are the property
            of their respective owners.
          </p>
          <p className="text-zinc-500 text-xs mt-2">FAIRRP.COM © ООО СИ ОГ РН 1245400014529 ИНН 5404952607</p>
        </div>
      </div>
    </footer>
  )
}
