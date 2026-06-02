"use client";

import { motion } from "framer-motion";
import {
  PanelTop,
  Bell,
  Shapes,
  Share2,
  Mail,
} from "lucide-react";

const features = [
  {
    title: "3 Headers and Footers",
    description: "Choose from three distinct header and footer styles to match your brand.",
    icon: PanelTop,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    span: "lg:col-span-2",
  },
  {
    title: "3 Notification Bars",
    description: "Engage users with beautifully designed notification bars.",
    icon: Bell,
    img: "https://images.unsplash.com/photo-1553729459-0855-74178c3e7b14?w=500&h=300&fit=crop",
    span: "lg:col-span-1",
  },
  {
    title: "Custom Icon Set",
    description: "A full set of custom-designed icons for every use case.",
    icon: Shapes,
    isIconGrid: true,
    span: "lg:col-span-1",
  },
  {
    title: "Social Media Assets",
    description: "Ready-to-use social media templates for all platforms.",
    icon: Share2,
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
    span: "lg:col-span-1",
  },
  {
    title: "Email Signature",
    description: "Professional email signature templates included.",
    icon: Mail,
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&h=300&fit=crop",
    span: "lg:col-span-1",
  },
];

const iconNames = [
  "⌘", "✦", "◈", "◉", "⬡", "⏣", "⎔", "⬢",
  "⊕", "⊗", "⊙", "⊘", "⌀", "⏢", "⏥", "⎈",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

export function ExtraFeatures() {
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
            The Defenseflow Webflow Template also comes with <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">more surprises...</span>
          </h2>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-zinc-700 ${feature.span}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <Icon className="size-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-gray-400">
                  {feature.description}
                </p>

                {/* Visual content */}
                {feature.isIconGrid ? (
                  <div className="grid grid-cols-4 gap-2">
                    {iconNames.map((icon, j) => (
                      <div
                        key={j}
                        className="flex size-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-lg text-gray-400 transition-colors group-hover:border-zinc-600 group-hover:text-gray-300 sm:size-12"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-lg border border-zinc-700">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="h-40 w-full object-cover opacity-70 transition-opacity group-hover:opacity-90"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
