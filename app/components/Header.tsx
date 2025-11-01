"use client";

export default function Header() {
  return (
    <main className="flex flex-col items-center bg-white text-gray-900">
      {/* Header */}
      <header className="w-full bg-black text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
          <h1 className="text-2xl font-bold">Bid13AIBot</h1>
          <nav className="flex gap-6">
            <a
              href="#features"
              className="hover:text-[var(--color-brand)] transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="hover:text-[var(--color-brand)] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[var(--color-brand)] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </main>
  );
}
