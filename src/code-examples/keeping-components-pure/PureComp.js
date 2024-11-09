// src/components/PureComp.js

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
    <div>
      <h2>Pure Component</h2>
      <label htmlFor="guestCountPure">Number of Guests:</label>
      <input
        type="number"
        id="guestCountPure"
        value={numGuests}
        onChange={handleInputChange}
      />
      {Array.from({ length: numGuests }, (_, index) => (
        <Cup key={index} guest={index + 1} />
      ))}
    </div>
  );
}
