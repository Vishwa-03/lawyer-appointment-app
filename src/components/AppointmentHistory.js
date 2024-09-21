import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaCalendar, FaUser, FaClock, FaChevronDown } from 'react-icons/fa';

function AppointmentHistory() {
  const [lawyerId, setLawyerId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const appointments = useSelector(state => state.appointments);
  const lawyers = useSelector(state => state.lawyers);

  const lawyerAppointments = appointments.filter(
    (appointment) => appointment.lawyerId === Number(lawyerId)
  );

  const handleSelect = (id) => {
    setLawyerId(id);
    setIsOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-2xl rounded-2xl p-8 my-8 mx-auto max-w-2xl transform transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Appointment History</h2>

      <div className="mb-6 relative">
        <label htmlFor="lawyer" className="block text-sm font-medium text-indigo-700 mb-2">Select Lawyer</label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border-2 border-indigo-300 rounded-xl shadow-sm pl-4 pr-10 py-3 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out"
          >
            {lawyerId ? lawyers.find(l => l.id === Number(lawyerId))?.name : "Select a lawyer"}
            <FaChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <ul className="absolute z-10 w-full bg-white border-2 border-indigo-300 rounded-xl shadow-lg mt-1 max-h-60 overflow-auto">
              {lawyers.map((lawyer) => (
                <li 
                  key={lawyer.id}
                  onClick={() => handleSelect(lawyer.id.toString())}
                  className="px-4 py-2 hover:bg-indigo-50 cursor-pointer transition duration-200 ease-in-out"
                >
                  {lawyer.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="overflow-hidden">
        {lawyerAppointments.length > 0 ? (
          <ul className="space-y-4 animate-fade-in-down">
            {lawyerAppointments.map((appointment, index) => (
              <li
                key={index}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="flex items-center mb-2">
                  <FaUser className="text-indigo-500 mr-2" />
                  <span className="text-lg font-semibold text-gray-800">{appointment.clientName}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaClock className="text-indigo-400 mr-2" />
                  <span>{appointment.time}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 mt-4 bg-white rounded-xl p-4 shadow-inner animate-fade-in">
            <FaCalendar className="inline-block mr-2 text-indigo-400" />
            No appointments found for the selected lawyer.
          </p>
        )}
      </div>
    </div>
  );
}

export default AppointmentHistory;