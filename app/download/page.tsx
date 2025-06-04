import Link from "next/link"
import { ArrowLeft, Download, Shield, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Фоновое изображение на весь экран */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img
          src="https://i.postimg.cc/50bv4HhK/gta-sunset-background.png"
          alt="GTA Sunset"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-20">
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться на главную
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Скачать <span className="text-amber-500">FAIR ROLEPLAY</span>
          </h1>
          <p className="text-xl text-center text-zinc-300 mb-12">
            Присоединяйтесь к тысячам игроков в увлекательном мире FAIR ROLEPLAY
          </p>

          <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Системные требования</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-500">Минимальные</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• ОС: Windows 7/8/10/11 (64-bit)</li>
                  <li>• Процессор: Intel Core i5-3470 / AMD FX-8350</li>
                  <li>• Оперативная память: 8 GB ОЗУ</li>
                  <li>• Видеокарта: NVIDIA GTX 760 / AMD HD 7870</li>
                  <li>• Место на диске: 90 GB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-500">Рекомендуемые</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>• ОС: Windows 10/11 (64-bit)</li>
                  <li>• Процессор: Intel Core i7-4770K / AMD Ryzen 5 1600X</li>
                  <li>• Оперативная память: 16 GB ОЗУ</li>
                  <li>• Видеокарта: NVIDIA GTX 1060 / AMD RX 580</li>
                  <li>• Место на диске: 90 GB SSD</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Скачать лаунчер (1.2 GB)
            </Button>
            <p className="mt-4 text-zinc-400">Версия 2.5.1 | Обновлено: 20.05.2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-zinc-400">
                Наш лаунчер проверен антивирусами и не содержит вредоносного ПО. Мы гарантируем безопасность ваших
                данных.
              </p>
            </div>
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Автообновление</h3>
              <p className="text-zinc-400">
                Лаунчер автоматически обновляет игру до последней версии, вам не нужно следить за обновлениями.
              </p>
            </div>
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-zinc-400">
                Если у вас возникли проблемы с установкой, наша команда поддержки всегда готова помочь.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Инструкция по установке</h2>
            <ol className="space-y-4 text-zinc-300">
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  1
                </span>
                <span>Скачайте лаунчер FAIR ROLEPLAY, нажав на кнопку выше</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  2
                </span>
                <span>Запустите установщик и следуйте инструкциям на экране</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  3
                </span>
                <span>После установки запустите лаунчер и дождитесь загрузки всех файлов</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  4
                </span>
                <span>Создайте аккаунт или войдите в существующий</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  5
                </span>
                <span>Выберите сервер и нажмите "Играть"</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
