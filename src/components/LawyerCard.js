import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LawyerCard = ({ lawyer }) => {
  const [showAllTimes, setShowAllTimes] = useState(false);
  const MAX_VISIBLE_TIMINGS = 2;
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/book-appointment', { state: { lawyer } }); // Pass lawyer data via state
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out flex flex-col justify-between">
      <div className="p-6">
        {/* Lawyer Header */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-indigo-600 text-white flex items-center justify-center rounded-full">
            {/* Lawyer icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A3 3 0 007.5 19h9a3 3 0 002.378-1.196l1.382-1.804A3 3 0 0021 14V6a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 001.121 2.804l1.382 1.804zM9 10h6m-6 4h6"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {lawyer.name}
            </h3>
            <p className="text-sm text-gray-500">{lawyer.specialty}</p>
          </div>
        </div>

        {/* Cost and Availability */}
        <div className="mt-4 text-sm text-gray-600">
          <p className="mb-2">
            Cost:{" "}
            <span className="font-medium text-gray-900">${lawyer.cost}</span>{" "}
            per appointment
          </p>
        </div>

        {/* Available Appointment Timings */}
        <div className="mt-4">
          {lawyer.availability.length > 0 ? (
            <p className="text-sm font-medium text-gray-700">
              Available Slots:
            </p>
          ) : (
            <div className="text-sm text-red-600 font-semibold mt-2">
              No slots available
            </div>
          )}

          <div className="flex flex-wrap mt-2 space-x-2">
            {lawyer.availability
              .slice(
                0,
                showAllTimes ? lawyer.availability.length : MAX_VISIBLE_TIMINGS
              )
              .map((time, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-2 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700"
                >
                  {time}
                </span>
              ))}
          </div>

          {/* Toggle for more timings */}
          {lawyer.availability.length > MAX_VISIBLE_TIMINGS && (
            <div className="mt-4 text-sm">
              <button
                className="text-indigo-600 hover:text-indigo-700 font-semibold focus:outline-none"
                onClick={() => setShowAllTimes(!showAllTimes)}
              >
                {showAllTimes ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Book Appointment Button */}
      <div className="bg-gray-50 border-t border-gray-200 p-4">
        {lawyer.availability.length > 0 ? (
          <button
            onClick={handleBookAppointment}
            className="w-full py-2 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Book Appointment
          </button>
        ) : (
          <button
            disabled
            className="w-full py-2 text-center text-white bg-red-600 rounded-md cursor-not-allowed"
          >
            Appointment Not Available
          </button>
        )}
      </div>
    </div>
  );
};

export default LawyerCard;
