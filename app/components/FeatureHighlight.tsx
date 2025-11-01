"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureHighlight() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Left side: Mockup image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/phone-mockup.png"
            alt="AI item pricing demo"
            width={500}
            height={500}
            className="rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* Right side: Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Stop Guessing. Start <span className="text-brand">Profiting</span>.
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Our AI-powered platform analyzes your photos and instantly matches
            items to eBay listings, giving you accurate market prices in
            seconds.
          </p>

          <ul className="space-y-4 text-gray-800 text-lg">
            {[
              "Find hidden treasures in your storage",
              "Know the exact resale value before listing",
              "Save hours of manual research",
              "Discover trending items worth selling",
              "Get direct eBay links to similar sold items",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="before:content-['✓'] before:text-brand before:font-bold before:mr-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
