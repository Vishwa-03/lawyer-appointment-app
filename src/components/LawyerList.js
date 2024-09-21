import React from 'react';
import { useSelector } from 'react-redux';
import LawyerCard from './LawyerCard';

function LawyerList() {
  const lawyers = useSelector((state) => state.lawyers);

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Find Your Lawyer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {lawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>
    </div>
  );
}


export default LawyerList;
