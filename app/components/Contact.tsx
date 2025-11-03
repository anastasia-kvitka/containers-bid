"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, link }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setLink("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-white text-center py-24 px-6 border-t border-gray-100 flex flex-col items-center"
    >
      <p className="text-gray-500 font-medium uppercase tracking-wide">
        Limited Time Offer
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-3">
        Get Your First Analysis <span className="text-brand">Free</span>
      </h2>

      <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
        Join hundreds of sellers already maximizing their profits with
        AI-powered pricing insights.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col items-center gap-4 w-full max-w-sm sm:max-w-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-3 w-full focus:ring-2 focus:ring-brand focus:outline-none"
          required
        />
        <input
          type="url"
          placeholder="Paste your link (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border border-gray-300 px-4 py-3 w-full focus:ring-2 focus:ring-brand focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-brand text-white px-8 py-3 font-semibold hover:bg-green-600 transition-all w-full"
        >
          {status === "loading" ? "Sending..." : "Get Started Now"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4">
          Thank you! We&apos;ll contact you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="text-gray-400 text-sm mt-4">
        No credit card required. Start analyzing in 30 seconds.
      </p>
    </section>
  );
}
