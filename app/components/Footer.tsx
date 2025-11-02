import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-3 mt-24 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo + name */}
        <div className="flex items-center gap-3">
          <Image
            src="/bid13.png"
            alt="Bid13 Logo"
            width={64}
            height={64}
            className="invert brightness-0"
          />
          <span className="text-white font-semibold text-lg tracking-tight">
            Bid13AIBot
          </span>
        </div>

        {/* Center: links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="#how-it-works"
            className="hover:text-brand transition-colors"
          >
            How It Works
          </a>
          <a href="#features" className="hover:text-brand transition-colors">
            Features
          </a>
          <a href="#contact" className="hover:text-brand transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: copyright */}
        <p className="text-xs text-gray-500 text-center md:text-right w-full md:w-auto">
          © {new Date().getFullYear()} Bid13AIBot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
