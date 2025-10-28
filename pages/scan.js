import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Scan() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!image) return alert("Please select an image first!");
    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/analyze`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(res.data.text || "No readable text found.");
    } catch (err) {
      console.error(err);
      setResult("Error connecting to the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <h2 className="text-3xl font-bold mb-4 text-green-400">Scan Food Label</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white px-5 py-2 rounded-xl"
        >
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>

        {result && (
          <div className="mt-8 p-4 bg-gray-800 rounded-xl max-w-2xl text-left shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-green-300">
              Analysis Result:
            </h3>
            <p className="text-gray-200 whitespace-pre-wrap">{result}</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
