"use client";

import { motion } from "framer-motion";
import { Clock, FileQuestion, Lock } from "lucide-react";

const utilityPages = [
  {
    label: "Coming Soon",
    icon: Clock,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    label: "404 Not Found",
    icon: FileQuestion,
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
  },
  {
    label: "Password Protected",
    icon: Lock,
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function UtilityPages() {
  return (
    <section className="bg-black px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Utility pages
          </h2>
          <p className="mt-4 text-gray-400">
            Essential utility pages to handle edge cases and user flows.
          </p>
        </motion.div>

        {/* Utility cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {utilityPages.map((page, i) => {
            const Icon = page.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors hover:border-zinc-700"
              >
                <div className="relative overflow-hidden p-4 pb-0">
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={page.img}
                      alt={page.label}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4">
                  <Icon className="size-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    {page.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
