import React, { useState, useEffect } from "react";
import StarRating from "./RatingTotal";
import profile from "../assets/profile.png";
import api from "../api/AxiosInstance"; // your axios instance

const IndividualRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center space-x-1 text-orange-500 text-md">
      {[...Array(fullStars)].map((_, idx) => (
        <span key={idx}>★</span>
      ))}
      {halfStar && <span>☆</span>}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, idx) => (
        <span key={idx}>☆</span>
      ))}
    </div>
  );
};

const FeedbackCard = ({ name, feedback, rating }) => (
  <div className="min-w-[250px] sm:min-w-[280px] max-w-xs bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 mx-2 flex-shrink-0 snap-start">
    <div className="flex items-center space-x-2 mb-3">
      <img src={profile} alt="profile" className="h-8 w-8 rounded-full" />
      <h4 className="font-semibold text-gray-800">{name}</h4>
    </div>
    <p className="text-gray-600 text-sm mb-3">{feedback}</p>
    <IndividualRating rating={rating} />
  </div>
);

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const feedbacksPerPage = 4;

  const fetchFeedbacks = async (page = 1) => {
    try {
      const response = await api.get(
        `/feedbacks?page=${page}&limit=${feedbacksPerPage}`
      );
      setFeedbacks(response.data.data); // Laravel's paginate() puts feedbacks in `data`
      setTotalPages(response.data.last_page);
      setCurrentPage(response.data.current_page);
    } catch (err) {
      console.error("Failed to fetch feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks(currentPage);
  }, [currentPage]);

  return (
    <div id="contact" className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start items-start gap-10">
        {/* Left - Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What People Are Saying About Us
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            We’re thrilled when our customers are happy. Read what real users
            are saying about our products and services.
          </p>
          <StarRating />
        </div>

        {/* Right - Feedback Cards */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {feedbacks.map((fb, idx) => (
              <FeedbackCard
                key={idx}
                name={fb.name}
                feedback={fb.feedback}
                rating={fb.rating}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-center gap-4 items-center">
            <button
              onClick={() => fetchFeedbacks(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => fetchFeedbacks(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-medium bg-orange-500 hover:bg-orange-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
