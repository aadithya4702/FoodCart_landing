import React, { useEffect, useState } from "react";
import api from "../api/AxiosInstance"; // your axios instance

const StarRating = () => {
  const [average, setAverage] = useState(0);
  const [total, setTotal] = useState(0);
  const [breakdown, setBreakdown] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const res = await api.get("/feedback/ratings-summary");
        const data = res.data;

        setAverage(data.average_rating);
        setTotal(data.total_ratings);
        setBreakdown(data.breakdown);
      } catch (err) {
        console.error("Error fetching ratings summary:", err);
      }
    };

    fetchRatings();
  }, []);

  return (
    <div>
      <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              average >= star ? "text-orange-500" : "text-gray-300"
            } me-1`}
            fill="currentColor"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        <p className="ms-1 text-sm font-medium text-gray-500">
          {average.toFixed(2)}
        </p>
        <p className="ms-1 text-sm font-medium text-gray-500">out of 5</p>
      </div>

      <p className="text-sm font-medium text-gray-500">
        {total} global ratings
      </p>

      {[5, 4, 3, 2, 1].map((star) => {
        const percent = total > 0 ? (breakdown[star] / total) * 100 : 0;
        return (
          <div key={star} className="flex items-center mt-4">
            <span className="text-sm font-medium text-blue-600 hover:underline">
              {star} star
            </span>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded-sm">
              <div
                className="h-5 bg-orange-500 rounded-sm"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500">
              {percent.toFixed(0)}%
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
