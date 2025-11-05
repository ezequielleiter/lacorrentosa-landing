'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Sprout, Handshake, Calendar, Mail, Instagram, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const heroY = useTransform(smoothProgress, [0, 0.2], ["0%", "30%"]);

  const sections = [
    {
      id: "welcome",
      icon: Heart,
      title: "¡Bienvenida/o a La Correntosa! 💚",
      content: "Queremos contarte que formás parte de La Correntosa, la primera mutual de Villa La Angostura, creada entre vecinas y vecinos para acceder colectivamente a alimentos de calidad y fortalecer la economía local y comunitaria.",
      color: "from-[#6B9CE8] to-[#00ADC8]"
    },
    {
      id: "mission",
      icon: Sprout,
      title: "Nuestra Misión",
      content: "Somos una mutual de proveeduría de alimentos: impulsamos el acceso a productos sanos, agroecológicos o en transición, provenientes de la economía social y solidaria, a precios justos y accesibles, tanto para quienes consumen como para quienes producen.",
      color: "from-[#7EC95B] to-[#6B9CE8]"
    },
    {
      id: "origin",
      icon: Users,
      title: "Nuestros Alimentos",
      content: "Los alimentos que llegan a nuestra despensa nacen de la agricultura familiar y de pequeñas producciones de todo el país, tejiendo redes solidarias entre territorios y acercando alimentos de calidad a nuestras mesas.",
      color: "from-[#FFC83C] to-[#7EC95B]"
    },
    {
      id: "values",
      icon: Handshake,
      title: "Nuestros Valores",
      content: "La Correntosa se guía por los principios del mutualismo: la ayuda mutua, la solidaridad, la democracia, la participación y la equidad. Creemos que organizarnos colectivamente es la mejor manera de cuidarnos y de construir un futuro más justo para nuestra comunidad.",
      color: "from-[#00ADC8] to-[#FFC83C]"
    },
    {
      id: "network",
      icon: Users,
      title: "Red Comunitaria",
      content: "Además, generamos redes con otras organizaciones e instituciones de Villa La Angostura y de la región, fortaleciendo vínculos y proyectos comunes que hacen crecer la economía solidaria.",
      color: "from-[#6B9CE8] to-[#7EC95B]"
    },
    {
      id: "benefits",
      icon: Calendar,
      title: "Beneficios Exclusivos",
      content: "Como parte de la mutual, también accedés a beneficios y descuentos en actividades culturales, como los eventos que se realizan en La Bayer Experimental, entre otros espacios aliados.",
      color: "from-[#FFC83C] to-[#00ADC8]"
    },
    {
      id: "learning",
      icon: Sprout,
      title: "Aprendizaje Continuo",
      content: "Desde la mutual impulsamos talleres, cursos y espacios de formación, para seguir aprendiendo y compartiendo saberes entre vecinas y vecinos.",
      color: "from-[#7EC95B] to-[#FFC83C]"
    },
    {
      id: "participation",
      icon: Users,
      title: "Participación Activa 🌿",
      content: "Y por último, te invitamos a participar de nuestras asambleas semanales, donde decidimos colectivamente el rumbo de la mutual y los proyectos que queremos impulsar. La mutual se sostiene con el compromiso de cada socia y socio. Tu participación hace la diferencia.",
      color: "from-[#00ADC8] to-[#6B9CE8]"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-white overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 opacity-10"
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#7EC95B]/30 rounded-full blur-xl" />
        <div className="absolute top-32 right-20 w-48 h-48 bg-[#6B9CE8]/30 rounded-full blur-xl" />
        <div className="absolute bottom-32 left-32 w-64 h-64 bg-[#00ADC8]/30 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFC83C]/30 rounded-full blur-xl" />
      </motion.div>

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY }}
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-60 h-60 mx-auto flex items-center justify-center p-1">
              <Image
                src="/LOGO CORRENTOSA_2.png"
                alt="Logo La Correntosa"
                width={180}
                height={180}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B9CE8] to-[#00ADC8] mb-6"
          >
            La Correntosa
          </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl md:text-3xl text-gray-700 mb-8 font-bold"
            >
            Mutual de Villa La Angostura
            </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            La primera mutual creada entre vecinas y vecinos para acceder colectivamente a alimentos de calidad
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="animate-bounce"
          >
            <ArrowDown className="w-8 h-8 text-[#7EC95B] mx-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* Content Sections */}
      {sections.map((section, index) => {
        const Icon = section.icon;
        return (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-20 px-6"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 relative overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-5 rounded-3xl`} />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                    className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                  >
                    {section.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  >
                    {section.content}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        );
      })}

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#6B9CE8] to-[#00ADC8] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                ¡Conectate con Nosotros! 🌾
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl mb-8 opacity-90"
              >
                Si querés acercarte, proponer o saber más, escribinos o seguinos en nuestras redes
              </motion.p>

              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <motion.a
                  href="mailto:lacorrentosa@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 hover:bg-white/30 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                  <span className="font-medium">lacorrentosa@gmail.com</span>
                </motion.a>

                <motion.a
                  href="https://instagram.com/la_correntosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 hover:bg-white/30 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-medium">@la_correntosa</span>
                </motion.a>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg mt-8 italic opacity-90"
              >
                Entre todas y todos seguimos construyendo una economía que nos cuida
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 text-lg font-medium"
              >
                Abrazo comunitario,<br />
                <span className="text-xl font-bold">Mutual La Correntosa</span><br />
                Villa La Angostura
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating Elements */}
      {/* <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed top-20 right-10 opacity-20 pointer-events-none"
      >
        <Sprout className="w-16 h-16 text-[#7EC95B]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="fixed bottom-20 left-10 opacity-20 pointer-events-none"
      >
        <Heart className="w-12 h-12 text-[#FFC83C]" />
      </motion.div> */}
    </div>
  );
}
