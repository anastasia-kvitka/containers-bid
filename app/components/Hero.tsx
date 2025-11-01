"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");
  const [link, setLink] = useState("");

  function validateEmail(e: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(e);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    console.log("Submitting email:", email);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        console.log("Email submitted successfully");
      } else {
        const err = await res.text();
        setStatus("error");
        console.error("Server error:", err);
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-8 md:mt-16 gap-10">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <p className="text-gray-400 font-medium uppercase">
            FREE for First Bid
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Turn your storage finds into{" "}
            <span className="text-brand">Cash</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-md">
            Our AI identifies your items in moments, giving you instant price
            insights and helping you start earning faster.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="border border-gray-300 px-4 py-3 flex-1 focus:ring-2 focus:ring-brand"
              />
              <button
                type="submit"
                className="bg-brand text-white px-6 py-3 font-semibold hover:bg-green-600 transition-all"
              >
                {status === "loading" ? "Sending..." : "Get Started Free"}
              </button>
              {status === "sent" && (
                <p className="text-green-600 mt-2">Email sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 mt-2">
                  Something went wrong. Try again.
                </p>
              )}
            </div>

            <div className="flex gap-2 items-center">
              <input
                type="url"
                placeholder="Or paste image link here"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="flex-1 border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <button
                type="button"
                className="border border-gray-300 px-6 py-3 hover:border-brand hover:text-brand transition-all"
              >
                Upload image
              </button>
            </div>
          </form>

          <div className="text-sm text-gray-500 pt-2 gap-8 flex">
            <span>No credit card required</span>
            <span>Instant results</span>
            <span>AI-powered</span>
          </div>
        </div>

        {/* Right - Container Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <Image
              src="/container3.png"
              alt="Smart storage container"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
            {/* Floating label */}
            <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-lg px-4 py-2">
              <p className="text-sm text-gray-500">Estimated Value</p>
              <p className="text-2xl font-semibold text-brand">$3,427</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
