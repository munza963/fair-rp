"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { User, ServerIcon as ServerStack, Download, ArrowLeft, Check, X } from "lucide-react"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [server, setServer] = useState("")
  const [email, setEmail] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [promoCode, setPromoCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!server || !email || !login || !password || !confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      })
      return
    }

    if (password !== confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Имитация запроса к API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Успешно!",
        description: "Регистрация прошла успешно. Переход к следующему шагу...",
      })

      setStep(2)
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось зарегистрироваться. Попробуйте позже.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGameOwned = () => {
    setStep(3)
    toast({
      title: "Отлично!",
      description: "Теперь вы можете скачать лаунчер и начать игру.",
    })
  }

  const skipToStep2 = () => {
    setStep(2)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Фоновое изображение на всю страницу */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://i.postimg.cc/HsB6fmyC/register-background.png"
          alt="FAIR RP Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

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
            <Link href="/play" className="px-4 py-2 hover:text-amber-500 transition-colors">
              Начать играть
            </Link>
            <Link href="/download" className="px-4 py-2 hover:text-amber-500 transition-colors">
              Скачать
            </Link>
            <Link href="/#choose-destiny" className="px-4 py-2 hover:text-amber-500 transition-colors">
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
        <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться на главную
        </Link>

        <div className="max-w-xl mx-auto">
          {/* Шаги регистрации */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-amber-500" : "bg-zinc-800"
                }`}
              >
                <User className="h-6 w-6 text-black" />
              </div>
              <div className={`w-16 h-1 ${step >= 2 ? "bg-amber-500" : "bg-zinc-800"}`}></div>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-amber-500" : "bg-zinc-800"
                }`}
              >
                <ServerStack className="h-6 w-6 text-black" />
              </div>
              <div className={`w-16 h-1 ${step >= 3 ? "bg-amber-500" : "bg-zinc-800"}`}></div>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-amber-500" : "bg-zinc-800"
                }`}
              >
                <Download className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>

          <div className="text-center mb-2">
            <div className="flex justify-center space-x-16">
              <span className="text-sm">Шаг 1</span>
              <span className="text-sm">Шаг 2</span>
              <span className="text-sm">Шаг 3</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-8 text-center">РЕГИСТРАЦИЯ АККАУНТА</h1>

          {step === 1 && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <Select onValueChange={setServer}>
                  <SelectTrigger className="w-full bg-zinc-900 border-zinc-800 focus:ring-amber-500 h-12">
                    <SelectValue placeholder="Выберите сервер" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800">
                    <SelectItem value="server1">Сервер 1</SelectItem>
                    <SelectItem value="server2">Сервер 2</SelectItem>
                    <SelectItem value="server3">Сервер 3</SelectItem>
                    <SelectItem value="server4">Сервер 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Введите вашу почту"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 focus-visible:ring-amber-500 h-12"
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Придумайте логин"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 focus-visible:ring-amber-500 h-12"
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 focus-visible:ring-amber-500 h-12"
                />
              </div>

              <div>
                <Input
                  type="password"
                  placeholder="Повторите пароль"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 focus-visible:ring-amber-500 h-12"
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Промокод"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 focus-visible:ring-amber-500 h-12"
                />
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  onClick={skipToStep2}
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  УЖЕ СОЗДАЛ АККАУНТ
                </Button>
                <Button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? "РЕГИСТРАЦИЯ..." : "ЗАРЕГИСТРИРОВАТЬСЯ"}
                </Button>
              </div>

              <div className="text-center text-xs text-zinc-500 pt-4">
                Продолжая, я соглашаюсь с{" "}
                <Link href="/rules" className="text-amber-500 hover:underline">
                  правилами
                </Link>{" "}
                и{" "}
                <Link href="/terms" className="text-amber-500 hover:underline">
                  условиями пользования
                </Link>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8">
              <h2 className="text-xl font-bold mb-6 text-center">У вас есть лицензионная GTA V?</h2>

              <div className="mb-8 rounded-lg overflow-hidden">
                <img src="/images/gta5-banner.png" alt="Grand Theft Auto V" className="w-full h-auto object-cover" />
              </div>

              <p className="text-center text-zinc-300 mb-8">
                Для игры на нашем сервере вам необходимо иметь лицензионную копию игры Grand Theft Auto V. Пожалуйста,
                подтвердите, что у вас есть игра.
              </p>

              <div className="flex justify-center space-x-4">
                <Button onClick={handleGameOwned} className="bg-green-600 hover:bg-green-700 text-white font-bold">
                  <Check className="mr-2 h-5 w-5" />
                  ДА, ИГРУ КУПИЛ
                </Button>

                <Link href="/keys">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
                    <X className="mr-2 h-5 w-5" />
                    НЕТ, НЕ КУПИЛ
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8">
              <h2 className="text-xl font-bold mb-6 text-center">Скачивание лаунчера</h2>

              <div className="mb-8 rounded-lg overflow-hidden relative">
                <img src="/images/launcher-banner.png" alt="FAIR RP Launcher" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">FAIR RP LAUNCHER</h3>
                    <p className="text-zinc-300">Твой путь в мир безграничных возможностей</p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-zinc-300 mb-4">
                  Загрузи наш лаунчер и открой для себя уникальный мир FAIR ROLEPLAY. Тебя ждут захватывающие
                  приключени, новые друзья и безграничные возможности для самовыражения.
                </p>
                <p className="text-zinc-400 text-sm">Размер: 1.2 GB | Последнее обновление: 21.05.2025</p>
              </div>

              <div className="flex justify-center">
                <Link href="/download">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 text-lg">
                    <Download className="mr-2 h-5 w-5" />
                    СКАЧАТЬ ЛАУНЧЕР
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
