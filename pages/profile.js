import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-3xl font-bold text-green-400 mb-4">Your Profile</h1>
        <p className="text-gray-300 max-w-md text-center">
          Future version will include your dietary preferences, scan history,
          and health recommendations based on ingredients.
        </p>
      </main>
      <Footer />
    </div>
  );
}
