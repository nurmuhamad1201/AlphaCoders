import React, { useState } from 'react';

const PassengerSelector = ({ onUpdateTotal }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [students, setStudents] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const updateTotal = () => {
    const total = adults + children + infants + students;
    onUpdateTotal(total);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer px-4 py-2 border rounded bg-white dark:bg-gray-800 dark:text-white"
      >
        {`${adults + children + infants + students} Passenger${adults + children + infants + students > 1 ? 's' : ''}`}
        <span className="ml-2 text-gray-500 dark:text-gray-400">ECO</span>
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-72 p-4 bg-white border rounded shadow-lg space-y-4 dark:bg-gray-900 dark:border-gray-700">
          {/* Adult Section */}
          <div className="flex items-center justify-between">
            <div>
              <p className="dark:text-white">Adult</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">12+ years</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  decrement(setAdults, adults);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
              >
                -
              </button>
              <span className="px-4 dark:text-white">{adults}</span>
              <button
                onClick={() => {
                  increment(setAdults, adults);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* Child Section */}
          <div className="flex items-center justify-between">
            <div>
              <p className="dark:text-white">Child</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">2 - 12 years</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  decrement(setChildren, children);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
              >
                -
              </button>
              <span className="px-4 dark:text-white">{children}</span>
              <button
                onClick={() => {
                  increment(setChildren, children);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* Infant Section */}
          <div className="flex items-center justify-between">
            <div>
              <p className="dark:text-white">Infant</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">Under 2 years</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  decrement(setInfants, infants);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
              >
                -
              </button>
              <span className="px-4 dark:text-white">{infants}</span>
              <button
                onClick={() => {
                  increment(setInfants, infants);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* Student Section */}
          <div className="flex items-center justify-between">
            <div>
              <p className="dark:text-white">Student</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">12 - 35 years</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  decrement(setStudents, students);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
              >
                -
              </button>
              <span className="px-4 dark:text-white">{students}</span>
              <button
                onClick={() => {
                  increment(setStudents, students);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700 dark:text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;
