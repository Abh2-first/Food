import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          className="text-6xl font-extrabold text-green-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ingrective
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Scan food labels instantly, understand ingredients easily, and eat
          smarter with AI-powered insights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/scan"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg"
          >
            Start Scanning →
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
