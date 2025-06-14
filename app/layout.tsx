// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// Update the import path if the Navbar component is located elsewhere, for example:
import Navbar from '../components/Navbar'; // Adjust the path as needed

const inter = Inter({ subsets: ['latin'] });

// Root metadata - applies to all pages unless overridden
export const metadata: Metadata = {
  title: {
    default: 'My Awesome App', // Default title
    template: '%s | My Awesome App', // Template for page-specific titles
  },
  description: 'A demo Next.js app using the App Router.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 text-slate-900 min-h-screen flex flex-col`}>
        <Navbar /> {/* Add the Navbar here */}
        <main className="flex-grow container mx-auto p-6">
          {children} {/* Page content will be injected here */}
        </main>
        <footer className="bg-slate-200 text-slate-700 text-center p-4 mt-auto">
          © {new Date().getFullYear()} My Blog App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}