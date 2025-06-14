// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-slate-300 transition-colors">
          My App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}