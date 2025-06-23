import ReviewForm from "../ReviewForm";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Reviews</h1>
      <p className="text-lg text-gray-300 mb-8">Share your feedback below!</p>
      <ReviewForm />
    </div>
  );
}
