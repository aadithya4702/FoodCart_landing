import { useState } from "react";
import { FaStar, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/d2_logo.png";
import api from "../api/AxiosInstance";

export default function Footer() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !feedback || rating === 0) {
      setMessage("Please fill all fields and give a rating.");
      return;
    }

    try {
      const response = await api.post("/feedbacks", {
        name,
        rating,
        feedback,
      });

      if (response.status === 201 || response.status === 200) {
        setMessage("Thank you for your feedback!");
        // Clear form
        setName("");
        setFeedback("");
        setRating(0);
        setHovered(0);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <footer className="bg-[#1F1D2B] text-white rounded-t-lg shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo + Info */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                className="h-24 w-auto max-w-[150px]"
                alt="Flowbite Logo"
              />
              <span className="text-3xl font-bold">D'square</span>
            </div>

            <div className="text-gray-400 text-sm leading-relaxed">
              <p>
                B122 cheran managar, 4th bus stop, Vilankurchi post, Coimbatore
                - 641035
              </p>
              <p>
                Phone: <a href="tel:+919514779494">+91-9514779494</a>
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Send us your feedback
            </h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <div className="flex items-center space-x-1 md:col-span-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer transition ${
                      (hovered || rating) >= star
                        ? "text-orange-500 scale-110"
                        : "text-gray-400"
                    }`}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>

              <textarea
                rows="3"
                placeholder="Your Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="md:col-span-2 p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-orange-600 hover:bg-orange-700 transition text-white py-2 px-6 rounded shadow-lg font-semibold"
              >
                Submit Feedback
              </button>
            </form>

            {message && (
              <p className="mt-4 text-sm text-center text-orange-600 font-medium">
                {message}
              </p>
            )}
          </div>
        </div>

        <hr className="my-10 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <span>
            © 2023{" "}
            <span className="hover:underline text-white font-medium">
              D'square™
            </span>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com/d2_delight_s"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
