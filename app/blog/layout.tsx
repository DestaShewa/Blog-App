// app/blog/layout.tsx
// This layout is specific to routes under /blog
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">Blog Section</h2>
      {children} {/* Content of /blog or /blog/[slug] will go here */}
    </div>
  );
}