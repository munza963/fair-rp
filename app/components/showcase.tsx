import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, Shield, Trophy } from "lucide-react"

export default function Showcase() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Активное сообщество",
      description: "Более 1000+ активных игроков онлайн каждый день",
      badge: "Популярно",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Высокая производительность",
      description: "Стабильный FPS и минимальные лаги благодаря оптимизированному серверу",
      badge: "Оптимизировано",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Честная игра",
      description: "Строгая модерация и защита от читеров",
      badge: "Безопасно",
    },
    {
      icon: <Trophy className="h-8 w-8 text-purple-500" />,
      title: "Уникальный контент",
      description: "Эксклюзивные моды, карты и игровые режимы",
      badge: "Эксклюзив",
    },
  ]

  return (
<section id="showcase" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Почему выбирают FAIRRP?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Мы предлагаем лучший игровой опыт с уникальными возможностями и стабильной работой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  {feature.icon}
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 dark:text-slate-300">{feature.description}</CardDescription>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">1000+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Активных игроков</div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">99.9%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Время работы</div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
