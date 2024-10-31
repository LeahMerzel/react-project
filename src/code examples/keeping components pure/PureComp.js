//TODO: let user change the number of the guest

import React, { useState } from 'react';

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function PureComp() {
  const [numGuests, setNumGuests] = useState(3); 

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value) || 0; 
    setNumGuests(value);
  };

  return (
    <div className="tracker">
      <div className="mood-tracker pure">
        {/* Input field for number of guests */}
        <label htmlFor="guestCount">Number of Guests:</label>
        <input
          type="number"
          id="guestCount"
          value={numGuests}
          onChange={handleInputChange}
        />
        {/* Render the Cups based on the number of guests */}
        {Array.from({ length: numGuests }, (_, index) => (
          <Cup key={index} guest={index + 1} />
        ))}
      </div>
    </div>
  );
}
