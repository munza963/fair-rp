"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TopUpModalProps {
  children: React.ReactNode
}

const TopUpModal: React.FC<TopUpModalProps> = ({ children }) => {
  const [amount, setAmount] = useState<string>("100")
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const handleTopUp = async () => {
    setLoading(true)
    try {
      // Здесь будет запрос к API для пополнения счета
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert(`Счет успешно пополнен на ${amount} рублей`)
      setOpen(false)
    } catch (error) {
      console.error("Failed to top up:", error)
      alert("Произошла ошибка при пополнении счета")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Пополнение счета</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Сумма
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="col-span-3 bg-zinc-800 border-zinc-700"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nickname" className="text-right">
              Никнейм
            </Label>
            <Input id="nickname" className="col-span-3 bg-zinc-800 border-zinc-700" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleTopUp} disabled={loading} className="bg-amber-500 hover:bg-amber-600 text-black">
            {loading ? "Обработка..." : "Пополнить"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TopUpModal
