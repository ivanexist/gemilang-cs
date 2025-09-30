import Link from "next/link";

// src/app/_not-found/page.tsx
export const dynamic = "force-dynamic"; // Render at request time, skip SSG

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go Home
      </Link>
    </div>
  );
}
