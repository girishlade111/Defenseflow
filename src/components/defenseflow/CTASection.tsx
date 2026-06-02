"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-black px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 size-80 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-white/20 blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center gap-3">
              <Shield className="size-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to build something
              <br />
              extraordinary?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Get the Defenseflow Webflow Template today and launch your
              dark-themed website in minutes, not weeks.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white px-8 py-6 text-base font-semibold text-blue-600 hover:bg-blue-50"
              >
                Buy now on Webflow
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 px-8 py-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                Browse all templates
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
