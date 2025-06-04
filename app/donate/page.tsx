"use client"
import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Shield, CreditCard, Mail, User, Server } from "lucide-react"

export default function DonatePage() {
  const [paymentForm, setPaymentForm] = useState({
    server: "",
    paymentMethod: "",
    email: "",
    nickname: "",
    amount: "",
    agreeToTerms: false,
  })

  const servers = [
    { id: "server-1", name: "Сервер 1" },
    { id: "server-2", name: "Сервер 2" },
    { id: "server-3", name: "Сервер 3" },
    { id: "server-4", name: "Сервер 4" },
  ]

  const paymentMethods = [
    { id: "card", name: "Банковская карта", icon: "💳" },
    { id: "qiwi", name: "QIWI", icon: "🥝" },
    { id: "yoomoney", name: "ЮMoney", icon: "💰" },
    { id: "webmoney", name: "WebMoney", icon: "💸" },
    { id: "crypto", name: "Криптовалюта", icon: "₿" },
  ]

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      !paymentForm.server ||
      !paymentForm.paymentMethod ||
      !paymentForm.email ||
      !paymentForm.nickname ||
      !paymentForm.amount ||
      !paymentForm.agreeToTerms
    ) {
      alert("Пожалуйста, заполните все поля и согласитесь с условиями")
      return
    }
    console.log("Payment form submitted:", paymentForm)
    alert("Перенаправление на страницу оплаты...")
  }

  // Calculate converted amount (x2 multiplier)
  const convertedAmount = paymentForm.amount ? Number.parseInt(paymentForm.amount) * 2 : 0

  // Добавляем стили для фона напрямую в head
  useEffect(() => {
    // Устанавливаем стили напрямую на body
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.style.backgroundColor = "#000"
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/server-visual-1.png')`
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundAttachment = "fixed"
    document.body.style.minHeight = "100vh"

    // Также устанавливаем на html
    document.documentElement.style.margin = "0"
    document.documentElement.style.padding = "0"
    document.documentElement.style.minHeight = "100vh"

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.backgroundColor = ""
      document.body.style.backgroundImage = ""
      document.body.style.backgroundSize = ""
      document.body.style.backgroundPosition = ""
      document.body.style.backgroundRepeat = ""
      document.body.style.backgroundAttachment = ""
      document.body.style.minHeight = ""
      document.documentElement.style.minHeight = ""
    }
  }, [])

  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/server-visual-1.png')",
        backgroundColor: "#000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <header className="bg-gray-900/90 text-white py-4 relative z-10 w-full">
        <div className="container mx-auto flex items-center justify-between px-4">
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
                <Link href="/#choose-destiny" className="hover:text-amber-500 transition-colors">
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
              className="px-4 py-2 border border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-colors rounded"
            >
              Пополнить счёт
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative w-full z-10">
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-8">
          {/* Floating F logos positioned around the form - Left side */}
          <div className="absolute top-[15%] left-[8%] w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[35%] left-[12%] w-14 h-14 bg-amber-500/80 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-sm" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[55%] left-[6%] w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[75%] left-[15%] w-12 h-12 bg-amber-500/90 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-sm" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[25%] left-[20%] w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-[10px]" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[65%] left-[18%] w-16 h-16 bg-amber-500/70 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-base" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[85%] left-[10%] w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>

          {/* Floating F logos positioned around the form - Right side */}
          <div className="absolute top-[20%] right-[8%] w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-sm" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[40%] right-[15%] w-8 h-8 bg-amber-500/80 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[60%] right-[10%] w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-sm" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[80%] right-[12%] w-10 h-10 bg-amber-500/90 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[30%] right-[20%] w-16 h-16 bg-amber-500/70 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-base" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[50%] right-[6%] w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-[10px]" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[70%] right-[18%] w-12 h-12 bg-amber-500/80 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-sm" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[10%] right-[14%] w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>

          {/* Additional scattered F logos */}
          <div className="absolute top-[45%] left-[25%] w-6 h-6 bg-amber-500/60 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-[10px]" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[35%] right-[25%] w-8 h-8 bg-amber-500/60 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[90%] left-[22%] w-10 h-10 bg-amber-500/50 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-xs" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>
          <div className="absolute top-[5%] right-[22%] w-12 h-12 bg-amber-500/50 rounded-full flex items-center justify-center z-10">
            <span className="text-white font-bold text-sm" style={{ fontStyle: "italic" }}>
              F
            </span>
          </div>

          {/* Background glow effects */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>

          {/* Centered Payment Form */}
          <div className="w-full max-w-md z-20">
            <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold">ПОПОЛНИТЬ СЧЁТ</h1>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <Shield className="h-3 w-3 mr-1" />
                  БЕЗОПАСНО
                </Badge>
              </div>

              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                {/* Server Selection */}
                <div className="space-y-2">
                  <Select onValueChange={(value) => setPaymentForm({ ...paymentForm, server: value })}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white h-12">
                      <div className="flex items-center space-x-2">
                        <Server className="h-4 w-4 text-amber-500" />
                        <SelectValue placeholder="Выберите сервер" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {servers.map((server) => (
                        <SelectItem key={server.id} value={server.id} className="text-white hover:bg-zinc-700">
                          {server.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Payment Method */}
                <div className="space-y-2">
                  <Select onValueChange={(value) => setPaymentForm({ ...paymentForm, paymentMethod: value })}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white h-12">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-amber-500" />
                        <SelectValue placeholder="Способ оплаты" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      {paymentMethods.map((method) => (
                        <SelectItem key={method.id} value={method.id} className="text-white hover:bg-zinc-700">
                          {method.icon} {method.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                    <Input
                      type="email"
                      placeholder="Введите вашу почту"
                      value={paymentForm.email}
                      onChange={(e) => setPaymentForm({ ...paymentForm, email: e.target.value })}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 h-12"
                    />
                  </div>
                </div>

                {/* Nickname */}
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-500" />
                    <Input
                      type="text"
                      placeholder="Ваш логин"
                      value={paymentForm.nickname}
                      onChange={(e) => setPaymentForm({ ...paymentForm, nickname: e.target.value })}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 h-12"
                    />
                  </div>
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 font-bold">
                      ₽
                    </span>
                    <Input
                      type="number"
                      placeholder="Введите сумму"
                      min="1"
                      value={paymentForm.amount}
                      onChange={(e) => setPaymentForm({ ...paymentForm, amount: e.target.value })}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 h-12"
                    />
                  </div>
                </div>

                {/* Dynamic Conversion Display */}
                {paymentForm.amount && (
                  <div className="bg-zinc-800 rounded-lg p-3 border border-zinc-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-amber-500 font-bold">₽ {paymentForm.amount}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-zinc-400">=</span>
                        <span className="text-amber-500 font-bold">{convertedAmount}</span>
                        <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                          <span
                            className="text-white font-bold text-[10px] leading-none flex items-center justify-center w-full h-full"
                            style={{ fontStyle: "italic" }}
                          >
                            F
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Exchange Rate - Static display */}
                <div className="bg-zinc-800 rounded-lg p-3 border border-zinc-700">
                  <div className="text-sm text-zinc-300 mb-2">Курс валюты:</div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-bold">₽ 1</span>
                      <span className="text-zinc-400">=</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-amber-500 rounded-full flex items-center justify-center">
                          <span
                            className="text-white font-bold text-[10px] leading-none flex items-center justify-center w-full h-full"
                            style={{ fontStyle: "italic" }}
                          >
                            F
                          </span>
                        </div>
                        <span className="text-amber-500 font-bold">2</span>
                      </div>
                      <span className="text-zinc-400">=</span>
                      <span className="text-green-400 font-bold">$ 200</span>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={paymentForm.agreeToTerms}
                    onCheckedChange={(checked) => setPaymentForm({ ...paymentForm, agreeToTerms: checked as boolean })}
                    className="border-zinc-600 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500 mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm text-zinc-300 leading-relaxed">
                    Продолжая, я соглашаюсь с{" "}
                    <Link href="/terms" className="text-amber-500 hover:underline">
                      условиями оферты
                    </Link>
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 text-lg h-12"
                  disabled={!paymentForm.agreeToTerms}
                >
                  ПЕРЕЙТИ К ОПЛАТЕ
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
