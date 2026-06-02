"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const mainPages = [
  { label: "Home V1", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
  { label: "Home V2", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
  { label: "About V1", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" },
  { label: "About V2", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" },
  { label: "Blog V1", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop" },
  { label: "Blog V2", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop" },
  { label: "Contact V1", img: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop" },
  { label: "Contact V2", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop" },
  { label: "Careers", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function MainPagesGrid() {
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
            Main pages
          </h2>
          <p className="mt-4 text-gray-400">
            Explore the core pages that make up the Defenseflow template.
          </p>
        </motion.div>

        {/* Pages grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {mainPages.map((page, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors hover:border-zinc-700"
            >
              {/* Image with perspective */}
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
              {/* Label */}
              <div className="px-6 py-4">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                  {page.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-white"
          >
            View all
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
