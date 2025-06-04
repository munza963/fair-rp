import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart, Shield, Clock } from "lucide-react"

export default function KeysPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Фоновый градиент с изображением */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 z-10"></div>
        <img
          src="/images/gta5-store-screenshot.jpg"
          alt="GTA 5 Store"
          className="w-full h-full object-cover opacity-35"
        />
      </div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0"></div>

      {/* Верхняя навигация */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold">
            <Link href="/">
              <span className="text-amber-500">FAIR</span>RP
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/play" className="px-4 py-2 hover:text-amber-500 transition-colors">
              Начать играть
            </Link>
            <Link href="/download" className="px-4 py-2 hover:text-amber-500 transition-colors">
              Скачать
            </Link>
            <Link href="/about" className="px-4 py-2 hover:text-amber-500 transition-colors">
              О проекте
            </Link>
            <Link href="/forum" className="px-4 py-2 hover:text-amber-500 transition-colors">
              ФОРУМ
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 border border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-colors"
            >
              Пополнить счёт
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link href="/register" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться к регистрации
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Приобрести <span className="text-amber-500">GTA V</span>
          </h1>
          <p className="text-xl text-center text-zinc-300 mb-12">
            Для игры на нашем сервере вам необходимо иметь лицензионную копию игры Grand Theft Auto V
          </p>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img src="/images/gta5-cover.png" alt="Grand Theft Auto V" className="w-full h-auto rounded-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Grand Theft Auto V</h2>
                <p className="text-zinc-300 mb-6">
                  Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в
                  разрешении до 4k и выше с частотой 60 кадров в секунду.
                </p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-amber-500 mb-2">1,499 ₽</div>
                  <div className="text-zinc-400 line-through">2,499 ₽</div>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#1b2838] hover:bg-[#2a3f5a] text-white">
                      <img src="/images/steam-logo.png" alt="Steam" className="h-5 w-5 mr-2" />
                      Купить в Steam
                    </Button>
                  </a>

                  <a
                    href="https://www.epicgames.com/store/en-US/p/grand-theft-auto-v"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white">
                      <img src="/images/epic-logo.png" alt="Epic Games" className="h-5 w-5 mr-2" />
                      Купить в Epic Games
                    </Button>
                  </a>

                  <a href="https://www.rockstargames.com/gta-v" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#fcaf17] hover:bg-[#ffbd3d] text-black">
                      <img src="/images/rockstar-logo.png" alt="Rockstar Games" className="h-5 w-5 mr-2" />
                      Купить в Rockstar Games
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Официальная версия</h3>
              <p className="text-zinc-400">
                Приобретайте игру только в официальных магазинах для получения всех обновлений и поддержки.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасная покупка</h3>
              <p className="text-zinc-400">
                Все предложенные магазины гарантируют безопасность платежей и подлинность ключей.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Мгновенная активация</h3>
              <p className="text-zinc-400">
                После покупки вы сразу получите ключ активации и сможете начать загрузку игры.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Часто задаваемые вопросы</h2>

            <div className="space-y-4">
              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-semibold mb-2">Какая версия игры мне нужна?</h3>
                <p className="text-zinc-400">
                  Для игры на нашем сервере вам необходима лицензионная версия Grand Theft Auto V для PC. Подойдет
                  версия из любого официального магазина: Steam, Epic Games Store или Rockstar Games Launcher.
                </p>
              </div>

              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-semibold mb-2">Нужно ли мне покупать GTA Online отдельно?</h3>
                <p className="text-zinc-400">
                  Нет, GTA Online включена в покупку Grand Theft Auto V. Отдельно приобретать её не нужно.
                </p>
              </div>

              <div className="border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-semibold mb-2">Как подтвердить наличие игры после покупки?</h3>
                <p className="text-zinc-400">
                  После покупки и установки игры вернитесь на страницу регистрации и выберите опцию "Да, игру купил".
                  Наша система автоматически проверит наличие лицензионной копии.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Какие системные требования у игры?</h3>
                <p className="text-zinc-400">
                  Минимальные: Windows 10 64 Bit, Intel Core i5 3470 / AMD X8 FX-8350, 8GB RAM, NVIDIA GTX 660 2GB / AMD
                  HD7870 2GB, 90GB свободного места.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-400 mb-4">Уже приобрели игру?</p>
            <Link href="/register">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold">ВЕРНУТЬСЯ К РЕГИСТРАЦИИ</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
