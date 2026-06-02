"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroCards = [
  {
    title: "Dashboard",
    gradient: "from-zinc-800 to-zinc-900",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Analytics",
    gradient: "from-zinc-800 to-zinc-900",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Marketing",
    gradient: "from-zinc-800 to-zinc-900",
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
  },
  {
    title: "SaaS Platform",
    gradient: "from-zinc-800 to-zinc-900",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  },
  {
    title: "Startup",
    gradient: "from-zinc-800 to-zinc-900",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
  },
  {
    title: "Agency",
    gradient: "from-zinc-800 to-zinc-900",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
      {/* Background grid of website screenshots */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-7xl grid-cols-2 gap-4 p-8 opacity-20 sm:grid-cols-3 lg:grid-cols-3"
        >
          {heroCards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-48 w-full object-cover sm:h-56 lg:h-64"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Defenseflow
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Webflow Template
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl"
        >
          The ultimate dark-themed template for your next project. Built with
          precision, designed for impact, and crafted for the modern web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-blue-600 px-8 py-6 text-base font-semibold text-white hover:bg-blue-700"
          >
            Buy Template
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 px-8 py-6 text-base font-semibold text-white hover:bg-zinc-800 hover:text-white"
          >
            Contact
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
