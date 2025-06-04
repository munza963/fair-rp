"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PlayPage() {
  const router = useRouter()

  const handleAboutClick = () => {
    window.location.href = "/#choose-destiny"
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Фоновый градиент с изображением */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://i.postimg.cc/GmzVbYT9/about-background-1.png"
          alt="GTA 5 Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl z-0"></div>

      {/* Верхняя навигация */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold">
            <Link href="/">
              <span className="inline-block">
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
          </div>
          <div className="flex space-x-4">
            <Link href="/play" className="px-4 py-2 text-amber-500 transition-colors">
              Начать играть
            </Link>
            <Link href="/download" className="px-4 py-2 hover:text-amber-500 transition-colors">
              Скачать
            </Link>
            <button
              onClick={handleAboutClick}
              className="px-4 py-2 hover:text-amber-500 transition-colors cursor-pointer"
            >
              О проекте
            </button>
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
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться на главную
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Начать играть в <span className="text-amber-500">FAIR ROLEPLAY</span>
          </h1>
          <p className="text-xl text-center text-zinc-300 mb-12">
            Следуйте инструкциям ниже, чтобы начать свое приключение в мире FAIR ROLEPLAY
          </p>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Как начать играть?</h2>
            <ol className="space-y-4 text-zinc-300">
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-semibold">Зарегистрируйте аккаунт</p>
                  <p className="text-zinc-400">
                    Создайте учетную запись в системе FAIR ROLEPLAY для доступа к серверам
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-semibold">Проверьте наличие игры</p>
                  <p className="text-zinc-400">
                    Система проверит, приобрели ли вы игру. Если нет, вам потребуется её купить
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-semibold">Скачайте лаунчер</p>
                  <p className="text-zinc-400">
                    Перейдите на страницу скачивания и установите наш лаунчер для доступа к игре
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  4
                </span>
                <div>
                  <p className="font-semibold">Выберите сервер</p>
                  <p className="text-zinc-400">После установки лаунчера выберите один из доступных серверов для игры</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                  5
                </span>
                <div>
                  <p className="font-semibold">Создайте персонажа и начните игру</p>
                  <p className="text-zinc-400">
                    Настройте внешность и характеристики вашего персонажа и погрузитесь в мир FAIR ROLEPLAY
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                id: 1,
                name: "Server 1",
                players: "1369/2000",
                description: "Основной сервер с полным набором возможностей и активным сообществом.",
                status: "Онлайн",
              },
              {
                id: 2,
                name: "Server 2",
                players: "1184/2000",
                description: "Второй основной сервер  теми же возможностями, что и первый.",
                status: "Онлайн",
              },
              {
                id: 3,
                name: "Server 3",
                players: "1168/2000",
                description: "Сервер для новичков с упрощенным стартом и обучающими механиками.",
                status: "Онлайн",
              },
              {
                id: 4,
                name: "Server 4",
                players: "1525/2000",
                description: "Экспериментальный сервер с тестированием новых механик и обновлений.",
                status: "Онлайн",
              },
            ].map((server) => (
              <div
                key={server.id}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 hover:border-amber-500 transition-all"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-amber-500">{server.name}</h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      server.status === "Онлайн" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {server.status}
                  </span>
                </div>
                <p className="text-zinc-300 mb-4">{server.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-zinc-400">{server.players}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/register">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-6">
                НАЧАТЬ РЕГИСТРАЦИЮ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
