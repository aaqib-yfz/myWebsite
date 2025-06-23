"use client";
import React, { useState, useEffect } from "react";

function StarIcon({ filled, className }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill={filled ? "#41C88E" : "none"}
      stroke="#41C88E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function ReviewForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    rating: 5,
    message: "",
  });
  const [status, setStatus] = useState("");
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch reviews from API on mount
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (res.ok) {
          setReviews(data.reviews || []);
          setCurrentReview(0);
        } else {
          setError(data.error || "Failed to fetch reviews.");
        }
      } catch (err) {
        setError("Failed to fetch reviews.");
      }
    }
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (rating) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting your review...");
    setError("");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Thank you for your review!");
        setForm({ name: "", company: "", rating: 5, message: "" });
        // Fetch updated reviews
        const res2 = await fetch("/api/reviews");
        const data2 = await res2.json();
        setReviews(data2.reviews || []);
        setCurrentReview(0);
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("");
        setError(data.error || "Failed to submit review.");
      }
    } catch (err) {
      setStatus("");
      setError("Failed to submit review.");
    }
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 w-full max-w-xl bg-[#09101A] p-8 rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-base text-gray-300 mb-2">
          Share your experience working with me. Your feedback is valuable and
          helps me improve my services.
        </p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none bg-[#09101A]"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none bg-[#09101A]"
        />
        <label className="text-gray-300 mt-2">Rating</label>
        <div className="flex items-center gap-2 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              className={`cursor-pointer text-2xl ${
                star <= form.rating ? "text-yellow-400" : "text-gray-600"
              }`}
              role="button"
              aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          name="message"
          placeholder="Share your experience working with me..."
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="text-white px-4 py-3 border border-[#55E6A5] focus:outline-none bg-[#09101A]"
          required
        />
        <button
          type="submit"
          className="bg-[#55E6A5] text-[#141C27] font-bold py-3 px-8 shadow-lg hover:bg-[#41c88e] transition self-start flex items-center gap-2 text-lg mt-2"
        >
          Submit Review
        </button>
        {status && <div className="text-sm mt-2 text-[#55E6A5]">{status}</div>}
        {error && <div className="text-sm mt-2 text-red-500">{error}</div>}
      </form>

      {/* Reviews Section */}
      <div className="w-full max-w-xl mx-auto mt-12">
        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="bg-[#09101A] rounded-md p-4 mb-4 flex items-center justify-center">
              <StarIcon filled className="w-10 h-10" />
            </div>
            <div className="text-xl font-bold text-white mb-2 text-center">
              Be the First to Review
            </div>
            <div className="text-gray-300 text-center">
              No reviews yet. Share your experience and help others discover my
              services.
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col items-center">
            <div className="w-full transition-all duration-500 ease-in-out">
              <div className="bg-[#141C27] rounded-xl p-6 shadow flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-xl ${
                        star <= reviews[currentReview].rating
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-gray-400">
                    {new Date(reviews[currentReview].date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-white">
                    {reviews[currentReview].name}
                  </span>
                  {reviews[currentReview].company && (
                    <span className="text-gray-400 text-sm">
                      {reviews[currentReview].company}
                    </span>
                  )}
                </div>
                <div className="text-gray-200 text-base mt-1 break-words whitespace-pre-line">
                  {reviews[currentReview].message}
                </div>
              </div>
            </div>
            {reviews.length > 1 && (
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 flex items-center justify-center bg-[#09101A] text-[#41C88E] rounded hover:bg-[#232325] transition"
                  aria-label="Previous Review"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 flex items-center justify-center bg-[#09101A] text-[#41C88E] rounded hover:bg-[#232325] transition"
                  aria-label="Next Review"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
