// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our awesome application.',
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-slate-700">About Us</h1>
      <p className="text-slate-600 mb-2">
        This page tells you a little bit about our project.
      </p>
      <p className="text-slate-600">
        We are demonstrating the core features of the Next.js App Router, including:
      </p>
      <ul className="list-disc list-inside mt-2 text-slate-600 pl-4">
        <li>File-based routing</li>
        <li>Shared layouts</li>
        <li>Nested layouts (see the Blog section)</li>
        <li>Dynamic routes</li>
        <li>Metadata API</li>
      </ul>
    </div>
  );
}