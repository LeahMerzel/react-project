import React, { useState } from 'react';

let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function ImpureComp() {
  const [guestCount, setGuestCount] = useState(3); 

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value) || 0; 
    setGuestCount(value); 
    guest = value;
  };

  return (
    <div className="tracker">
      <div className='mood-tracker impure'>
        {/* Input field for number of guests */}
        <label htmlFor="guestCount">Number of Guests:</label>
        <input
          type="number"
          id="guestCount"
          value={guestCount} // Bind input to state
          onChange={handleInputChange} // Handle changes
        />
        {/* Render Cup components based on guestCount */}
        {[...Array(guestCount)].map(() => (
          <Cup/>
        ))}
      </div>
    </div>
  );
}
