// src/pages/ComponentPurity.js
//i want to pass the users clicks to the children pure and impure, which demonstrate same input same output, amd not - calculating in rendering

import {React, useState} from 'react';
import ImpureMoodTracker from './ImpureMoodTracker';
import PureMoodTracker from './PureMoodTracker';

function ComponentPurity() {
  const [moodHistory, setMoodHistory] = useState([]);
  const moods = ['😀', '😐', '🙁', '🙂'];

  const addMood = (mood) => {
    // Immutably update the state
    const newMoodHistory = [...moodHistory, mood];
    setMoodHistory(newMoodHistory);
  };

  return (
    <div className="component-purity">
      <h1>Keeping Components Pure</h1>
      <p>
        This example demonstrates the importance of keeping components pure in React. The impure version directly mutates the state, leading to unexpected behavior, while the pure version updates the state immutably, ensuring predictable and reliable updates.
      </p>
      <div className="buttons">
        {moods.map((m) => (
          <button key={m} onClick={() => addMood(m)}>
            {m}
          </button>
        ))}
      </div>
      <div className="trackers">
        <div className="tracker">
          <ImpureMoodTracker moods={moodHistory}/>
        </div>
        <div className="tracker">
          <PureMoodTracker moods={moodHistory}/>
        </div>
      </div>
    </div>
  );
}

export default ComponentPurity;
