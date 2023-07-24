import React from 'react';

const Card = ({ college }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:scale-105">
            <img
                src={college.image}
                alt={college.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-black">{college.name}</h3>
                <p className="text-gray-700 mb-2 font-semibold">
                    <span className='text-black'>Admission Dates:</span> {college.admissionDates}
                </p>
                <p className="text-gray-700 mb-2 font-semibold"><span className='text-black'>Events:</span> {college.events}</p>
                <p className="text-gray-700 mb-2 font-semibold">
                    <span className='text-black'>Research History:</span> {college.researchHistory}
                </p>
                <p className="text-gray-700 font-semibold"><span className='text-black'>Sports:</span> {college.sports}</p>
            </div>
        </div>
    );

};

export default Card;