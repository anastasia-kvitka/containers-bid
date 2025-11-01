import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/bid13.png"
            alt="Logo"
            width={64}
            height={64}
            className="invert brightness-0"
          />
          <span className="text-xl font-bold tracking-tight">Bid13AIBot</span>
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link href="#how-it-works" className="hover:text-brand">
            How It Works
          </Link>
          <Link href="#features" className="hover:text-brand">
            Features
          </Link>
          <Link href="#contact" className="hover:text-brand">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
