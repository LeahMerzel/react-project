// src/pages/PureMoodTracker.js

import React from 'react';

function PureMoodTracker({moods}) {

  return (
    <div className="mood-tracker pure">
      <h2>Pure Mood Tracker</h2>
      <p>
        This tracker updates the state immutably by creating a new array when adding a mood. This ensures that React detects state changes and updates the UI accordingly.
      </p>
      <h3>Mood History:</h3>
      <div className='mood-history'>
        {moods.join(' ') || 'No moods added yet.'}
      </div>
    </div>
  );
}

export default PureMoodTracker;
