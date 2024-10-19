import { useState } from 'react';

// eslint-disable-next-line react/prop-types
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
        className="cursor-pointer px-4 py-2 border rounded bg-white text-black shadow-lg"
      >
        {`${adults + children + infants + students} Passenger${adults + children + infants + students > 1 ? 's' : ''}`}
        <span className="ml-2 text-black">ECO</span>
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-72 p-4 bg-white border rounded shadow-lg">
          {/* Adult Section */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-black">Adult</p>
              <span className="text-sm text-black">12+ years</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  decrement(setAdults, adults);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 text-black font-bold rounded"
              >
                -
              </button>
              <span className="px-4 text-black">{adults}</span>
              <button
                onClick={() => {
                  increment(setAdults, adults);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 text-black font-bold rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Child Section */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-black">Child</p>
              <span className="text-sm text-black">2 - 12 years</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  decrement(setChildren, children);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 text-black font-bold rounded"
              >
                -
              </button>
              <span className="px-4 text-black">{children}</span>
              <button
                onClick={() => {
                  increment(setChildren, children);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 text-black font-bold rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Infant Section */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-black">Infant</p>
              <span className="text-sm text-black">Under 2 years</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  decrement(setInfants, infants);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 text-black font-bold rounded"
              >
                -
              </button>
              <span className="px-4 text-black">{infants}</span>
              <button
                onClick={() => {
                  increment(setInfants, infants);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 text-black font-bold rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Student Section */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-black">Student</p>
              <span className="text-sm text-black">12+ years</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  decrement(setStudents, students);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 text-black font-bold rounded"
              >
                -
              </button>
              <span className="px-4 text-black">{students}</span>
              <button
                onClick={() => {
                  increment(setStudents, students);
                  updateTotal();
                }}
                className="px-2 py-1 bg-gray-200 text-black font-bold rounded"
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
