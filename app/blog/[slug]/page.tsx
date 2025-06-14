// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

// Dummy data - in a real app, this would come from a database or API
const blogPostsData: { [key: string]: { title: string; content: string } } = {
  'first-post': {
    title: 'My First Blog Post',
    content: 'This is the exciting content of my very first blog post! Stay tuned for more.',
  },
  'learning-nextjs': {
    title: 'Learning Next.js App Router',
    content: 'The App Router in Next.js 13+ is powerful. It introduces server components, layouts, and new ways to handle data fetching.',
  },
  'tailwind-tips': {
    title: 'Quick Tailwind CSS Tips',
    content: 'Tailwind CSS makes styling fast. Remember to use `@apply` sparingly and leverage utility classes directly.',
  },
};

type Props = {
  params: { slug: string };
};

// Function to generate dynamic metadata
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug;
  const post = blogPostsData[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  // Optionally, you can access the parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: post.title, // e.g., "My First Blog Post | My Awesome App"
    description: post.content.substring(0, 150) + '...', // Short description
  };
}

// This function can be used if you want to statically generate these pages at build time
// For this demo, we'll let them be dynamically rendered on request.
// export async function generateStaticParams() {
//   return Object.keys(blogPostsData).map((slug) => ({
//     slug: slug,
//   }));
// }

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-red-600">Post not found!</h1>
        <p className="text-slate-600">Sorry, we could not find a post with the slug: {slug}</p>
      </div>
    );
  }

  return (
    <article className="prose lg:prose-xl max-w-none bg-white p-6 rounded-md shadow">
      {/* Using Tailwind Typography plugin classes for nice article styling */}
      {/* You might need to install and configure it if you want this specific styling: */}
      {/* npm install -D @tailwindcss/typography */}
      {/* Then add `require('@tailwindcss/typography')` to plugins in tailwind.config.js */}
      <h1 className="text-slate-800">{post.title}</h1>
      <p className="text-slate-700">{post.content}</p>
      <p className="mt-4 text-sm text-slate-500">Reading post: {slug}</p>
    </article>
  );
}