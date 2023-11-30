import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PayModal from '../Payment/PayModal';

const RegButton = ({deadline,id,price}) => {
  console.log('amar id',id);
  // Assuming deadlines is an array of objects with a 'date' property in 'YYYY-MM-DD' format
  // const deadlines = [
  //   { date: '2023-11-30' },
  //   // Add more deadlines as needed
  // ];
//   const dead = '2023-11-15'

  const [currentDeadline, setCurrentDeadline] = useState(deadline);

  // useEffect(() => {
  //   // Fetch the deadline from an API or some other source
  //   // Example: fetchDeadline().then((data) => setCurrentDeadline(data.deadline));
  // }, []);

  const isRegistrationDisabled = new Date() > new Date(currentDeadline);
  console.log(isRegistrationDisabled);
  return (
    <div>
      {/* Your other form elements... */}

       
      <Link to={`/payment/${id}`}>
      <button
        className={`bg-gradient-to-r from-[#602BF7] to-[#B258F5] text-white px-4 py-2 rounded mt-5 ${isRegistrationDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-600'}`}
        disabled={isRegistrationDisabled}
      >
        Register Now
      </button>
      </Link>
      
      
    </div>
  );
};

export default RegButton;
