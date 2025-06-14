// app/blog/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts.',
};

// Dummy blog post data
const posts = [
  { slug: 'first-post', title: 'My First Blog Post' },
  { slug: 'learning-nextjs', title: 'Learning Next.js App Router' },
  { slug: 'tailwind-tips', title: 'Quick Tailwind CSS Tips' },
];

export default function BlogIndexPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-slate-700">Our Blog</h1>
      <p className="text-slate-600 mb-6">Welcome to our collection of insightful articles.</p>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800 hover:underline text-lg"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}