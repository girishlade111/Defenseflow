"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Figma, ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "16+", label: "Pre-built layouts" },
  { value: "32+", label: "Internal pages" },
  { value: "25+", label: "Custom Elements" },
  { value: "Figma", label: "File Included", isFigma: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function StatsSection() {
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
            What is included in <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Defenseflow</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-zinc-700"
            >
              {stat.isFigma ? (
                <div className="mb-3 flex items-center gap-2">
                  <Figma className="size-10 text-blue-500 sm:size-12" />
                  <Sparkles className="size-5 text-yellow-400" />
                </div>
              ) : (
                <span className="mb-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
              )}
              <span className="text-sm text-gray-400 sm:text-base">
                {stat.label}
              </span>
              {stat.isFigma && (
                <div className="mt-4 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=400&h=250&fit=crop"
                    alt="Figma file preview"
                    className="h-32 w-full object-cover opacity-60 transition-opacity group-hover:opacity-80 sm:h-40"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Browse all templates card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 sm:flex-row sm:gap-8"
        >
          <div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Looking for more amazing Webflow Templates?
            </h3>
            <p className="mt-2 text-gray-400">
              Browse our full collection of premium dark-themed templates.
            </p>
          </div>
          <Button
            variant="outline"
            className="shrink-0 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white"
          >
            Browse All Templates
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
