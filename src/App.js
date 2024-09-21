import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LawyerList from './components/LawyerList';
import AppointmentForm from './components/AppointmentForm';
import AppointmentHistory from './components/AppointmentHistory';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-indigo-600 p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Lawyer Appointment</h1>
            <div className="space-x-4">
              <Link
                to="/"
                className="text-white px-3 py-2 rounded-md hover:bg-indigo-700"
              >
                Find Your Lawyer
              </Link>
              <Link
                to="/book-appointment"
                className="text-white px-3 py-2 rounded-md hover:bg-indigo-700"
              >
                Book Appointment
              </Link>
              <Link
                to="/history"
                className="text-white px-3 py-2 rounded-md hover:bg-indigo-700"
              >
                Appointment History
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route exact path="/" element={<LawyerList/>} />
            <Route path="/book-appointment" element={<AppointmentForm/>} />
            <Route path="/history" element={<AppointmentHistory/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
