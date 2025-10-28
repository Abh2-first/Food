import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-400">Ingrective</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/scan">Scan</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
