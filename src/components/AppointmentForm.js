import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookAppointment } from "../store/actions/appointmentActions";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaBriefcase } from "react-icons/fa";

const AppointmentForm = () => {
  const lawyers = useSelector((state) => state.lawyers);
  const dispatch = useDispatch();
  const [selectedLawyer, setSelectedLawyer] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [clientName, setClientName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLawyer && selectedTime && clientName) {
      dispatch(
        bookAppointment(parseInt(selectedLawyer), selectedTime, clientName)
      );
      setSelectedLawyer("");
      setSelectedTime("");
      setClientName("");
    }
  };

  // Find the selected lawyer object based on the ID
  const selectedLawyerObj = lawyers.find(
    (lawyer) => lawyer.id === parseInt(selectedLawyer)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto mt-10 bg-gradient-to-br from-indigo-50 to-white shadow-2xl rounded-2xl p-8 space-y-8"
    >
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Book Your Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Lawyer Selection */}
        <div className="relative">
          <FaBriefcase className="absolute top-3 left-3 h-6 w-6 text-indigo-500" />
          <select
            id="lawyer"
            value={selectedLawyer}
            onChange={(e) => setSelectedLawyer(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-indigo-300 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out"
          >
            <option value="">Choose a lawyer</option>
            {lawyers.map((lawyer) => (
              <option key={lawyer.id} value={lawyer.id}>
                {lawyer.name} - {lawyer.specialty} (${lawyer.cost}/appointment)
              </option>
            ))}
          </select>
        </div>

        {/* Time Selection */}
        <div className="relative">
          <FaCalendarAlt className="absolute top-3 left-3 h-6 w-6 text-indigo-500" />
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-indigo-300 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out"
          >
            <option value="">Choose a time</option>
            {/* Handle lawyer availability or lack thereof */}
            {selectedLawyerObj ? (
              selectedLawyerObj.availability && selectedLawyerObj.availability.length > 0 ? (
                selectedLawyerObj.availability.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))
              ) : (
                <option value="" disabled>No time available</option>
              )
            ) : (
              <option value="" disabled>Select a lawyer first</option>
            )}
          </select>
        </div>

        {/* Client Name Input */}
        <div className="relative">
          <FaUser className="absolute top-3 left-3 h-6 w-6 text-indigo-500" />
          <input
            type="text"
            id="name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-indigo-300 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out"
            placeholder="Enter your name"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        >
          Book Appointment
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AppointmentForm;
