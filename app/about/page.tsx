"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Play, Users, Shield, Zap, Calendar } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const achievements = [
    { number: "5+", text: "лет опыта" },
    { number: "50K+", text: "игроков" },
    { number: "4", text: "сервера" },
    { number: "24/7", text: "поддержка" },
  ]

  const slides = [
    {
      title: "Уникальный игровой опыт",
      description:
        "FAIR ROLEPLAY предлагает по-настоящему уникальный игровой опыт, где каждый игрок может стать кем угодно — от простого таксиста до влиятельного политика или бизнесмена. Наша команда постоянно работает над улучшением игрового процесса и добавлением новых возможностей.",
      image: "/images/about-slide1.png",
    },
    {
      title: "Сообщество единомышленников",
      description:
        "За годы существования вокруг FAIR ROLEPLAY сформировалось дружное сообщество игроков, объединенных любовью к ролевым играм. Мы гордимся тем, что создали пространство, где каждый может найти друзей и единомышленников.",
      image: "/images/about-slide2.png",
    },
    {
      title: "Постоянное развитие",
      description:
        "Мы никогда не останавливаемся на достигнутом. Регулярные обновления, новые механики, локации и возможности — всё это делает игровой мир FAIR ROLEPLAY живым и постоянно развивающимся. Мы внимательно прислушиваемся к отзывам игроков и реализуем самые интересные идеи.",
      image: "/images/about-slide3.png",
    },
  ]

  const showcaseImages = [
    { image: "/placeholder.svg?height=400&width=600", title: "Городская жизнь" },
    { image: "/placeholder.svg?height=400&width=600", title: "Пляжный отдых" },
    { image: "/placeholder.svg?height=400&width=600", title: "Яхты и катера" },
    { image: "/placeholder.svg?height=400&width=600", title: "Ночной клуб" },
    { image: "/placeholder.svg?height=400&width=600", title: "Уличные гонки" },
    { image: "/placeholder.svg?height=400&width=600", title: "Полицейский патруль" },
    { image: "/placeholder.svg?height=400&width=600", title: "Бизнес-встреча" },
    { image: "/placeholder.svg?height=400&width=600", title: "Частная вечеринка" },
  ]

  const screenshots = [
    { image: "/images/screenshot1.png", title: "Городская жизнь" },
    { image: "/images/screenshot2.png", title: "Полицейский патруль" },
    { image: "/images/screenshot3.png", title: "Ночной клуб" },
    { image: "/images/screenshot4.png", title: "Гонки" },
    { image: "/images/screenshot5.png", title: "Бизнес-встреча" },
    { image: "/images/screenshot6.png", title: "Пляжный отдых" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // Animation refs
  const historyRef = useRef(null)
  const missionRef = useRef(null)
  const showcaseRef = useRef(null)
  const achievementsRef = useRef(null)
  const galleryRef = useRef(null)

  const historyInView = useInView(historyRef, { once: true, amount: 0.3 })
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const showcaseInView = useInView(showcaseRef, { once: true, amount: 0.3 })
  const achievementsInView = useInView(achievementsRef, { once: true, amount: 0.3 })
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.3 })

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Фоновое изображение на весь экран */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img
          src="/images/about-background.png"
          alt="FAIR ROLEPLAY Basketball"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

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
            <Link href="/play" className="px-4 py-2 hover:text-amber-500 transition-colors">
              Начать играть
            </Link>
            <Link href="/download" className="px-4 py-2 hover:text-amber-500 transition-colors">
              Скачать
            </Link>
            <Link href="/about" className="px-4 py-2 text-amber-500 transition-colors">
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

      {/* Главный баннер */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <img
            src="/images/gta5-skyline-sunset.jpg"
            alt="FAIR ROLEPLAY"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              О проекте <span className="text-amber-500">FAIR ROLEPLAY</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8">
              Погрузитесь в захватывающий мир ролевой игры, где каждый может стать кем угодно и воплотить в жизнь свои
              самые смелые идеи
            </p>
            <div className="flex space-x-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 text-lg">
                Начать играть
              </Button>
              <a href="#showcase">
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 px-8 py-3 text-lg"
                >
                  Узнать больше
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      </section>

      {/* Showcase в стиле majestic-rp.ru */}
      <section id="showcase" ref={showcaseRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={showcaseImages[selectedImage].image || "/placeholder.svg"}
                  alt={showcaseImages[selectedImage].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 
                  bg-amber-500/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer 
                  hover:bg-amber-500/50 transition-all"
                  onClick={toggleVideo}
                >
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-black ml-1" />
                  </div>
                </div>
                <div className="absolute top-8 right-8 text-right">
                  <h3 className="text-4xl font-bold text-white uppercase mb-1">ОТКРОЙ</h3>
                  <p className="text-lg text-white">НОВЫЙ МИР ВОЗМОЖНОСТЕЙ</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-2">
                {showcaseImages.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-video rounded-md overflow-hidden cursor-pointer ${
                      selectedImage === index ? "ring-2 ring-amber-500" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {showcaseImages.slice(4, 8).map((image, index) => (
                  <div
                    key={index + 4}
                    className={`aspect-video rounded-md overflow-hidden cursor-pointer ${
                      selectedImage === index + 4 ? "ring-2 ring-amber-500" : ""
                    }`}
                    onClick={() => setSelectedImage(index + 4)}
                  >
                    <img
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2" id="choose-destiny">
              <h2 className="text-4xl font-bold uppercase mb-6">ВЫБЕРИ СВОЮ СУДЬБУ</h2>
              <p className="text-zinc-300 mb-6">
                Создай криминальную империю, возглавь преступный синдикат или выбери путь закона и справедливости. На
                FAIR ROLEPLAY у тебя есть полная свобода выбора — от мелкого преступника до главы полицейского
                департамента. Меняй свою роль в любой момент и исследуй все грани игрового мира!
              </p>
              <p className="text-zinc-300 mb-6">
                Наш проект — это живая, дышащая вселенная с проработанной экономикой, разнообразными профессиями и
                уникальными социальными механиками. Стань успешным предпринимателем, спасай жизни в роли медика,
                поддерживай порядок как сотрудник правоохранительных органов или займи кресло мэра и управляй целым
                городом.
              </p>

              <h3 className="text-2xl font-bold mb-4">КАК НАЧАТЬ ИГРАТЬ?</h3>
              <p className="text-zinc-300 mb-4">Два шага отделяют тебя от нового игрового опыта!</p>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 mb-4 flex items-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-500 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold">Приобрети GTA V</h4>
                  <p className="text-zinc-400 text-sm">Для игры требуется лицензионная копия игры</p>
                </div>
                <Link href="/keys" className="ml-auto">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black">КУПИТЬ</Button>
                </Link>
              </div>

              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 mb-4 flex items-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-500 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold">Установи наш лаунчер</h4>
                  <p className="text-zinc-400 text-sm">Быстрый доступ ко всем серверам</p>
                </div>
                <Link href="/download" className="ml-auto">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black">СКАЧАТЬ</Button>
                </Link>
              </div>

              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold">ПРИСОЕДИНЯЙСЯ К СООБЩЕСТВУ</h3>
                  <div className="ml-4 h-px bg-zinc-700 flex-grow"></div>
                </div>
                <p className="text-zinc-300 mb-4">Будь в курсе всех событий и обновлений</p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="https://discord.gg/fairrp" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#5865F2] rounded-lg p-4 flex items-center hover:opacity-90 transition-opacity">
                      <i className="fa-brands fa-discord text-2xl mr-3"></i>
                      <span className="font-bold">Discord</span>
                    </div>
                  </Link>
                  <Link href="https://t.me/fairrp" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#0088cc] rounded-lg p-4 flex items-center hover:opacity-90 transition-opacity">
                      <i className="fa-brands fa-telegram text-2xl mr-3"></i>
                      <span className="font-bold">Telegram</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section
        ref={achievementsRef}
        className="py-16 bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-800 relative z-10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{achievement.number}</div>
                <div className="text-zinc-300">{achievement.text}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* История проекта */}
      <section id="history" ref={historyRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <div className="inline-block bg-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
                НАША ИСТОРИЯ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">От идеи до крупнейшего ролевого сервера</h2>
              <p className="text-zinc-300 mb-6">
                FAIR ROLEPLAY был основан в 2020 году группой энтузиастов, объединенных общей страстью к ролевым играм и
                созданию уникальных игровых миров. Наша цель была проста — создать сервер, который предложит игрокам
                беспрецедентную свободу самовыражения и возможности для творчества.
              </p>
              <p className="text-zinc-300 mb-6">
                За короткое время мы прошли путь от небольшого сообщества до одного из самых популярных ролевых
                серверов. Мы постоянно развиваемся, добавляя новые механики, локации и возможности для наших игроков.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                <img
                  src="/images/about-history.jpg"
                  alt="История FAIR ROLEPLAY"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-amber-500" />
                    <span className="text-zinc-300">Основан в 2020 году</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-amber-500" />
                    <span className="text-zinc-300">50,000+ зарегистрированных игроков</span>
                  </div>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 
                  bg-amber-500/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer 
                  hover:bg-amber-500/50 transition-all z-20"
                  onClick={toggleVideo}
                >
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-black ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Слайдер */}
      <section className="py-20 bg-zinc-900/50 backdrop-blur-sm border-y border-zinc-800 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
              ОСОБЕННОСТИ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Что делает нас особенными</h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-zinc-300">{slide.description}</p>
                      </div>
                      <div className="md:w-1/2">
                        <img
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.title}
                          className="w-full h-full object-cover rounded-r-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-500/80 transition-all z-10"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-500/80 transition-all z-10"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-amber-500" : "bg-zinc-600"
                  } transition-all`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Наша миссия */}
      <section ref={missionRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
              НАША МИССИЯ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Создать самый справедливый и реалистичный ролевой игровой мир
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Мы стремимся создать пространство, где каждый игрок может стать кем угодно и воплотить в жизнь свои самые
              смелые идеи в справедливом и увлекательном окружении.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 hover:border-amber-500 transition-all">
              <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Сообщество</h3>
              <p className="text-zinc-300">
                Создание дружелюбного и поддерживающего сообщества игроков, где каждый может найти единомышленников и
                друзей.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 hover:border-amber-500 transition-all">
              <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Инновации</h3>
              <p className="text-zinc-300">
                Постоянное внедрение новых механик и возможностей, которые делают игровой процесс более увлекательным и
                разнообразным.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 hover:border-amber-500 transition-all">
              <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Справедливость</h3>
              <p className="text-zinc-300">
                Обеспечение равных возможностей для всех игроков без pay-to-win механик, где успех зависит от навыков и
                усилий.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Галерея */}
      <section
        ref={galleryRef}
        className="py-20 bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800 relative z-10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
              ГАЛЕРЕЯ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Скриншоты из игры</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Взгляните на мир FAIR ROLEPLAY глазами наших игроков
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {screenshots.map((screenshot, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer aspect-video">
                <img
                  src={screenshot.image || "/placeholder.svg"}
                  alt={screenshot.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{screenshot.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
              Смотреть больше скриншотов
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Готов присоединиться к нам?</h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto mb-8">
              Тысячи игроков уже создают свои истории в мире FAIR ROLEPLAY. Не упусти свой шанс стать частью нашего
              сообщества!
            </p>
            <Button size="lg" className="bg-black hover:bg-zinc-900 text-white font-bold px-8 py-3 text-lg">
              Начать играть
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
