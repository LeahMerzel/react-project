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
    <div>
      <h2>Impure Component</h2>
      <label htmlFor="guestCountImpure">Number of Guests:</label>
      <input
        type="number"
        id="guestCountImpure"
        value={guestCount}
        onChange={handleInputChange}
      />
      {/* Render Cup components based on guestCount */}
      {[...Array(guestCount)].map(() => (
        <Cup/>
      ))}
    </div>
  );
}

