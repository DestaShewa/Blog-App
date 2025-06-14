// app/page.tsx
import type { Metadata } from 'next';

// Page-specific metadata
export const metadata: Metadata = {
  title: 'Home', // Will become "Home | My Awesome App"
  description: 'Welcome to the homepage of our Next.js App Router demo.',
};

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-slate-700">Welcome to the Homepage!</h1>
      <p className="text-lg text-slate-600">
        This is a simple blog application built with Next.js App Router and Tailwind CSS.
      </p>
      <p className="mt-4 text-slate-600">
        Navigate using the links above to explore different pages and features.
      </p>
    </div>
  );
}