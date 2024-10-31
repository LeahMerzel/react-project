import React, { useState } from 'react';

function ImpureMoodTracker({moods}) {
  let moodHistory = moods;

  return (
    <div className='mood-tracker impure'>
      <h2>Impure Mood Tracker</h2>
      <p>
        This tracker mutates the state directly by using <code>push</code> and then calls <code>setMoodHistory</code> with the same array reference. React may not detect the state change, leading to the UI not updating.
      </p>
      <h3>Mood History:</h3>
      <div className='mood-history'>
        {moodHistory.join(' ') || 'No moods added yet.'}
      </div>
    </div>
  );
}

export default ImpureMoodTracker;

